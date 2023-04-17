import {
  QiBackgroundMinted as QiBackgroundMintedEvent,
  QiBackgroundRequested as QiBackgroundRequestedEvent,
  Transfer as TransferEvent
} from "../generated/QiBackground/QiBackground"
import {
  QiBackgroundMinted,
  QiBackgroundRequested
} from "../generated/schema"
import {Address} from "@graphprotocol/graph-ts";

export function handleQiBackgroundMinted(event: QiBackgroundMintedEvent): void {
  let entity = new QiBackgroundMinted(event.params.tokenId.toString())

  entity.requestId = event.params.requestId
  entity.owner = event.params.owner
  entity.category = event.params.category
  entity.backgroundId = event.params.backgroundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

    // Delete the Background Request
    let request = QiBackgroundRequested.load(event.params.tokenId.toString())
    if (request) {
        request.owner = Address.fromString("0x0000000000000000000000000000000000000000")
        request.save()
    }

}

export function handleQiBackgroundRequested(
  event: QiBackgroundRequestedEvent
): void {
  let entity = new QiBackgroundRequested(event.params.tokenId.toString())

  entity.requestId = event.params.requestId
  entity.owner = event.params.owner
  entity.category = event.params.category

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let backgroundNFT = QiBackgroundMinted.load(event.params.tokenId.toString())

    if (backgroundNFT) {
        backgroundNFT.owner = event.params.to
        backgroundNFT.save()
    }
}
