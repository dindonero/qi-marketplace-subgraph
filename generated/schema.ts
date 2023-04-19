// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class QiNFTBurned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save QiNFTBurned entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type QiNFTBurned must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("QiNFTBurned", id.toString(), this);
    }
  }

  static load(id: string): QiNFTBurned | null {
    return changetype<QiNFTBurned | null>(store.get("QiNFTBurned", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get animalVersionId(): BigInt {
    let value = this.get("animalVersionId");
    return value!.toBigInt();
  }

  set animalVersionId(value: BigInt) {
    this.set("animalVersionId", Value.fromBigInt(value));
  }

  get backgroundId(): BigInt {
    let value = this.get("backgroundId");
    return value!.toBigInt();
  }

  set backgroundId(value: BigInt) {
    this.set("backgroundId", Value.fromBigInt(value));
  }

  get ethAmountReturned(): BigInt {
    let value = this.get("ethAmountReturned");
    return value!.toBigInt();
  }

  set ethAmountReturned(value: BigInt) {
    this.set("ethAmountReturned", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class QiNFTMinted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save QiNFTMinted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type QiNFTMinted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("QiNFTMinted", id.toString(), this);
    }
  }

  static load(id: string): QiNFTMinted | null {
    return changetype<QiNFTMinted | null>(store.get("QiNFTMinted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value!.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get animalVersionId(): BigInt {
    let value = this.get("animalVersionId");
    return value!.toBigInt();
  }

  set animalVersionId(value: BigInt) {
    this.set("animalVersionId", Value.fromBigInt(value));
  }

  get backgroundId(): BigInt {
    let value = this.get("backgroundId");
    return value!.toBigInt();
  }

  set backgroundId(value: BigInt) {
    this.set("backgroundId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class QiNFTRequested extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save QiNFTRequested entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type QiNFTRequested must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("QiNFTRequested", id.toString(), this);
    }
  }

  static load(id: string): QiNFTRequested | null {
    return changetype<QiNFTRequested | null>(store.get("QiNFTRequested", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value!.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class QiBackgroundMinted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save QiBackgroundMinted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type QiBackgroundMinted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("QiBackgroundMinted", id.toString(), this);
    }
  }

  static load(id: string): QiBackgroundMinted | null {
    return changetype<QiBackgroundMinted | null>(
      store.get("QiBackgroundMinted", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value!.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get backgroundId(): BigInt {
    let value = this.get("backgroundId");
    return value!.toBigInt();
  }

  set backgroundId(value: BigInt) {
    this.set("backgroundId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class QiBackgroundRequested extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save QiBackgroundRequested entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type QiBackgroundRequested must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("QiBackgroundRequested", id.toString(), this);
    }
  }

  static load(id: string): QiBackgroundRequested | null {
    return changetype<QiBackgroundRequested | null>(
      store.get("QiBackgroundRequested", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value!.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
