import { useContext, useEffect } from "react";

import { AppContext } from "./index";

import {
  useWeb3Setup,
  useWeb3SetupContract,
  useWeb3IsConnected,
} from "../hooks/useWeb3";

import {
  useEventAccountsChanged,
  useEventChainChanged,
} from "../hooks/useMetamask";

export const useAppContext = () => useContext(AppContext);

export const useEventOnLoad = () => {
  const initWeb3 = useWeb3Setup();
  const setupContract = useWeb3SetupContract();
  const {
    web3,
    chainId,
    currentAccount,
    setIsConnected
  } = useAppContext();
  useEventAccountsChanged();
  useEventChainChanged();

  useEffect(() => {
    const handleOnLoad = async () => {
      await setupContract();
    };

    if (web3) handleOnLoad();
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", initWeb3);
    return () => {
      window.removeEventListener("load", initWeb3);
    };
  }, [web3]);

  useEffect(() => {
    // keeps checking if connected
    if (!currentAccount) setIsConnected(false);
  }, [chainId, currentAccount]);
};
