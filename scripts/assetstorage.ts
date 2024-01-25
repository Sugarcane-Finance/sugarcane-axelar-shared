import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { ethers } from "hardhat";

import { connect } from "./helpers";

import { IERC20 } from "./imports/IERC20";
import IERC20Abi from "./imports/IERC20.abi";
import { IGnosisSafe } from "./imports/IGnosisSafe";
import IGnosisSafeAbi from "./imports/IGnosisSafe.abi";
import { SugarcaneAccountRegistryV1 } from "./imports/SugarcaneAccountRegistryV1";
import SugarcaneAccountRegistryV1Abi from "./imports/SugarcaneAccountRegistryV1.abi";

export const handleAssetStorageSlotApproval = async ({
  deployer,
  accountRegistryContractAddress,
  outboundMailboxContractAddress,
  sourceTokenAddress,
  sugarcaneId,
  inputTokenAmountWithDecimals,
}: {
  deployer: SignerWithAddress;
  accountRegistryContractAddress: string;
  outboundMailboxContractAddress: string;
  sourceTokenAddress: string;
  sugarcaneId: string;
  inputTokenAmountWithDecimals: string;
}) => {
  const accountRegistryContractv1 = connect<SugarcaneAccountRegistryV1>(
    accountRegistryContractAddress,
    SugarcaneAccountRegistryV1Abi,
    deployer
  );

  const sourceTokenContract = connect<IERC20>(
    sourceTokenAddress,
    IERC20Abi,
    deployer
  );
  console.log("\n*** *** *** ** ** sugarcaneId");
  console.log(sugarcaneId);

  // // // // // // // // // // // // // // // // // // // //
  // CONSTRUCT THE APPROVAL PAYLOAD
  // // // // // // // // // // // // // // // // // // // //

  const approvalDataPayload = sourceTokenContract.interface.encodeFunctionData(
    "approve",
    [outboundMailboxContractAddress, inputTokenAmountWithDecimals]
  );

  console.log("\n=-=-=-=-= approvalDataPayload");
  console.log(approvalDataPayload);

  // // // // // // // // // // // // // // // // // // // //
  // READ THE ASSET STORAGE SLOT SAFE NONCE
  // // // // // // // // // // // // // // // // // // // //

  const nonce = await accountRegistryContractv1.assetStorageSlotNonceWithIndex(
    sugarcaneId,
    0
  );

  console.log("\n=-=-=-=-= nonce");
  console.log(nonce);

  const assetStorageSlotAddress =
    await accountRegistryContractv1.assetStorageSlotDetailsWithIndex(
      sugarcaneId,
      0
    );
  console.log("\n=-=-=-=-= assetStorageSlotAddress");
  console.log(assetStorageSlotAddress);

  // // // // // // // // // // // // // // // // // // // //
  // CONSTRUCT SIGNATURE
  // // // // // // // // // // // // // // // // // // // //

  const safeContract = connect<IGnosisSafe>(
    assetStorageSlotAddress[1],
    IGnosisSafeAbi,
    deployer
  );

  const transactionData = await safeContract.encodeTransactionData(
    // address to,
    sourceTokenAddress,
    // uint256 value,
    "0",
    // bytes calldata data,
    approvalDataPayload,
    // Enum.Operation operation,
    "0",
    // uint256 safeTxGas,
    "0",
    // uint256 baseGas,
    "0",
    // uint256 gasPrice,
    "0",
    // address gasToken,
    ethers.ZeroAddress,
    // address refundReceiver,
    ethers.ZeroAddress,
    // uint256 _nonce
    nonce
  );

  // 32 bytes of data in Uint8Array
  const transactionHash = ethers.keccak256(transactionData);
  let txHashBinary = ethers.getBytes(transactionHash);

  console.log("\n-=-=-=- txHashBinary");
  console.log(txHashBinary);

  // To sign the 32 bytes of data, make sure you pass in the data
  const baseTransactionSignature = await deployer.signMessage(txHashBinary);

  const transactionSignature = baseTransactionSignature
    .replace(/1b$/, "1f")
    .replace(/1c$/, "20");

  console.log("\n-=-=-=- transactionSignature");
  console.log(transactionSignature);

  // // // // // // // // // // // // // // // // // // // //
  // SEND APPROVAL TO SAFE
  // // // // // // // // // // // // // // // // // // // //

  const approveTokenTransferOnSafeTx = await safeContract.execTransaction(
    // address to,
    sourceTokenAddress,
    // uint256 value,
    "0",
    // bytes calldata data,
    approvalDataPayload,
    // Operation operation,
    "0",
    // uint256 safeTxGas,
    "0",
    // uint256 baseGas,
    "0",
    // uint256 gasPrice,
    "0",
    // address gasToken,
    ethers.ZeroAddress,
    // address payable refundReceiver,
    ethers.ZeroAddress,
    // bytes memory signatures
    transactionSignature
  );
  await approveTokenTransferOnSafeTx.wait();

  console.log("\n-=-=-=- approveTokenTransferOnSafeTx");
  console.log(approveTokenTransferOnSafeTx);

  return {
    assetStorageAddress: assetStorageSlotAddress[1],
    safeContract,
    transactionData,
    transactionHash,
    transactionSignature,
  };
};
