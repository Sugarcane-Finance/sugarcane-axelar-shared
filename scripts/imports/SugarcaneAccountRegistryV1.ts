import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type AccountDetailsStruct = {
  sugarcaneId: BytesLike;
  registrationNumber: BigNumberish;
  assetStorageSlots: AddressLike[];
  isActive: boolean;
  isRegistered: boolean;
};

export type AccountDetailsStructOutput = [
  sugarcaneId: string,
  registrationNumber: bigint,
  assetStorageSlots: string[],
  isActive: boolean,
  isRegistered: boolean,
] & {
  sugarcaneId: string;
  registrationNumber: bigint;
  assetStorageSlots: string[];
  isActive: boolean;
  isRegistered: boolean;
};

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
      | "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS"
      | "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS"
      | "AS_DAPP_MAILBOX_INBOUND_ADDRESS"
      | "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS"
      | "AS_EXT_ASSET_STORE_FACTORY_ADDRESS"
      | "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS"
      | "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS"
      | "AS_EXT_BRIDGE_GATEWAY_ADDRESS"
      | "AS_EXT_SWAP_ROUTER_ADDRESS"
      | "AS_PAY_STATION_ADDRESS"
      | "AS_ROLE_REGISTRY_ADDRESS"
      | "AS_SYSTEM_STATUS_ADDRESS"
      | "RR_DAPP_ADMIN_ROLE"
      | "RR_DAPP_PAUSER_ROLE"
      | "RR_DAPP_UPGRADER_ROLE"
      | "RR_STAGE_INITIATOR_ROLE"
      | "UPGRADE_INTERFACE_VERSION"
      | "accountDetails"
      | "accountRegistrationSigner"
      | "accountRegistry"
      | "addAssetStorageSlot"
      | "addressStore"
      | "assetStorageSigners"
      | "assetStorageSlotDetailsWithAddress"
      | "assetStorageSlotDetailsWithIndex"
      | "assetStorageSlotNonceWithAddress"
      | "assetStorageSlotNonceWithIndex"
      | "createAssetStorageSlot"
      | "initialize"
      | "initializerPayload"
      | "isSignerOfAssetStorage"
      | "pausedDapp"
      | "payStation"
      | "predeployAssetStorageSlot"
      | "proxiableUUID"
      | "register"
      | "registeredAssetStorageSlotId"
      | "registeredAssetStorageSlots"
      | "registeredIds"
      | "roleRegistry"
      | "safeFactory"
      | "safeSingleton"
      | "saltNonce"
      | "systemStatus"
      | "transferAddressStore"
      | "upgradeToAndCall"
      | "version"
      | "versionDapp"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddedAssetStorageSlot"
      | "AddressStoreChanged"
      | "CreatedAssetStorageSlot"
      | "Initialized"
      | "RegisteredAccount"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_DAPP_MAILBOX_INBOUND_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_ASSET_STORE_FACTORY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_BRIDGE_GATEWAY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_SWAP_ROUTER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_PAY_STATION_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_ROLE_REGISTRY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_SYSTEM_STATUS_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RR_DAPP_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RR_DAPP_PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RR_DAPP_UPGRADER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RR_STAGE_INITIATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accountDetails",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "accountRegistrationSigner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accountRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAssetStorageSlot",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetStorageSigners",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetStorageSlotDetailsWithAddress",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetStorageSlotDetailsWithIndex",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetStorageSlotNonceWithAddress",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetStorageSlotNonceWithIndex",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAssetStorageSlot",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializerPayload",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isSignerOfAssetStorage",
    values: [BytesLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pausedDapp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payStation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "predeployAssetStorageSlot",
    values: [BytesLike, BytesLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [BytesLike, BytesLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registeredAssetStorageSlotId",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registeredAssetStorageSlots",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registeredIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "roleRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeSingleton",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "saltNonce",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "systemStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferAddressStore",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "versionDapp",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_DAPP_MAILBOX_INBOUND_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_ASSET_STORE_FACTORY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_BRIDGE_GATEWAY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_SWAP_ROUTER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_PAY_STATION_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_ROLE_REGISTRY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_SYSTEM_STATUS_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RR_DAPP_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RR_DAPP_PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RR_DAPP_UPGRADER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RR_STAGE_INITIATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountRegistrationSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAssetStorageSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetStorageSigners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetStorageSlotDetailsWithAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetStorageSlotDetailsWithIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetStorageSlotNonceWithAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetStorageSlotNonceWithIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAssetStorageSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializerPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSignerOfAssetStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pausedDapp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payStation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "predeployAssetStorageSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registeredAssetStorageSlotId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registeredAssetStorageSlots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registeredIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "roleRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeSingleton",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saltNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "systemStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAddressStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "versionDapp",
    data: BytesLike
  ): Result;
}

export namespace AddedAssetStorageSlotEvent {
  export type InputTuple = [
    sugarcaneId: BytesLike,
    assetStorage: AddressLike,
    assetStorageSlotIndex: BigNumberish,
  ];
  export type OutputTuple = [
    sugarcaneId: string,
    assetStorage: string,
    assetStorageSlotIndex: bigint,
  ];
  export interface OutputObject {
    sugarcaneId: string;
    assetStorage: string;
    assetStorageSlotIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddressStoreChangedEvent {
  export type InputTuple = [
    operator: AddressLike,
    oldAddressStore: AddressLike,
    newAddressStore: AddressLike,
  ];
  export type OutputTuple = [
    operator: string,
    oldAddressStore: string,
    newAddressStore: string,
  ];
  export interface OutputObject {
    operator: string;
    oldAddressStore: string;
    newAddressStore: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreatedAssetStorageSlotEvent {
  export type InputTuple = [
    sugarcaneId: BytesLike,
    assetStorage: AddressLike,
    assetStorageSlotIndex: BigNumberish,
  ];
  export type OutputTuple = [
    sugarcaneId: string,
    assetStorage: string,
    assetStorageSlotIndex: bigint,
  ];
  export interface OutputObject {
    sugarcaneId: string;
    assetStorage: string;
    assetStorageSlotIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegisteredAccountEvent {
  export type InputTuple = [
    sugarcaneId: BytesLike,
    registerer: AddressLike,
    registrationNumber: BigNumberish,
    assetStorage: AddressLike,
  ];
  export type OutputTuple = [
    sugarcaneId: string,
    registerer: string,
    registrationNumber: bigint,
    assetStorage: string,
  ];
  export interface OutputObject {
    sugarcaneId: string;
    registerer: string;
    registrationNumber: bigint;
    assetStorage: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

  AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  AS_DAPP_ACCOUNT_REGISTRY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_DAPP_MAILBOX_INBOUND_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_DAPP_MAILBOX_OUTBOUND_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_ASSET_STORE_FACTORY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_ASSET_STORE_SINGLETON_ADDRESS: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_BRIDGE_GATEWAY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_SWAP_ROUTER_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_PAY_STATION_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_ROLE_REGISTRY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_SYSTEM_STATUS_ADDRESS: TypedContractMethod<[], [string], "view">;

  RR_DAPP_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  RR_DAPP_PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  RR_DAPP_UPGRADER_ROLE: TypedContractMethod<[], [string], "view">;

  RR_STAGE_INITIATOR_ROLE: TypedContractMethod<[], [string], "view">;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  accountDetails: TypedContractMethod<
    [sugarcaneId: BytesLike],
    [AccountDetailsStructOutput],
    "view"
  >;

  accountRegistrationSigner: TypedContractMethod<[], [string], "view">;

  accountRegistry: TypedContractMethod<[], [string], "view">;

  addAssetStorageSlot: TypedContractMethod<
    [sugarcaneId: BytesLike, existingAssetStorageSlot: AddressLike],
    [void],
    "nonpayable"
  >;

  addressStore: TypedContractMethod<[], [string], "view">;

  assetStorageSigners: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [string[]],
    "view"
  >;

  assetStorageSlotDetailsWithAddress: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlot: AddressLike],
    [RegisteredAssetStorageSlotDetailsStructOutput],
    "view"
  >;

  assetStorageSlotDetailsWithIndex: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [RegisteredAssetStorageSlotDetailsStructOutput],
    "view"
  >;

  assetStorageSlotNonceWithAddress: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlot: AddressLike],
    [bigint],
    "view"
  >;

  assetStorageSlotNonceWithIndex: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [bigint],
    "view"
  >;

  createAssetStorageSlot: TypedContractMethod<
    [sugarcaneId: BytesLike, additionalSalt: BytesLike],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [addressStoreAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  initializerPayload: TypedContractMethod<
    [accountMembers: AddressLike[]],
    [string],
    "view"
  >;

  isSignerOfAssetStorage: TypedContractMethod<
    [
      sugarcaneId: BytesLike,
      assetStorageSlotIndex: BigNumberish,
      signerInQuestion: AddressLike,
    ],
    [boolean],
    "view"
  >;

  pausedDapp: TypedContractMethod<[], [boolean], "view">;

  payStation: TypedContractMethod<[], [string], "view">;

  predeployAssetStorageSlot: TypedContractMethod<
    [
      sugarcaneId: BytesLike,
      additionalSalt: BytesLike,
      accountMembers: AddressLike[],
    ],
    [string],
    "view"
  >;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  register: TypedContractMethod<
    [
      registrationSignature: BytesLike,
      sugarcaneId: BytesLike,
      accountMembers: AddressLike[],
    ],
    [void],
    "nonpayable"
  >;

  registeredAssetStorageSlotId: TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlot: AddressLike],
    [string],
    "view"
  >;

  registeredAssetStorageSlots: TypedContractMethod<[], [string[]], "view">;

  registeredIds: TypedContractMethod<[], [string[]], "view">;

  roleRegistry: TypedContractMethod<[], [string], "view">;

  safeFactory: TypedContractMethod<[], [string], "view">;

  safeSingleton: TypedContractMethod<[], [string], "view">;

  saltNonce: TypedContractMethod<
    [sugarcaneId: BytesLike, additionalSalt: BytesLike],
    [bigint],
    "view"
  >;

  systemStatus: TypedContractMethod<[], [string], "view">;

  transferAddressStore: TypedContractMethod<
    [newAddressStore: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  version: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  versionDapp: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_DAPP_MAILBOX_INBOUND_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_ASSET_STORE_FACTORY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_BRIDGE_GATEWAY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_SWAP_ROUTER_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_PAY_STATION_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_ROLE_REGISTRY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_SYSTEM_STATUS_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RR_DAPP_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RR_DAPP_PAUSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RR_DAPP_UPGRADER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RR_STAGE_INITIATOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "accountDetails"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike],
    [AccountDetailsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "accountRegistrationSigner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "accountRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addAssetStorageSlot"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, existingAssetStorageSlot: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addressStore"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "assetStorageSigners"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlotIndex: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "assetStorageSlotDetailsWithAddress"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlot: AddressLike],
    [RegisteredAssetStorageSlotDetailsStructOutput],
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
    nameOrSignature: "assetStorageSlotNonceWithAddress"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlot: AddressLike],
    [bigint],
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
    nameOrSignature: "createAssetStorageSlot"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, additionalSalt: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [addressStoreAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initializerPayload"
  ): TypedContractMethod<[accountMembers: AddressLike[]], [string], "view">;
  getFunction(
    nameOrSignature: "isSignerOfAssetStorage"
  ): TypedContractMethod<
    [
      sugarcaneId: BytesLike,
      assetStorageSlotIndex: BigNumberish,
      signerInQuestion: AddressLike,
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "pausedDapp"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "payStation"
  ): TypedContractMethod<[], [string], "view">;
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
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [
      registrationSignature: BytesLike,
      sugarcaneId: BytesLike,
      accountMembers: AddressLike[],
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registeredAssetStorageSlotId"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, assetStorageSlot: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "registeredAssetStorageSlots"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "registeredIds"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "roleRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "safeFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "safeSingleton"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "saltNonce"
  ): TypedContractMethod<
    [sugarcaneId: BytesLike, additionalSalt: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "systemStatus"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferAddressStore"
  ): TypedContractMethod<[newAddressStore: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "versionDapp"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  getEvent(
    key: "AddedAssetStorageSlot"
  ): TypedContractEvent<
    AddedAssetStorageSlotEvent.InputTuple,
    AddedAssetStorageSlotEvent.OutputTuple,
    AddedAssetStorageSlotEvent.OutputObject
  >;
  getEvent(
    key: "AddressStoreChanged"
  ): TypedContractEvent<
    AddressStoreChangedEvent.InputTuple,
    AddressStoreChangedEvent.OutputTuple,
    AddressStoreChangedEvent.OutputObject
  >;
  getEvent(
    key: "CreatedAssetStorageSlot"
  ): TypedContractEvent<
    CreatedAssetStorageSlotEvent.InputTuple,
    CreatedAssetStorageSlotEvent.OutputTuple,
    CreatedAssetStorageSlotEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "RegisteredAccount"
  ): TypedContractEvent<
    RegisteredAccountEvent.InputTuple,
    RegisteredAccountEvent.OutputTuple,
    RegisteredAccountEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AddedAssetStorageSlot(bytes32,address,uint256)": TypedContractEvent<
      AddedAssetStorageSlotEvent.InputTuple,
      AddedAssetStorageSlotEvent.OutputTuple,
      AddedAssetStorageSlotEvent.OutputObject
    >;
    AddedAssetStorageSlot: TypedContractEvent<
      AddedAssetStorageSlotEvent.InputTuple,
      AddedAssetStorageSlotEvent.OutputTuple,
      AddedAssetStorageSlotEvent.OutputObject
    >;

    "AddressStoreChanged(address,address,address)": TypedContractEvent<
      AddressStoreChangedEvent.InputTuple,
      AddressStoreChangedEvent.OutputTuple,
      AddressStoreChangedEvent.OutputObject
    >;
    AddressStoreChanged: TypedContractEvent<
      AddressStoreChangedEvent.InputTuple,
      AddressStoreChangedEvent.OutputTuple,
      AddressStoreChangedEvent.OutputObject
    >;

    "CreatedAssetStorageSlot(bytes32,address,uint256)": TypedContractEvent<
      CreatedAssetStorageSlotEvent.InputTuple,
      CreatedAssetStorageSlotEvent.OutputTuple,
      CreatedAssetStorageSlotEvent.OutputObject
    >;
    CreatedAssetStorageSlot: TypedContractEvent<
      CreatedAssetStorageSlotEvent.InputTuple,
      CreatedAssetStorageSlotEvent.OutputTuple,
      CreatedAssetStorageSlotEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "RegisteredAccount(bytes32,address,uint256,address)": TypedContractEvent<
      RegisteredAccountEvent.InputTuple,
      RegisteredAccountEvent.OutputTuple,
      RegisteredAccountEvent.OutputObject
    >;
    RegisteredAccount: TypedContractEvent<
      RegisteredAccountEvent.InputTuple,
      RegisteredAccountEvent.OutputTuple,
      RegisteredAccountEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
