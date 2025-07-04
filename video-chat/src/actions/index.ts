import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import {
  GetSignalingChannelEndpointCommand,
  KinesisVideoClient,
} from "@aws-sdk/client-kinesis-video";
import {
  KinesisVideoSignalingClient,
  GetIceServerConfigCommand,
} from "@aws-sdk/client-kinesis-video-signaling";

export const server = {
  getChannelEndpoints: defineAction({
    input: z.object({}),
    handler: async (input) => {
      // 1. Get channel ARN
      const kinesisVideoClient = new KinesisVideoClient({
        region: import.meta.env.PUBLIC_AWS_REGION,
        credentials: {
          accessKeyId: import.meta.env.PUBLIC_AWS_ACCESS_KEY,
          secretAccessKey: import.meta.env.PUBLIC_AWS_SECRET_ACCESS_KEY,
        },
      });

      // 2. Get endpoints
      const getEndpointRes = await kinesisVideoClient.send(
        new GetSignalingChannelEndpointCommand({
          ChannelARN: import.meta.env.PUBLIC_AWS_CHANNEL_ARN,
          SingleMasterChannelEndpointConfiguration: {
            Protocols: ["WSS", "HTTPS"],
            Role: "MASTER",
          },
        }),
      );
      const endpointsByProtocol: Record<string, string> = {};
      (getEndpointRes.ResourceEndpointList || []).forEach((endpoint) => {
        if (endpoint.Protocol && endpoint.ResourceEndpoint) {
          endpointsByProtocol[endpoint.Protocol] = endpoint.ResourceEndpoint;
        }
      });

      // 3. Get ICE Server Config

      const signalingClient = new KinesisVideoSignalingClient({
        region: import.meta.env.PUBLIC_AWS_REGION,
        endpoint: endpointsByProtocol.HTTPS,
      });

      const iceServersResponse = await signalingClient.send(
        new GetIceServerConfigCommand({
          ChannelARN: import.meta.env.PUBLIC_AWS_CHANNEL_ARN,
        }),
      );

      console.log(iceServersResponse);

      return endpointsByProtocol;
    },
  }),
};
