import {
  QiNFTBurned as QiNFTBurnedEvent,
  QiNFTMinted as QiNFTMintedEvent,
  QiNFTRequested as QiNFTRequestedEvent,
  Transfer as TransferEvent
} from "../generated/Qi/Qi"
import {
  QiNFTBurned,
  QiNFTMinted,
  QiNFTRequested,
  Transfer
} from "../generated/schema"


export function handleQiNFTBurned(event: QiNFTBurnedEvent): void {
  let entity = new QiNFTBurned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.owner = event.params.owner
  entity.category = event.params.category
  entity.animalVersionId = event.params.animalVersionId
  entity.backgroundId = event.params.backgroundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQiNFTMinted(event: QiNFTMintedEvent): void {
  let entity = new QiNFTMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.category = event.params.category
  entity.animalVersionId = event.params.animalVersionId
  entity.backgroundId = event.params.backgroundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQiNFTRequested(event: QiNFTRequestedEvent): void {
  let entity = new QiNFTRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.category = event.params.category

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
