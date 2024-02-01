export default [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assetStorage",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetStorageSlotIndex",
        type: "uint256",
      },
    ],
    name: "AddedAssetStorageSlot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldAddressStore",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddressStore",
        type: "address",
      },
    ],
    name: "AddressStoreChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assetStorage",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetStorageSlotIndex",
        type: "uint256",
      },
    ],
    name: "CreatedAssetStorageSlot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "registerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "registrationNumber",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assetStorage",
        type: "address",
      },
    ],
    name: "RegisteredAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_DAPP_MAILBOX_INBOUND_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_EXT_ASSET_STORE_FACTORY_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_EXT_BRIDGE_GATEWAY_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_EXT_SWAP_ROUTER_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_PAY_STATION_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_ROLE_REGISTRY_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AS_SYSTEM_STATUS_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RR_DAPP_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RR_DAPP_PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RR_DAPP_UPGRADER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RR_STAGE_INITIATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
    ],
    name: "accountDetails",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "sugarcaneId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "registrationNumber",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "assetStorageSlots",
            type: "address[]",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
        ],
        internalType: "struct AccountDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accountRegistrationSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accountRegistry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "existingAssetStorageSlot",
        type: "address",
      },
    ],
    name: "addAssetStorageSlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addressStore",
    outputs: [
      {
        internalType: "contract IAddressStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "assetStorageSlotIndex",
        type: "uint256",
      },
    ],
    name: "assetStorageSigners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "assetStorageSlot",
        type: "address",
      },
    ],
    name: "assetStorageSlotDetailsWithAddress",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "registeredSugarcaneId",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "assetStorageSlot",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct RegisteredAssetStorageSlotDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "assetStorageSlotIndex",
        type: "uint256",
      },
    ],
    name: "assetStorageSlotDetailsWithIndex",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "registeredSugarcaneId",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "assetStorageSlot",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct RegisteredAssetStorageSlotDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "assetStorageSlot",
        type: "address",
      },
    ],
    name: "assetStorageSlotNonceWithAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "assetStorageSlotIndex",
        type: "uint256",
      },
    ],
    name: "assetStorageSlotNonceWithIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "additionalSalt",
        type: "bytes32",
      },
    ],
    name: "createAssetStorageSlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressStoreAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accountMembers",
        type: "address[]",
      },
    ],
    name: "initializerPayload",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "assetStorageSlotIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "signerInQuestion",
        type: "address",
      },
    ],
    name: "isSignerOfAssetStorage",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pausedDapp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payStation",
    outputs: [
      {
        internalType: "contract IPayStation",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "additionalSalt",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "accountMembers",
        type: "address[]",
      },
    ],
    name: "predeployAssetStorageSlot",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "registrationSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "accountMembers",
        type: "address[]",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "assetStorageSlot",
        type: "address",
      },
    ],
    name: "registeredAssetStorageSlotId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "registeredAssetStorageSlots",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registeredIds",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roleRegistry",
    outputs: [
      {
        internalType: "contract IRoleRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "safeFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "safeSingleton",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sugarcaneId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "additionalSalt",
        type: "bytes32",
      },
    ],
    name: "saltNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "systemStatus",
    outputs: [
      {
        internalType: "contract ISystemStatus",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddressStore",
        type: "address",
      },
    ],
    name: "transferAddressStore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "versionDapp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
