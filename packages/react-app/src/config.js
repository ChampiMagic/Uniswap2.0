import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xFAD0B7B122c5C7f4A48a19c38d61d40B85e0146C"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-mainnet.g.alchemy.com/v2/f1879Am78oS-ujOVr5Jy0N7gEyX4QQtq",
  },
};