
import {
  AccountId,
  U32,
  Text
  Vector,
} from '@plugnet/types';
import { u8aToHex } from '@plugnet/util'

export class Name extends Text {}

export class Names extends Vector.with(Name) {}

export class SubscriptionTime extends U32 {}
