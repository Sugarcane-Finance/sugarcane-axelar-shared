import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type RegisteredAssetStorageSlotDetailsStruct = {
  registeredSugarcaneId: BytesLike;
  assetStorageSlot: AddressLike;
  isValid: boolean;
};

export type RegisteredAssetStorageSlotDetailsStructOutput = [
  registeredSugarcaneId: string,
  assetStorageSlot: string,
  isValid: boolean,
] & {
  registeredSugarcaneId: string;
  assetStorageSlot: string;
  isValid: boolean;
};

export interface SugarcaneAccountRegistryV1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "predeployAssetStorageSlot"
      | "assetStorageSlotDetailsWithIndex"
      | "assetStorageSlotNonceWithIndex"
      | "version"
      | "versionDapp"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "predeployAssetStorageSlot",
    values: [BytesLike, BytesLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "assetStorageSlotDetailsWithIndex",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetStorageSlotNonceWithIndex",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "versionDapp",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "predeployAssetStorageSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetStorageSlotDetailsWithIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetStorageSlotNonceWithIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "versionDapp",
    data: BytesLike
  ): Result;
}

export interface SugarcaneAccountRegistryV1 extends BaseContract {
  connect(runner?: ContractRunner | null): SugarcaneAccountRegistryV1;
  waitForDeployment(): Promise<this>;

  interface: SugarcaneAccountRegistryV1Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  predeployAssetStorageSlot: TypedContractMethod<
    [
      sugarcaneId: BytesLike,
      additionalSalt: BytesLike,
      accountMembers: AddressLike[],
    ],
    [string],
    "view"
  >;

  assetStorageSlotDetailsWithIndex: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [RegisteredAssetStorageSlotDetailsStructOutput],
    "view"
  >;

  assetStorageSlotNonceWithIndex: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [bigint],
    "view"
  >;

  version: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  versionDapp: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "predeployAssetStorageSlot"
  ): TypedContractMethod<
    [
      sugarcaneId: BytesLike,
      additionalSalt: BytesLike,
      accountMembers: AddressLike[],
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "assetStorageSlotDetailsWithIndex"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [RegisteredAssetStorageSlotDetailsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "assetStorageSlotNonceWithIndex"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "versionDapp"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  filters: {};
}
