import {
  QiBackgroundMinted as QiBackgroundMintedEvent,
  QiBackgroundRequested as QiBackgroundRequestedEvent,
  Transfer as TransferEvent
} from "../generated/QiBackground/QiBackground"
import {
  QiBackgroundMinted,
  QiBackgroundRequested,
  Transfer
} from "../generated/schema"

export function handleQiBackgroundMinted(event: QiBackgroundMintedEvent): void {
  let entity = new QiBackgroundMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.category = event.params.category
  entity.backgroundId = event.params.backgroundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQiBackgroundRequested(
  event: QiBackgroundRequestedEvent
): void {
  let entity = new QiBackgroundRequested(
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
