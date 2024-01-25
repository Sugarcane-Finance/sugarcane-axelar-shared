export default [
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
];
