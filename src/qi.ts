import {
    QiNFTBurned as QiNFTBurnedEvent,
    QiNFTMinted as QiNFTMintedEvent,
    QiNFTRequested as QiNFTRequestedEvent,
    Transfer as TransferEvent
} from "../generated/Qi/Qi"
import {
    QiNFTBurned,
    QiNFTMinted,
    QiNFTRequested
} from "../generated/schema"
import {Address} from "@graphprotocol/graph-ts";


export function handleQiNFTBurned(event: QiNFTBurnedEvent): void {
    let entity = new QiNFTBurned(event.params.tokenId.toString())

    // TODO: Add param for amount of ETH received from burn
    entity.owner = event.params.owner
    entity.category = event.params.category
    entity.animalVersionId = event.params.animalVersionId
    entity.backgroundId = event.params.backgroundId
    entity.ethAmountReturned = event.params.ethAmountReturned

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()

    let nft = QiNFTMinted.load(event.params.tokenId.toString())
    if (nft) {
        nft.owner = Address.fromString("0x0000000000000000000000000000000000000000")
        nft.save()
    }
}

export function handleQiNFTMinted(event: QiNFTMintedEvent): void {
    let entity = new QiNFTMinted(event.params.tokenId.toString())

    entity.requestId = event.params.requestId
    entity.owner = event.params.owner
    entity.category = event.params.category
    entity.animalVersionId = event.params.animalVersionId
    entity.backgroundId = event.params.backgroundId

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()

    // Delete the NFT Request
    let request = QiNFTRequested.load(event.params.tokenId.toString())
    if (request) {
        request.owner = Address.fromString("0x0000000000000000000000000000000000000000")
        request.save()
    }
}

export function handleQiNFTRequested(event: QiNFTRequestedEvent): void {
    let entity = new QiNFTRequested(event.params.tokenId.toString())

    entity.requestId = event.params.requestId
    entity.owner = event.params.owner
    entity.category = event.params.category

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
}

export function handleTransfer(event: TransferEvent): void {
    let qiNFT = QiNFTMinted.load(event.params.tokenId.toString())

    if (qiNFT) {
        qiNFT.owner = event.params.to
        qiNFT.save()
    }
}
