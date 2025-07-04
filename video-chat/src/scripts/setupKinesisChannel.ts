import {
  GetSignalingChannelEndpointCommand,
  KinesisVideoClient,
} from "@aws-sdk/client-kinesis-video";
import { SignalingClient, Role } from "amazon-kinesis-video-streams-webrtc";

const channelARN =
  "arn:aws:kinesisvideo:us-east-1:365496274414:channel/my-first-streaming/1751572571745";
const region = "us-east-1";
const accessKeyId = import.meta.env.PUBLIC_AWS_ACCESS_KEY;
const secretAccessKey = import.meta.env.PUBLIC_AWS_SECRET_ACCESS_KEY;

export const setupKinesisChannel = async (
  localStream: MediaStream,
): Promise<SignalingClient> => {
  // 1. Get channel ARN
  const kinesisVideoClient = new KinesisVideoClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  // 2. Get endpoint
  const getEndpointRes = await kinesisVideoClient.send(
    new GetSignalingChannelEndpointCommand({
      ChannelARN: channelARN,
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

  // 3. Initialize signaling client as MASTER
  const sc = new SignalingClient({
    channelARN,
    channelEndpoint: endpointsByProtocol.WSS,
    role: Role.MASTER,
    region,
    credentials: { accessKeyId, secretAccessKey },
    systemClockOffset: 0,
  });

  const peerConnection = new RTCPeerConnection({
    iceServers: [
      { urls: "stun:stun.kinesisvideo." + region + ".amazonaws.com:443" },
    ],
  });
  localStream
    .getTracks()
    .forEach((track) => peerConnection.addTrack(track, localStream));

  sc.on("open", async () => {
    // Wait for viewer offers and respond with answers
  });

  sc.open();

  return sc;
};
