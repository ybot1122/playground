const channelARN =
  "arn:aws:kinesisvideo:us-east-1:365496274414:channel/my-first-streaming/1751572571745";
const region = "us-east-1";
const accessKeyId = import.meta.env.PUBLIC_AWS_ACCESS_KEY;
const secretAccessKey = import.meta.env.PUBLIC_AWS_SECRET_ACCESS_KEY;

export const setupKinesisChannel = async (localStream: MediaStream) => {
  const KVSWebRTC = window as any;
  // Get channel endpoint and join as MASTER
  const kinesisVideoSignalingChannelsClient =
    new KVSWebRTC.KinesisVideoSignalingChannels({
      region,
      credentials: { accessKeyId, secretAccessKey },
    });

  // Get endpoints
  const getSignalingChannelEndpointResponse =
    await kinesisVideoSignalingChannelsClient
      .getSignalingChannelEndpoint({
        ChannelARN: channelARN,
        SingleMasterChannelEndpointConfiguration: {
          Protocols: ["WSS", "HTTPS"],
          Role: "MASTER",
        },
      })
      .promise();
  const endpointsByProtocol: Record<string, string> = {};
  (getSignalingChannelEndpointResponse.ResourceEndpointList || []).forEach(
    (endpoint: { Protocol: string; ResourceEndpoint: string }) => {
      endpointsByProtocol[endpoint.Protocol] = endpoint.ResourceEndpoint;
    },
  );

  // Initialize signaling client as MASTER
  const signalingClient = new KVSWebRTC.SignalingClient({
    channelARN,
    channelEndpoint: endpointsByProtocol.WSS,
    role: KVSWebRTC.Role.MASTER,
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

  signalingClient.on("open", async () => {
    // Wait for viewer offers and respond with answers
  });

  signalingClient.connect();

  return signalingClient;
};
