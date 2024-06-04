import { useConnectUI, useWallet } from "@fuels/react";

import { ContractFactory } from "fuels";
import { contracts } from "./generated/contract";

export const Body = () => {
    const { wallet } = useWallet();
    const { connect } = useConnectUI();
  
    const deployContract = async () => {
      if (!wallet) throw new Error("connect wallet");
      const { bytecode, abi } = contracts["nft-contract"];
  
      const factory = new ContractFactory(bytecode, abi, wallet);
      const deployContract = await factory.deployContract();
      console.log("success!!!!!!!!!!!!!!!", deployContract.id);
    };

  return (
    <body>
      <button
        onClick={async () => {
          await deployContract();
        }}
      >
        Deploy contract
      </button>
      <button onClick={() => connect()}>Connect</button>
    </body>
  );
};
