import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  Upgraded,
  Approval,
  ApprovalForAll,
  QiNFTBurned,
  QiNFTMinted,
  QiNFTRequested,
  Transfer
} from "../generated/Qi/Qi"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createQiNFTBurnedEvent(
  tokenId: BigInt,
  owner: Address,
  category: i32,
  animalVersionId: BigInt,
  backgroundId: BigInt
): QiNFTBurned {
  let qiNftBurnedEvent = changetype<QiNFTBurned>(newMockEvent())

  qiNftBurnedEvent.parameters = new Array()

  qiNftBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  qiNftBurnedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  qiNftBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "category",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(category))
    )
  )
  qiNftBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "animalVersionId",
      ethereum.Value.fromUnsignedBigInt(animalVersionId)
    )
  )
  qiNftBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "backgroundId",
      ethereum.Value.fromUnsignedBigInt(backgroundId)
    )
  )

  return qiNftBurnedEvent
}

export function createQiNFTMintedEvent(
  requestId: BigInt,
  owner: Address,
  tokenId: BigInt,
  category: i32,
  animalVersionId: BigInt,
  backgroundId: BigInt
): QiNFTMinted {
  let qiNftMintedEvent = changetype<QiNFTMinted>(newMockEvent())

  qiNftMintedEvent.parameters = new Array()

  qiNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  qiNftMintedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  qiNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  qiNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "category",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(category))
    )
  )
  qiNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "animalVersionId",
      ethereum.Value.fromUnsignedBigInt(animalVersionId)
    )
  )
  qiNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "backgroundId",
      ethereum.Value.fromUnsignedBigInt(backgroundId)
    )
  )

  return qiNftMintedEvent
}

export function createQiNFTRequestedEvent(
  requestId: BigInt,
  owner: Address,
  tokenId: BigInt,
  category: i32
): QiNFTRequested {
  let qiNftRequestedEvent = changetype<QiNFTRequested>(newMockEvent())

  qiNftRequestedEvent.parameters = new Array()

  qiNftRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  qiNftRequestedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  qiNftRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  qiNftRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "category",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(category))
    )
  )

  return qiNftRequestedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
