export enum FeatureName {
  BatchFill = "BatchFill",
  ERC1155Orders = "ERC1155Orders",
  ERC721Orders = "ERC721Orders",
  FundRecoveryFeature = "FundRecoveryFeature",
  LimitOrders = "LimitOrders",
  LiquidityProviderFeature = "LiquidityProviderFeature",
  MetaTransactions = "MetaTransactions",
  MultiplexFeature = "MultiplexFeature",
  OtcOrders = "OtcOrders",
  PancakeSwapFeature = "PancakeSwapFeature",
  SimpleFunctionRegistry = "SimpleFunctionRegistry",
  TransformERC20 = "TransformERC20",
  UniswapFeature = "UniswapFeature",
  UniswapV3Feature = "UniswapV3Feature",
}

export const FEATURE_NAME_TO_DESCRIPTIONS: Record<FeatureName, string> = {
  [FeatureName.BatchFill]:
    "[Swap] Feature for batch filling limit and RFQ orders",
  [FeatureName.ERC1155Orders]:
    "[NFT] A feature for interacting with ERC1155 orders.",
  [FeatureName.ERC721Orders]:
    "[NFT] A feature for interacting with ERC721 orders.",
  [FeatureName.FundRecoveryFeature]:
    "[Admin] Feature for recovering ERC20 tokens or ETH from the 0x Exchange Proxy.",
  [FeatureName.LimitOrders]:
    "[Swap] Feature for interacting with limit and RFQ orders (aka `NativeOrdersFeature`)",
  [FeatureName.LiquidityProviderFeature]:
    "[Swap] Feature for interacting with contracts that implement `ILiquidityProvider`",
  [FeatureName.MetaTransactions]:
    "[Swap] Feature for meta transactions (enables gasless swaps)",
  [FeatureName.MultiplexFeature]:
    "[Swap] Feature for efficient multiplex and multi-hop trades",
  [FeatureName.OtcOrders]:
    "[Swap] Feature for interacting with OTC (RFQ v2) orders.",
  [FeatureName.PancakeSwapFeature]:
    "[Swap] Feature for gas-efficient interactions with PancakeSwap",
  [FeatureName.SimpleFunctionRegistry]:
    "[Admin] Feature for managing features of 0x Exchange Proxy",
  [FeatureName.TransformERC20]:
    "[Swap] Feature to transform between ERC20 tokens.",
  [FeatureName.UniswapFeature]:
    "[Swap] Feature for gas-efficient interactions with Uniswap V2",
  [FeatureName.UniswapV3Feature]:
    "[Swap] Feature for gas-efficient interactions with Uniswap V3",
};

export const FUNCTION_SELECTOR_TO_NAME = new Map([
  ["0x84680615", "batchBuyERC1155s"],
  ["0xeae93ee7", "batchBuyERC721s"],
  ["0xa1865d6f", "batchCancelERC1155Orders"],
  ["0x86219940", "batchCancelERC721Orders"],
  ["0x9baa45a8", "batchCancelLimitOrders"],
  ["0x86a0c8d7", "batchCancelPairLimitOrders"],
  ["0x9f0434f5", "batchCancelPairLimitOrdersWithSigner"],
  ["0x0f0e8cf7", "batchCancelPairRfqOrders"],
  ["0xfd5f995b", "batchCancelPairRfqOrdersWithSigner"],
  ["0xf6e0f6a5", "batchCancelRfqOrders"],
  ["0xc5579ec8", "batchExecuteMetaTransactions"],
  ["0x1baaa00b", "batchFillLimitOrders"],
  ["0x75103cb9", "batchFillRfqOrders"],
  ["0xe52d1764", "batchFillTakerSignedOtcOrders"],
  ["0xb4658bfb", "batchGetLimitOrderRelevantStates"],
  ["0xad354eeb", "batchGetRfqOrderRelevantStates"],
  ["0x7da9e2cf", "batchMatchERC721Orders"],
  ["0x7cdb54d8", "buyERC1155"],
  ["0xfbee349d", "buyERC721"],
  ["0x06d2596b", "cancelERC1155Order"],
  ["0xbe167b9d", "cancelERC721Order"],
  ["0x7d49ec1a", "cancelLimitOrder"],
  ["0xd0a55fb0", "cancelPairLimitOrders"],
  ["0xb10a33f4", "cancelPairLimitOrdersWithSigner"],
  ["0x9a4f809c", "cancelPairRfqOrders"],
  ["0x935c82a4", "cancelPairRfqOrdersWithSigner"],
  ["0xfe55a3ef", "cancelRfqOrder"],
  ["0x287b071b", "createTransformWallet"],
  ["0x3d61ed3e", "executeMetaTransaction"],
  ["0x6eb224cb", "extend"],
  ["0xf6274f66", "fillLimitOrder"],
  ["0x9240529c", "fillOrKillLimitOrder"],
  ["0x438cdfc5", "fillOrKillRfqOrder"],
  ["0xdac748d4", "fillOtcOrder"],
  ["0xa578efaf", "fillOtcOrderForEth"],
  ["0x706394d5", "fillOtcOrderWithEth"],
  ["0xaa77476c", "fillRfqOrder"],
  ["0x4f948110", "fillTakerSignedOtcOrder"],
  ["0x724d3953", "fillTakerSignedOtcOrderForEth"],
  ["0x1de3a7ac", "getERC1155OrderHash"],
  ["0x4991fd72", "getERC1155OrderInfo"],
  ["0xb73a6027", "getERC721OrderHash"],
  ["0xfbc4a518", "getERC721OrderStatus"],
  ["0x030b2730", "getERC721OrderStatusBitVector"],
  ["0xdd11d225", "getLimitOrderHash"],
  ["0x95480889", "getLimitOrderInfo"],
  ["0x1fb09795", "getLimitOrderRelevantState"],
  ["0x3fb2da38", "getMetaTransactionExecutedBlock"],
  ["0xae550497", "getMetaTransactionHash"],
  ["0x72d17d03", "getMetaTransactionHashExecutedBlock"],
  ["0x53476b89", "getOtcOrderHash"],
  ["0x8c807c43", "getOtcOrderInfo"],
  ["0x487b5c20", "getProtocolFeeMultiplier"],
  ["0x9f1ec78b", "getQuoteSigner"],
  ["0x016a6d65", "getRfqOrderHash"],
  ["0x346693c5", "getRfqOrderInfo"],
  ["0x37f381d8", "getRfqOrderRelevantState"],
  ["0x6ba6bbc2", "getRollbackEntryAtIndex"],
  ["0xdfd00749", "getRollbackLength"],
  ["0xf028e9be", "getTransformWallet"],
  ["0x4d54cdb6", "getTransformerDeployer"],
  ["0x6b52a4a8", "isValidOrderSigner"],
  ["0x59ebfb45", "lastOtcTxOriginNonce"],
  ["0x0d8261eb", "matchERC721Orders"],
  ["0x261fe679", "migrate"],
  ["0xf35b4733", "multiplexBatchSellEthForToken"],
  ["0x77725df6", "multiplexBatchSellTokenForEth"],
  ["0x7a1eb1b9", "multiplexBatchSellTokenForToken"],
  ["0x5161b966", "multiplexMultiHopSellEthForToken"],
  ["0x9a2967d2", "multiplexMultiHopSellTokenForEth"],
  ["0x0f3b31b2", "multiplexMultiHopSellTokenForToken"],
  ["0xf23a6e61", "onERC1155Received"],
  ["0x150b7a02", "onERC721Received"],
  ["0x8da5cb5b", "owner"],
  ["0x7b757d97", "preSignERC1155Order"],
  ["0x462103af", "preSignERC721Order"],
  ["0xea7faa61", "registerAllowedOrderSigner"],
  ["0xb09f1fb1", "registerAllowedRfqOrigins"],
  ["0x9db64a40", "rollback"],
  ["0x6e2eec9e", "sellERC1155"],
  ["0xafde1b3c", "sellERC721"],
  ["0x3598d8ab", "sellEthForTokenToUniswapV3"],
  ["0xf7fcd384", "sellToLiquidityProvider"],
  ["0xc43c9ef6", "sellToPancakeSwap"],
  ["0xd9627aa4", "sellToUniswap"],
  ["0x803ba26d", "sellTokenForEthToUniswapV3"],
  ["0x6af479b2", "sellTokenForTokenToUniswapV3"],
  ["0x56ce180a", "setQuoteSigner"],
  ["0x87c96419", "setTransformerDeployer"],
  ["0x75e79be6", "supportInterface"],
  ["0xf2fde38b", "transferOwnership"],
  ["0x3cd2f026", "transferProtocolFeesForPools"],
  ["0x0d375884", "transferTrappedTokensTo"],
  ["0x415565b0", "transformERC20"],
  ["0xfa461e33", "uniswapV3SwapCallback"],
  ["0x2ac6f62a", "validateERC1155OrderProperties"],
  ["0x0d32a531", "validateERC1155OrderSignature"],
  ["0x4a13d797", "validateERC721OrderProperties"],
  ["0xd1ca183b", "validateERC721OrderSignature"],
]);