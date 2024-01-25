import BigNumber from "bignumber.js";
import { Contract, ContractRunner } from "ethers";
import { ethers } from "hardhat";

// // // // // // // // // // // // // // // // // // // //
// HELPER FUNCTIONS
// // // // // // // // // // // // // // // // // // // //

export const addDecimals = (baseNumber: number, decimals: number) => {
  return BigNumber(10).pow(decimals).times(baseNumber).toString();
};

export const convertToEth = (wei: string) => {
  return ethers.formatEther(wei);
};

export const displayCost = (
  title: string,
  amount: bigint | string | BigNumber
) =>
  console.log(
    `   - ${title}:`,
    convertToEth(amount.toString()),
    "(",
    amount,
    ")"
  );

export const connect = <T>(
  address: string,
  abi: any[],
  runner?: ContractRunner | null
) => {
  return new Contract(address, abi, runner) as unknown as T;
};
