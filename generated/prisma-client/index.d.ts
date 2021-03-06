// Code generated by Prisma (prisma@1.19.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  collection: (where?: CollectionWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  collection: (where: CollectionWhereUniqueInput) => Collection;
  collections: (
    args?: {
      where?: CollectionWhereInput;
      orderBy?: CollectionOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<CollectionNode>;
  collectionsConnection: (
    args?: {
      where?: CollectionWhereInput;
      orderBy?: CollectionOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CollectionConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCollection: (data: CollectionCreateInput) => Collection;
  updateCollection: (
    args: { data: CollectionUpdateInput; where: CollectionWhereUniqueInput }
  ) => Collection;
  updateManyCollections: (
    args: { data: CollectionUpdateInput; where?: CollectionWhereInput }
  ) => BatchPayload;
  upsertCollection: (
    args: {
      where: CollectionWhereUniqueInput;
      create: CollectionCreateInput;
      update: CollectionUpdateInput;
    }
  ) => Collection;
  deleteCollection: (where: CollectionWhereUniqueInput) => Collection;
  deleteManyCollections: (where?: CollectionWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  collection: (
    where?: CollectionSubscriptionWhereInput
  ) => CollectionSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CollectionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "owner_ASC"
  | "owner_DESC"
  | "name_ASC"
  | "name_DESC"
  | "private_ASC"
  | "private_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CollectionCreateInput {
  owner: Int;
  name: String;
  private?: Boolean;
  items?: CollectionCreateitemsInput;
}

export interface CollectionCreateitemsInput {
  set?: Int[] | Int;
}

export interface CollectionWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  owner?: Int;
  owner_not?: Int;
  owner_in?: Int[] | Int;
  owner_not_in?: Int[] | Int;
  owner_lt?: Int;
  owner_lte?: Int;
  owner_gt?: Int;
  owner_gte?: Int;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  private?: Boolean;
  private_not?: Boolean;
  AND?: CollectionWhereInput[] | CollectionWhereInput;
  OR?: CollectionWhereInput[] | CollectionWhereInput;
  NOT?: CollectionWhereInput[] | CollectionWhereInput;
}

export interface CollectionUpdateInput {
  owner?: Int;
  name?: String;
  private?: Boolean;
  items?: CollectionUpdateitemsInput;
}

export interface CollectionUpdateitemsInput {
  set?: Int[] | Int;
}

export interface CollectionSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CollectionWhereInput;
  AND?: CollectionSubscriptionWhereInput[] | CollectionSubscriptionWhereInput;
  OR?: CollectionSubscriptionWhereInput[] | CollectionSubscriptionWhereInput;
  NOT?: CollectionSubscriptionWhereInput[] | CollectionSubscriptionWhereInput;
}

export type CollectionWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateCollectionNode {
  count: Int;
}

export interface AggregateCollection
  extends Promise<AggregateCollectionNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCollectionSubscription
  extends Promise<AsyncIterator<AggregateCollectionNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CollectionPreviousValuesNode {
  id: ID_Output;
  owner: Int;
  name: String;
  private: Boolean;
  items: Int[];
}

export interface CollectionPreviousValues
  extends Promise<CollectionPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  owner: () => Promise<Int>;
  name: () => Promise<String>;
  private: () => Promise<Boolean>;
  items: () => Promise<Int[]>;
}

export interface CollectionPreviousValuesSubscription
  extends Promise<AsyncIterator<CollectionPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  owner: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  private: () => Promise<AsyncIterator<Boolean>>;
  items: () => Promise<AsyncIterator<Int[]>>;
}

export interface CollectionSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CollectionSubscriptionPayload
  extends Promise<CollectionSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Collection>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CollectionPreviousValues>() => T;
}

export interface CollectionSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CollectionSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CollectionSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CollectionPreviousValuesSubscription>() => T;
}

export interface CollectionNode {
  id: ID_Output;
  owner: Int;
  name: String;
  private: Boolean;
  items: Int[];
}

export interface Collection extends Promise<CollectionNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  owner: () => Promise<Int>;
  name: () => Promise<String>;
  private: () => Promise<Boolean>;
  items: () => Promise<Int[]>;
}

export interface CollectionSubscription
  extends Promise<AsyncIterator<CollectionNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  owner: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  private: () => Promise<AsyncIterator<Boolean>>;
  items: () => Promise<AsyncIterator<Int[]>>;
}

export interface CollectionEdgeNode {
  cursor: String;
}

export interface CollectionEdge
  extends Promise<CollectionEdgeNode>,
    Fragmentable {
  node: <T = Collection>() => T;
  cursor: () => Promise<String>;
}

export interface CollectionEdgeSubscription
  extends Promise<AsyncIterator<CollectionEdgeNode>>,
    Fragmentable {
  node: <T = CollectionSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CollectionConnectionNode {}

export interface CollectionConnection
  extends Promise<CollectionConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<CollectionEdgeNode>>() => T;
  aggregate: <T = AggregateCollection>() => T;
}

export interface CollectionConnectionSubscription
  extends Promise<AsyncIterator<CollectionConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CollectionEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCollectionSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const prisma: Prisma;
