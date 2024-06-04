import { createConfig } from 'fuels';

const fuelCorePort = +(process.env.NEXT_PUBLIC_FUEL_NODE_PORT as string) || 4000;

export default createConfig({
  contracts: ['./hello_world'],
  output: './src/contract-types',
  fuelCorePort,
  providerUrl: "http://127.0.0.1:4000/v1/graphql",
});
