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

export interface IGnosisSafeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addOwnerWithThreshold"
      | "approveHash"
      | "changeThreshold"
      | "checkNSignatures"
      | "checkSignatures"
      | "domainSeparator"
      | "encodeTransactionData"
      | "execTransaction"
      | "getChainId"
      | "getOwners"
      | "getThreshold"
      | "getTransactionHash"
      | "isOwner"
      | "nonce"
      | "removeOwner"
      | "requiredTxGas"
      | "setup"
      | "swapOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addOwnerWithThreshold",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkNSignatures",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSignatures",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "encodeTransactionData",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execTransaction",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      BytesLike,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionHash",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeOwner",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requiredTxGas",
    values: [AddressLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setup",
    values: [
      AddressLike[],
      BigNumberish,
      AddressLike,
      BytesLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      AddressLike,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapOwner",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addOwnerWithThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkNSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeTransactionData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredTxGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;
}

export interface IGnosisSafe extends BaseContract {
  connect(runner?: ContractRunner | null): IGnosisSafe;
  waitForDeployment(): Promise<this>;

  interface: IGnosisSafeInterface;

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

  addOwnerWithThreshold: TypedContractMethod<
    [owner: AddressLike, _threshold: BigNumberish],
    [void],
    "nonpayable"
  >;

  approveHash: TypedContractMethod<
    [hashToApprove: BytesLike],
    [void],
    "nonpayable"
  >;

  changeThreshold: TypedContractMethod<
    [_threshold: BigNumberish],
    [void],
    "nonpayable"
  >;

  checkNSignatures: TypedContractMethod<
    [
      dataHash: BytesLike,
      data: BytesLike,
      signatures: BytesLike,
      requiredSignatures: BigNumberish,
    ],
    [void],
    "view"
  >;

  checkSignatures: TypedContractMethod<
    [dataHash: BytesLike, data: BytesLike, signatures: BytesLike],
    [void],
    "view"
  >;

  domainSeparator: TypedContractMethod<[], [string], "view">;

  encodeTransactionData: TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: AddressLike,
      refundReceiver: AddressLike,
      _nonce: BigNumberish,
    ],
    [string],
    "view"
  >;

  execTransaction: TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: AddressLike,
      refundReceiver: AddressLike,
      signatures: BytesLike,
    ],
    [boolean],
    "payable"
  >;

  getChainId: TypedContractMethod<[], [bigint], "view">;

  getOwners: TypedContractMethod<[], [string[]], "view">;

  getThreshold: TypedContractMethod<[], [bigint], "view">;

  getTransactionHash: TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: AddressLike,
      refundReceiver: AddressLike,
      _nonce: BigNumberish,
    ],
    [string],
    "view"
  >;

  isOwner: TypedContractMethod<[owner: AddressLike], [boolean], "view">;

  nonce: TypedContractMethod<[], [bigint], "view">;

  removeOwner: TypedContractMethod<
    [prevOwner: AddressLike, owner: AddressLike, _threshold: BigNumberish],
    [void],
    "nonpayable"
  >;

  requiredTxGas: TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
    ],
    [bigint],
    "nonpayable"
  >;

  setup: TypedContractMethod<
    [
      _owners: AddressLike[],
      _threshold: BigNumberish,
      to: AddressLike,
      data: BytesLike,
      fallbackHandler: AddressLike,
      paymentToken: AddressLike,
      payment: BigNumberish,
      paymentReceiver: AddressLike,
    ],
    [void],
    "nonpayable"
  >;

  swapOwner: TypedContractMethod<
    [prevOwner: AddressLike, oldOwner: AddressLike, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addOwnerWithThreshold"
  ): TypedContractMethod<
    [owner: AddressLike, _threshold: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "approveHash"
  ): TypedContractMethod<[hashToApprove: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeThreshold"
  ): TypedContractMethod<[_threshold: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkNSignatures"
  ): TypedContractMethod<
    [
      dataHash: BytesLike,
      data: BytesLike,
      signatures: BytesLike,
      requiredSignatures: BigNumberish,
    ],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "checkSignatures"
  ): TypedContractMethod<
    [dataHash: BytesLike, data: BytesLike, signatures: BytesLike],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "domainSeparator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "encodeTransactionData"
  ): TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: AddressLike,
      refundReceiver: AddressLike,
      _nonce: BigNumberish,
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "execTransaction"
  ): TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: AddressLike,
      refundReceiver: AddressLike,
      signatures: BytesLike,
    ],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOwners"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTransactionHash"
  ): TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: AddressLike,
      refundReceiver: AddressLike,
      _nonce: BigNumberish,
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "isOwner"
  ): TypedContractMethod<[owner: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "nonce"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeOwner"
  ): TypedContractMethod<
    [prevOwner: AddressLike, owner: AddressLike, _threshold: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requiredTxGas"
  ): TypedContractMethod<
    [
      to: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setup"
  ): TypedContractMethod<
    [
      _owners: AddressLike[],
      _threshold: BigNumberish,
      to: AddressLike,
      data: BytesLike,
      fallbackHandler: AddressLike,
      paymentToken: AddressLike,
      payment: BigNumberish,
      paymentReceiver: AddressLike,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapOwner"
  ): TypedContractMethod<
    [prevOwner: AddressLike, oldOwner: AddressLike, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
