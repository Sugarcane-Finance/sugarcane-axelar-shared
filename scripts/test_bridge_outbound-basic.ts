import {
  AxelarQueryAPI,
  AxelarQueryAPIConfig,
  AxelarQueryAPIFeeResponse,
  Environment,
  GasToken,
} from "@axelar-network/axelarjs-sdk";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import BigNumber from "bignumber.js";
import { solidityPackedKeccak256 } from "ethers";
import { ethers, hardhatArguments } from "hardhat";

import SugarcaneMailboxOutboundV0Abi from "./imports/SugarcaneMailboxOutboundV0.abi";
import { SugarcaneMailboxOutboundV0 } from "./imports/SugarcaneMailboxOutboundV0";

import SugarcaneMailboxOutboundV1Abi from "./imports/SugarcaneMailboxOutboundV1.abi";
import { SugarcaneMailboxOutboundV1 } from "./imports/SugarcaneMailboxOutboundV1";

import { addDecimals, connect, displayCost } from "./helpers";
import IERC20Abi from "./imports/IERC20.abi";
import { IERC20 } from "./imports/IERC20";
import { handleAssetStorageSlotApproval } from "./assetstorage";

// // // // // // // // // // // // // // // // // // // //
// MAIN
// // // // // // // // // // // // // // // // // // // //
async function main() {
  let deployer: SignerWithAddress;
  let addrs: SignerWithAddress[] = await ethers.getSigners();

  [deployer] = addrs;

  const isFantomToMumbaiRoute =
    hardhatArguments.network === "testnetChainFantom";
  const isMumbaiToFantomRoute =
    hardhatArguments.network === "testnetChainPolygon";

  // // // // // // // // // // // // // // // // // // // //
  // SETTING DETAILS
  // // // // // // // // // // // // // // // // // // // //

  const chainDetails_Sepolia = {
    name: "ethereum-sepolia",
    chainId: 11155111,
    accountRegistry: "0xB076148D69E250A70642E0D8084B9008aCaaA89c",
    outbound: "0x948b90363cB1483236Ff1bb04f5c05Afa00548F8",
    inbound: "0xE3aB6bc34c608b9507A4d02bE48B08c0d78Cc690",
    aUSDC: "0x254d06f33bdc5b8ee05b2ea472107e300226659a",
    inputAmount: 1.2,
    gasToken: GasToken.ETH,
  };
  const chainDetails_Mumbai = {
    name: "Polygon",
    chainId: 80001,
    accountRegistry: "0xDcc16a951053515c0075A56cCEcDF7f3E6Eefa8f",
    outbound: "0x661f798Dabe691691a9E0Cf77B93dA9B06b93145",
    inbound: "0xdc799685eDe8b6F9153c5A3bb21cE7D8403cDa60",
    aUSDC: "0x2c852e740B62308c46DD29B982FBb650D063Bd07",
    inputAmount: 1.2,
    gasToken: GasToken.MATIC,
  };
  const chainDetails_Fantom = {
    name: "Fantom",
    chainId: 4002,
    accountRegistry: "0x49BEBB6070A7d5D10eF920271Ce063Afa3635dBb",
    outbound: "0x4c12567b58F24FBd9E581fa774060d0aaC749eA6",
    inbound: "0x36bd1ce67918E656c86D88F63E489e7d48fE6B64",
    aUSDC: "0x75Cc4fDf1ee3E781C1A3Ee9151D5c6Ce34Cf5C61",
    inputAmount: 0.2,
    gasToken: GasToken.FTM,
  };

  const sourceChainSender = deployer.address;
  const destinationChainReceiver = deployer.address;

  const sourceChainDetails = isFantomToMumbaiRoute
    ? chainDetails_Fantom
    : isMumbaiToFantomRoute
      ? chainDetails_Mumbai
      : chainDetails_Sepolia;

  const destinationChainDetails = isFantomToMumbaiRoute
    ? chainDetails_Mumbai
    : isMumbaiToFantomRoute
      ? chainDetails_Fantom
      : chainDetails_Mumbai;

  const inputTokenAmountWithDecimals = addDecimals(
    sourceChainDetails.inputAmount,
    6
  );

  // // // // // // // // // // // // // // // // // // // //
  // CONTRACTS
  // // // // // // // // // // // // // // // // // // // //

  const sugarcaneId = solidityPackedKeccak256(["string"], [deployer.address]);

  const sourceChain = sourceChainDetails.name;
  const sourceTokenAddress = sourceChainDetails.aUSDC;
  const sourceGasToken = sourceChainDetails.gasToken;
  const outboundMailboxContractAddress = sourceChainDetails.outbound;
  const accountRegistryContractAddress = sourceChainDetails.accountRegistry;

  const destinationChain = destinationChainDetails.name;
  const destinationChainId = destinationChainDetails.chainId;
  const destinationTokenAddress = destinationChainDetails.aUSDC;

  const sourceTokenContract = connect<IERC20>(
    sourceTokenAddress,
    IERC20Abi,
    deployer
  );

  const outboundMailboxContractv0 = connect<SugarcaneMailboxOutboundV0>(
    outboundMailboxContractAddress,
    SugarcaneMailboxOutboundV0Abi,
    deployer
  );
  const outboundMailboxContractv1 = connect<SugarcaneMailboxOutboundV1>(
    outboundMailboxContractAddress,
    SugarcaneMailboxOutboundV1Abi,
    deployer
  );

  const balanceBefore = await ethers.provider.getBalance(deployer);
  const tokenBalanceBefore = await sourceTokenContract.balanceOf(
    deployer.address
  );

  // // // // // // // // // // // // // // // // // // // //
  // CALCULATE BRIDGE COST
  // // // // // // // // // // // // // // // // // // // //

  const queryConfig: AxelarQueryAPIConfig = {
    environment: Environment.TESTNET,
  };
  const api = new AxelarQueryAPI(queryConfig);

  const axelarFeeBreakdown = (await api.estimateGasFee(
    // sourceChainId: EvmChain | string,
    sourceChain,
    // destinationChainId: EvmChain | string,
    destinationChain,

    // sourceChainTokenSymbol: GasToken | string,
    // "ETH",
    sourceGasToken,
    // gasLimit: number = DEFAULT_ESTIMATED_GAS, = 700k
    500000,
    // gasMultiplier = 1.1,
    1.1,
    // minGasPrice = "0",
    "0",
    // gmpParams?: GMPParams
    {
      // showDetailedFees: boolean;
      showDetailedFees: true,
      // transferAmount: number; // In terms of symbol, not unit denom, e.g. use 1 for 1 axlUSDC, not 1000000
      transferAmount: sourceChainDetails.inputAmount,
      // sourceContractAddress: string;
      sourceContractAddress: sourceChainDetails.outbound,
      // destinationContractAddress: string;
      destinationContractAddress: destinationChainDetails.inbound,
      // // tokenSymbol: string;
      tokenSymbol: destinationTokenAddress,
    } as any
  )) as AxelarQueryAPIFeeResponse;
  const bridgeCost = BigNumber(axelarFeeBreakdown.baseFee)
    .plus(axelarFeeBreakdown.executionFeeWithMultiplier)
    .plus(axelarFeeBreakdown.expressFee)
    .toString();

  console.log("\n-=-=-=- axelarFeeBreakdown");
  console.log(axelarFeeBreakdown);
  console.log("\n-=-=-=- bridgeCost");
  displayCost("bridgeCost", bridgeCost);

  // // // // // // // // // // // // // // // // // // // //
  // HANDLE THE ACTION
  // // // // // // // // // // // // // // // // // // // //

  let bridgeTx = null;
  let bridgePayload = null;

  // // // // // // // // // // // // // // // // // // // //
  // SET THE ASSET STORAGE SLOT TO MOVE THE ASSETS
  // // // // // // // // // // // // // // // // // // // //

  const { assetStorageAddress } = await handleAssetStorageSlotApproval({
    deployer,
    accountRegistryContractAddress,
    outboundMailboxContractAddress,
    sourceTokenAddress,
    sugarcaneId,
    inputTokenAmountWithDecimals,
  });

  // // // // // // // // // // // // // // // // // // // //
  // SEND TOKENS TO ASSET STORAGE SLOT 0
  // // // // // // // // // // // // // // // // // // // //

  // Send the tokens to the asset storage slot
  const transferTx = await sourceTokenContract.transfer(
    assetStorageAddress,
    inputTokenAmountWithDecimals
  );
  await transferTx.wait();

  console.log("\n-=-=-=- transferTx");
  console.log(transferTx);

  // // // // // // // // // // // // // // // // // // // //
  // V1 CHAINS (FANTOM) FORMAT
  // // // // // // // // // // // // // // // // // // // //
  bridgePayload = {
    // bytes32 sugarcaneId,
    sugarcaneId,
    // uint256 assetStorageSlotIndex,
    assetStorageSlotIndex: 0,
    // uint256 bridgeCost,
    bridgeCost: bridgeCost,
    // uint256 inputTokenAmount,
    inputTokenAmount: inputTokenAmountWithDecimals,
    // uint256 destinationChainId,
    destinationChainId: destinationChainId,
    // bytes memory sourceSwapDataPayload,
    sourceSwapDataPayload: "0x",
    // address sourceTokenAddress,
    sourceTokenAddress: sourceTokenAddress,
    // address destinationReceiverAddress,
    destinationReceiverAddress: destinationChainReceiver,
    // address destinationTokenAddress
    destinationTokenAddress: destinationTokenAddress,
  };

  bridgeTx = await outboundMailboxContractv1.bridgeSimple(
    // bytes32 sugarcaneId,
    bridgePayload.sugarcaneId,
    // uint256 assetStorageSlotIndex,
    bridgePayload.assetStorageSlotIndex,
    // uint256 bridgeCost,
    bridgePayload.bridgeCost,
    // uint256 inputTokenAmount,
    bridgePayload.inputTokenAmount,
    // uint256 destinationChainId,
    bridgePayload.destinationChainId,
    // bytes memory sourceSwapDataPayload,
    bridgePayload.sourceSwapDataPayload,
    // address sourceTokenAddress,
    bridgePayload.sourceTokenAddress,
    // address destinationReceiverAddress,
    bridgePayload.destinationReceiverAddress,
    // address destinationTokenAddress
    bridgePayload.destinationTokenAddress
  );

  console.log("\n-=-=-=- bridgePayload");
  console.log(bridgePayload);

  await bridgeTx.wait();

  console.log("\n-=-=-=- bridgeTx");
  console.log(bridgeTx);

  // // // // // // // // // // // // // // // // // // // //
  // WRAP UP
  // // // // // // // // // // // // // // // // // // // //

  const tokenBalanceAfter = await sourceTokenContract.balanceOf(
    deployer.address
  );
  const balanceAfter = await ethers.provider.getBalance(deployer);

  console.log(`\n*** *** *** [ TOKEN BALANCE ] *** *** ***`);
  console.log("   - Before:", tokenBalanceBefore);
  console.log("   - After:", tokenBalanceAfter);
  console.log("   - Difference:", tokenBalanceBefore - tokenBalanceAfter);

  console.log(`\n*** *** *** [ BALANCE ] *** *** ***`);
  displayCost("Before", balanceBefore);
  displayCost("After", balanceAfter);
  displayCost("Difference", balanceBefore - balanceAfter);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
