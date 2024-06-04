import React, { useState, useCallback, useEffect } from "react";
import { FuelProvider } from "@fuels/react";
import { EVMWalletConnector } from "@fuels/connectors/evm";
import { Provider } from "fuels";
import type { FuelConfig } from "fuels";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Body } from "./Body";

const queryClient: QueryClient = new QueryClient();

function App() {
  const [fuelConfig, setFuelConfig] = useState<FuelConfig>({});
  const [currentProvider, setCurrentProvider] = useState<Provider>();

  const fetchProvider = useCallback(async () => {
    const provider = await Provider.create("http://127.0.0.1:4000/v1/graphql");
    setCurrentProvider(provider);
  }, []);

  useEffect(() => {
    fetchProvider();
  }, [fetchProvider]);

  useEffect(() => {
    const newFuelConfig = {
      connectors: [new EVMWalletConnector({ fuelProvider: currentProvider })],
    };
    setFuelConfig(newFuelConfig);
  }, [currentProvider]);

  return (
    <QueryClientProvider client={queryClient}>
      <FuelProvider fuelConfig={fuelConfig}>
        <div className="App">
          <Body />
        </div>
      </FuelProvider>
    </QueryClientProvider>
  );
}

export default App;
