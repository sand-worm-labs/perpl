/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer } from "envio";
import type {
  Exchange_AccountCreated,
  Exchange_AccountFeeTierSet,
  Exchange_AccountFreeze,
  Exchange_AccountFrozen,
  Exchange_AccountLiquidationCredit,
  Exchange_AdminChanged,
  Exchange_AdministratorUpdated,
  Exchange_AmountExceedsAvailableBalance,
  Exchange_BankruptcyPricePreventsDeleverage,
  Exchange_BeaconUpgraded,
  Exchange_BlockStatusChanged,
  Exchange_BorrowMarginNotMetAfterDecCollateral,
  Exchange_BuyToLiquidateBuyerRestricted,
  Exchange_BuyToLiquidateParamsUpdated,
  Exchange_BuyToLiquidateRestrictionUpdated,
  Exchange_BuyToLiquidateSettled,
  Exchange_BuyToLiquidateSlippageExceeded,
  Exchange_BuyToLiquidateStarted,
  Exchange_BuyToLiquidateThresholdUpdated,
  Exchange_CancelExistingInvalidCloseOrders,
  Exchange_CannotAdjustEntryPriceToDecCollateral,
  Exchange_CantBuyToLiquidate,
  Exchange_CantChangeCloseOrder,
  Exchange_CantDeleverageAgainstOpposingPositions,
  Exchange_CantLiquidatePosAboveMMR,
  Exchange_ChangeExpiredOrderNeedsNewExpiry,
  Exchange_ClearingExpiredOrder,
  Exchange_ClearingFrozenAccountOrder,
  Exchange_ClearingInvalidCloseOrder,
  Exchange_ClearingRemainingOrderLockBeyondBalance,
  Exchange_ClearingSelfMatchingOrder,
  Exchange_CloseOrderExceedsPosition,
  Exchange_CloseOrderPositionMismatch,
  Exchange_CollateralDecreaseDeclined,
  Exchange_CollateralDecreaseRequestCancelled,
  Exchange_CollateralDecreaseRequestExpired,
  Exchange_CollateralDecreaseRequested,
  Exchange_CollateralDeposit,
  Exchange_CollateralWithdrawal,
  Exchange_ContractAdded,
  Exchange_ContractAddedV2,
  Exchange_ContractLinkFeedUpdated,
  Exchange_ContractNotOperational,
  Exchange_ContractPaused,
  Exchange_ContractRemoved,
  Exchange_ContractVersionSet,
  Exchange_CrossesBook,
  Exchange_DcpBorrowThreshUpdated,
  Exchange_DecreaseCollateralBeyondMarkPrice,
  Exchange_DefaultPerpFeeScheduleSet,
  Exchange_DefaultRwaFeeScheduleSet,
  Exchange_DeleveragePositionListEmpty,
  Exchange_ExceedsLastExecutionBlock,
  Exchange_ExchangeHalted,
  Exchange_ExchangeInitialized,
  Exchange_FeeParamsUpdated,
  Exchange_FeeScheduleMigrated,
  Exchange_FeeScheduleSet,
  Exchange_FeeUnitRedenominated,
  Exchange_FundingClampPctUpdated,
  Exchange_FundingEventCompleted,
  Exchange_FundingEventSetTooEarly,
  Exchange_FundingPriceExceedsTol,
  Exchange_FundingSumAlreadySet,
  Exchange_FundingSumScalingExpUpdated,
  Exchange_IgnoreOracleUpdated,
  Exchange_ImmediateOrCancelExecuted,
  Exchange_IncreasePositionCollateral,
  Exchange_InitialMarginFractionUpdated,
  Exchange_Initialized,
  Exchange_InsolventPositionCannotBeForcedClose,
  Exchange_InsufficientFundsToDecCollateral,
  Exchange_InsuficientFundsForRecycleFee,
  Exchange_InsurancePaymentForSettlement,
  Exchange_InvalidAccountFrozenOrder,
  Exchange_InvalidBankruptcyPrice,
  Exchange_InvalidExpiryBlock,
  Exchange_InvalidLinkReportForContract,
  Exchange_InvalidLinkReportVersion,
  Exchange_InvalidLiquidationPrice,
  Exchange_InvalidOrderId,
  Exchange_LastForwardedDescIdReset,
  Exchange_LastTriggeredDescIdReset,
  Exchange_LinkDatastreamConfigured,
  Exchange_LinkDsError,
  Exchange_LinkDsPanic,
  Exchange_LinkPriceUpdated,
  Exchange_LiquidationBuyerUpdated,
  Exchange_LiquidationParamsUpdated,
  Exchange_LotOutOfRange,
  Exchange_MaintenanceMarginFractionUpdated,
  Exchange_MakerFeeUpdated,
  Exchange_MakerOrderFilled,
  Exchange_MakerOrderFilledV2,
  Exchange_MakerOrderSettlementFailed,
  Exchange_MarginTolUpdated,
  Exchange_MarkExceedsTol,
  Exchange_MarkPriceAgeExceedsMax,
  Exchange_MarkUpdated,
  Exchange_MaxMatchesReached,
  Exchange_MaxOpenInterestUpdated,
  Exchange_MaximumAccountOrders,
  Exchange_MinAccountOpenAmountUpdated,
  Exchange_MinPostUpdated,
  Exchange_MinSettleUpdated,
  Exchange_MonitorAdministratorUpdated,
  Exchange_MonitorPauseAttempted,
  Exchange_OracleAgeExceedsMax,
  Exchange_OracleDisabled,
  Exchange_OrderBatchCompleted,
  Exchange_OrderCancelled,
  Exchange_OrderCancelledByAdmin,
  Exchange_OrderCancelledByLiquidator,
  Exchange_OrderChanged,
  Exchange_OrderDescIdTooLow,
  Exchange_OrderDoesNotExist,
  Exchange_OrderExtensionRejected,
  Exchange_OrderForwardingNotAllowed,
  Exchange_OrderForwardingUpdated,
  Exchange_OrderPlaced,
  Exchange_OrderPostFailed,
  Exchange_OrderRequest,
  Exchange_OrderRequestV2,
  Exchange_OrderSettlementImpliesInsolvent,
  Exchange_OrderSizeExceedsAvailableSize,
  Exchange_OverCollatDescentThreshUpdated,
  Exchange_OwnershipTransferStarted,
  Exchange_OwnershipTransferred,
  Exchange_PermissonedCancelParamsUpdated,
  Exchange_PerpFeeSchedIdSet,
  Exchange_PerpPositionBalCreditPositiveSevere,
  Exchange_PositionAdministratorUpdated,
  Exchange_PositionClosed,
  Exchange_PositionCollateralDecreased,
  Exchange_PositionDecreased,
  Exchange_PositionDeleveraged,
  Exchange_PositionDeleveragedV2,
  Exchange_PositionDoesNotExist,
  Exchange_PositionIncreased,
  Exchange_PositionIncreasedV2,
  Exchange_PositionInverted,
  Exchange_PositionLiquidated,
  Exchange_PositionLiquidationCredit,
  Exchange_PositionOpened,
  Exchange_PositionOpenedV2,
  Exchange_PositionUnwound,
  Exchange_PositionUnwoundV2,
  Exchange_PositionUnwoundWithoutPayment,
  Exchange_PositionUnwoundWithoutPaymentV2,
  Exchange_PostOrderUnderMinimum,
  Exchange_PriceAdministratorUpdated,
  Exchange_PriceMaxAgeUpdated,
  Exchange_PriceOutOfRange,
  Exchange_PriceSetDuringTriggerExec,
  Exchange_PriceTolUpdated,
  Exchange_ProtocolBalanceDeposit,
  Exchange_ProtocolBalanceWithdraw,
  Exchange_RecycleBalanceInsufficientSevere,
  Exchange_RecycleFeeToAccount,
  Exchange_RecycleFeeToProtocol,
  Exchange_RecycleFeeUpdated,
  Exchange_ReportAgeExceedsLastUpdate,
  Exchange_ReportExpiresTooSoon,
  Exchange_ReportFromFuture,
  Exchange_ReportPriceIsNegative,
  Exchange_ResidueBalanceInsufficient,
  Exchange_ResidueTransferred,
  Exchange_TakerFeeUpdated,
  Exchange_TakerOrderFilled,
  Exchange_TakerOrderFilledV2,
  Exchange_ToleranceAdministratorUpdated,
  Exchange_TransferAccountToProtocol,
  Exchange_TransferPerpInsToProtocol,
  Exchange_TransferPerpPosToProtocol,
  Exchange_TransferProtocolToAccount,
  Exchange_TransferProtocolToPerp,
  Exchange_TransferProtocolToRecycleBal,
  Exchange_TriggerDescIdTooLow,
  Exchange_TriggerOrderExecution,
  Exchange_TriggerOrderRequest,
  Exchange_UnableToCancelOrder,
  Exchange_UnityDescentThreshUpdated,
  Exchange_UnspecifiedCollateral,
  Exchange_UnwindCompleted,
  Exchange_UnwindContractTrigger,
  Exchange_UnwindInitializationCleared,
  Exchange_UnwindInitialized,
  Exchange_UnwindInsufficientBalance,
  Exchange_UnwindIterationCompleted,
  Exchange_UnwindPreparationCleared,
  Exchange_UnwindPrepared,
  Exchange_UnwindProcessInProgress,
  Exchange_UpdateOracleFailed,
  Exchange_Upgraded,
  Exchange_ValueExceedsMaximum,
  Exchange_WRLSMinWithdrawLimitUpdated,
  Exchange_WRLSThousandthsTvlUpdated,
  Exchange_WhitelistAddress,
  Exchange_WhitelistingEnabledChanged,
  Exchange_WithdrawRateLimitBypassSet,
  Exchange_WithdrawRateLimitForceReset,
  Exchange_WithdrawRateLimitReset,
  Exchange_WrongAccountForOrder,
} from "envio";

indexer.onEvent({ contract: "Exchange", event: "AccountCreated" }, async ({ event, context }) => {
  const entity: Exchange_AccountCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    event_id: event.params.id,
  };

  context.Exchange_AccountCreated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "AccountFeeTierSet" }, async ({ event, context }) => {
  const entity: Exchange_AccountFeeTierSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    tier: event.params.tier,
  };

  context.Exchange_AccountFeeTierSet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "AccountFreeze" }, async ({ event, context }) => {
  const entity: Exchange_AccountFreeze = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    status: event.params.status,
  };

  context.Exchange_AccountFreeze.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "AccountFrozen" }, async ({ event, context }) => {
  const entity: Exchange_AccountFrozen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    status: event.params.status,
  };

  context.Exchange_AccountFrozen.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "AccountLiquidationCredit" }, async ({ event, context }) => {
  const entity: Exchange_AccountLiquidationCredit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    startBalanceCNS: event.params.startBalanceCNS,
    endBalanceCNS: event.params.endBalanceCNS,
  };

  context.Exchange_AccountLiquidationCredit.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "AdminChanged" }, async ({ event, context }) => {
  const entity: Exchange_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.Exchange_AdminChanged.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "AdministratorUpdated" }, async ({ event, context }) => {
  const entity: Exchange_AdministratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    administrator: event.params.administrator,
    added: event.params.added,
  };

  context.Exchange_AdministratorUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "AmountExceedsAvailableBalance" }, async ({ event, context }) => {
  const entity: Exchange_AmountExceedsAvailableBalance = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amountCNS: event.params.amountCNS,
    availableBalanceCNS: event.params.availableBalanceCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_AmountExceedsAvailableBalance.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BankruptcyPricePreventsDeleverage" }, async ({ event, context }) => {
  const entity: Exchange_BankruptcyPricePreventsDeleverage = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    bankruptcyPricePNS: event.params.bankruptcyPricePNS,
    markPricePNS: event.params.markPricePNS,
  };

  context.Exchange_BankruptcyPricePreventsDeleverage.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BeaconUpgraded" }, async ({ event, context }) => {
  const entity: Exchange_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.Exchange_BeaconUpgraded.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BlockStatusChanged" }, async ({ event, context }) => {
  const entity: Exchange_BlockStatusChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    addr: event.params.addr,
    blocked: event.params.blocked,
  };

  context.Exchange_BlockStatusChanged.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BorrowMarginNotMetAfterDecCollateral" }, async ({ event, context }) => {
  const entity: Exchange_BorrowMarginNotMetAfterDecCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    bmrCNS: event.params.bmrCNS,
    fmvAfterCNS: event.params.fmvAfterCNS,
  };

  context.Exchange_BorrowMarginNotMetAfterDecCollateral.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BuyToLiquidateBuyerRestricted" }, async ({ event, context }) => {
  const entity: Exchange_BuyToLiquidateBuyerRestricted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    buyer: event.params.buyer,
  };

  context.Exchange_BuyToLiquidateBuyerRestricted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BuyToLiquidateParamsUpdated" }, async ({ event, context }) => {
  const entity: Exchange_BuyToLiquidateParamsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    insAmtPer100K: event.params.insAmtPer100K,
    userAmtPer100K: event.params.userAmtPer100K,
    buyerAmtPer100K: event.params.buyerAmtPer100K,
    protAmtPer100K: event.params.protAmtPer100K,
  };

  context.Exchange_BuyToLiquidateParamsUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BuyToLiquidateRestrictionUpdated" }, async ({ event, context }) => {
  const entity: Exchange_BuyToLiquidateRestrictionUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    restrictBuyers: event.params.restrictBuyers,
  };

  context.Exchange_BuyToLiquidateRestrictionUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BuyToLiquidateSettled" }, async ({ event, context }) => {
  const entity: Exchange_BuyToLiquidateSettled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderType: event.params.orderType,
    realizedPricePNS: event.params.realizedPricePNS,
    lotLNS: event.params.lotLNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_BuyToLiquidateSettled.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BuyToLiquidateSlippageExceeded" }, async ({ event, context }) => {
  const entity: Exchange_BuyToLiquidateSlippageExceeded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    posAccountId: event.params.posAccountId,
    positionType: event.params.positionType,
    markPricePNS: event.params.markPricePNS,
    limitPricePNS: event.params.limitPricePNS,
  };

  context.Exchange_BuyToLiquidateSlippageExceeded.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BuyToLiquidateStarted" }, async ({ event, context }) => {
  const entity: Exchange_BuyToLiquidateStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    posAccountId: event.params.posAccountId,
    liquidatorId: event.params.liquidatorId,
    requestedLotLNS: event.params.requestedLotLNS,
    leverageHdths: event.params.leverageHdths,
    limitPricePNS: event.params.limitPricePNS,
    maxNegPnlCollatBPS: event.params.maxNegPnlCollatBPS,
  };

  context.Exchange_BuyToLiquidateStarted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "BuyToLiquidateThresholdUpdated" }, async ({ event, context }) => {
  const entity: Exchange_BuyToLiquidateThresholdUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    thresholdPer100K: event.params.thresholdPer100K,
  };

  context.Exchange_BuyToLiquidateThresholdUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CancelExistingInvalidCloseOrders" }, async ({ event, context }) => {
  const entity: Exchange_CancelExistingInvalidCloseOrders = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockedLotLNS: event.params.lockedLotLNS,
    lockedPositionType: event.params.lockedPositionType,
    newPositionType: event.params.newPositionType,
  };

  context.Exchange_CancelExistingInvalidCloseOrders.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CannotAdjustEntryPriceToDecCollateral" }, async ({ event, context }) => {
  const entity: Exchange_CannotAdjustEntryPriceToDecCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    amountCNS: event.params.amountCNS,
    adjustmentAmountCNS: event.params.adjustmentAmountCNS,
    entryPricePNS: event.params.entryPricePNS,
    adjustedEntryPricePNS: event.params.adjustedEntryPricePNS,
    positionType: event.params.positionType,
  };

  context.Exchange_CannotAdjustEntryPriceToDecCollateral.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CantBuyToLiquidate" }, async ({ event, context }) => {
  const entity: Exchange_CantBuyToLiquidate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    posAccountId: event.params.posAccountId,
    positionType: event.params.positionType,
    markPricePNS: event.params.markPricePNS,
    bsLiqPricePNS: event.params.bsLiqPricePNS,
    liqPricePNS: event.params.liqPricePNS,
    bkptPricePNS: event.params.bkptPricePNS,
  };

  context.Exchange_CantBuyToLiquidate.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CantChangeCloseOrder" }, async ({ event, context }) => {
  const entity: Exchange_CantChangeCloseOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
    accountId: event.params.accountId,
  };

  context.Exchange_CantChangeCloseOrder.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CantDeleverageAgainstOpposingPositions" }, async ({ event, context }) => {
  const entity: Exchange_CantDeleverageAgainstOpposingPositions = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    forceClose: event.params.forceClose,
    positionType: event.params.positionType,
    deleveragePricePNS: event.params.deleveragePricePNS,
    sortedPositionIds: event.params.sortedPositionIds,
  };

  context.Exchange_CantDeleverageAgainstOpposingPositions.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CantLiquidatePosAboveMMR" }, async ({ event, context }) => {
  const entity: Exchange_CantLiquidatePosAboveMMR = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    posAccountId: event.params.posAccountId,
    positionType: event.params.positionType,
    markPricePNS: event.params.markPricePNS,
    liqPricePNS: event.params.liqPricePNS,
  };

  context.Exchange_CantLiquidatePosAboveMMR.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ChangeExpiredOrderNeedsNewExpiry" }, async ({ event, context }) => {
  const entity: Exchange_ChangeExpiredOrderNeedsNewExpiry = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
    accountId: event.params.accountId,
    expiryBlock: event.params.expiryBlock,
  };

  context.Exchange_ChangeExpiredOrderNeedsNewExpiry.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ClearingExpiredOrder" }, async ({ event, context }) => {
  const entity: Exchange_ClearingExpiredOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    recyclerAccountId: event.params.recyclerAccountId,
    recyclerAmountCNS: event.params.recyclerAmountCNS,
    recyclerBalanceCNS: event.params.recyclerBalanceCNS,
  };

  context.Exchange_ClearingExpiredOrder.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ClearingFrozenAccountOrder" }, async ({ event, context }) => {
  const entity: Exchange_ClearingFrozenAccountOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    recyclerAccountId: event.params.recyclerAccountId,
    recyclerAmountCNS: event.params.recyclerAmountCNS,
    recyclerBalanceCNS: event.params.recyclerBalanceCNS,
  };

  context.Exchange_ClearingFrozenAccountOrder.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ClearingInvalidCloseOrder" }, async ({ event, context }) => {
  const entity: Exchange_ClearingInvalidCloseOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    recyclerAccountId: event.params.recyclerAccountId,
    recyclerAmountCNS: event.params.recyclerAmountCNS,
    recyclerBalanceCNS: event.params.recyclerBalanceCNS,
  };

  context.Exchange_ClearingInvalidCloseOrder.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ClearingRemainingOrderLockBeyondBalance" }, async ({ event, context }) => {
  const entity: Exchange_ClearingRemainingOrderLockBeyondBalance = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    pricePNS: event.params.pricePNS,
    remainingLotLNS: event.params.remainingLotLNS,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    excessiveLockedBalCNS: event.params.excessiveLockedBalCNS,
    recyclerAccountId: event.params.recyclerAccountId,
    recyclerAmountCNS: event.params.recyclerAmountCNS,
    recyclerBalanceCNS: event.params.recyclerBalanceCNS,
  };

  context.Exchange_ClearingRemainingOrderLockBeyondBalance.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ClearingSelfMatchingOrder" }, async ({ event, context }) => {
  const entity: Exchange_ClearingSelfMatchingOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    recyclerAccountId: event.params.recyclerAccountId,
    recyclerAmountCNS: event.params.recyclerAmountCNS,
    recyclerBalanceCNS: event.params.recyclerBalanceCNS,
  };

  context.Exchange_ClearingSelfMatchingOrder.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CloseOrderExceedsPosition" }, async ({ event, context }) => {
  const entity: Exchange_CloseOrderExceedsPosition = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    posLotLNS: event.params.posLotLNS,
    orderLotLNS: event.params.orderLotLNS,
  };

  context.Exchange_CloseOrderExceedsPosition.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CloseOrderPositionMismatch" }, async ({ event, context }) => {
  const entity: Exchange_CloseOrderPositionMismatch = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    positionType: event.params.positionType,
    orderType: event.params.orderType,
  };

  context.Exchange_CloseOrderPositionMismatch.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CollateralDecreaseDeclined" }, async ({ event, context }) => {
  const entity: Exchange_CollateralDecreaseDeclined = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    reason: event.params.reason,
  };

  context.Exchange_CollateralDecreaseDeclined.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CollateralDecreaseRequestCancelled" }, async ({ event, context }) => {
  const entity: Exchange_CollateralDecreaseRequestCancelled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
  };

  context.Exchange_CollateralDecreaseRequestCancelled.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CollateralDecreaseRequestExpired" }, async ({ event, context }) => {
  const entity: Exchange_CollateralDecreaseRequestExpired = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    expiryTS: event.params.expiryTS,
    blockTS: event.params.blockTS,
  };

  context.Exchange_CollateralDecreaseRequestExpired.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CollateralDecreaseRequested" }, async ({ event, context }) => {
  const entity: Exchange_CollateralDecreaseRequested = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    expiryTS: event.params.expiryTS,
    amountCNS: event.params.amountCNS,
    clampToMaximum: event.params.clampToMaximum,
    positionType: event.params.positionType,
    entryPricePNS: event.params.entryPricePNS,
    lotLNS: event.params.lotLNS,
  };

  context.Exchange_CollateralDecreaseRequested.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CollateralDeposit" }, async ({ event, context }) => {
  const entity: Exchange_CollateralDeposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_CollateralDeposit.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CollateralWithdrawal" }, async ({ event, context }) => {
  const entity: Exchange_CollateralWithdrawal = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_CollateralWithdrawal.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ContractAdded" }, async ({ event, context }) => {
  const entity: Exchange_ContractAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    name: event.params.name,
    symbol: event.params.symbol,
    status: event.params.status,
    basePricePNS: event.params.basePricePNS,
    priceDecimals: event.params.priceDecimals,
    lotDecimals: event.params.lotDecimals,
    takerFeePer100K: event.params.takerFeePer100K,
    makerFeePer100K: event.params.makerFeePer100K,
    initMarginFracHdths: event.params.initMarginFracHdths,
    maintMarginFracHdths: event.params.maintMarginFracHdths,
    maxOpenInterestLNS: event.params.maxOpenInterestLNS,
    unityDescentThreshHdths: event.params.unityDescentThreshHdths,
    overColDescentThreshHdths: event.params.overColDescentThreshHdths,
    dcpBorrowThreshHdths: event.params.dcpBorrowThreshHdths,
    priceTolPer100K: event.params.priceTolPer100K,
    marginTol: event.params.marginTol,
    marginTolDecimals: event.params.marginTolDecimals,
    refPriceMaxAgeSec: event.params.refPriceMaxAgeSec,
    absFundingClampPctPer100K: event.params.absFundingClampPctPer100K,
    permCancelMinOrders: event.params.permCancelMinOrders,
    permCancelSegment: event.params.permCancelSegment,
    insAmtPer100K: event.params.insAmtPer100K,
    liqInsAmtPer100K: event.params.liqInsAmtPer100K,
    liqUserAmtPer100K: event.params.liqUserAmtPer100K,
    btlRestrictBuyers: event.params.btlRestrictBuyers,
    btlPriceThreshPer100K: event.params.btlPriceThreshPer100K,
    btlInsAmtPer100K: event.params.btlInsAmtPer100K,
    btlUserAmtPer100K: event.params.btlUserAmtPer100K,
    btlBuyerAmtPer100K: event.params.btlBuyerAmtPer100K,
    numPerpetuals: event.params.numPerpetuals,
  };

  context.Exchange_ContractAdded.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ContractAddedV2" }, async ({ event, context }) => {
  const entity: Exchange_ContractAddedV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    name: event.params.name,
    symbol: event.params.symbol,
    status: event.params.status,
    basePricePNS: event.params.basePricePNS,
    priceDecimals: event.params.priceDecimals,
    lotDecimals: event.params.lotDecimals,
    initMarginFracHdths: event.params.initMarginFracHdths,
    maintMarginFracHdths: event.params.maintMarginFracHdths,
    maxOpenInterestLNS: event.params.maxOpenInterestLNS,
    unityDescentThreshHdths: event.params.unityDescentThreshHdths,
    overColDescentThreshHdths: event.params.overColDescentThreshHdths,
    dcpBorrowThreshHdths: event.params.dcpBorrowThreshHdths,
    priceTolPer100K: event.params.priceTolPer100K,
    marginTol: event.params.marginTol,
    marginTolDecimals: event.params.marginTolDecimals,
    refPriceMaxAgeSec: event.params.refPriceMaxAgeSec,
    absFundingClampPctPer100K: event.params.absFundingClampPctPer100K,
    permCancelMinOrders: event.params.permCancelMinOrders,
    permCancelSegment: event.params.permCancelSegment,
    insAmtPer100K: event.params.insAmtPer100K,
    liqInsAmtPer100K: event.params.liqInsAmtPer100K,
    liqUserAmtPer100K: event.params.liqUserAmtPer100K,
    btlRestrictBuyers: event.params.btlRestrictBuyers,
    btlPriceThreshPer100K: event.params.btlPriceThreshPer100K,
    btlInsAmtPer100K: event.params.btlInsAmtPer100K,
    btlUserAmtPer100K: event.params.btlUserAmtPer100K,
    btlBuyerAmtPer100K: event.params.btlBuyerAmtPer100K,
    numPerpetuals: event.params.numPerpetuals,
    perpFeeSchedId: event.params.perpFeeSchedId,
  };

  context.Exchange_ContractAddedV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ContractLinkFeedUpdated" }, async ({ event, context }) => {
  const entity: Exchange_ContractLinkFeedUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    feedId: event.params.feedId,
  };

  context.Exchange_ContractLinkFeedUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ContractNotOperational" }, async ({ event, context }) => {
  const entity: Exchange_ContractNotOperational = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    status: event.params.status,
  };

  context.Exchange_ContractNotOperational.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ContractPaused" }, async ({ event, context }) => {
  const entity: Exchange_ContractPaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    paused: event.params.paused,
  };

  context.Exchange_ContractPaused.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ContractRemoved" }, async ({ event, context }) => {
  const entity: Exchange_ContractRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_ContractRemoved.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ContractVersionSet" }, async ({ event, context }) => {
  const entity: Exchange_ContractVersionSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    major: event.params.major,
    minor: event.params.minor,
    patch: event.params.patch,
  };

  context.Exchange_ContractVersionSet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "CrossesBook" }, async ({ event, context }) => {
  const entity: Exchange_CrossesBook = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minAskOrMaxBidPNS: event.params.minAskOrMaxBidPNS,
    maxOrdersChecked: event.params.maxOrdersChecked,
  };

  context.Exchange_CrossesBook.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "DcpBorrowThreshUpdated" }, async ({ event, context }) => {
  const entity: Exchange_DcpBorrowThreshUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    threshHdths: event.params.threshHdths,
  };

  context.Exchange_DcpBorrowThreshUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "DecreaseCollateralBeyondMarkPrice" }, async ({ event, context }) => {
  const entity: Exchange_DecreaseCollateralBeyondMarkPrice = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    impactAdjPricePNS: event.params.impactAdjPricePNS,
    markPricePNS: event.params.markPricePNS,
  };

  context.Exchange_DecreaseCollateralBeyondMarkPrice.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "DefaultPerpFeeScheduleSet" }, async ({ event, context }) => {
  const entity: Exchange_DefaultPerpFeeScheduleSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeSchedId: event.params.feeSchedId,
    takerFeesPer100K: event.params.takerFeesPer100K,
    makerFeesPer100K: event.params.makerFeesPer100K,
  };

  context.Exchange_DefaultPerpFeeScheduleSet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "DefaultRwaFeeScheduleSet" }, async ({ event, context }) => {
  const entity: Exchange_DefaultRwaFeeScheduleSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeSchedId: event.params.feeSchedId,
    takerFeesPer100K: event.params.takerFeesPer100K,
    makerFeesPer100K: event.params.makerFeesPer100K,
  };

  context.Exchange_DefaultRwaFeeScheduleSet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "DeleveragePositionListEmpty" }, async ({ event, context }) => {
  const entity: Exchange_DeleveragePositionListEmpty = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
  };

  context.Exchange_DeleveragePositionListEmpty.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ExceedsLastExecutionBlock" }, async ({ event, context }) => {
  const entity: Exchange_ExceedsLastExecutionBlock = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lastExecutionBlock: event.params.lastExecutionBlock,
  };

  context.Exchange_ExceedsLastExecutionBlock.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ExchangeHalted" }, async ({ event, context }) => {
  const entity: Exchange_ExchangeHalted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    halted: event.params.halted,
  };

  context.Exchange_ExchangeHalted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ExchangeInitialized" }, async ({ event, context }) => {
  const entity: Exchange_ExchangeInitialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    collateralToken: event.params.collateralToken,
    collateralDecimals: event.params.collateralDecimals,
    minAccountOpenCNS: event.params.minAccountOpenCNS,
    wrlsThousandthsTvl: event.params.wrlsThousandthsTvl,
    wrlsMinWithdrawLimitCNS: event.params.wrlsMinWithdrawLimitCNS,
    recycleFeeCNS: event.params.recycleFeeCNS,
    whitelistingEnabled: event.params.whitelistingEnabled,
  };

  context.Exchange_ExchangeInitialized.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FeeParamsUpdated" }, async ({ event, context }) => {
  const entity: Exchange_FeeParamsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    insAmtPer100K: event.params.insAmtPer100K,
  };

  context.Exchange_FeeParamsUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FeeScheduleMigrated" }, async ({ event, context }) => {
  const entity: Exchange_FeeScheduleMigrated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeSchedId: event.params.feeSchedId,
    oldTakerFees: event.params.oldTakerFees,
    oldMakerFees: event.params.oldMakerFees,
    newTakerFees: event.params.newTakerFees,
    newMakerFees: event.params.newMakerFees,
  };

  context.Exchange_FeeScheduleMigrated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FeeScheduleSet" }, async ({ event, context }) => {
  const entity: Exchange_FeeScheduleSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeSchedId: event.params.feeSchedId,
    takerFeesPer100K: event.params.takerFeesPer100K,
    makerFeesPer100K: event.params.makerFeesPer100K,
  };

  context.Exchange_FeeScheduleSet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FeeUnitRedenominated" }, async ({ event, context }) => {
  const entity: Exchange_FeeUnitRedenominated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldDenominator: event.params.oldDenominator,
    newDenominator: event.params.newDenominator,
    unitScale: event.params.unitScale,
    rateDiv: event.params.rateDiv,
    migratedScheduleCount: event.params.migratedScheduleCount,
  };

  context.Exchange_FeeUnitRedenominated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FundingClampPctUpdated" }, async ({ event, context }) => {
  const entity: Exchange_FundingClampPctUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    clampPctPer100k: event.params.clampPctPer100k,
  };

  context.Exchange_FundingClampPctUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FundingEventCompleted" }, async ({ event, context }) => {
  const entity: Exchange_FundingEventCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    fundingEventBlock: event.params.fundingEventBlock,
    specifiedRatePct100k: event.params.specifiedRatePct100k,
    actualRatePct100k: event.params.actualRatePct100k,
    fundingPricePNS: event.params.fundingPricePNS,
    fundingPaymentPNS: event.params.fundingPaymentPNS,
    fundingSumPNS: event.params.fundingSumPNS,
    allowOverwrite: event.params.allowOverwrite,
  };

  context.Exchange_FundingEventCompleted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FundingEventSetTooEarly" }, async ({ event, context }) => {
  const entity: Exchange_FundingEventSetTooEarly = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    blockNumber: event.params.blockNumber,
    fundingEventBlock: event.params.fundingEventBlock,
  };

  context.Exchange_FundingEventSetTooEarly.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FundingPriceExceedsTol" }, async ({ event, context }) => {
  const entity: Exchange_FundingPriceExceedsTol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    fundingPricePNS: event.params.fundingPricePNS,
    oraclePNS: event.params.oraclePNS,
    tolerancePer100k: event.params.tolerancePer100k,
  };

  context.Exchange_FundingPriceExceedsTol.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FundingSumAlreadySet" }, async ({ event, context }) => {
  const entity: Exchange_FundingSumAlreadySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    fundingEventBlock: event.params.fundingEventBlock,
    storageIndex: event.params.storageIndex,
    fundingSumOffset: event.params.fundingSumOffset,
  };

  context.Exchange_FundingSumAlreadySet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "FundingSumScalingExpUpdated" }, async ({ event, context }) => {
  const entity: Exchange_FundingSumScalingExpUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    newExp: event.params.newExp,
  };

  context.Exchange_FundingSumScalingExpUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "IgnoreOracleUpdated" }, async ({ event, context }) => {
  const entity: Exchange_IgnoreOracleUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    ignOracle: event.params.ignOracle,
  };

  context.Exchange_IgnoreOracleUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ImmediateOrCancelExecuted" }, async ({ event, context }) => {
  const entity: Exchange_ImmediateOrCancelExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    unmatchedLotLNS: event.params.unmatchedLotLNS,
    totalLotLNS: event.params.totalLotLNS,
  };

  context.Exchange_ImmediateOrCancelExecuted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "IncreasePositionCollateral" }, async ({ event, context }) => {
  const entity: Exchange_IncreasePositionCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionDepositCNS: event.params.positionDepositCNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_IncreasePositionCollateral.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InitialMarginFractionUpdated" }, async ({ event, context }) => {
  const entity: Exchange_InitialMarginFractionUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    initMarginFracHdths: event.params.initMarginFracHdths,
  };

  context.Exchange_InitialMarginFractionUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "Initialized" }, async ({ event, context }) => {
  const entity: Exchange_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Exchange_Initialized.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InsolventPositionCannotBeForcedClose" }, async ({ event, context }) => {
  const entity: Exchange_InsolventPositionCannotBeForcedClose = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    posAccountId: event.params.posAccountId,
    positionType: event.params.positionType,
    bankruptcyPricePNS: event.params.bankruptcyPricePNS,
    markPricePNS: event.params.markPricePNS,
  };

  context.Exchange_InsolventPositionCannotBeForcedClose.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InsufficientFundsToDecCollateral" }, async ({ event, context }) => {
  const entity: Exchange_InsufficientFundsToDecCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    amountCNS: event.params.amountCNS,
    withdrawMaxCNS: event.params.withdrawMaxCNS,
  };

  context.Exchange_InsufficientFundsToDecCollateral.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InsuficientFundsForRecycleFee" }, async ({ event, context }) => {
  const entity: Exchange_InsuficientFundsForRecycleFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    balanceCNS: event.params.balanceCNS,
    lockedCNS: event.params.lockedCNS,
    recycleFeeCNS: event.params.recycleFeeCNS,
  };

  context.Exchange_InsuficientFundsForRecycleFee.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InsurancePaymentForSettlement" }, async ({ event, context }) => {
  const entity: Exchange_InsurancePaymentForSettlement = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    insPaymentCNS: event.params.insPaymentCNS,
  };

  context.Exchange_InsurancePaymentForSettlement.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InvalidAccountFrozenOrder" }, async ({ event, context }) => {
  const entity: Exchange_InvalidAccountFrozenOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderType: event.params.orderType,
    immediateOrCancel: event.params.immediateOrCancel,
  };

  context.Exchange_InvalidAccountFrozenOrder.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InvalidBankruptcyPrice" }, async ({ event, context }) => {
  const entity: Exchange_InvalidBankruptcyPrice = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    depositCNS: event.params.depositCNS,
    posPricePNS: event.params.posPricePNS,
    liqLotLNS: event.params.liqLotLNS,
    premiumPnlCNS: event.params.premiumPnlCNS,
  };

  context.Exchange_InvalidBankruptcyPrice.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InvalidExpiryBlock" }, async ({ event, context }) => {
  const entity: Exchange_InvalidExpiryBlock = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    expiryBlock: event.params.expiryBlock,
    blockNumber: event.params.blockNumber,
  };

  context.Exchange_InvalidExpiryBlock.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InvalidLinkReportForContract" }, async ({ event, context }) => {
  const entity: Exchange_InvalidLinkReportForContract = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    perpFeedId: event.params.perpFeedId,
    reportFeedId: event.params.reportFeedId,
  };

  context.Exchange_InvalidLinkReportForContract.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InvalidLinkReportVersion" }, async ({ event, context }) => {
  const entity: Exchange_InvalidLinkReportVersion = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    reportVersion: event.params.reportVersion,
  };

  context.Exchange_InvalidLinkReportVersion.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InvalidLiquidationPrice" }, async ({ event, context }) => {
  const entity: Exchange_InvalidLiquidationPrice = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    depositCNS: event.params.depositCNS,
    posPricePNS: event.params.posPricePNS,
    liqLotLNS: event.params.liqLotLNS,
    premiumPnlCNS: event.params.premiumPnlCNS,
  };

  context.Exchange_InvalidLiquidationPrice.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "InvalidOrderId" }, async ({ event, context }) => {
  const entity: Exchange_InvalidOrderId = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    min: event.params.min,
    max: event.params.max,
  };

  context.Exchange_InvalidOrderId.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LastForwardedDescIdReset" }, async ({ event, context }) => {
  const entity: Exchange_LastForwardedDescIdReset = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    newDescId: event.params.newDescId,
  };

  context.Exchange_LastForwardedDescIdReset.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LastTriggeredDescIdReset" }, async ({ event, context }) => {
  const entity: Exchange_LastTriggeredDescIdReset = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    newDescId: event.params.newDescId,
  };

  context.Exchange_LastTriggeredDescIdReset.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LinkDatastreamConfigured" }, async ({ event, context }) => {
  const entity: Exchange_LinkDatastreamConfigured = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    verifierProxy: event.params.verifierProxy,
  };

  context.Exchange_LinkDatastreamConfigured.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LinkDsError" }, async ({ event, context }) => {
  const entity: Exchange_LinkDsError = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    reason: event.params.reason,
  };

  context.Exchange_LinkDsError.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LinkDsPanic" }, async ({ event, context }) => {
  const entity: Exchange_LinkDsPanic = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    errorCode: event.params.errorCode,
  };

  context.Exchange_LinkDsPanic.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LinkPriceUpdated" }, async ({ event, context }) => {
  const entity: Exchange_LinkPriceUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    oraclePricePNS: event.params.oraclePricePNS,
    timestamp: event.params.timestamp,
  };

  context.Exchange_LinkPriceUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LiquidationBuyerUpdated" }, async ({ event, context }) => {
  const entity: Exchange_LiquidationBuyerUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    liquidationBuyer: event.params.liquidationBuyer,
    accountId: event.params.accountId,
    added: event.params.added,
  };

  context.Exchange_LiquidationBuyerUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LiquidationParamsUpdated" }, async ({ event, context }) => {
  const entity: Exchange_LiquidationParamsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    insAmtPer100K: event.params.insAmtPer100K,
    liqAmtPer100K: event.params.liqAmtPer100K,
    userAmtPer100K: event.params.userAmtPer100K,
  };

  context.Exchange_LiquidationParamsUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "LotOutOfRange" }, async ({ event, context }) => {
  const entity: Exchange_LotOutOfRange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minLotLNS: event.params.minLotLNS,
    maxLotLNS: event.params.maxLotLNS,
  };

  context.Exchange_LotOutOfRange.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MaintenanceMarginFractionUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MaintenanceMarginFractionUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    maintMarginFracHdths: event.params.maintMarginFracHdths,
  };

  context.Exchange_MaintenanceMarginFractionUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MakerFeeUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MakerFeeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    makerFeePer100K: event.params.makerFeePer100K,
  };

  context.Exchange_MakerFeeUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MakerOrderFilled" }, async ({ event, context }) => {
  const entity: Exchange_MakerOrderFilled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    feeCNS: event.params.feeCNS,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_MakerOrderFilled.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MakerOrderFilledV2" }, async ({ event, context }) => {
  const entity: Exchange_MakerOrderFilledV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    feeCNS: event.params.feeCNS,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
    builderId: event.params.builderId,
    builderFeeCNS: event.params.builderFeeCNS,
  };

  context.Exchange_MakerOrderFilledV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MakerOrderSettlementFailed" }, async ({ event, context }) => {
  const entity: Exchange_MakerOrderSettlementFailed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    orderType: event.params.orderType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    maxNegPnlCollatBPS: event.params.maxNegPnlCollatBPS,
    reason: event.params.reason,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    recyclerAccountId: event.params.recyclerAccountId,
    recyclerAmountCNS: event.params.recyclerAmountCNS,
    recyclerBalanceCNS: event.params.recyclerBalanceCNS,
  };

  context.Exchange_MakerOrderSettlementFailed.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MarginTolUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MarginTolUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    tolerance: event.params.tolerance,
    decimals: event.params.decimals,
  };

  context.Exchange_MarginTolUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MarkExceedsTol" }, async ({ event, context }) => {
  const entity: Exchange_MarkExceedsTol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    markPNS: event.params.markPNS,
    spotOraclePricePNS: event.params.spotOraclePricePNS,
    tolerancePer100k: event.params.tolerancePer100k,
  };

  context.Exchange_MarkExceedsTol.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MarkPriceAgeExceedsMax" }, async ({ event, context }) => {
  const entity: Exchange_MarkPriceAgeExceedsMax = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    markTimestamp: event.params.markTimestamp,
    timestamp: event.params.timestamp,
    maxAgeSec: event.params.maxAgeSec,
  };

  context.Exchange_MarkPriceAgeExceedsMax.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MarkUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MarkUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    pricePNS: event.params.pricePNS,
  };

  context.Exchange_MarkUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MaxMatchesReached" }, async ({ event, context }) => {
  const entity: Exchange_MaxMatchesReached = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Exchange_MaxMatchesReached.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MaxOpenInterestUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MaxOpenInterestUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    maxOpenInterestLNS: event.params.maxOpenInterestLNS,
  };

  context.Exchange_MaxOpenInterestUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MaximumAccountOrders" }, async ({ event, context }) => {
  const entity: Exchange_MaximumAccountOrders = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
  };

  context.Exchange_MaximumAccountOrders.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MinAccountOpenAmountUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MinAccountOpenAmountUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minAccountOpenCNS: event.params.minAccountOpenCNS,
  };

  context.Exchange_MinAccountOpenAmountUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MinPostUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MinPostUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minPostCNS: event.params.minPostCNS,
  };

  context.Exchange_MinPostUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MinSettleUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MinSettleUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minSettleCNS: event.params.minSettleCNS,
  };

  context.Exchange_MinSettleUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MonitorAdministratorUpdated" }, async ({ event, context }) => {
  const entity: Exchange_MonitorAdministratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    monitorAdministrator: event.params.monitorAdministrator,
    added: event.params.added,
  };

  context.Exchange_MonitorAdministratorUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "MonitorPauseAttempted" }, async ({ event, context }) => {
  const entity: Exchange_MonitorPauseAttempted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    actualStatus: event.params.actualStatus,
    transitioned: event.params.transitioned,
  };

  context.Exchange_MonitorPauseAttempted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OracleAgeExceedsMax" }, async ({ event, context }) => {
  const entity: Exchange_OracleAgeExceedsMax = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    oracleTimestamp: event.params.oracleTimestamp,
    timestamp: event.params.timestamp,
    maxAgeSec: event.params.maxAgeSec,
  };

  context.Exchange_OracleAgeExceedsMax.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OracleDisabled" }, async ({ event, context }) => {
  const entity: Exchange_OracleDisabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_OracleDisabled.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderBatchCompleted" }, async ({ event, context }) => {
  const entity: Exchange_OrderBatchCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gasLeft: event.params.gasLeft,
  };

  context.Exchange_OrderBatchCompleted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderCancelled" }, async ({ event, context }) => {
  const entity: Exchange_OrderCancelled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_OrderCancelled.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderCancelledByAdmin" }, async ({ event, context }) => {
  const entity: Exchange_OrderCancelledByAdmin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
  };

  context.Exchange_OrderCancelledByAdmin.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderCancelledByLiquidator" }, async ({ event, context }) => {
  const entity: Exchange_OrderCancelledByLiquidator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderId: event.params.orderId,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
  };

  context.Exchange_OrderCancelledByLiquidator.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderChanged" }, async ({ event, context }) => {
  const entity: Exchange_OrderChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    expiryBlock: event.params.expiryBlock,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_OrderChanged.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderDescIdTooLow" }, async ({ event, context }) => {
  const entity: Exchange_OrderDescIdTooLow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lastOrderDescId: event.params.lastOrderDescId,
  };

  context.Exchange_OrderDescIdTooLow.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderDoesNotExist" }, async ({ event, context }) => {
  const entity: Exchange_OrderDoesNotExist = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
  };

  context.Exchange_OrderDoesNotExist.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderExtensionRejected" }, async ({ event, context }) => {
  const entity: Exchange_OrderExtensionRejected = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
  };

  context.Exchange_OrderExtensionRejected.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderForwardingNotAllowed" }, async ({ event, context }) => {
  const entity: Exchange_OrderForwardingNotAllowed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Exchange_OrderForwardingNotAllowed.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderForwardingUpdated" }, async ({ event, context }) => {
  const entity: Exchange_OrderForwardingUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    allowed: event.params.allowed,
  };

  context.Exchange_OrderForwardingUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderPlaced" }, async ({ event, context }) => {
  const entity: Exchange_OrderPlaced = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    lotLNS: event.params.lotLNS,
    lockedBalanceCNS: event.params.lockedBalanceCNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_OrderPlaced.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderPostFailed" }, async ({ event, context }) => {
  const entity: Exchange_OrderPostFailed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reason: event.params.reason,
  };

  context.Exchange_OrderPostFailed.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderRequest" }, async ({ event, context }) => {
  const entity: Exchange_OrderRequest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderDescId: event.params.orderDescId,
    orderId: event.params.orderId,
    orderType: event.params.orderType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    expiryBlock: event.params.expiryBlock,
    postOnly: event.params.postOnly,
    fillOrKill: event.params.fillOrKill,
    immediateOrCancel: event.params.immediateOrCancel,
    maxMatches: event.params.maxMatches,
    leverageHdths: event.params.leverageHdths,
    lastExecutionBlock: event.params.lastExecutionBlock,
    amountCNS: event.params.amountCNS,
    maxNegPnlCollatBPS: event.params.maxNegPnlCollatBPS,
    gasLeft: event.params.gasLeft,
  };

  context.Exchange_OrderRequest.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderRequestV2" }, async ({ event, context }) => {
  const entity: Exchange_OrderRequestV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderDescId: event.params.orderDescId,
    orderId: event.params.orderId,
    orderType: event.params.orderType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    expiryBlock: event.params.expiryBlock,
    postOnly: event.params.postOnly,
    fillOrKill: event.params.fillOrKill,
    immediateOrCancel: event.params.immediateOrCancel,
    maxMatches: event.params.maxMatches,
    leverageHdths: event.params.leverageHdths,
    lastExecutionBlock: event.params.lastExecutionBlock,
    amountCNS: event.params.amountCNS,
    maxNegPnlCollatBPS: event.params.maxNegPnlCollatBPS,
    gasLeft: event.params.gasLeft,
    extension: event.params.extension,
  };

  context.Exchange_OrderRequestV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderSettlementImpliesInsolvent" }, async ({ event, context }) => {
  const entity: Exchange_OrderSettlementImpliesInsolvent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    orderType: event.params.orderType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    perpPositionBalCNS: event.params.perpPositionBalCNS,
    perpInsuranceBalCNS: event.params.perpInsuranceBalCNS,
    addedPosCollatReqCNS: event.params.addedPosCollatReqCNS,
    requestedAmountCNS: event.params.requestedAmountCNS,
  };

  context.Exchange_OrderSettlementImpliesInsolvent.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OrderSizeExceedsAvailableSize" }, async ({ event, context }) => {
  const entity: Exchange_OrderSizeExceedsAvailableSize = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderLotLNS: event.params.orderLotLNS,
    availableLotLNS: event.params.availableLotLNS,
    positionLotLNS: event.params.positionLotLNS,
  };

  context.Exchange_OrderSizeExceedsAvailableSize.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OverCollatDescentThreshUpdated" }, async ({ event, context }) => {
  const entity: Exchange_OverCollatDescentThreshUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    threshHdths: event.params.threshHdths,
  };

  context.Exchange_OverCollatDescentThreshUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OwnershipTransferStarted" }, async ({ event, context }) => {
  const entity: Exchange_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Exchange_OwnershipTransferStarted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "OwnershipTransferred" }, async ({ event, context }) => {
  const entity: Exchange_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Exchange_OwnershipTransferred.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PermissonedCancelParamsUpdated" }, async ({ event, context }) => {
  const entity: Exchange_PermissonedCancelParamsUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    cancelMinOrders: event.params.cancelMinOrders,
    cancelSegment: event.params.cancelSegment,
  };

  context.Exchange_PermissonedCancelParamsUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PerpFeeSchedIdSet" }, async ({ event, context }) => {
  const entity: Exchange_PerpFeeSchedIdSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    feeSchedId: event.params.feeSchedId,
  };

  context.Exchange_PerpFeeSchedIdSet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PerpPositionBalCreditPositiveSevere" }, async ({ event, context }) => {
  const entity: Exchange_PerpPositionBalCreditPositiveSevere = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    realizedPricePNS: event.params.realizedPricePNS,
    lotLNS: event.params.lotLNS,
    userProceedsToPosition: event.params.userProceedsToPosition,
    buyToLiquidate: event.params.buyToLiquidate,
    creditPerpBalCNS: event.params.creditPerpBalCNS,
  };

  context.Exchange_PerpPositionBalCreditPositiveSevere.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionAdministratorUpdated" }, async ({ event, context }) => {
  const entity: Exchange_PositionAdministratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    positionAdministrator: event.params.positionAdministrator,
    added: event.params.added,
  };

  context.Exchange_PositionAdministratorUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionClosed" }, async ({ event, context }) => {
  const entity: Exchange_PositionClosed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    pricePNS: event.params.pricePNS,
    deltaPnlCNS: event.params.deltaPnlCNS,
    fundingCNS: event.params.fundingCNS,
  };

  context.Exchange_PositionClosed.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionCollateralDecreased" }, async ({ event, context }) => {
  const entity: Exchange_PositionCollateralDecreased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    markPricePNS: event.params.markPricePNS,
    impactAdjPricePNS: event.params.impactAdjPricePNS,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
    startEntryPricePNS: event.params.startEntryPricePNS,
    endEntryPricePNS: event.params.endEntryPricePNS,
    effBmfHdths: event.params.effBmfHdths,
    decreaseCNS: event.params.decreaseCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_PositionCollateralDecreased.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionDecreased" }, async ({ event, context }) => {
  const entity: Exchange_PositionDecreased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
    startLotLNS: event.params.startLotLNS,
    endLotLNS: event.params.endLotLNS,
    deltaPnlCNS: event.params.deltaPnlCNS,
    fundingCNS: event.params.fundingCNS,
  };

  context.Exchange_PositionDecreased.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionDeleveraged" }, async ({ event, context }) => {
  const entity: Exchange_PositionDeleveraged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    forceClose: event.params.forceClose,
    positionType: event.params.positionType,
    entryPricePNS: event.params.entryPricePNS,
    markPricePNS: event.params.markPricePNS,
    deleveragePricePNS: event.params.deleveragePricePNS,
    deltaPnlCNS: event.params.deltaPnlCNS,
    fundingCNS: event.params.fundingCNS,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
    startLotLNS: event.params.startLotLNS,
    endLotLNS: event.params.endLotLNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_PositionDeleveraged.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionDeleveragedV2" }, async ({ event, context }) => {
  const entity: Exchange_PositionDeleveragedV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    forceClose: event.params.forceClose,
    positionType: event.params.positionType,
    entryPricePNS: event.params.entryPricePNS,
    markPricePNS: event.params.markPricePNS,
    deleveragePricePNS: event.params.deleveragePricePNS,
    deltaPnlCNS: event.params.deltaPnlCNS,
    fundingCNS: event.params.fundingCNS,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
    startLotLNS: event.params.startLotLNS,
    endLotLNS: event.params.endLotLNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
    priceResiduePNSQ16: event.params.priceResiduePNSQ16,
  };

  context.Exchange_PositionDeleveragedV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionDoesNotExist" }, async ({ event, context }) => {
  const entity: Exchange_PositionDoesNotExist = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
  };

  context.Exchange_PositionDoesNotExist.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionIncreased" }, async ({ event, context }) => {
  const entity: Exchange_PositionIncreased = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    leverageHdths: event.params.leverageHdths,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
    pnlCollateralizedCNS: event.params.pnlCollateralizedCNS,
    premiumPnlSettledCNS: event.params.premiumPnlSettledCNS,
    maxNegPnlCollatBPS: event.params.maxNegPnlCollatBPS,
    pricePNS: event.params.pricePNS,
    startLotLNS: event.params.startLotLNS,
    endLotLNS: event.params.endLotLNS,
    insFeeCNS: event.params.insFeeCNS,
    protFeeCNS: event.params.protFeeCNS,
  };

  context.Exchange_PositionIncreased.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionIncreasedV2" }, async ({ event, context }) => {
  const entity: Exchange_PositionIncreasedV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    leverageHdths: event.params.leverageHdths,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
    pnlCollateralizedCNS: event.params.pnlCollateralizedCNS,
    premiumPnlSettledCNS: event.params.premiumPnlSettledCNS,
    maxNegPnlCollatBPS: event.params.maxNegPnlCollatBPS,
    pricePNS: event.params.pricePNS,
    startLotLNS: event.params.startLotLNS,
    endLotLNS: event.params.endLotLNS,
    insFeeCNS: event.params.insFeeCNS,
    protFeeCNS: event.params.protFeeCNS,
    priceResiduePNSQ16: event.params.priceResiduePNSQ16,
  };

  context.Exchange_PositionIncreasedV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionInverted" }, async ({ event, context }) => {
  const entity: Exchange_PositionInverted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    leverageHdths: event.params.leverageHdths,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
    pnlCollateralizedCNS: event.params.pnlCollateralizedCNS,
    pricePNS: event.params.pricePNS,
    startLotLNS: event.params.startLotLNS,
    endLotLNS: event.params.endLotLNS,
    deltaPnlCNS: event.params.deltaPnlCNS,
    fundingCNS: event.params.fundingCNS,
    insFeeCNS: event.params.insFeeCNS,
    protFeeCNS: event.params.protFeeCNS,
  };

  context.Exchange_PositionInverted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionLiquidated" }, async ({ event, context }) => {
  const entity: Exchange_PositionLiquidated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    posAccountId: event.params.posAccountId,
    positionType: event.params.positionType,
    markPricePNS: event.params.markPricePNS,
    liqPricePNS: event.params.liqPricePNS,
    liqLotLNS: event.params.liqLotLNS,
    posLotLNS: event.params.posLotLNS,
    deltaPnlCNS: event.params.deltaPnlCNS,
    fundingCNS: event.params.fundingCNS,
    posAmountCNS: event.params.posAmountCNS,
    posDepositCNS: event.params.posDepositCNS,
    accAmountCNS: event.params.accAmountCNS,
    accBalanceCNS: event.params.accBalanceCNS,
    onOrderBook: event.params.onOrderBook,
  };

  context.Exchange_PositionLiquidated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionLiquidationCredit" }, async ({ event, context }) => {
  const entity: Exchange_PositionLiquidationCredit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    startDepositCNS: event.params.startDepositCNS,
    endDepositCNS: event.params.endDepositCNS,
  };

  context.Exchange_PositionLiquidationCredit.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionOpened" }, async ({ event, context }) => {
  const entity: Exchange_PositionOpened = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    leverageHdths: event.params.leverageHdths,
    depositCNS: event.params.depositCNS,
    pnlCollateralizedCNS: event.params.pnlCollateralizedCNS,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    insFeeCNS: event.params.insFeeCNS,
    protFeeCNS: event.params.protFeeCNS,
  };

  context.Exchange_PositionOpened.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionOpenedV2" }, async ({ event, context }) => {
  const entity: Exchange_PositionOpenedV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    positionType: event.params.positionType,
    leverageHdths: event.params.leverageHdths,
    depositCNS: event.params.depositCNS,
    pnlCollateralizedCNS: event.params.pnlCollateralizedCNS,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    insFeeCNS: event.params.insFeeCNS,
    protFeeCNS: event.params.protFeeCNS,
    priceResiduePNSQ16: event.params.priceResiduePNSQ16,
  };

  context.Exchange_PositionOpenedV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionUnwound" }, async ({ event, context }) => {
  const entity: Exchange_PositionUnwound = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    markPricePNS: event.params.markPricePNS,
    positionType: event.params.positionType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    depositCNS: event.params.depositCNS,
    positionFmvCNS: event.params.positionFmvCNS,
    paymentCNS: event.params.paymentCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_PositionUnwound.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionUnwoundV2" }, async ({ event, context }) => {
  const entity: Exchange_PositionUnwoundV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    markPricePNS: event.params.markPricePNS,
    positionType: event.params.positionType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    depositCNS: event.params.depositCNS,
    positionFmvCNS: event.params.positionFmvCNS,
    paymentCNS: event.params.paymentCNS,
    balanceCNS: event.params.balanceCNS,
    priceResiduePNSQ16: event.params.priceResiduePNSQ16,
  };

  context.Exchange_PositionUnwoundV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionUnwoundWithoutPayment" }, async ({ event, context }) => {
  const entity: Exchange_PositionUnwoundWithoutPayment = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    markPricePNS: event.params.markPricePNS,
    positionType: event.params.positionType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    depositCNS: event.params.depositCNS,
    positionFmvCNS: event.params.positionFmvCNS,
    amountOwedCNS: event.params.amountOwedCNS,
  };

  context.Exchange_PositionUnwoundWithoutPayment.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PositionUnwoundWithoutPaymentV2" }, async ({ event, context }) => {
  const entity: Exchange_PositionUnwoundWithoutPaymentV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    markPricePNS: event.params.markPricePNS,
    positionType: event.params.positionType,
    pricePNS: event.params.pricePNS,
    lotLNS: event.params.lotLNS,
    depositCNS: event.params.depositCNS,
    positionFmvCNS: event.params.positionFmvCNS,
    amountOwedCNS: event.params.amountOwedCNS,
    priceResiduePNSQ16: event.params.priceResiduePNSQ16,
  };

  context.Exchange_PositionUnwoundWithoutPaymentV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PostOrderUnderMinimum" }, async ({ event, context }) => {
  const entity: Exchange_PostOrderUnderMinimum = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderAmountCNS: event.params.orderAmountCNS,
    minAmountCNS: event.params.minAmountCNS,
  };

  context.Exchange_PostOrderUnderMinimum.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PriceAdministratorUpdated" }, async ({ event, context }) => {
  const entity: Exchange_PriceAdministratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    priceAdministrator: event.params.priceAdministrator,
    added: event.params.added,
  };

  context.Exchange_PriceAdministratorUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PriceMaxAgeUpdated" }, async ({ event, context }) => {
  const entity: Exchange_PriceMaxAgeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    maxAgeSec: event.params.maxAgeSec,
  };

  context.Exchange_PriceMaxAgeUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PriceOutOfRange" }, async ({ event, context }) => {
  const entity: Exchange_PriceOutOfRange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minPricePNS: event.params.minPricePNS,
    maxPricePNS: event.params.maxPricePNS,
  };

  context.Exchange_PriceOutOfRange.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PriceSetDuringTriggerExec" }, async ({ event, context }) => {
  const entity: Exchange_PriceSetDuringTriggerExec = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    triggerPricePNS: event.params.triggerPricePNS,
  };

  context.Exchange_PriceSetDuringTriggerExec.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "PriceTolUpdated" }, async ({ event, context }) => {
  const entity: Exchange_PriceTolUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    tolPer100k: event.params.tolPer100k,
  };

  context.Exchange_PriceTolUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ProtocolBalanceDeposit" }, async ({ event, context }) => {
  const entity: Exchange_ProtocolBalanceDeposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amountCNS: event.params.amountCNS,
  };

  context.Exchange_ProtocolBalanceDeposit.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ProtocolBalanceWithdraw" }, async ({ event, context }) => {
  const entity: Exchange_ProtocolBalanceWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amountCNS: event.params.amountCNS,
  };

  context.Exchange_ProtocolBalanceWithdraw.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "RecycleBalanceInsufficientSevere" }, async ({ event, context }) => {
  const entity: Exchange_RecycleBalanceInsufficientSevere = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
    recycleFeeCNS: event.params.recycleFeeCNS,
    recycleBalanceCNS: event.params.recycleBalanceCNS,
  };

  context.Exchange_RecycleBalanceInsufficientSevere.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "RecycleFeeToAccount" }, async ({ event, context }) => {
  const entity: Exchange_RecycleFeeToAccount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
    recycleFeeCNS: event.params.recycleFeeCNS,
    recycleBalanceCNS: event.params.recycleBalanceCNS,
  };

  context.Exchange_RecycleFeeToAccount.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "RecycleFeeToProtocol" }, async ({ event, context }) => {
  const entity: Exchange_RecycleFeeToProtocol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
    recycleFeeCNS: event.params.recycleFeeCNS,
    recycleBalanceCNS: event.params.recycleBalanceCNS,
  };

  context.Exchange_RecycleFeeToProtocol.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "RecycleFeeUpdated" }, async ({ event, context }) => {
  const entity: Exchange_RecycleFeeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recycleFeeCNS: event.params.recycleFeeCNS,
  };

  context.Exchange_RecycleFeeUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ReportAgeExceedsLastUpdate" }, async ({ event, context }) => {
  const entity: Exchange_ReportAgeExceedsLastUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    lastUpdateTimestamp: event.params.lastUpdateTimestamp,
    reportValidFromTimestamp: event.params.reportValidFromTimestamp,
  };

  context.Exchange_ReportAgeExceedsLastUpdate.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ReportExpiresTooSoon" }, async ({ event, context }) => {
  const entity: Exchange_ReportExpiresTooSoon = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    expiresAt: event.params.expiresAt,
    minRequired: event.params.minRequired,
  };

  context.Exchange_ReportExpiresTooSoon.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ReportFromFuture" }, async ({ event, context }) => {
  const entity: Exchange_ReportFromFuture = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    reportTimestamp: event.params.reportTimestamp,
    blockTimestamp: event.params.blockTimestamp,
  };

  context.Exchange_ReportFromFuture.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ReportPriceIsNegative" }, async ({ event, context }) => {
  const entity: Exchange_ReportPriceIsNegative = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    reportPrice: event.params.reportPrice,
  };

  context.Exchange_ReportPriceIsNegative.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ResidueBalanceInsufficient" }, async ({ event, context }) => {
  const entity: Exchange_ResidueBalanceInsufficient = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    requestedAmountCNS: event.params.requestedAmountCNS,
    positionBalanceCNS: event.params.positionBalanceCNS,
  };

  context.Exchange_ResidueBalanceInsufficient.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ResidueTransferred" }, async ({ event, context }) => {
  const entity: Exchange_ResidueTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    residueAmountCNS: event.params.residueAmountCNS,
    positionBalanceCNS: event.params.positionBalanceCNS,
  };

  context.Exchange_ResidueTransferred.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TakerFeeUpdated" }, async ({ event, context }) => {
  const entity: Exchange_TakerFeeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    takerFeePer100K: event.params.takerFeePer100K,
  };

  context.Exchange_TakerFeeUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TakerOrderFilled" }, async ({ event, context }) => {
  const entity: Exchange_TakerOrderFilled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    entryPricePNS: event.params.entryPricePNS,
    collatPricePNS: event.params.collatPricePNS,
    pnlPricePNS: event.params.pnlPricePNS,
    lotLNS: event.params.lotLNS,
    feeCNS: event.params.feeCNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_TakerOrderFilled.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TakerOrderFilledV2" }, async ({ event, context }) => {
  const entity: Exchange_TakerOrderFilledV2 = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    entryPricePNS: event.params.entryPricePNS,
    collatPricePNS: event.params.collatPricePNS,
    pnlPricePNS: event.params.pnlPricePNS,
    lotLNS: event.params.lotLNS,
    feeCNS: event.params.feeCNS,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
    builderId: event.params.builderId,
    builderFeeCNS: event.params.builderFeeCNS,
  };

  context.Exchange_TakerOrderFilledV2.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ToleranceAdministratorUpdated" }, async ({ event, context }) => {
  const entity: Exchange_ToleranceAdministratorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    toleranceAdministrator: event.params.toleranceAdministrator,
    added: event.params.added,
  };

  context.Exchange_ToleranceAdministratorUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TransferAccountToProtocol" }, async ({ event, context }) => {
  const entity: Exchange_TransferAccountToProtocol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_TransferAccountToProtocol.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TransferPerpInsToProtocol" }, async ({ event, context }) => {
  const entity: Exchange_TransferPerpInsToProtocol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    amountCNS: event.params.amountCNS,
  };

  context.Exchange_TransferPerpInsToProtocol.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TransferPerpPosToProtocol" }, async ({ event, context }) => {
  const entity: Exchange_TransferPerpPosToProtocol = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    amountCNS: event.params.amountCNS,
  };

  context.Exchange_TransferPerpPosToProtocol.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TransferProtocolToAccount" }, async ({ event, context }) => {
  const entity: Exchange_TransferProtocolToAccount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    accountId: event.params.accountId,
    amountCNS: event.params.amountCNS,
    balanceCNS: event.params.balanceCNS,
  };

  context.Exchange_TransferProtocolToAccount.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TransferProtocolToPerp" }, async ({ event, context }) => {
  const entity: Exchange_TransferProtocolToPerp = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    amountCNS: event.params.amountCNS,
    toInsuranceFund: event.params.toInsuranceFund,
  };

  context.Exchange_TransferProtocolToPerp.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TransferProtocolToRecycleBal" }, async ({ event, context }) => {
  const entity: Exchange_TransferProtocolToRecycleBal = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amountCNS: event.params.amountCNS,
  };

  context.Exchange_TransferProtocolToRecycleBal.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TriggerDescIdTooLow" }, async ({ event, context }) => {
  const entity: Exchange_TriggerDescIdTooLow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lastTriggerDescId: event.params.lastTriggerDescId,
  };

  context.Exchange_TriggerDescIdTooLow.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TriggerOrderExecution" }, async ({ event, context }) => {
  const entity: Exchange_TriggerOrderExecution = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Exchange_TriggerOrderExecution.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "TriggerOrderRequest" }, async ({ event, context }) => {
  const entity: Exchange_TriggerOrderRequest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    triggerPricePNS: event.params.triggerPricePNS,
    triggerPriceCondition: event.params.triggerPriceCondition,
    triggerRequestId: event.params.triggerRequestId,
    triggerPositionId: event.params.triggerPositionId,
  };

  context.Exchange_TriggerOrderRequest.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnableToCancelOrder" }, async ({ event, context }) => {
  const entity: Exchange_UnableToCancelOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
  };

  context.Exchange_UnableToCancelOrder.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnityDescentThreshUpdated" }, async ({ event, context }) => {
  const entity: Exchange_UnityDescentThreshUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    threshHdths: event.params.threshHdths,
  };

  context.Exchange_UnityDescentThreshUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnspecifiedCollateral" }, async ({ event, context }) => {
  const entity: Exchange_UnspecifiedCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.Exchange_UnspecifiedCollateral.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindCompleted" }, async ({ event, context }) => {
  const entity: Exchange_UnwindCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    positionsUnwound: event.params.positionsUnwound,
    perpPositionBalanceCNS: event.params.perpPositionBalanceCNS,
    insuranceBalanceCNS: event.params.insuranceBalanceCNS,
  };

  context.Exchange_UnwindCompleted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindContractTrigger" }, async ({ event, context }) => {
  const entity: Exchange_UnwindContractTrigger = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_UnwindContractTrigger.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindInitializationCleared" }, async ({ event, context }) => {
  const entity: Exchange_UnwindInitializationCleared = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_UnwindInitializationCleared.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindInitialized" }, async ({ event, context }) => {
  const entity: Exchange_UnwindInitialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    sumPositiveFmvCNS: event.params.sumPositiveFmvCNS,
  };

  context.Exchange_UnwindInitialized.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindInsufficientBalance" }, async ({ event, context }) => {
  const entity: Exchange_UnwindInsufficientBalance = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    accountId: event.params.accountId,
    perpPositionBalanceCNS: event.params.perpPositionBalanceCNS,
    paymentCNS: event.params.paymentCNS,
  };

  context.Exchange_UnwindInsufficientBalance.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindIterationCompleted" }, async ({ event, context }) => {
  const entity: Exchange_UnwindIterationCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    positionsUnwound: event.params.positionsUnwound,
    perpPositionBalanceCNS: event.params.perpPositionBalanceCNS,
    insuranceBalanceCNS: event.params.insuranceBalanceCNS,
  };

  context.Exchange_UnwindIterationCompleted.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindPreparationCleared" }, async ({ event, context }) => {
  const entity: Exchange_UnwindPreparationCleared = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_UnwindPreparationCleared.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindPrepared" }, async ({ event, context }) => {
  const entity: Exchange_UnwindPrepared = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_UnwindPrepared.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UnwindProcessInProgress" }, async ({ event, context }) => {
  const entity: Exchange_UnwindProcessInProgress = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_UnwindProcessInProgress.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "UpdateOracleFailed" }, async ({ event, context }) => {
  const entity: Exchange_UpdateOracleFailed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
  };

  context.Exchange_UpdateOracleFailed.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "Upgraded" }, async ({ event, context }) => {
  const entity: Exchange_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.Exchange_Upgraded.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "ValueExceedsMaximum" }, async ({ event, context }) => {
  const entity: Exchange_ValueExceedsMaximum = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
    maximum: event.params.maximum,
  };

  context.Exchange_ValueExceedsMaximum.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WRLSMinWithdrawLimitUpdated" }, async ({ event, context }) => {
  const entity: Exchange_WRLSMinWithdrawLimitUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    limitCNS: event.params.limitCNS,
  };

  context.Exchange_WRLSMinWithdrawLimitUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WRLSThousandthsTvlUpdated" }, async ({ event, context }) => {
  const entity: Exchange_WRLSThousandthsTvlUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    thousandthsTvl: event.params.thousandthsTvl,
  };

  context.Exchange_WRLSThousandthsTvlUpdated.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WhitelistAddress" }, async ({ event, context }) => {
  const entity: Exchange_WhitelistAddress = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    addr: event.params.addr,
    whitelisted: event.params.whitelisted,
  };

  context.Exchange_WhitelistAddress.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WhitelistingEnabledChanged" }, async ({ event, context }) => {
  const entity: Exchange_WhitelistingEnabledChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    enabled: event.params.enabled,
  };

  context.Exchange_WhitelistingEnabledChanged.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WithdrawRateLimitBypassSet" }, async ({ event, context }) => {
  const entity: Exchange_WithdrawRateLimitBypassSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    addr: event.params.addr,
    enabled: event.params.enabled,
  };

  context.Exchange_WithdrawRateLimitBypassSet.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WithdrawRateLimitForceReset" }, async ({ event, context }) => {
  const entity: Exchange_WithdrawRateLimitForceReset = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newExpiryBlock: event.params.newExpiryBlock,
    newLimitCNS: event.params.newLimitCNS,
    perBlockCNS: event.params.perBlockCNS,
  };

  context.Exchange_WithdrawRateLimitForceReset.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WithdrawRateLimitReset" }, async ({ event, context }) => {
  const entity: Exchange_WithdrawRateLimitReset = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newExpiryBlock: event.params.newExpiryBlock,
    newLimitCNS: event.params.newLimitCNS,
    perBlockCNS: event.params.perBlockCNS,
  };

  context.Exchange_WithdrawRateLimitReset.set(entity);
});

indexer.onEvent({ contract: "Exchange", event: "WrongAccountForOrder" }, async ({ event, context }) => {
  const entity: Exchange_WrongAccountForOrder = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    perpId: event.params.perpId,
    orderId: event.params.orderId,
    accountId: event.params.accountId,
  };

  context.Exchange_WrongAccountForOrder.set(entity);
});
