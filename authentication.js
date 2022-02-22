import { IdentityClient, ChannelClient, ApiVersion } from 'iota-is-sdk';

const authenticate = async (identityId, secretKey) => {
  const config = {
    baseUrl: 'http://localhost:3000',
    apiVersion: ApiVersion.v01
  };

  // Authenticate identity client
  const identity = new IdentityClient(config);
  await identity.authenticate(identityId, secretKey);

  // Authenticate channel client
  const channel = new ChannelClient(config);
  await channel.authenticate(identityId, secretKey);
};

const identityId = 'did:iota:8BAmUqAg4aUjV3T9WUhPpDnFVbJSk16oLyFq3m3e62MF';
const secretKey = '5N3SxG4UzVDpNe4LyDoZyb6bSgE9tk3pE2XP5znXo5bF';
authenticate(identityId, secretKey);
