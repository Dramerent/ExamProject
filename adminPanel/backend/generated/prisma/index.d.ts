
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model CreatedPosts
 * 
 */
export type CreatedPosts = $Result.DefaultSelection<Prisma.$CreatedPostsPayload>
/**
 * Model Genres
 * 
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>
/**
 * Model Organizers
 * 
 */
export type Organizers = $Result.DefaultSelection<Prisma.$OrganizersPayload>
/**
 * Model ReasonsToRefund
 * 
 */
export type ReasonsToRefund = $Result.DefaultSelection<Prisma.$ReasonsToRefundPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Sphere
 * 
 */
export type Sphere = $Result.DefaultSelection<Prisma.$SpherePayload>
/**
 * Model TicketRefund
 * 
 */
export type TicketRefund = $Result.DefaultSelection<Prisma.$TicketRefundPayload>
/**
 * Model Tickets
 * 
 */
export type Tickets = $Result.DefaultSelection<Prisma.$TicketsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model callbacks
 * 
 */
export type callbacks = $Result.DefaultSelection<Prisma.$callbacksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.createdPosts`: Exposes CRUD operations for the **CreatedPosts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreatedPosts
    * const createdPosts = await prisma.createdPosts.findMany()
    * ```
    */
  get createdPosts(): Prisma.CreatedPostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizers`: Exposes CRUD operations for the **Organizers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizers
    * const organizers = await prisma.organizers.findMany()
    * ```
    */
  get organizers(): Prisma.OrganizersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reasonsToRefund`: Exposes CRUD operations for the **ReasonsToRefund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReasonsToRefunds
    * const reasonsToRefunds = await prisma.reasonsToRefund.findMany()
    * ```
    */
  get reasonsToRefund(): Prisma.ReasonsToRefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sphere`: Exposes CRUD operations for the **Sphere** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spheres
    * const spheres = await prisma.sphere.findMany()
    * ```
    */
  get sphere(): Prisma.SphereDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketRefund`: Exposes CRUD operations for the **TicketRefund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketRefunds
    * const ticketRefunds = await prisma.ticketRefund.findMany()
    * ```
    */
  get ticketRefund(): Prisma.TicketRefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **Tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.TicketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callbacks`: Exposes CRUD operations for the **callbacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Callbacks
    * const callbacks = await prisma.callbacks.findMany()
    * ```
    */
  get callbacks(): Prisma.callbacksDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Comments: 'Comments',
    CreatedPosts: 'CreatedPosts',
    Genres: 'Genres',
    Organizers: 'Organizers',
    ReasonsToRefund: 'ReasonsToRefund',
    Roles: 'Roles',
    Sphere: 'Sphere',
    TicketRefund: 'TicketRefund',
    Tickets: 'Tickets',
    Users: 'Users',
    callbacks: 'callbacks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "comments" | "createdPosts" | "genres" | "organizers" | "reasonsToRefund" | "roles" | "sphere" | "ticketRefund" | "tickets" | "users" | "callbacks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      CreatedPosts: {
        payload: Prisma.$CreatedPostsPayload<ExtArgs>
        fields: Prisma.CreatedPostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreatedPostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreatedPostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>
          }
          findFirst: {
            args: Prisma.CreatedPostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreatedPostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>
          }
          findMany: {
            args: Prisma.CreatedPostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>[]
          }
          create: {
            args: Prisma.CreatedPostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>
          }
          createMany: {
            args: Prisma.CreatedPostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreatedPostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>[]
          }
          delete: {
            args: Prisma.CreatedPostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>
          }
          update: {
            args: Prisma.CreatedPostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>
          }
          deleteMany: {
            args: Prisma.CreatedPostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreatedPostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreatedPostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>[]
          }
          upsert: {
            args: Prisma.CreatedPostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatedPostsPayload>
          }
          aggregate: {
            args: Prisma.CreatedPostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreatedPosts>
          }
          groupBy: {
            args: Prisma.CreatedPostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreatedPostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreatedPostsCountArgs<ExtArgs>
            result: $Utils.Optional<CreatedPostsCountAggregateOutputType> | number
          }
        }
      }
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>
        fields: Prisma.GenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      Organizers: {
        payload: Prisma.$OrganizersPayload<ExtArgs>
        fields: Prisma.OrganizersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>
          }
          findFirst: {
            args: Prisma.OrganizersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>
          }
          findMany: {
            args: Prisma.OrganizersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>[]
          }
          create: {
            args: Prisma.OrganizersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>
          }
          createMany: {
            args: Prisma.OrganizersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>[]
          }
          delete: {
            args: Prisma.OrganizersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>
          }
          update: {
            args: Prisma.OrganizersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>
          }
          deleteMany: {
            args: Prisma.OrganizersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>[]
          }
          upsert: {
            args: Prisma.OrganizersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizersPayload>
          }
          aggregate: {
            args: Prisma.OrganizersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizers>
          }
          groupBy: {
            args: Prisma.OrganizersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizersCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizersCountAggregateOutputType> | number
          }
        }
      }
      ReasonsToRefund: {
        payload: Prisma.$ReasonsToRefundPayload<ExtArgs>
        fields: Prisma.ReasonsToRefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReasonsToRefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReasonsToRefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>
          }
          findFirst: {
            args: Prisma.ReasonsToRefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReasonsToRefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>
          }
          findMany: {
            args: Prisma.ReasonsToRefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>[]
          }
          create: {
            args: Prisma.ReasonsToRefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>
          }
          createMany: {
            args: Prisma.ReasonsToRefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReasonsToRefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>[]
          }
          delete: {
            args: Prisma.ReasonsToRefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>
          }
          update: {
            args: Prisma.ReasonsToRefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>
          }
          deleteMany: {
            args: Prisma.ReasonsToRefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReasonsToRefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReasonsToRefundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>[]
          }
          upsert: {
            args: Prisma.ReasonsToRefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReasonsToRefundPayload>
          }
          aggregate: {
            args: Prisma.ReasonsToRefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReasonsToRefund>
          }
          groupBy: {
            args: Prisma.ReasonsToRefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReasonsToRefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReasonsToRefundCountArgs<ExtArgs>
            result: $Utils.Optional<ReasonsToRefundCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Sphere: {
        payload: Prisma.$SpherePayload<ExtArgs>
        fields: Prisma.SphereFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SphereFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SphereFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>
          }
          findFirst: {
            args: Prisma.SphereFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SphereFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>
          }
          findMany: {
            args: Prisma.SphereFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>[]
          }
          create: {
            args: Prisma.SphereCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>
          }
          createMany: {
            args: Prisma.SphereCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SphereCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>[]
          }
          delete: {
            args: Prisma.SphereDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>
          }
          update: {
            args: Prisma.SphereUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>
          }
          deleteMany: {
            args: Prisma.SphereDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SphereUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SphereUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>[]
          }
          upsert: {
            args: Prisma.SphereUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpherePayload>
          }
          aggregate: {
            args: Prisma.SphereAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSphere>
          }
          groupBy: {
            args: Prisma.SphereGroupByArgs<ExtArgs>
            result: $Utils.Optional<SphereGroupByOutputType>[]
          }
          count: {
            args: Prisma.SphereCountArgs<ExtArgs>
            result: $Utils.Optional<SphereCountAggregateOutputType> | number
          }
        }
      }
      TicketRefund: {
        payload: Prisma.$TicketRefundPayload<ExtArgs>
        fields: Prisma.TicketRefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketRefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketRefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>
          }
          findFirst: {
            args: Prisma.TicketRefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketRefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>
          }
          findMany: {
            args: Prisma.TicketRefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>[]
          }
          create: {
            args: Prisma.TicketRefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>
          }
          createMany: {
            args: Prisma.TicketRefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketRefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>[]
          }
          delete: {
            args: Prisma.TicketRefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>
          }
          update: {
            args: Prisma.TicketRefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>
          }
          deleteMany: {
            args: Prisma.TicketRefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketRefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketRefundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>[]
          }
          upsert: {
            args: Prisma.TicketRefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketRefundPayload>
          }
          aggregate: {
            args: Prisma.TicketRefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketRefund>
          }
          groupBy: {
            args: Prisma.TicketRefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketRefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketRefundCountArgs<ExtArgs>
            result: $Utils.Optional<TicketRefundCountAggregateOutputType> | number
          }
        }
      }
      Tickets: {
        payload: Prisma.$TicketsPayload<ExtArgs>
        fields: Prisma.TicketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findFirst: {
            args: Prisma.TicketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findMany: {
            args: Prisma.TicketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          create: {
            args: Prisma.TicketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          createMany: {
            args: Prisma.TicketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          delete: {
            args: Prisma.TicketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          update: {
            args: Prisma.TicketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          deleteMany: {
            args: Prisma.TicketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          upsert: {
            args: Prisma.TicketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.TicketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      callbacks: {
        payload: Prisma.$callbacksPayload<ExtArgs>
        fields: Prisma.callbacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.callbacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.callbacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>
          }
          findFirst: {
            args: Prisma.callbacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.callbacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>
          }
          findMany: {
            args: Prisma.callbacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>[]
          }
          create: {
            args: Prisma.callbacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>
          }
          createMany: {
            args: Prisma.callbacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.callbacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>[]
          }
          delete: {
            args: Prisma.callbacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>
          }
          update: {
            args: Prisma.callbacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>
          }
          deleteMany: {
            args: Prisma.callbacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.callbacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.callbacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>[]
          }
          upsert: {
            args: Prisma.callbacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$callbacksPayload>
          }
          aggregate: {
            args: Prisma.CallbacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallbacks>
          }
          groupBy: {
            args: Prisma.callbacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallbacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.callbacksCountArgs<ExtArgs>
            result: $Utils.Optional<CallbacksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    comments?: CommentsOmit
    createdPosts?: CreatedPostsOmit
    genres?: GenresOmit
    organizers?: OrganizersOmit
    reasonsToRefund?: ReasonsToRefundOmit
    roles?: RolesOmit
    sphere?: SphereOmit
    ticketRefund?: TicketRefundOmit
    tickets?: TicketsOmit
    users?: UsersOmit
    callbacks?: callbacksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CreatedPostsCountOutputType
   */

  export type CreatedPostsCountOutputType = {
    Comments: number
    Tickets: number
  }

  export type CreatedPostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | CreatedPostsCountOutputTypeCountCommentsArgs
    Tickets?: boolean | CreatedPostsCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * CreatedPostsCountOutputType without action
   */
  export type CreatedPostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPostsCountOutputType
     */
    select?: CreatedPostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreatedPostsCountOutputType without action
   */
  export type CreatedPostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * CreatedPostsCountOutputType without action
   */
  export type CreatedPostsCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    CreatedPosts: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedPosts?: boolean | GenresCountOutputTypeCountCreatedPostsArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountCreatedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatedPostsWhereInput
  }


  /**
   * Count Type OrganizersCountOutputType
   */

  export type OrganizersCountOutputType = {
    Comments: number
    CreatedPosts: number
  }

  export type OrganizersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | OrganizersCountOutputTypeCountCommentsArgs
    CreatedPosts?: boolean | OrganizersCountOutputTypeCountCreatedPostsArgs
  }

  // Custom InputTypes
  /**
   * OrganizersCountOutputType without action
   */
  export type OrganizersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizersCountOutputType
     */
    select?: OrganizersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizersCountOutputType without action
   */
  export type OrganizersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * OrganizersCountOutputType without action
   */
  export type OrganizersCountOutputTypeCountCreatedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatedPostsWhereInput
  }


  /**
   * Count Type ReasonsToRefundCountOutputType
   */

  export type ReasonsToRefundCountOutputType = {
    TicketRefund: number
  }

  export type ReasonsToRefundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketRefund?: boolean | ReasonsToRefundCountOutputTypeCountTicketRefundArgs
  }

  // Custom InputTypes
  /**
   * ReasonsToRefundCountOutputType without action
   */
  export type ReasonsToRefundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefundCountOutputType
     */
    select?: ReasonsToRefundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReasonsToRefundCountOutputType without action
   */
  export type ReasonsToRefundCountOutputTypeCountTicketRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRefundWhereInput
  }


  /**
   * Count Type SphereCountOutputType
   */

  export type SphereCountOutputType = {
    Genres: number
    Organizers: number
  }

  export type SphereCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Genres?: boolean | SphereCountOutputTypeCountGenresArgs
    Organizers?: boolean | SphereCountOutputTypeCountOrganizersArgs
  }

  // Custom InputTypes
  /**
   * SphereCountOutputType without action
   */
  export type SphereCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SphereCountOutputType
     */
    select?: SphereCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SphereCountOutputType without action
   */
  export type SphereCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }

  /**
   * SphereCountOutputType without action
   */
  export type SphereCountOutputTypeCountOrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizersWhereInput
  }


  /**
   * Count Type TicketsCountOutputType
   */

  export type TicketsCountOutputType = {
    TicketRefund: number
  }

  export type TicketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketRefund?: boolean | TicketsCountOutputTypeCountTicketRefundArgs
  }

  // Custom InputTypes
  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketsCountOutputType
     */
    select?: TicketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeCountTicketRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRefundWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Comments: number
    Organizers: number
    TicketRefund: number
    Tickets: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    Organizers?: boolean | UsersCountOutputTypeCountOrganizersArgs
    TicketRefund?: boolean | UsersCountOutputTypeCountTicketRefundArgs
    Tickets?: boolean | UsersCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTicketRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRefundWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
  }


  /**
   * Count Type CallbacksCountOutputType
   */

  export type CallbacksCountOutputType = {
    Organizers: number
  }

  export type CallbacksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organizers?: boolean | CallbacksCountOutputTypeCountOrganizersArgs
  }

  // Custom InputTypes
  /**
   * CallbacksCountOutputType without action
   */
  export type CallbacksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallbacksCountOutputType
     */
    select?: CallbacksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CallbacksCountOutputType without action
   */
  export type CallbacksCountOutputTypeCountOrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    comment_id: number | null
    user_id: number | null
    organizer_id: number | null
    post_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    comment_id: number | null
    user_id: number | null
    organizer_id: number | null
    post_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: number | null
    user_id: number | null
    comment_text: string | null
    organizer_id: number | null
    comment_isVerified: boolean | null
    comment_name: string | null
    post_id: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: number | null
    user_id: number | null
    comment_text: string | null
    organizer_id: number | null
    comment_isVerified: boolean | null
    comment_name: string | null
    post_id: number | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    user_id: number
    comment_text: number
    organizer_id: number
    comment_isVerified: number
    comment_name: number
    post_id: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    comment_id?: true
    user_id?: true
    organizer_id?: true
    post_id?: true
  }

  export type CommentsSumAggregateInputType = {
    comment_id?: true
    user_id?: true
    organizer_id?: true
    post_id?: true
  }

  export type CommentsMinAggregateInputType = {
    comment_id?: true
    user_id?: true
    comment_text?: true
    organizer_id?: true
    comment_isVerified?: true
    comment_name?: true
    post_id?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    user_id?: true
    comment_text?: true
    organizer_id?: true
    comment_isVerified?: true
    comment_name?: true
    post_id?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    user_id?: true
    comment_text?: true
    organizer_id?: true
    comment_isVerified?: true
    comment_name?: true
    post_id?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    comment_id: number
    user_id: number
    comment_text: string
    organizer_id: number
    comment_isVerified: boolean | null
    comment_name: string
    post_id: number | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    user_id?: boolean
    comment_text?: boolean
    organizer_id?: boolean
    comment_isVerified?: boolean
    comment_name?: boolean
    post_id?: boolean
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    CreatedPosts?: boolean | Comments$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    user_id?: boolean
    comment_text?: boolean
    organizer_id?: boolean
    comment_isVerified?: boolean
    comment_name?: boolean
    post_id?: boolean
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    CreatedPosts?: boolean | Comments$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    user_id?: boolean
    comment_text?: boolean
    organizer_id?: boolean
    comment_isVerified?: boolean
    comment_name?: boolean
    post_id?: boolean
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    CreatedPosts?: boolean | Comments$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    comment_id?: boolean
    user_id?: boolean
    comment_text?: boolean
    organizer_id?: boolean
    comment_isVerified?: boolean
    comment_name?: boolean
    post_id?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "user_id" | "comment_text" | "organizer_id" | "comment_isVerified" | "comment_name" | "post_id", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    CreatedPosts?: boolean | Comments$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    CreatedPosts?: boolean | Comments$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    CreatedPosts?: boolean | Comments$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      Organizers: Prisma.$OrganizersPayload<ExtArgs>
      CreatedPosts: Prisma.$CreatedPostsPayload<ExtArgs> | null
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: number
      user_id: number
      comment_text: string
      organizer_id: number
      comment_isVerified: boolean | null
      comment_name: string
      post_id: number | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.createManyAndReturn({
     *   select: { comment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.updateManyAndReturn({
     *   select: { comment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organizers<T extends OrganizersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizersDefaultArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CreatedPosts<T extends Comments$CreatedPostsArgs<ExtArgs> = {}>(args?: Subset<T, Comments$CreatedPostsArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly comment_id: FieldRef<"Comments", 'Int'>
    readonly user_id: FieldRef<"Comments", 'Int'>
    readonly comment_text: FieldRef<"Comments", 'String'>
    readonly organizer_id: FieldRef<"Comments", 'Int'>
    readonly comment_isVerified: FieldRef<"Comments", 'Boolean'>
    readonly comment_name: FieldRef<"Comments", 'String'>
    readonly post_id: FieldRef<"Comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.CreatedPosts
   */
  export type Comments$CreatedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    where?: CreatedPostsWhereInput
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model CreatedPosts
   */

  export type AggregateCreatedPosts = {
    _count: CreatedPostsCountAggregateOutputType | null
    _avg: CreatedPostsAvgAggregateOutputType | null
    _sum: CreatedPostsSumAggregateOutputType | null
    _min: CreatedPostsMinAggregateOutputType | null
    _max: CreatedPostsMaxAggregateOutputType | null
  }

  export type CreatedPostsAvgAggregateOutputType = {
    post_cost: number | null
    post_allSeats: Decimal | null
    post_buydSeats: Decimal | null
    organizer_id: number | null
    post_id: number | null
    genre_id: number | null
  }

  export type CreatedPostsSumAggregateOutputType = {
    post_cost: number | null
    post_allSeats: Decimal | null
    post_buydSeats: Decimal | null
    organizer_id: number | null
    post_id: number | null
    genre_id: number | null
  }

  export type CreatedPostsMinAggregateOutputType = {
    post_image: string | null
    post_description: string | null
    post_cost: number | null
    post_meetingPlace: string | null
    post_allSeats: Decimal | null
    post_buydSeats: Decimal | null
    post_checked: boolean | null
    organizer_id: number | null
    post_id: number | null
    genre_id: number | null
    post_name: string | null
    post_meetDate: Date | null
    post_fullDescription: string | null
  }

  export type CreatedPostsMaxAggregateOutputType = {
    post_image: string | null
    post_description: string | null
    post_cost: number | null
    post_meetingPlace: string | null
    post_allSeats: Decimal | null
    post_buydSeats: Decimal | null
    post_checked: boolean | null
    organizer_id: number | null
    post_id: number | null
    genre_id: number | null
    post_name: string | null
    post_meetDate: Date | null
    post_fullDescription: string | null
  }

  export type CreatedPostsCountAggregateOutputType = {
    post_image: number
    post_description: number
    post_cost: number
    post_meetingPlace: number
    post_allSeats: number
    post_buydSeats: number
    post_checked: number
    organizer_id: number
    post_id: number
    genre_id: number
    post_name: number
    post_meetDate: number
    post_fullDescription: number
    _all: number
  }


  export type CreatedPostsAvgAggregateInputType = {
    post_cost?: true
    post_allSeats?: true
    post_buydSeats?: true
    organizer_id?: true
    post_id?: true
    genre_id?: true
  }

  export type CreatedPostsSumAggregateInputType = {
    post_cost?: true
    post_allSeats?: true
    post_buydSeats?: true
    organizer_id?: true
    post_id?: true
    genre_id?: true
  }

  export type CreatedPostsMinAggregateInputType = {
    post_image?: true
    post_description?: true
    post_cost?: true
    post_meetingPlace?: true
    post_allSeats?: true
    post_buydSeats?: true
    post_checked?: true
    organizer_id?: true
    post_id?: true
    genre_id?: true
    post_name?: true
    post_meetDate?: true
    post_fullDescription?: true
  }

  export type CreatedPostsMaxAggregateInputType = {
    post_image?: true
    post_description?: true
    post_cost?: true
    post_meetingPlace?: true
    post_allSeats?: true
    post_buydSeats?: true
    post_checked?: true
    organizer_id?: true
    post_id?: true
    genre_id?: true
    post_name?: true
    post_meetDate?: true
    post_fullDescription?: true
  }

  export type CreatedPostsCountAggregateInputType = {
    post_image?: true
    post_description?: true
    post_cost?: true
    post_meetingPlace?: true
    post_allSeats?: true
    post_buydSeats?: true
    post_checked?: true
    organizer_id?: true
    post_id?: true
    genre_id?: true
    post_name?: true
    post_meetDate?: true
    post_fullDescription?: true
    _all?: true
  }

  export type CreatedPostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatedPosts to aggregate.
     */
    where?: CreatedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedPosts to fetch.
     */
    orderBy?: CreatedPostsOrderByWithRelationInput | CreatedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreatedPosts
    **/
    _count?: true | CreatedPostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreatedPostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreatedPostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatedPostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatedPostsMaxAggregateInputType
  }

  export type GetCreatedPostsAggregateType<T extends CreatedPostsAggregateArgs> = {
        [P in keyof T & keyof AggregateCreatedPosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreatedPosts[P]>
      : GetScalarType<T[P], AggregateCreatedPosts[P]>
  }




  export type CreatedPostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatedPostsWhereInput
    orderBy?: CreatedPostsOrderByWithAggregationInput | CreatedPostsOrderByWithAggregationInput[]
    by: CreatedPostsScalarFieldEnum[] | CreatedPostsScalarFieldEnum
    having?: CreatedPostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatedPostsCountAggregateInputType | true
    _avg?: CreatedPostsAvgAggregateInputType
    _sum?: CreatedPostsSumAggregateInputType
    _min?: CreatedPostsMinAggregateInputType
    _max?: CreatedPostsMaxAggregateInputType
  }

  export type CreatedPostsGroupByOutputType = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal
    post_buydSeats: Decimal
    post_checked: boolean | null
    organizer_id: number
    post_id: number
    genre_id: number
    post_name: string
    post_meetDate: Date
    post_fullDescription: string
    _count: CreatedPostsCountAggregateOutputType | null
    _avg: CreatedPostsAvgAggregateOutputType | null
    _sum: CreatedPostsSumAggregateOutputType | null
    _min: CreatedPostsMinAggregateOutputType | null
    _max: CreatedPostsMaxAggregateOutputType | null
  }

  type GetCreatedPostsGroupByPayload<T extends CreatedPostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreatedPostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatedPostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatedPostsGroupByOutputType[P]>
            : GetScalarType<T[P], CreatedPostsGroupByOutputType[P]>
        }
      >
    >


  export type CreatedPostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_image?: boolean
    post_description?: boolean
    post_cost?: boolean
    post_meetingPlace?: boolean
    post_allSeats?: boolean
    post_buydSeats?: boolean
    post_checked?: boolean
    organizer_id?: boolean
    post_id?: boolean
    genre_id?: boolean
    post_name?: boolean
    post_meetDate?: boolean
    post_fullDescription?: boolean
    Comments?: boolean | CreatedPosts$CommentsArgs<ExtArgs>
    Genres?: boolean | GenresDefaultArgs<ExtArgs>
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    Tickets?: boolean | CreatedPosts$TicketsArgs<ExtArgs>
    _count?: boolean | CreatedPostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["createdPosts"]>

  export type CreatedPostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_image?: boolean
    post_description?: boolean
    post_cost?: boolean
    post_meetingPlace?: boolean
    post_allSeats?: boolean
    post_buydSeats?: boolean
    post_checked?: boolean
    organizer_id?: boolean
    post_id?: boolean
    genre_id?: boolean
    post_name?: boolean
    post_meetDate?: boolean
    post_fullDescription?: boolean
    Genres?: boolean | GenresDefaultArgs<ExtArgs>
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["createdPosts"]>

  export type CreatedPostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_image?: boolean
    post_description?: boolean
    post_cost?: boolean
    post_meetingPlace?: boolean
    post_allSeats?: boolean
    post_buydSeats?: boolean
    post_checked?: boolean
    organizer_id?: boolean
    post_id?: boolean
    genre_id?: boolean
    post_name?: boolean
    post_meetDate?: boolean
    post_fullDescription?: boolean
    Genres?: boolean | GenresDefaultArgs<ExtArgs>
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["createdPosts"]>

  export type CreatedPostsSelectScalar = {
    post_image?: boolean
    post_description?: boolean
    post_cost?: boolean
    post_meetingPlace?: boolean
    post_allSeats?: boolean
    post_buydSeats?: boolean
    post_checked?: boolean
    organizer_id?: boolean
    post_id?: boolean
    genre_id?: boolean
    post_name?: boolean
    post_meetDate?: boolean
    post_fullDescription?: boolean
  }

  export type CreatedPostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_image" | "post_description" | "post_cost" | "post_meetingPlace" | "post_allSeats" | "post_buydSeats" | "post_checked" | "organizer_id" | "post_id" | "genre_id" | "post_name" | "post_meetDate" | "post_fullDescription", ExtArgs["result"]["createdPosts"]>
  export type CreatedPostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | CreatedPosts$CommentsArgs<ExtArgs>
    Genres?: boolean | GenresDefaultArgs<ExtArgs>
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
    Tickets?: boolean | CreatedPosts$TicketsArgs<ExtArgs>
    _count?: boolean | CreatedPostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreatedPostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Genres?: boolean | GenresDefaultArgs<ExtArgs>
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
  }
  export type CreatedPostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Genres?: boolean | GenresDefaultArgs<ExtArgs>
    Organizers?: boolean | OrganizersDefaultArgs<ExtArgs>
  }

  export type $CreatedPostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreatedPosts"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Genres: Prisma.$GenresPayload<ExtArgs>
      Organizers: Prisma.$OrganizersPayload<ExtArgs>
      Tickets: Prisma.$TicketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      post_image: string
      post_description: string
      post_cost: number
      post_meetingPlace: string
      post_allSeats: Prisma.Decimal
      post_buydSeats: Prisma.Decimal
      post_checked: boolean | null
      organizer_id: number
      post_id: number
      genre_id: number
      post_name: string
      post_meetDate: Date
      post_fullDescription: string
    }, ExtArgs["result"]["createdPosts"]>
    composites: {}
  }

  type CreatedPostsGetPayload<S extends boolean | null | undefined | CreatedPostsDefaultArgs> = $Result.GetResult<Prisma.$CreatedPostsPayload, S>

  type CreatedPostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreatedPostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreatedPostsCountAggregateInputType | true
    }

  export interface CreatedPostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreatedPosts'], meta: { name: 'CreatedPosts' } }
    /**
     * Find zero or one CreatedPosts that matches the filter.
     * @param {CreatedPostsFindUniqueArgs} args - Arguments to find a CreatedPosts
     * @example
     * // Get one CreatedPosts
     * const createdPosts = await prisma.createdPosts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreatedPostsFindUniqueArgs>(args: SelectSubset<T, CreatedPostsFindUniqueArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreatedPosts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreatedPostsFindUniqueOrThrowArgs} args - Arguments to find a CreatedPosts
     * @example
     * // Get one CreatedPosts
     * const createdPosts = await prisma.createdPosts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreatedPostsFindUniqueOrThrowArgs>(args: SelectSubset<T, CreatedPostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedPostsFindFirstArgs} args - Arguments to find a CreatedPosts
     * @example
     * // Get one CreatedPosts
     * const createdPosts = await prisma.createdPosts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreatedPostsFindFirstArgs>(args?: SelectSubset<T, CreatedPostsFindFirstArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatedPosts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedPostsFindFirstOrThrowArgs} args - Arguments to find a CreatedPosts
     * @example
     * // Get one CreatedPosts
     * const createdPosts = await prisma.createdPosts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreatedPostsFindFirstOrThrowArgs>(args?: SelectSubset<T, CreatedPostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreatedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedPostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreatedPosts
     * const createdPosts = await prisma.createdPosts.findMany()
     * 
     * // Get first 10 CreatedPosts
     * const createdPosts = await prisma.createdPosts.findMany({ take: 10 })
     * 
     * // Only select the `post_image`
     * const createdPostsWithPost_imageOnly = await prisma.createdPosts.findMany({ select: { post_image: true } })
     * 
     */
    findMany<T extends CreatedPostsFindManyArgs>(args?: SelectSubset<T, CreatedPostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreatedPosts.
     * @param {CreatedPostsCreateArgs} args - Arguments to create a CreatedPosts.
     * @example
     * // Create one CreatedPosts
     * const CreatedPosts = await prisma.createdPosts.create({
     *   data: {
     *     // ... data to create a CreatedPosts
     *   }
     * })
     * 
     */
    create<T extends CreatedPostsCreateArgs>(args: SelectSubset<T, CreatedPostsCreateArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreatedPosts.
     * @param {CreatedPostsCreateManyArgs} args - Arguments to create many CreatedPosts.
     * @example
     * // Create many CreatedPosts
     * const createdPosts = await prisma.createdPosts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreatedPostsCreateManyArgs>(args?: SelectSubset<T, CreatedPostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreatedPosts and returns the data saved in the database.
     * @param {CreatedPostsCreateManyAndReturnArgs} args - Arguments to create many CreatedPosts.
     * @example
     * // Create many CreatedPosts
     * const createdPosts = await prisma.createdPosts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreatedPosts and only return the `post_image`
     * const createdPostsWithPost_imageOnly = await prisma.createdPosts.createManyAndReturn({
     *   select: { post_image: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreatedPostsCreateManyAndReturnArgs>(args?: SelectSubset<T, CreatedPostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreatedPosts.
     * @param {CreatedPostsDeleteArgs} args - Arguments to delete one CreatedPosts.
     * @example
     * // Delete one CreatedPosts
     * const CreatedPosts = await prisma.createdPosts.delete({
     *   where: {
     *     // ... filter to delete one CreatedPosts
     *   }
     * })
     * 
     */
    delete<T extends CreatedPostsDeleteArgs>(args: SelectSubset<T, CreatedPostsDeleteArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreatedPosts.
     * @param {CreatedPostsUpdateArgs} args - Arguments to update one CreatedPosts.
     * @example
     * // Update one CreatedPosts
     * const createdPosts = await prisma.createdPosts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreatedPostsUpdateArgs>(args: SelectSubset<T, CreatedPostsUpdateArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreatedPosts.
     * @param {CreatedPostsDeleteManyArgs} args - Arguments to filter CreatedPosts to delete.
     * @example
     * // Delete a few CreatedPosts
     * const { count } = await prisma.createdPosts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreatedPostsDeleteManyArgs>(args?: SelectSubset<T, CreatedPostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedPostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreatedPosts
     * const createdPosts = await prisma.createdPosts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreatedPostsUpdateManyArgs>(args: SelectSubset<T, CreatedPostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatedPosts and returns the data updated in the database.
     * @param {CreatedPostsUpdateManyAndReturnArgs} args - Arguments to update many CreatedPosts.
     * @example
     * // Update many CreatedPosts
     * const createdPosts = await prisma.createdPosts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreatedPosts and only return the `post_image`
     * const createdPostsWithPost_imageOnly = await prisma.createdPosts.updateManyAndReturn({
     *   select: { post_image: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreatedPostsUpdateManyAndReturnArgs>(args: SelectSubset<T, CreatedPostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreatedPosts.
     * @param {CreatedPostsUpsertArgs} args - Arguments to update or create a CreatedPosts.
     * @example
     * // Update or create a CreatedPosts
     * const createdPosts = await prisma.createdPosts.upsert({
     *   create: {
     *     // ... data to create a CreatedPosts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreatedPosts we want to update
     *   }
     * })
     */
    upsert<T extends CreatedPostsUpsertArgs>(args: SelectSubset<T, CreatedPostsUpsertArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreatedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedPostsCountArgs} args - Arguments to filter CreatedPosts to count.
     * @example
     * // Count the number of CreatedPosts
     * const count = await prisma.createdPosts.count({
     *   where: {
     *     // ... the filter for the CreatedPosts we want to count
     *   }
     * })
    **/
    count<T extends CreatedPostsCountArgs>(
      args?: Subset<T, CreatedPostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatedPostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreatedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedPostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreatedPostsAggregateArgs>(args: Subset<T, CreatedPostsAggregateArgs>): Prisma.PrismaPromise<GetCreatedPostsAggregateType<T>>

    /**
     * Group by CreatedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatedPostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreatedPostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatedPostsGroupByArgs['orderBy'] }
        : { orderBy?: CreatedPostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreatedPostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatedPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreatedPosts model
   */
  readonly fields: CreatedPostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreatedPosts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreatedPostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends CreatedPosts$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, CreatedPosts$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Genres<T extends GenresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenresDefaultArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Organizers<T extends OrganizersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizersDefaultArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tickets<T extends CreatedPosts$TicketsArgs<ExtArgs> = {}>(args?: Subset<T, CreatedPosts$TicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreatedPosts model
   */
  interface CreatedPostsFieldRefs {
    readonly post_image: FieldRef<"CreatedPosts", 'String'>
    readonly post_description: FieldRef<"CreatedPosts", 'String'>
    readonly post_cost: FieldRef<"CreatedPosts", 'Int'>
    readonly post_meetingPlace: FieldRef<"CreatedPosts", 'String'>
    readonly post_allSeats: FieldRef<"CreatedPosts", 'Decimal'>
    readonly post_buydSeats: FieldRef<"CreatedPosts", 'Decimal'>
    readonly post_checked: FieldRef<"CreatedPosts", 'Boolean'>
    readonly organizer_id: FieldRef<"CreatedPosts", 'Int'>
    readonly post_id: FieldRef<"CreatedPosts", 'Int'>
    readonly genre_id: FieldRef<"CreatedPosts", 'Int'>
    readonly post_name: FieldRef<"CreatedPosts", 'String'>
    readonly post_meetDate: FieldRef<"CreatedPosts", 'DateTime'>
    readonly post_fullDescription: FieldRef<"CreatedPosts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreatedPosts findUnique
   */
  export type CreatedPostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * Filter, which CreatedPosts to fetch.
     */
    where: CreatedPostsWhereUniqueInput
  }

  /**
   * CreatedPosts findUniqueOrThrow
   */
  export type CreatedPostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * Filter, which CreatedPosts to fetch.
     */
    where: CreatedPostsWhereUniqueInput
  }

  /**
   * CreatedPosts findFirst
   */
  export type CreatedPostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * Filter, which CreatedPosts to fetch.
     */
    where?: CreatedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedPosts to fetch.
     */
    orderBy?: CreatedPostsOrderByWithRelationInput | CreatedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatedPosts.
     */
    cursor?: CreatedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatedPosts.
     */
    distinct?: CreatedPostsScalarFieldEnum | CreatedPostsScalarFieldEnum[]
  }

  /**
   * CreatedPosts findFirstOrThrow
   */
  export type CreatedPostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * Filter, which CreatedPosts to fetch.
     */
    where?: CreatedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedPosts to fetch.
     */
    orderBy?: CreatedPostsOrderByWithRelationInput | CreatedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatedPosts.
     */
    cursor?: CreatedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatedPosts.
     */
    distinct?: CreatedPostsScalarFieldEnum | CreatedPostsScalarFieldEnum[]
  }

  /**
   * CreatedPosts findMany
   */
  export type CreatedPostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * Filter, which CreatedPosts to fetch.
     */
    where?: CreatedPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatedPosts to fetch.
     */
    orderBy?: CreatedPostsOrderByWithRelationInput | CreatedPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreatedPosts.
     */
    cursor?: CreatedPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatedPosts.
     */
    skip?: number
    distinct?: CreatedPostsScalarFieldEnum | CreatedPostsScalarFieldEnum[]
  }

  /**
   * CreatedPosts create
   */
  export type CreatedPostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * The data needed to create a CreatedPosts.
     */
    data: XOR<CreatedPostsCreateInput, CreatedPostsUncheckedCreateInput>
  }

  /**
   * CreatedPosts createMany
   */
  export type CreatedPostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreatedPosts.
     */
    data: CreatedPostsCreateManyInput | CreatedPostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreatedPosts createManyAndReturn
   */
  export type CreatedPostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * The data used to create many CreatedPosts.
     */
    data: CreatedPostsCreateManyInput | CreatedPostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatedPosts update
   */
  export type CreatedPostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * The data needed to update a CreatedPosts.
     */
    data: XOR<CreatedPostsUpdateInput, CreatedPostsUncheckedUpdateInput>
    /**
     * Choose, which CreatedPosts to update.
     */
    where: CreatedPostsWhereUniqueInput
  }

  /**
   * CreatedPosts updateMany
   */
  export type CreatedPostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreatedPosts.
     */
    data: XOR<CreatedPostsUpdateManyMutationInput, CreatedPostsUncheckedUpdateManyInput>
    /**
     * Filter which CreatedPosts to update
     */
    where?: CreatedPostsWhereInput
    /**
     * Limit how many CreatedPosts to update.
     */
    limit?: number
  }

  /**
   * CreatedPosts updateManyAndReturn
   */
  export type CreatedPostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * The data used to update CreatedPosts.
     */
    data: XOR<CreatedPostsUpdateManyMutationInput, CreatedPostsUncheckedUpdateManyInput>
    /**
     * Filter which CreatedPosts to update
     */
    where?: CreatedPostsWhereInput
    /**
     * Limit how many CreatedPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatedPosts upsert
   */
  export type CreatedPostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * The filter to search for the CreatedPosts to update in case it exists.
     */
    where: CreatedPostsWhereUniqueInput
    /**
     * In case the CreatedPosts found by the `where` argument doesn't exist, create a new CreatedPosts with this data.
     */
    create: XOR<CreatedPostsCreateInput, CreatedPostsUncheckedCreateInput>
    /**
     * In case the CreatedPosts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatedPostsUpdateInput, CreatedPostsUncheckedUpdateInput>
  }

  /**
   * CreatedPosts delete
   */
  export type CreatedPostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    /**
     * Filter which CreatedPosts to delete.
     */
    where: CreatedPostsWhereUniqueInput
  }

  /**
   * CreatedPosts deleteMany
   */
  export type CreatedPostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatedPosts to delete
     */
    where?: CreatedPostsWhereInput
    /**
     * Limit how many CreatedPosts to delete.
     */
    limit?: number
  }

  /**
   * CreatedPosts.Comments
   */
  export type CreatedPosts$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * CreatedPosts.Tickets
   */
  export type CreatedPosts$TicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    cursor?: TicketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * CreatedPosts without action
   */
  export type CreatedPostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
  }


  /**
   * Model Genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    genre_id: number | null
    sphere_id: number | null
  }

  export type GenresSumAggregateOutputType = {
    genre_id: number | null
    sphere_id: number | null
  }

  export type GenresMinAggregateOutputType = {
    genre_id: number | null
    genre_name: string | null
    genre_description: string | null
    sphere_id: number | null
  }

  export type GenresMaxAggregateOutputType = {
    genre_id: number | null
    genre_name: string | null
    genre_description: string | null
    sphere_id: number | null
  }

  export type GenresCountAggregateOutputType = {
    genre_id: number
    genre_name: number
    genre_description: number
    sphere_id: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    genre_id?: true
    sphere_id?: true
  }

  export type GenresSumAggregateInputType = {
    genre_id?: true
    sphere_id?: true
  }

  export type GenresMinAggregateInputType = {
    genre_id?: true
    genre_name?: true
    genre_description?: true
    sphere_id?: true
  }

  export type GenresMaxAggregateInputType = {
    genre_id?: true
    genre_name?: true
    genre_description?: true
    sphere_id?: true
  }

  export type GenresCountAggregateInputType = {
    genre_id?: true
    genre_name?: true
    genre_description?: true
    sphere_id?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type GenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithAggregationInput | GenresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: GenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    genre_id: number
    genre_name: string
    genre_description: string
    sphere_id: number
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type GenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    genre_name?: boolean
    genre_description?: boolean
    sphere_id?: boolean
    CreatedPosts?: boolean | Genres$CreatedPostsArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    genre_name?: boolean
    genre_description?: boolean
    sphere_id?: boolean
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    genre_name?: boolean
    genre_description?: boolean
    sphere_id?: boolean
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectScalar = {
    genre_id?: boolean
    genre_name?: boolean
    genre_description?: boolean
    sphere_id?: boolean
  }

  export type GenresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"genre_id" | "genre_name" | "genre_description" | "sphere_id", ExtArgs["result"]["genres"]>
  export type GenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedPosts?: boolean | Genres$CreatedPostsArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
  }
  export type GenresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
  }

  export type $GenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genres"
    objects: {
      CreatedPosts: Prisma.$CreatedPostsPayload<ExtArgs>[]
      Sphere: Prisma.$SpherePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      genre_id: number
      genre_name: string
      genre_description: string
      sphere_id: number
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type GenresGetPayload<S extends boolean | null | undefined | GenresDefaultArgs> = $Result.GetResult<Prisma.$GenresPayload, S>

  type GenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface GenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genres'], meta: { name: 'Genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenresFindUniqueArgs>(args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs>(args: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenresFindFirstArgs>(args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs>(args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `genre_id`
     * const genresWithGenre_idOnly = await prisma.genres.findMany({ select: { genre_id: true } })
     * 
     */
    findMany<T extends GenresFindManyArgs>(args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends GenresCreateArgs>(args: SelectSubset<T, GenresCreateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenresCreateManyArgs>(args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `genre_id`
     * const genresWithGenre_idOnly = await prisma.genres.createManyAndReturn({
     *   select: { genre_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenresCreateManyAndReturnArgs>(args?: SelectSubset<T, GenresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends GenresDeleteArgs>(args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenresUpdateArgs>(args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenresDeleteManyArgs>(args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenresUpdateManyArgs>(args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenresUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `genre_id`
     * const genresWithGenre_idOnly = await prisma.genres.updateManyAndReturn({
     *   select: { genre_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenresUpdateManyAndReturnArgs>(args: SelectSubset<T, GenresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends GenresUpsertArgs>(args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genres model
   */
  readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CreatedPosts<T extends Genres$CreatedPostsArgs<ExtArgs> = {}>(args?: Subset<T, Genres$CreatedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sphere<T extends SphereDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SphereDefaultArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genres model
   */
  interface GenresFieldRefs {
    readonly genre_id: FieldRef<"Genres", 'Int'>
    readonly genre_name: FieldRef<"Genres", 'String'>
    readonly genre_description: FieldRef<"Genres", 'String'>
    readonly sphere_id: FieldRef<"Genres", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres create
   */
  export type GenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }

  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genres createManyAndReturn
   */
  export type GenresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Genres update
   */
  export type GenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genres updateManyAndReturn
   */
  export type GenresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }

  /**
   * Genres delete
   */
  export type GenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genres.CreatedPosts
   */
  export type Genres$CreatedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    where?: CreatedPostsWhereInput
    orderBy?: CreatedPostsOrderByWithRelationInput | CreatedPostsOrderByWithRelationInput[]
    cursor?: CreatedPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreatedPostsScalarFieldEnum | CreatedPostsScalarFieldEnum[]
  }

  /**
   * Genres without action
   */
  export type GenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
  }


  /**
   * Model Organizers
   */

  export type AggregateOrganizers = {
    _count: OrganizersCountAggregateOutputType | null
    _avg: OrganizersAvgAggregateOutputType | null
    _sum: OrganizersSumAggregateOutputType | null
    _min: OrganizersMinAggregateOutputType | null
    _max: OrganizersMaxAggregateOutputType | null
  }

  export type OrganizersAvgAggregateOutputType = {
    organizer_id: number | null
    sphere_id: number | null
    user_id: number | null
    callback_id: number | null
  }

  export type OrganizersSumAggregateOutputType = {
    organizer_id: number | null
    sphere_id: number | null
    user_id: number | null
    callback_id: number | null
  }

  export type OrganizersMinAggregateOutputType = {
    organizer_description: string | null
    organizer_verified: boolean | null
    organizer_phoneNum: string | null
    organizer_id: number | null
    sphere_id: number | null
    organizer_nickname: string | null
    user_id: number | null
    organizer_photo: string | null
    callback_id: number | null
    organizer_reasonToCancel: string | null
  }

  export type OrganizersMaxAggregateOutputType = {
    organizer_description: string | null
    organizer_verified: boolean | null
    organizer_phoneNum: string | null
    organizer_id: number | null
    sphere_id: number | null
    organizer_nickname: string | null
    user_id: number | null
    organizer_photo: string | null
    callback_id: number | null
    organizer_reasonToCancel: string | null
  }

  export type OrganizersCountAggregateOutputType = {
    organizer_description: number
    organizer_verified: number
    organizer_phoneNum: number
    organizer_id: number
    sphere_id: number
    organizer_nickname: number
    user_id: number
    organizer_photo: number
    callback_id: number
    organizer_reasonToCancel: number
    _all: number
  }


  export type OrganizersAvgAggregateInputType = {
    organizer_id?: true
    sphere_id?: true
    user_id?: true
    callback_id?: true
  }

  export type OrganizersSumAggregateInputType = {
    organizer_id?: true
    sphere_id?: true
    user_id?: true
    callback_id?: true
  }

  export type OrganizersMinAggregateInputType = {
    organizer_description?: true
    organizer_verified?: true
    organizer_phoneNum?: true
    organizer_id?: true
    sphere_id?: true
    organizer_nickname?: true
    user_id?: true
    organizer_photo?: true
    callback_id?: true
    organizer_reasonToCancel?: true
  }

  export type OrganizersMaxAggregateInputType = {
    organizer_description?: true
    organizer_verified?: true
    organizer_phoneNum?: true
    organizer_id?: true
    sphere_id?: true
    organizer_nickname?: true
    user_id?: true
    organizer_photo?: true
    callback_id?: true
    organizer_reasonToCancel?: true
  }

  export type OrganizersCountAggregateInputType = {
    organizer_description?: true
    organizer_verified?: true
    organizer_phoneNum?: true
    organizer_id?: true
    sphere_id?: true
    organizer_nickname?: true
    user_id?: true
    organizer_photo?: true
    callback_id?: true
    organizer_reasonToCancel?: true
    _all?: true
  }

  export type OrganizersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizers to aggregate.
     */
    where?: OrganizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizersOrderByWithRelationInput | OrganizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizers
    **/
    _count?: true | OrganizersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizersMaxAggregateInputType
  }

  export type GetOrganizersAggregateType<T extends OrganizersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizers[P]>
      : GetScalarType<T[P], AggregateOrganizers[P]>
  }




  export type OrganizersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizersWhereInput
    orderBy?: OrganizersOrderByWithAggregationInput | OrganizersOrderByWithAggregationInput[]
    by: OrganizersScalarFieldEnum[] | OrganizersScalarFieldEnum
    having?: OrganizersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizersCountAggregateInputType | true
    _avg?: OrganizersAvgAggregateInputType
    _sum?: OrganizersSumAggregateInputType
    _min?: OrganizersMinAggregateInputType
    _max?: OrganizersMaxAggregateInputType
  }

  export type OrganizersGroupByOutputType = {
    organizer_description: string
    organizer_verified: boolean | null
    organizer_phoneNum: string
    organizer_id: number
    sphere_id: number
    organizer_nickname: string
    user_id: number
    organizer_photo: string
    callback_id: number
    organizer_reasonToCancel: string | null
    _count: OrganizersCountAggregateOutputType | null
    _avg: OrganizersAvgAggregateOutputType | null
    _sum: OrganizersSumAggregateOutputType | null
    _min: OrganizersMinAggregateOutputType | null
    _max: OrganizersMaxAggregateOutputType | null
  }

  type GetOrganizersGroupByPayload<T extends OrganizersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizersGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizersGroupByOutputType[P]>
        }
      >
    >


  export type OrganizersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizer_description?: boolean
    organizer_verified?: boolean
    organizer_phoneNum?: boolean
    organizer_id?: boolean
    sphere_id?: boolean
    organizer_nickname?: boolean
    user_id?: boolean
    organizer_photo?: boolean
    callback_id?: boolean
    organizer_reasonToCancel?: boolean
    Comments?: boolean | Organizers$CommentsArgs<ExtArgs>
    CreatedPosts?: boolean | Organizers$CreatedPostsArgs<ExtArgs>
    callbacks?: boolean | callbacksDefaultArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | OrganizersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizers"]>

  export type OrganizersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizer_description?: boolean
    organizer_verified?: boolean
    organizer_phoneNum?: boolean
    organizer_id?: boolean
    sphere_id?: boolean
    organizer_nickname?: boolean
    user_id?: boolean
    organizer_photo?: boolean
    callback_id?: boolean
    organizer_reasonToCancel?: boolean
    callbacks?: boolean | callbacksDefaultArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizers"]>

  export type OrganizersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizer_description?: boolean
    organizer_verified?: boolean
    organizer_phoneNum?: boolean
    organizer_id?: boolean
    sphere_id?: boolean
    organizer_nickname?: boolean
    user_id?: boolean
    organizer_photo?: boolean
    callback_id?: boolean
    organizer_reasonToCancel?: boolean
    callbacks?: boolean | callbacksDefaultArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizers"]>

  export type OrganizersSelectScalar = {
    organizer_description?: boolean
    organizer_verified?: boolean
    organizer_phoneNum?: boolean
    organizer_id?: boolean
    sphere_id?: boolean
    organizer_nickname?: boolean
    user_id?: boolean
    organizer_photo?: boolean
    callback_id?: boolean
    organizer_reasonToCancel?: boolean
  }

  export type OrganizersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organizer_description" | "organizer_verified" | "organizer_phoneNum" | "organizer_id" | "sphere_id" | "organizer_nickname" | "user_id" | "organizer_photo" | "callback_id" | "organizer_reasonToCancel", ExtArgs["result"]["organizers"]>
  export type OrganizersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Organizers$CommentsArgs<ExtArgs>
    CreatedPosts?: boolean | Organizers$CreatedPostsArgs<ExtArgs>
    callbacks?: boolean | callbacksDefaultArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | OrganizersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    callbacks?: boolean | callbacksDefaultArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrganizersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    callbacks?: boolean | callbacksDefaultArgs<ExtArgs>
    Sphere?: boolean | SphereDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrganizersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organizers"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      CreatedPosts: Prisma.$CreatedPostsPayload<ExtArgs>[]
      callbacks: Prisma.$callbacksPayload<ExtArgs>
      Sphere: Prisma.$SpherePayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      organizer_description: string
      organizer_verified: boolean | null
      organizer_phoneNum: string
      organizer_id: number
      sphere_id: number
      organizer_nickname: string
      user_id: number
      organizer_photo: string
      callback_id: number
      organizer_reasonToCancel: string | null
    }, ExtArgs["result"]["organizers"]>
    composites: {}
  }

  type OrganizersGetPayload<S extends boolean | null | undefined | OrganizersDefaultArgs> = $Result.GetResult<Prisma.$OrganizersPayload, S>

  type OrganizersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizersCountAggregateInputType | true
    }

  export interface OrganizersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organizers'], meta: { name: 'Organizers' } }
    /**
     * Find zero or one Organizers that matches the filter.
     * @param {OrganizersFindUniqueArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizersFindUniqueArgs>(args: SelectSubset<T, OrganizersFindUniqueArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizersFindUniqueOrThrowArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersFindFirstArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizersFindFirstArgs>(args?: SelectSubset<T, OrganizersFindFirstArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersFindFirstOrThrowArgs} args - Arguments to find a Organizers
     * @example
     * // Get one Organizers
     * const organizers = await prisma.organizers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizers.findMany()
     * 
     * // Get first 10 Organizers
     * const organizers = await prisma.organizers.findMany({ take: 10 })
     * 
     * // Only select the `organizer_description`
     * const organizersWithOrganizer_descriptionOnly = await prisma.organizers.findMany({ select: { organizer_description: true } })
     * 
     */
    findMany<T extends OrganizersFindManyArgs>(args?: SelectSubset<T, OrganizersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizers.
     * @param {OrganizersCreateArgs} args - Arguments to create a Organizers.
     * @example
     * // Create one Organizers
     * const Organizers = await prisma.organizers.create({
     *   data: {
     *     // ... data to create a Organizers
     *   }
     * })
     * 
     */
    create<T extends OrganizersCreateArgs>(args: SelectSubset<T, OrganizersCreateArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizers.
     * @param {OrganizersCreateManyArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizers = await prisma.organizers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizersCreateManyArgs>(args?: SelectSubset<T, OrganizersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizers and returns the data saved in the database.
     * @param {OrganizersCreateManyAndReturnArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizers = await prisma.organizers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizers and only return the `organizer_description`
     * const organizersWithOrganizer_descriptionOnly = await prisma.organizers.createManyAndReturn({
     *   select: { organizer_description: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizers.
     * @param {OrganizersDeleteArgs} args - Arguments to delete one Organizers.
     * @example
     * // Delete one Organizers
     * const Organizers = await prisma.organizers.delete({
     *   where: {
     *     // ... filter to delete one Organizers
     *   }
     * })
     * 
     */
    delete<T extends OrganizersDeleteArgs>(args: SelectSubset<T, OrganizersDeleteArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizers.
     * @param {OrganizersUpdateArgs} args - Arguments to update one Organizers.
     * @example
     * // Update one Organizers
     * const organizers = await prisma.organizers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizersUpdateArgs>(args: SelectSubset<T, OrganizersUpdateArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizers.
     * @param {OrganizersDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizersDeleteManyArgs>(args?: SelectSubset<T, OrganizersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizers = await prisma.organizers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizersUpdateManyArgs>(args: SelectSubset<T, OrganizersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers and returns the data updated in the database.
     * @param {OrganizersUpdateManyAndReturnArgs} args - Arguments to update many Organizers.
     * @example
     * // Update many Organizers
     * const organizers = await prisma.organizers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizers and only return the `organizer_description`
     * const organizersWithOrganizer_descriptionOnly = await prisma.organizers.updateManyAndReturn({
     *   select: { organizer_description: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizers.
     * @param {OrganizersUpsertArgs} args - Arguments to update or create a Organizers.
     * @example
     * // Update or create a Organizers
     * const organizers = await prisma.organizers.upsert({
     *   create: {
     *     // ... data to create a Organizers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizers we want to update
     *   }
     * })
     */
    upsert<T extends OrganizersUpsertArgs>(args: SelectSubset<T, OrganizersUpsertArgs<ExtArgs>>): Prisma__OrganizersClient<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizers.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
    **/
    count<T extends OrganizersCountArgs>(
      args?: Subset<T, OrganizersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizersAggregateArgs>(args: Subset<T, OrganizersAggregateArgs>): Prisma.PrismaPromise<GetOrganizersAggregateType<T>>

    /**
     * Group by Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizersGroupByArgs['orderBy'] }
        : { orderBy?: OrganizersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organizers model
   */
  readonly fields: OrganizersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends Organizers$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Organizers$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CreatedPosts<T extends Organizers$CreatedPostsArgs<ExtArgs> = {}>(args?: Subset<T, Organizers$CreatedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    callbacks<T extends callbacksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, callbacksDefaultArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sphere<T extends SphereDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SphereDefaultArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organizers model
   */
  interface OrganizersFieldRefs {
    readonly organizer_description: FieldRef<"Organizers", 'String'>
    readonly organizer_verified: FieldRef<"Organizers", 'Boolean'>
    readonly organizer_phoneNum: FieldRef<"Organizers", 'String'>
    readonly organizer_id: FieldRef<"Organizers", 'Int'>
    readonly sphere_id: FieldRef<"Organizers", 'Int'>
    readonly organizer_nickname: FieldRef<"Organizers", 'String'>
    readonly user_id: FieldRef<"Organizers", 'Int'>
    readonly organizer_photo: FieldRef<"Organizers", 'String'>
    readonly callback_id: FieldRef<"Organizers", 'Int'>
    readonly organizer_reasonToCancel: FieldRef<"Organizers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organizers findUnique
   */
  export type OrganizersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where: OrganizersWhereUniqueInput
  }

  /**
   * Organizers findUniqueOrThrow
   */
  export type OrganizersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where: OrganizersWhereUniqueInput
  }

  /**
   * Organizers findFirst
   */
  export type OrganizersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizersOrderByWithRelationInput | OrganizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * Organizers findFirstOrThrow
   */
  export type OrganizersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizersOrderByWithRelationInput | OrganizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * Organizers findMany
   */
  export type OrganizersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizersOrderByWithRelationInput | OrganizersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizers.
     */
    cursor?: OrganizersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * Organizers create
   */
  export type OrganizersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * The data needed to create a Organizers.
     */
    data: XOR<OrganizersCreateInput, OrganizersUncheckedCreateInput>
  }

  /**
   * Organizers createMany
   */
  export type OrganizersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizers.
     */
    data: OrganizersCreateManyInput | OrganizersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizers createManyAndReturn
   */
  export type OrganizersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * The data used to create many Organizers.
     */
    data: OrganizersCreateManyInput | OrganizersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organizers update
   */
  export type OrganizersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * The data needed to update a Organizers.
     */
    data: XOR<OrganizersUpdateInput, OrganizersUncheckedUpdateInput>
    /**
     * Choose, which Organizers to update.
     */
    where: OrganizersWhereUniqueInput
  }

  /**
   * Organizers updateMany
   */
  export type OrganizersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizers.
     */
    data: XOR<OrganizersUpdateManyMutationInput, OrganizersUncheckedUpdateManyInput>
    /**
     * Filter which Organizers to update
     */
    where?: OrganizersWhereInput
    /**
     * Limit how many Organizers to update.
     */
    limit?: number
  }

  /**
   * Organizers updateManyAndReturn
   */
  export type OrganizersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * The data used to update Organizers.
     */
    data: XOR<OrganizersUpdateManyMutationInput, OrganizersUncheckedUpdateManyInput>
    /**
     * Filter which Organizers to update
     */
    where?: OrganizersWhereInput
    /**
     * Limit how many Organizers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organizers upsert
   */
  export type OrganizersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * The filter to search for the Organizers to update in case it exists.
     */
    where: OrganizersWhereUniqueInput
    /**
     * In case the Organizers found by the `where` argument doesn't exist, create a new Organizers with this data.
     */
    create: XOR<OrganizersCreateInput, OrganizersUncheckedCreateInput>
    /**
     * In case the Organizers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizersUpdateInput, OrganizersUncheckedUpdateInput>
  }

  /**
   * Organizers delete
   */
  export type OrganizersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    /**
     * Filter which Organizers to delete.
     */
    where: OrganizersWhereUniqueInput
  }

  /**
   * Organizers deleteMany
   */
  export type OrganizersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizers to delete
     */
    where?: OrganizersWhereInput
    /**
     * Limit how many Organizers to delete.
     */
    limit?: number
  }

  /**
   * Organizers.Comments
   */
  export type Organizers$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Organizers.CreatedPosts
   */
  export type Organizers$CreatedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    where?: CreatedPostsWhereInput
    orderBy?: CreatedPostsOrderByWithRelationInput | CreatedPostsOrderByWithRelationInput[]
    cursor?: CreatedPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreatedPostsScalarFieldEnum | CreatedPostsScalarFieldEnum[]
  }

  /**
   * Organizers without action
   */
  export type OrganizersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
  }


  /**
   * Model ReasonsToRefund
   */

  export type AggregateReasonsToRefund = {
    _count: ReasonsToRefundCountAggregateOutputType | null
    _avg: ReasonsToRefundAvgAggregateOutputType | null
    _sum: ReasonsToRefundSumAggregateOutputType | null
    _min: ReasonsToRefundMinAggregateOutputType | null
    _max: ReasonsToRefundMaxAggregateOutputType | null
  }

  export type ReasonsToRefundAvgAggregateOutputType = {
    reason_id: number | null
  }

  export type ReasonsToRefundSumAggregateOutputType = {
    reason_id: number | null
  }

  export type ReasonsToRefundMinAggregateOutputType = {
    reason_id: number | null
    reason_name: string | null
    reason_description: string | null
  }

  export type ReasonsToRefundMaxAggregateOutputType = {
    reason_id: number | null
    reason_name: string | null
    reason_description: string | null
  }

  export type ReasonsToRefundCountAggregateOutputType = {
    reason_id: number
    reason_name: number
    reason_description: number
    _all: number
  }


  export type ReasonsToRefundAvgAggregateInputType = {
    reason_id?: true
  }

  export type ReasonsToRefundSumAggregateInputType = {
    reason_id?: true
  }

  export type ReasonsToRefundMinAggregateInputType = {
    reason_id?: true
    reason_name?: true
    reason_description?: true
  }

  export type ReasonsToRefundMaxAggregateInputType = {
    reason_id?: true
    reason_name?: true
    reason_description?: true
  }

  export type ReasonsToRefundCountAggregateInputType = {
    reason_id?: true
    reason_name?: true
    reason_description?: true
    _all?: true
  }

  export type ReasonsToRefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReasonsToRefund to aggregate.
     */
    where?: ReasonsToRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReasonsToRefunds to fetch.
     */
    orderBy?: ReasonsToRefundOrderByWithRelationInput | ReasonsToRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReasonsToRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReasonsToRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReasonsToRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReasonsToRefunds
    **/
    _count?: true | ReasonsToRefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReasonsToRefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReasonsToRefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReasonsToRefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReasonsToRefundMaxAggregateInputType
  }

  export type GetReasonsToRefundAggregateType<T extends ReasonsToRefundAggregateArgs> = {
        [P in keyof T & keyof AggregateReasonsToRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReasonsToRefund[P]>
      : GetScalarType<T[P], AggregateReasonsToRefund[P]>
  }




  export type ReasonsToRefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReasonsToRefundWhereInput
    orderBy?: ReasonsToRefundOrderByWithAggregationInput | ReasonsToRefundOrderByWithAggregationInput[]
    by: ReasonsToRefundScalarFieldEnum[] | ReasonsToRefundScalarFieldEnum
    having?: ReasonsToRefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReasonsToRefundCountAggregateInputType | true
    _avg?: ReasonsToRefundAvgAggregateInputType
    _sum?: ReasonsToRefundSumAggregateInputType
    _min?: ReasonsToRefundMinAggregateInputType
    _max?: ReasonsToRefundMaxAggregateInputType
  }

  export type ReasonsToRefundGroupByOutputType = {
    reason_id: number
    reason_name: string
    reason_description: string
    _count: ReasonsToRefundCountAggregateOutputType | null
    _avg: ReasonsToRefundAvgAggregateOutputType | null
    _sum: ReasonsToRefundSumAggregateOutputType | null
    _min: ReasonsToRefundMinAggregateOutputType | null
    _max: ReasonsToRefundMaxAggregateOutputType | null
  }

  type GetReasonsToRefundGroupByPayload<T extends ReasonsToRefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReasonsToRefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReasonsToRefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReasonsToRefundGroupByOutputType[P]>
            : GetScalarType<T[P], ReasonsToRefundGroupByOutputType[P]>
        }
      >
    >


  export type ReasonsToRefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reason_id?: boolean
    reason_name?: boolean
    reason_description?: boolean
    TicketRefund?: boolean | ReasonsToRefund$TicketRefundArgs<ExtArgs>
    _count?: boolean | ReasonsToRefundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reasonsToRefund"]>

  export type ReasonsToRefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reason_id?: boolean
    reason_name?: boolean
    reason_description?: boolean
  }, ExtArgs["result"]["reasonsToRefund"]>

  export type ReasonsToRefundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reason_id?: boolean
    reason_name?: boolean
    reason_description?: boolean
  }, ExtArgs["result"]["reasonsToRefund"]>

  export type ReasonsToRefundSelectScalar = {
    reason_id?: boolean
    reason_name?: boolean
    reason_description?: boolean
  }

  export type ReasonsToRefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reason_id" | "reason_name" | "reason_description", ExtArgs["result"]["reasonsToRefund"]>
  export type ReasonsToRefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketRefund?: boolean | ReasonsToRefund$TicketRefundArgs<ExtArgs>
    _count?: boolean | ReasonsToRefundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReasonsToRefundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReasonsToRefundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReasonsToRefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReasonsToRefund"
    objects: {
      TicketRefund: Prisma.$TicketRefundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      reason_id: number
      reason_name: string
      reason_description: string
    }, ExtArgs["result"]["reasonsToRefund"]>
    composites: {}
  }

  type ReasonsToRefundGetPayload<S extends boolean | null | undefined | ReasonsToRefundDefaultArgs> = $Result.GetResult<Prisma.$ReasonsToRefundPayload, S>

  type ReasonsToRefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReasonsToRefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReasonsToRefundCountAggregateInputType | true
    }

  export interface ReasonsToRefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReasonsToRefund'], meta: { name: 'ReasonsToRefund' } }
    /**
     * Find zero or one ReasonsToRefund that matches the filter.
     * @param {ReasonsToRefundFindUniqueArgs} args - Arguments to find a ReasonsToRefund
     * @example
     * // Get one ReasonsToRefund
     * const reasonsToRefund = await prisma.reasonsToRefund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReasonsToRefundFindUniqueArgs>(args: SelectSubset<T, ReasonsToRefundFindUniqueArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReasonsToRefund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReasonsToRefundFindUniqueOrThrowArgs} args - Arguments to find a ReasonsToRefund
     * @example
     * // Get one ReasonsToRefund
     * const reasonsToRefund = await prisma.reasonsToRefund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReasonsToRefundFindUniqueOrThrowArgs>(args: SelectSubset<T, ReasonsToRefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReasonsToRefund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReasonsToRefundFindFirstArgs} args - Arguments to find a ReasonsToRefund
     * @example
     * // Get one ReasonsToRefund
     * const reasonsToRefund = await prisma.reasonsToRefund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReasonsToRefundFindFirstArgs>(args?: SelectSubset<T, ReasonsToRefundFindFirstArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReasonsToRefund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReasonsToRefundFindFirstOrThrowArgs} args - Arguments to find a ReasonsToRefund
     * @example
     * // Get one ReasonsToRefund
     * const reasonsToRefund = await prisma.reasonsToRefund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReasonsToRefundFindFirstOrThrowArgs>(args?: SelectSubset<T, ReasonsToRefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReasonsToRefunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReasonsToRefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReasonsToRefunds
     * const reasonsToRefunds = await prisma.reasonsToRefund.findMany()
     * 
     * // Get first 10 ReasonsToRefunds
     * const reasonsToRefunds = await prisma.reasonsToRefund.findMany({ take: 10 })
     * 
     * // Only select the `reason_id`
     * const reasonsToRefundWithReason_idOnly = await prisma.reasonsToRefund.findMany({ select: { reason_id: true } })
     * 
     */
    findMany<T extends ReasonsToRefundFindManyArgs>(args?: SelectSubset<T, ReasonsToRefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReasonsToRefund.
     * @param {ReasonsToRefundCreateArgs} args - Arguments to create a ReasonsToRefund.
     * @example
     * // Create one ReasonsToRefund
     * const ReasonsToRefund = await prisma.reasonsToRefund.create({
     *   data: {
     *     // ... data to create a ReasonsToRefund
     *   }
     * })
     * 
     */
    create<T extends ReasonsToRefundCreateArgs>(args: SelectSubset<T, ReasonsToRefundCreateArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReasonsToRefunds.
     * @param {ReasonsToRefundCreateManyArgs} args - Arguments to create many ReasonsToRefunds.
     * @example
     * // Create many ReasonsToRefunds
     * const reasonsToRefund = await prisma.reasonsToRefund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReasonsToRefundCreateManyArgs>(args?: SelectSubset<T, ReasonsToRefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReasonsToRefunds and returns the data saved in the database.
     * @param {ReasonsToRefundCreateManyAndReturnArgs} args - Arguments to create many ReasonsToRefunds.
     * @example
     * // Create many ReasonsToRefunds
     * const reasonsToRefund = await prisma.reasonsToRefund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReasonsToRefunds and only return the `reason_id`
     * const reasonsToRefundWithReason_idOnly = await prisma.reasonsToRefund.createManyAndReturn({
     *   select: { reason_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReasonsToRefundCreateManyAndReturnArgs>(args?: SelectSubset<T, ReasonsToRefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReasonsToRefund.
     * @param {ReasonsToRefundDeleteArgs} args - Arguments to delete one ReasonsToRefund.
     * @example
     * // Delete one ReasonsToRefund
     * const ReasonsToRefund = await prisma.reasonsToRefund.delete({
     *   where: {
     *     // ... filter to delete one ReasonsToRefund
     *   }
     * })
     * 
     */
    delete<T extends ReasonsToRefundDeleteArgs>(args: SelectSubset<T, ReasonsToRefundDeleteArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReasonsToRefund.
     * @param {ReasonsToRefundUpdateArgs} args - Arguments to update one ReasonsToRefund.
     * @example
     * // Update one ReasonsToRefund
     * const reasonsToRefund = await prisma.reasonsToRefund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReasonsToRefundUpdateArgs>(args: SelectSubset<T, ReasonsToRefundUpdateArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReasonsToRefunds.
     * @param {ReasonsToRefundDeleteManyArgs} args - Arguments to filter ReasonsToRefunds to delete.
     * @example
     * // Delete a few ReasonsToRefunds
     * const { count } = await prisma.reasonsToRefund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReasonsToRefundDeleteManyArgs>(args?: SelectSubset<T, ReasonsToRefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReasonsToRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReasonsToRefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReasonsToRefunds
     * const reasonsToRefund = await prisma.reasonsToRefund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReasonsToRefundUpdateManyArgs>(args: SelectSubset<T, ReasonsToRefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReasonsToRefunds and returns the data updated in the database.
     * @param {ReasonsToRefundUpdateManyAndReturnArgs} args - Arguments to update many ReasonsToRefunds.
     * @example
     * // Update many ReasonsToRefunds
     * const reasonsToRefund = await prisma.reasonsToRefund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReasonsToRefunds and only return the `reason_id`
     * const reasonsToRefundWithReason_idOnly = await prisma.reasonsToRefund.updateManyAndReturn({
     *   select: { reason_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReasonsToRefundUpdateManyAndReturnArgs>(args: SelectSubset<T, ReasonsToRefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReasonsToRefund.
     * @param {ReasonsToRefundUpsertArgs} args - Arguments to update or create a ReasonsToRefund.
     * @example
     * // Update or create a ReasonsToRefund
     * const reasonsToRefund = await prisma.reasonsToRefund.upsert({
     *   create: {
     *     // ... data to create a ReasonsToRefund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReasonsToRefund we want to update
     *   }
     * })
     */
    upsert<T extends ReasonsToRefundUpsertArgs>(args: SelectSubset<T, ReasonsToRefundUpsertArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReasonsToRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReasonsToRefundCountArgs} args - Arguments to filter ReasonsToRefunds to count.
     * @example
     * // Count the number of ReasonsToRefunds
     * const count = await prisma.reasonsToRefund.count({
     *   where: {
     *     // ... the filter for the ReasonsToRefunds we want to count
     *   }
     * })
    **/
    count<T extends ReasonsToRefundCountArgs>(
      args?: Subset<T, ReasonsToRefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReasonsToRefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReasonsToRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReasonsToRefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReasonsToRefundAggregateArgs>(args: Subset<T, ReasonsToRefundAggregateArgs>): Prisma.PrismaPromise<GetReasonsToRefundAggregateType<T>>

    /**
     * Group by ReasonsToRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReasonsToRefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReasonsToRefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReasonsToRefundGroupByArgs['orderBy'] }
        : { orderBy?: ReasonsToRefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReasonsToRefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReasonsToRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReasonsToRefund model
   */
  readonly fields: ReasonsToRefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReasonsToRefund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReasonsToRefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TicketRefund<T extends ReasonsToRefund$TicketRefundArgs<ExtArgs> = {}>(args?: Subset<T, ReasonsToRefund$TicketRefundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReasonsToRefund model
   */
  interface ReasonsToRefundFieldRefs {
    readonly reason_id: FieldRef<"ReasonsToRefund", 'Int'>
    readonly reason_name: FieldRef<"ReasonsToRefund", 'String'>
    readonly reason_description: FieldRef<"ReasonsToRefund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReasonsToRefund findUnique
   */
  export type ReasonsToRefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * Filter, which ReasonsToRefund to fetch.
     */
    where: ReasonsToRefundWhereUniqueInput
  }

  /**
   * ReasonsToRefund findUniqueOrThrow
   */
  export type ReasonsToRefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * Filter, which ReasonsToRefund to fetch.
     */
    where: ReasonsToRefundWhereUniqueInput
  }

  /**
   * ReasonsToRefund findFirst
   */
  export type ReasonsToRefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * Filter, which ReasonsToRefund to fetch.
     */
    where?: ReasonsToRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReasonsToRefunds to fetch.
     */
    orderBy?: ReasonsToRefundOrderByWithRelationInput | ReasonsToRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReasonsToRefunds.
     */
    cursor?: ReasonsToRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReasonsToRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReasonsToRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReasonsToRefunds.
     */
    distinct?: ReasonsToRefundScalarFieldEnum | ReasonsToRefundScalarFieldEnum[]
  }

  /**
   * ReasonsToRefund findFirstOrThrow
   */
  export type ReasonsToRefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * Filter, which ReasonsToRefund to fetch.
     */
    where?: ReasonsToRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReasonsToRefunds to fetch.
     */
    orderBy?: ReasonsToRefundOrderByWithRelationInput | ReasonsToRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReasonsToRefunds.
     */
    cursor?: ReasonsToRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReasonsToRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReasonsToRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReasonsToRefunds.
     */
    distinct?: ReasonsToRefundScalarFieldEnum | ReasonsToRefundScalarFieldEnum[]
  }

  /**
   * ReasonsToRefund findMany
   */
  export type ReasonsToRefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * Filter, which ReasonsToRefunds to fetch.
     */
    where?: ReasonsToRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReasonsToRefunds to fetch.
     */
    orderBy?: ReasonsToRefundOrderByWithRelationInput | ReasonsToRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReasonsToRefunds.
     */
    cursor?: ReasonsToRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReasonsToRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReasonsToRefunds.
     */
    skip?: number
    distinct?: ReasonsToRefundScalarFieldEnum | ReasonsToRefundScalarFieldEnum[]
  }

  /**
   * ReasonsToRefund create
   */
  export type ReasonsToRefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * The data needed to create a ReasonsToRefund.
     */
    data: XOR<ReasonsToRefundCreateInput, ReasonsToRefundUncheckedCreateInput>
  }

  /**
   * ReasonsToRefund createMany
   */
  export type ReasonsToRefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReasonsToRefunds.
     */
    data: ReasonsToRefundCreateManyInput | ReasonsToRefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReasonsToRefund createManyAndReturn
   */
  export type ReasonsToRefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * The data used to create many ReasonsToRefunds.
     */
    data: ReasonsToRefundCreateManyInput | ReasonsToRefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReasonsToRefund update
   */
  export type ReasonsToRefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * The data needed to update a ReasonsToRefund.
     */
    data: XOR<ReasonsToRefundUpdateInput, ReasonsToRefundUncheckedUpdateInput>
    /**
     * Choose, which ReasonsToRefund to update.
     */
    where: ReasonsToRefundWhereUniqueInput
  }

  /**
   * ReasonsToRefund updateMany
   */
  export type ReasonsToRefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReasonsToRefunds.
     */
    data: XOR<ReasonsToRefundUpdateManyMutationInput, ReasonsToRefundUncheckedUpdateManyInput>
    /**
     * Filter which ReasonsToRefunds to update
     */
    where?: ReasonsToRefundWhereInput
    /**
     * Limit how many ReasonsToRefunds to update.
     */
    limit?: number
  }

  /**
   * ReasonsToRefund updateManyAndReturn
   */
  export type ReasonsToRefundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * The data used to update ReasonsToRefunds.
     */
    data: XOR<ReasonsToRefundUpdateManyMutationInput, ReasonsToRefundUncheckedUpdateManyInput>
    /**
     * Filter which ReasonsToRefunds to update
     */
    where?: ReasonsToRefundWhereInput
    /**
     * Limit how many ReasonsToRefunds to update.
     */
    limit?: number
  }

  /**
   * ReasonsToRefund upsert
   */
  export type ReasonsToRefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * The filter to search for the ReasonsToRefund to update in case it exists.
     */
    where: ReasonsToRefundWhereUniqueInput
    /**
     * In case the ReasonsToRefund found by the `where` argument doesn't exist, create a new ReasonsToRefund with this data.
     */
    create: XOR<ReasonsToRefundCreateInput, ReasonsToRefundUncheckedCreateInput>
    /**
     * In case the ReasonsToRefund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReasonsToRefundUpdateInput, ReasonsToRefundUncheckedUpdateInput>
  }

  /**
   * ReasonsToRefund delete
   */
  export type ReasonsToRefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
    /**
     * Filter which ReasonsToRefund to delete.
     */
    where: ReasonsToRefundWhereUniqueInput
  }

  /**
   * ReasonsToRefund deleteMany
   */
  export type ReasonsToRefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReasonsToRefunds to delete
     */
    where?: ReasonsToRefundWhereInput
    /**
     * Limit how many ReasonsToRefunds to delete.
     */
    limit?: number
  }

  /**
   * ReasonsToRefund.TicketRefund
   */
  export type ReasonsToRefund$TicketRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    where?: TicketRefundWhereInput
    orderBy?: TicketRefundOrderByWithRelationInput | TicketRefundOrderByWithRelationInput[]
    cursor?: TicketRefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketRefundScalarFieldEnum | TicketRefundScalarFieldEnum[]
  }

  /**
   * ReasonsToRefund without action
   */
  export type ReasonsToRefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReasonsToRefund
     */
    select?: ReasonsToRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReasonsToRefund
     */
    omit?: ReasonsToRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReasonsToRefundInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    role_id: number | null
  }

  export type RolesSumAggregateOutputType = {
    role_id: number | null
  }

  export type RolesMinAggregateOutputType = {
    role_name: string | null
    role_id: number | null
  }

  export type RolesMaxAggregateOutputType = {
    role_name: string | null
    role_id: number | null
  }

  export type RolesCountAggregateOutputType = {
    role_name: number
    role_id: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    role_id?: true
  }

  export type RolesSumAggregateInputType = {
    role_id?: true
  }

  export type RolesMinAggregateInputType = {
    role_name?: true
    role_id?: true
  }

  export type RolesMaxAggregateInputType = {
    role_name?: true
    role_id?: true
  }

  export type RolesCountAggregateInputType = {
    role_name?: true
    role_id?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    role_name: string
    role_id: number
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_name?: boolean
    role_id?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_name?: boolean
    role_id?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_name?: boolean
    role_id?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    role_name?: boolean
    role_id?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_name" | "role_id", ExtArgs["result"]["roles"]>

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      role_name: string
      role_id: number
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `role_name`
     * const rolesWithRole_nameOnly = await prisma.roles.findMany({ select: { role_name: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `role_name`
     * const rolesWithRole_nameOnly = await prisma.roles.createManyAndReturn({
     *   select: { role_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `role_name`
     * const rolesWithRole_nameOnly = await prisma.roles.updateManyAndReturn({
     *   select: { role_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly role_name: FieldRef<"Roles", 'String'>
    readonly role_id: FieldRef<"Roles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
  }


  /**
   * Model Sphere
   */

  export type AggregateSphere = {
    _count: SphereCountAggregateOutputType | null
    _avg: SphereAvgAggregateOutputType | null
    _sum: SphereSumAggregateOutputType | null
    _min: SphereMinAggregateOutputType | null
    _max: SphereMaxAggregateOutputType | null
  }

  export type SphereAvgAggregateOutputType = {
    sphere_id: number | null
  }

  export type SphereSumAggregateOutputType = {
    sphere_id: number | null
  }

  export type SphereMinAggregateOutputType = {
    sphere_id: number | null
    sphere_name: string | null
  }

  export type SphereMaxAggregateOutputType = {
    sphere_id: number | null
    sphere_name: string | null
  }

  export type SphereCountAggregateOutputType = {
    sphere_id: number
    sphere_name: number
    _all: number
  }


  export type SphereAvgAggregateInputType = {
    sphere_id?: true
  }

  export type SphereSumAggregateInputType = {
    sphere_id?: true
  }

  export type SphereMinAggregateInputType = {
    sphere_id?: true
    sphere_name?: true
  }

  export type SphereMaxAggregateInputType = {
    sphere_id?: true
    sphere_name?: true
  }

  export type SphereCountAggregateInputType = {
    sphere_id?: true
    sphere_name?: true
    _all?: true
  }

  export type SphereAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sphere to aggregate.
     */
    where?: SphereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spheres to fetch.
     */
    orderBy?: SphereOrderByWithRelationInput | SphereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SphereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spheres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spheres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spheres
    **/
    _count?: true | SphereCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SphereAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SphereSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SphereMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SphereMaxAggregateInputType
  }

  export type GetSphereAggregateType<T extends SphereAggregateArgs> = {
        [P in keyof T & keyof AggregateSphere]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSphere[P]>
      : GetScalarType<T[P], AggregateSphere[P]>
  }




  export type SphereGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SphereWhereInput
    orderBy?: SphereOrderByWithAggregationInput | SphereOrderByWithAggregationInput[]
    by: SphereScalarFieldEnum[] | SphereScalarFieldEnum
    having?: SphereScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SphereCountAggregateInputType | true
    _avg?: SphereAvgAggregateInputType
    _sum?: SphereSumAggregateInputType
    _min?: SphereMinAggregateInputType
    _max?: SphereMaxAggregateInputType
  }

  export type SphereGroupByOutputType = {
    sphere_id: number
    sphere_name: string
    _count: SphereCountAggregateOutputType | null
    _avg: SphereAvgAggregateOutputType | null
    _sum: SphereSumAggregateOutputType | null
    _min: SphereMinAggregateOutputType | null
    _max: SphereMaxAggregateOutputType | null
  }

  type GetSphereGroupByPayload<T extends SphereGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SphereGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SphereGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SphereGroupByOutputType[P]>
            : GetScalarType<T[P], SphereGroupByOutputType[P]>
        }
      >
    >


  export type SphereSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sphere_id?: boolean
    sphere_name?: boolean
    Genres?: boolean | Sphere$GenresArgs<ExtArgs>
    Organizers?: boolean | Sphere$OrganizersArgs<ExtArgs>
    _count?: boolean | SphereCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sphere"]>

  export type SphereSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sphere_id?: boolean
    sphere_name?: boolean
  }, ExtArgs["result"]["sphere"]>

  export type SphereSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sphere_id?: boolean
    sphere_name?: boolean
  }, ExtArgs["result"]["sphere"]>

  export type SphereSelectScalar = {
    sphere_id?: boolean
    sphere_name?: boolean
  }

  export type SphereOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sphere_id" | "sphere_name", ExtArgs["result"]["sphere"]>
  export type SphereInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Genres?: boolean | Sphere$GenresArgs<ExtArgs>
    Organizers?: boolean | Sphere$OrganizersArgs<ExtArgs>
    _count?: boolean | SphereCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SphereIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SphereIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpherePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sphere"
    objects: {
      Genres: Prisma.$GenresPayload<ExtArgs>[]
      Organizers: Prisma.$OrganizersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sphere_id: number
      sphere_name: string
    }, ExtArgs["result"]["sphere"]>
    composites: {}
  }

  type SphereGetPayload<S extends boolean | null | undefined | SphereDefaultArgs> = $Result.GetResult<Prisma.$SpherePayload, S>

  type SphereCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SphereFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SphereCountAggregateInputType | true
    }

  export interface SphereDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sphere'], meta: { name: 'Sphere' } }
    /**
     * Find zero or one Sphere that matches the filter.
     * @param {SphereFindUniqueArgs} args - Arguments to find a Sphere
     * @example
     * // Get one Sphere
     * const sphere = await prisma.sphere.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SphereFindUniqueArgs>(args: SelectSubset<T, SphereFindUniqueArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sphere that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SphereFindUniqueOrThrowArgs} args - Arguments to find a Sphere
     * @example
     * // Get one Sphere
     * const sphere = await prisma.sphere.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SphereFindUniqueOrThrowArgs>(args: SelectSubset<T, SphereFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sphere that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SphereFindFirstArgs} args - Arguments to find a Sphere
     * @example
     * // Get one Sphere
     * const sphere = await prisma.sphere.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SphereFindFirstArgs>(args?: SelectSubset<T, SphereFindFirstArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sphere that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SphereFindFirstOrThrowArgs} args - Arguments to find a Sphere
     * @example
     * // Get one Sphere
     * const sphere = await prisma.sphere.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SphereFindFirstOrThrowArgs>(args?: SelectSubset<T, SphereFindFirstOrThrowArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spheres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SphereFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spheres
     * const spheres = await prisma.sphere.findMany()
     * 
     * // Get first 10 Spheres
     * const spheres = await prisma.sphere.findMany({ take: 10 })
     * 
     * // Only select the `sphere_id`
     * const sphereWithSphere_idOnly = await prisma.sphere.findMany({ select: { sphere_id: true } })
     * 
     */
    findMany<T extends SphereFindManyArgs>(args?: SelectSubset<T, SphereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sphere.
     * @param {SphereCreateArgs} args - Arguments to create a Sphere.
     * @example
     * // Create one Sphere
     * const Sphere = await prisma.sphere.create({
     *   data: {
     *     // ... data to create a Sphere
     *   }
     * })
     * 
     */
    create<T extends SphereCreateArgs>(args: SelectSubset<T, SphereCreateArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spheres.
     * @param {SphereCreateManyArgs} args - Arguments to create many Spheres.
     * @example
     * // Create many Spheres
     * const sphere = await prisma.sphere.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SphereCreateManyArgs>(args?: SelectSubset<T, SphereCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spheres and returns the data saved in the database.
     * @param {SphereCreateManyAndReturnArgs} args - Arguments to create many Spheres.
     * @example
     * // Create many Spheres
     * const sphere = await prisma.sphere.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spheres and only return the `sphere_id`
     * const sphereWithSphere_idOnly = await prisma.sphere.createManyAndReturn({
     *   select: { sphere_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SphereCreateManyAndReturnArgs>(args?: SelectSubset<T, SphereCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sphere.
     * @param {SphereDeleteArgs} args - Arguments to delete one Sphere.
     * @example
     * // Delete one Sphere
     * const Sphere = await prisma.sphere.delete({
     *   where: {
     *     // ... filter to delete one Sphere
     *   }
     * })
     * 
     */
    delete<T extends SphereDeleteArgs>(args: SelectSubset<T, SphereDeleteArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sphere.
     * @param {SphereUpdateArgs} args - Arguments to update one Sphere.
     * @example
     * // Update one Sphere
     * const sphere = await prisma.sphere.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SphereUpdateArgs>(args: SelectSubset<T, SphereUpdateArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spheres.
     * @param {SphereDeleteManyArgs} args - Arguments to filter Spheres to delete.
     * @example
     * // Delete a few Spheres
     * const { count } = await prisma.sphere.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SphereDeleteManyArgs>(args?: SelectSubset<T, SphereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spheres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SphereUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spheres
     * const sphere = await prisma.sphere.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SphereUpdateManyArgs>(args: SelectSubset<T, SphereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spheres and returns the data updated in the database.
     * @param {SphereUpdateManyAndReturnArgs} args - Arguments to update many Spheres.
     * @example
     * // Update many Spheres
     * const sphere = await prisma.sphere.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spheres and only return the `sphere_id`
     * const sphereWithSphere_idOnly = await prisma.sphere.updateManyAndReturn({
     *   select: { sphere_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SphereUpdateManyAndReturnArgs>(args: SelectSubset<T, SphereUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sphere.
     * @param {SphereUpsertArgs} args - Arguments to update or create a Sphere.
     * @example
     * // Update or create a Sphere
     * const sphere = await prisma.sphere.upsert({
     *   create: {
     *     // ... data to create a Sphere
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sphere we want to update
     *   }
     * })
     */
    upsert<T extends SphereUpsertArgs>(args: SelectSubset<T, SphereUpsertArgs<ExtArgs>>): Prisma__SphereClient<$Result.GetResult<Prisma.$SpherePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spheres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SphereCountArgs} args - Arguments to filter Spheres to count.
     * @example
     * // Count the number of Spheres
     * const count = await prisma.sphere.count({
     *   where: {
     *     // ... the filter for the Spheres we want to count
     *   }
     * })
    **/
    count<T extends SphereCountArgs>(
      args?: Subset<T, SphereCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SphereCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sphere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SphereAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SphereAggregateArgs>(args: Subset<T, SphereAggregateArgs>): Prisma.PrismaPromise<GetSphereAggregateType<T>>

    /**
     * Group by Sphere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SphereGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SphereGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SphereGroupByArgs['orderBy'] }
        : { orderBy?: SphereGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SphereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSphereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sphere model
   */
  readonly fields: SphereFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sphere.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SphereClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Genres<T extends Sphere$GenresArgs<ExtArgs> = {}>(args?: Subset<T, Sphere$GenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Organizers<T extends Sphere$OrganizersArgs<ExtArgs> = {}>(args?: Subset<T, Sphere$OrganizersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sphere model
   */
  interface SphereFieldRefs {
    readonly sphere_id: FieldRef<"Sphere", 'Int'>
    readonly sphere_name: FieldRef<"Sphere", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sphere findUnique
   */
  export type SphereFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * Filter, which Sphere to fetch.
     */
    where: SphereWhereUniqueInput
  }

  /**
   * Sphere findUniqueOrThrow
   */
  export type SphereFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * Filter, which Sphere to fetch.
     */
    where: SphereWhereUniqueInput
  }

  /**
   * Sphere findFirst
   */
  export type SphereFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * Filter, which Sphere to fetch.
     */
    where?: SphereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spheres to fetch.
     */
    orderBy?: SphereOrderByWithRelationInput | SphereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spheres.
     */
    cursor?: SphereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spheres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spheres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spheres.
     */
    distinct?: SphereScalarFieldEnum | SphereScalarFieldEnum[]
  }

  /**
   * Sphere findFirstOrThrow
   */
  export type SphereFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * Filter, which Sphere to fetch.
     */
    where?: SphereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spheres to fetch.
     */
    orderBy?: SphereOrderByWithRelationInput | SphereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spheres.
     */
    cursor?: SphereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spheres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spheres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spheres.
     */
    distinct?: SphereScalarFieldEnum | SphereScalarFieldEnum[]
  }

  /**
   * Sphere findMany
   */
  export type SphereFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * Filter, which Spheres to fetch.
     */
    where?: SphereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spheres to fetch.
     */
    orderBy?: SphereOrderByWithRelationInput | SphereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spheres.
     */
    cursor?: SphereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spheres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spheres.
     */
    skip?: number
    distinct?: SphereScalarFieldEnum | SphereScalarFieldEnum[]
  }

  /**
   * Sphere create
   */
  export type SphereCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * The data needed to create a Sphere.
     */
    data: XOR<SphereCreateInput, SphereUncheckedCreateInput>
  }

  /**
   * Sphere createMany
   */
  export type SphereCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spheres.
     */
    data: SphereCreateManyInput | SphereCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sphere createManyAndReturn
   */
  export type SphereCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * The data used to create many Spheres.
     */
    data: SphereCreateManyInput | SphereCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sphere update
   */
  export type SphereUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * The data needed to update a Sphere.
     */
    data: XOR<SphereUpdateInput, SphereUncheckedUpdateInput>
    /**
     * Choose, which Sphere to update.
     */
    where: SphereWhereUniqueInput
  }

  /**
   * Sphere updateMany
   */
  export type SphereUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spheres.
     */
    data: XOR<SphereUpdateManyMutationInput, SphereUncheckedUpdateManyInput>
    /**
     * Filter which Spheres to update
     */
    where?: SphereWhereInput
    /**
     * Limit how many Spheres to update.
     */
    limit?: number
  }

  /**
   * Sphere updateManyAndReturn
   */
  export type SphereUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * The data used to update Spheres.
     */
    data: XOR<SphereUpdateManyMutationInput, SphereUncheckedUpdateManyInput>
    /**
     * Filter which Spheres to update
     */
    where?: SphereWhereInput
    /**
     * Limit how many Spheres to update.
     */
    limit?: number
  }

  /**
   * Sphere upsert
   */
  export type SphereUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * The filter to search for the Sphere to update in case it exists.
     */
    where: SphereWhereUniqueInput
    /**
     * In case the Sphere found by the `where` argument doesn't exist, create a new Sphere with this data.
     */
    create: XOR<SphereCreateInput, SphereUncheckedCreateInput>
    /**
     * In case the Sphere was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SphereUpdateInput, SphereUncheckedUpdateInput>
  }

  /**
   * Sphere delete
   */
  export type SphereDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
    /**
     * Filter which Sphere to delete.
     */
    where: SphereWhereUniqueInput
  }

  /**
   * Sphere deleteMany
   */
  export type SphereDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spheres to delete
     */
    where?: SphereWhereInput
    /**
     * Limit how many Spheres to delete.
     */
    limit?: number
  }

  /**
   * Sphere.Genres
   */
  export type Sphere$GenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Sphere.Organizers
   */
  export type Sphere$OrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    where?: OrganizersWhereInput
    orderBy?: OrganizersOrderByWithRelationInput | OrganizersOrderByWithRelationInput[]
    cursor?: OrganizersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * Sphere without action
   */
  export type SphereDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sphere
     */
    select?: SphereSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sphere
     */
    omit?: SphereOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SphereInclude<ExtArgs> | null
  }


  /**
   * Model TicketRefund
   */

  export type AggregateTicketRefund = {
    _count: TicketRefundCountAggregateOutputType | null
    _avg: TicketRefundAvgAggregateOutputType | null
    _sum: TicketRefundSumAggregateOutputType | null
    _min: TicketRefundMinAggregateOutputType | null
    _max: TicketRefundMaxAggregateOutputType | null
  }

  export type TicketRefundAvgAggregateOutputType = {
    ticketRefund_id: number | null
    ticket_id: number | null
    reason_id: number | null
    user_id: number | null
    ticketRefund_quantity: Decimal | null
  }

  export type TicketRefundSumAggregateOutputType = {
    ticketRefund_id: number | null
    ticket_id: number | null
    reason_id: number | null
    user_id: number | null
    ticketRefund_quantity: Decimal | null
  }

  export type TicketRefundMinAggregateOutputType = {
    ticketRefund_id: number | null
    ticketRefind_description: string | null
    ticket_id: number | null
    ticketRefind_isConfirm: boolean | null
    reason_id: number | null
    user_id: number | null
    ticketRefund_quantity: Decimal | null
  }

  export type TicketRefundMaxAggregateOutputType = {
    ticketRefund_id: number | null
    ticketRefind_description: string | null
    ticket_id: number | null
    ticketRefind_isConfirm: boolean | null
    reason_id: number | null
    user_id: number | null
    ticketRefund_quantity: Decimal | null
  }

  export type TicketRefundCountAggregateOutputType = {
    ticketRefund_id: number
    ticketRefind_description: number
    ticket_id: number
    ticketRefind_isConfirm: number
    reason_id: number
    user_id: number
    ticketRefund_quantity: number
    _all: number
  }


  export type TicketRefundAvgAggregateInputType = {
    ticketRefund_id?: true
    ticket_id?: true
    reason_id?: true
    user_id?: true
    ticketRefund_quantity?: true
  }

  export type TicketRefundSumAggregateInputType = {
    ticketRefund_id?: true
    ticket_id?: true
    reason_id?: true
    user_id?: true
    ticketRefund_quantity?: true
  }

  export type TicketRefundMinAggregateInputType = {
    ticketRefund_id?: true
    ticketRefind_description?: true
    ticket_id?: true
    ticketRefind_isConfirm?: true
    reason_id?: true
    user_id?: true
    ticketRefund_quantity?: true
  }

  export type TicketRefundMaxAggregateInputType = {
    ticketRefund_id?: true
    ticketRefind_description?: true
    ticket_id?: true
    ticketRefind_isConfirm?: true
    reason_id?: true
    user_id?: true
    ticketRefund_quantity?: true
  }

  export type TicketRefundCountAggregateInputType = {
    ticketRefund_id?: true
    ticketRefind_description?: true
    ticket_id?: true
    ticketRefind_isConfirm?: true
    reason_id?: true
    user_id?: true
    ticketRefund_quantity?: true
    _all?: true
  }

  export type TicketRefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketRefund to aggregate.
     */
    where?: TicketRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRefunds to fetch.
     */
    orderBy?: TicketRefundOrderByWithRelationInput | TicketRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketRefunds
    **/
    _count?: true | TicketRefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketRefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketRefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketRefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketRefundMaxAggregateInputType
  }

  export type GetTicketRefundAggregateType<T extends TicketRefundAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketRefund[P]>
      : GetScalarType<T[P], AggregateTicketRefund[P]>
  }




  export type TicketRefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketRefundWhereInput
    orderBy?: TicketRefundOrderByWithAggregationInput | TicketRefundOrderByWithAggregationInput[]
    by: TicketRefundScalarFieldEnum[] | TicketRefundScalarFieldEnum
    having?: TicketRefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketRefundCountAggregateInputType | true
    _avg?: TicketRefundAvgAggregateInputType
    _sum?: TicketRefundSumAggregateInputType
    _min?: TicketRefundMinAggregateInputType
    _max?: TicketRefundMaxAggregateInputType
  }

  export type TicketRefundGroupByOutputType = {
    ticketRefund_id: number
    ticketRefind_description: string | null
    ticket_id: number
    ticketRefind_isConfirm: boolean | null
    reason_id: number
    user_id: number
    ticketRefund_quantity: Decimal
    _count: TicketRefundCountAggregateOutputType | null
    _avg: TicketRefundAvgAggregateOutputType | null
    _sum: TicketRefundSumAggregateOutputType | null
    _min: TicketRefundMinAggregateOutputType | null
    _max: TicketRefundMaxAggregateOutputType | null
  }

  type GetTicketRefundGroupByPayload<T extends TicketRefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketRefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketRefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketRefundGroupByOutputType[P]>
            : GetScalarType<T[P], TicketRefundGroupByOutputType[P]>
        }
      >
    >


  export type TicketRefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketRefund_id?: boolean
    ticketRefind_description?: boolean
    ticket_id?: boolean
    ticketRefind_isConfirm?: boolean
    reason_id?: boolean
    user_id?: boolean
    ticketRefund_quantity?: boolean
    ReasonsToRefund?: boolean | ReasonsToRefundDefaultArgs<ExtArgs>
    Tickets?: boolean | TicketsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRefund"]>

  export type TicketRefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketRefund_id?: boolean
    ticketRefind_description?: boolean
    ticket_id?: boolean
    ticketRefind_isConfirm?: boolean
    reason_id?: boolean
    user_id?: boolean
    ticketRefund_quantity?: boolean
    ReasonsToRefund?: boolean | ReasonsToRefundDefaultArgs<ExtArgs>
    Tickets?: boolean | TicketsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRefund"]>

  export type TicketRefundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketRefund_id?: boolean
    ticketRefind_description?: boolean
    ticket_id?: boolean
    ticketRefind_isConfirm?: boolean
    reason_id?: boolean
    user_id?: boolean
    ticketRefund_quantity?: boolean
    ReasonsToRefund?: boolean | ReasonsToRefundDefaultArgs<ExtArgs>
    Tickets?: boolean | TicketsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketRefund"]>

  export type TicketRefundSelectScalar = {
    ticketRefund_id?: boolean
    ticketRefind_description?: boolean
    ticket_id?: boolean
    ticketRefind_isConfirm?: boolean
    reason_id?: boolean
    user_id?: boolean
    ticketRefund_quantity?: boolean
  }

  export type TicketRefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticketRefund_id" | "ticketRefind_description" | "ticket_id" | "ticketRefind_isConfirm" | "reason_id" | "user_id" | "ticketRefund_quantity", ExtArgs["result"]["ticketRefund"]>
  export type TicketRefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReasonsToRefund?: boolean | ReasonsToRefundDefaultArgs<ExtArgs>
    Tickets?: boolean | TicketsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TicketRefundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReasonsToRefund?: boolean | ReasonsToRefundDefaultArgs<ExtArgs>
    Tickets?: boolean | TicketsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TicketRefundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReasonsToRefund?: boolean | ReasonsToRefundDefaultArgs<ExtArgs>
    Tickets?: boolean | TicketsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TicketRefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketRefund"
    objects: {
      ReasonsToRefund: Prisma.$ReasonsToRefundPayload<ExtArgs>
      Tickets: Prisma.$TicketsPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticketRefund_id: number
      ticketRefind_description: string | null
      ticket_id: number
      ticketRefind_isConfirm: boolean | null
      reason_id: number
      user_id: number
      ticketRefund_quantity: Prisma.Decimal
    }, ExtArgs["result"]["ticketRefund"]>
    composites: {}
  }

  type TicketRefundGetPayload<S extends boolean | null | undefined | TicketRefundDefaultArgs> = $Result.GetResult<Prisma.$TicketRefundPayload, S>

  type TicketRefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketRefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketRefundCountAggregateInputType | true
    }

  export interface TicketRefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketRefund'], meta: { name: 'TicketRefund' } }
    /**
     * Find zero or one TicketRefund that matches the filter.
     * @param {TicketRefundFindUniqueArgs} args - Arguments to find a TicketRefund
     * @example
     * // Get one TicketRefund
     * const ticketRefund = await prisma.ticketRefund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketRefundFindUniqueArgs>(args: SelectSubset<T, TicketRefundFindUniqueArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketRefund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketRefundFindUniqueOrThrowArgs} args - Arguments to find a TicketRefund
     * @example
     * // Get one TicketRefund
     * const ticketRefund = await prisma.ticketRefund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketRefundFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketRefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketRefund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRefundFindFirstArgs} args - Arguments to find a TicketRefund
     * @example
     * // Get one TicketRefund
     * const ticketRefund = await prisma.ticketRefund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketRefundFindFirstArgs>(args?: SelectSubset<T, TicketRefundFindFirstArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketRefund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRefundFindFirstOrThrowArgs} args - Arguments to find a TicketRefund
     * @example
     * // Get one TicketRefund
     * const ticketRefund = await prisma.ticketRefund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketRefundFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketRefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketRefunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketRefunds
     * const ticketRefunds = await prisma.ticketRefund.findMany()
     * 
     * // Get first 10 TicketRefunds
     * const ticketRefunds = await prisma.ticketRefund.findMany({ take: 10 })
     * 
     * // Only select the `ticketRefund_id`
     * const ticketRefundWithTicketRefund_idOnly = await prisma.ticketRefund.findMany({ select: { ticketRefund_id: true } })
     * 
     */
    findMany<T extends TicketRefundFindManyArgs>(args?: SelectSubset<T, TicketRefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketRefund.
     * @param {TicketRefundCreateArgs} args - Arguments to create a TicketRefund.
     * @example
     * // Create one TicketRefund
     * const TicketRefund = await prisma.ticketRefund.create({
     *   data: {
     *     // ... data to create a TicketRefund
     *   }
     * })
     * 
     */
    create<T extends TicketRefundCreateArgs>(args: SelectSubset<T, TicketRefundCreateArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketRefunds.
     * @param {TicketRefundCreateManyArgs} args - Arguments to create many TicketRefunds.
     * @example
     * // Create many TicketRefunds
     * const ticketRefund = await prisma.ticketRefund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketRefundCreateManyArgs>(args?: SelectSubset<T, TicketRefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketRefunds and returns the data saved in the database.
     * @param {TicketRefundCreateManyAndReturnArgs} args - Arguments to create many TicketRefunds.
     * @example
     * // Create many TicketRefunds
     * const ticketRefund = await prisma.ticketRefund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketRefunds and only return the `ticketRefund_id`
     * const ticketRefundWithTicketRefund_idOnly = await prisma.ticketRefund.createManyAndReturn({
     *   select: { ticketRefund_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketRefundCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketRefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketRefund.
     * @param {TicketRefundDeleteArgs} args - Arguments to delete one TicketRefund.
     * @example
     * // Delete one TicketRefund
     * const TicketRefund = await prisma.ticketRefund.delete({
     *   where: {
     *     // ... filter to delete one TicketRefund
     *   }
     * })
     * 
     */
    delete<T extends TicketRefundDeleteArgs>(args: SelectSubset<T, TicketRefundDeleteArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketRefund.
     * @param {TicketRefundUpdateArgs} args - Arguments to update one TicketRefund.
     * @example
     * // Update one TicketRefund
     * const ticketRefund = await prisma.ticketRefund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketRefundUpdateArgs>(args: SelectSubset<T, TicketRefundUpdateArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketRefunds.
     * @param {TicketRefundDeleteManyArgs} args - Arguments to filter TicketRefunds to delete.
     * @example
     * // Delete a few TicketRefunds
     * const { count } = await prisma.ticketRefund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketRefundDeleteManyArgs>(args?: SelectSubset<T, TicketRefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketRefunds
     * const ticketRefund = await prisma.ticketRefund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketRefundUpdateManyArgs>(args: SelectSubset<T, TicketRefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketRefunds and returns the data updated in the database.
     * @param {TicketRefundUpdateManyAndReturnArgs} args - Arguments to update many TicketRefunds.
     * @example
     * // Update many TicketRefunds
     * const ticketRefund = await prisma.ticketRefund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketRefunds and only return the `ticketRefund_id`
     * const ticketRefundWithTicketRefund_idOnly = await prisma.ticketRefund.updateManyAndReturn({
     *   select: { ticketRefund_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketRefundUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketRefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketRefund.
     * @param {TicketRefundUpsertArgs} args - Arguments to update or create a TicketRefund.
     * @example
     * // Update or create a TicketRefund
     * const ticketRefund = await prisma.ticketRefund.upsert({
     *   create: {
     *     // ... data to create a TicketRefund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketRefund we want to update
     *   }
     * })
     */
    upsert<T extends TicketRefundUpsertArgs>(args: SelectSubset<T, TicketRefundUpsertArgs<ExtArgs>>): Prisma__TicketRefundClient<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRefundCountArgs} args - Arguments to filter TicketRefunds to count.
     * @example
     * // Count the number of TicketRefunds
     * const count = await prisma.ticketRefund.count({
     *   where: {
     *     // ... the filter for the TicketRefunds we want to count
     *   }
     * })
    **/
    count<T extends TicketRefundCountArgs>(
      args?: Subset<T, TicketRefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketRefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketRefundAggregateArgs>(args: Subset<T, TicketRefundAggregateArgs>): Prisma.PrismaPromise<GetTicketRefundAggregateType<T>>

    /**
     * Group by TicketRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketRefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketRefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketRefundGroupByArgs['orderBy'] }
        : { orderBy?: TicketRefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketRefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketRefund model
   */
  readonly fields: TicketRefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketRefund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketRefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ReasonsToRefund<T extends ReasonsToRefundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReasonsToRefundDefaultArgs<ExtArgs>>): Prisma__ReasonsToRefundClient<$Result.GetResult<Prisma.$ReasonsToRefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tickets<T extends TicketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketsDefaultArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketRefund model
   */
  interface TicketRefundFieldRefs {
    readonly ticketRefund_id: FieldRef<"TicketRefund", 'Int'>
    readonly ticketRefind_description: FieldRef<"TicketRefund", 'String'>
    readonly ticket_id: FieldRef<"TicketRefund", 'Int'>
    readonly ticketRefind_isConfirm: FieldRef<"TicketRefund", 'Boolean'>
    readonly reason_id: FieldRef<"TicketRefund", 'Int'>
    readonly user_id: FieldRef<"TicketRefund", 'Int'>
    readonly ticketRefund_quantity: FieldRef<"TicketRefund", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * TicketRefund findUnique
   */
  export type TicketRefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * Filter, which TicketRefund to fetch.
     */
    where: TicketRefundWhereUniqueInput
  }

  /**
   * TicketRefund findUniqueOrThrow
   */
  export type TicketRefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * Filter, which TicketRefund to fetch.
     */
    where: TicketRefundWhereUniqueInput
  }

  /**
   * TicketRefund findFirst
   */
  export type TicketRefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * Filter, which TicketRefund to fetch.
     */
    where?: TicketRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRefunds to fetch.
     */
    orderBy?: TicketRefundOrderByWithRelationInput | TicketRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketRefunds.
     */
    cursor?: TicketRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketRefunds.
     */
    distinct?: TicketRefundScalarFieldEnum | TicketRefundScalarFieldEnum[]
  }

  /**
   * TicketRefund findFirstOrThrow
   */
  export type TicketRefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * Filter, which TicketRefund to fetch.
     */
    where?: TicketRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRefunds to fetch.
     */
    orderBy?: TicketRefundOrderByWithRelationInput | TicketRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketRefunds.
     */
    cursor?: TicketRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketRefunds.
     */
    distinct?: TicketRefundScalarFieldEnum | TicketRefundScalarFieldEnum[]
  }

  /**
   * TicketRefund findMany
   */
  export type TicketRefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * Filter, which TicketRefunds to fetch.
     */
    where?: TicketRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketRefunds to fetch.
     */
    orderBy?: TicketRefundOrderByWithRelationInput | TicketRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketRefunds.
     */
    cursor?: TicketRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketRefunds.
     */
    skip?: number
    distinct?: TicketRefundScalarFieldEnum | TicketRefundScalarFieldEnum[]
  }

  /**
   * TicketRefund create
   */
  export type TicketRefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketRefund.
     */
    data: XOR<TicketRefundCreateInput, TicketRefundUncheckedCreateInput>
  }

  /**
   * TicketRefund createMany
   */
  export type TicketRefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketRefunds.
     */
    data: TicketRefundCreateManyInput | TicketRefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketRefund createManyAndReturn
   */
  export type TicketRefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * The data used to create many TicketRefunds.
     */
    data: TicketRefundCreateManyInput | TicketRefundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketRefund update
   */
  export type TicketRefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketRefund.
     */
    data: XOR<TicketRefundUpdateInput, TicketRefundUncheckedUpdateInput>
    /**
     * Choose, which TicketRefund to update.
     */
    where: TicketRefundWhereUniqueInput
  }

  /**
   * TicketRefund updateMany
   */
  export type TicketRefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketRefunds.
     */
    data: XOR<TicketRefundUpdateManyMutationInput, TicketRefundUncheckedUpdateManyInput>
    /**
     * Filter which TicketRefunds to update
     */
    where?: TicketRefundWhereInput
    /**
     * Limit how many TicketRefunds to update.
     */
    limit?: number
  }

  /**
   * TicketRefund updateManyAndReturn
   */
  export type TicketRefundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * The data used to update TicketRefunds.
     */
    data: XOR<TicketRefundUpdateManyMutationInput, TicketRefundUncheckedUpdateManyInput>
    /**
     * Filter which TicketRefunds to update
     */
    where?: TicketRefundWhereInput
    /**
     * Limit how many TicketRefunds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketRefund upsert
   */
  export type TicketRefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketRefund to update in case it exists.
     */
    where: TicketRefundWhereUniqueInput
    /**
     * In case the TicketRefund found by the `where` argument doesn't exist, create a new TicketRefund with this data.
     */
    create: XOR<TicketRefundCreateInput, TicketRefundUncheckedCreateInput>
    /**
     * In case the TicketRefund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketRefundUpdateInput, TicketRefundUncheckedUpdateInput>
  }

  /**
   * TicketRefund delete
   */
  export type TicketRefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    /**
     * Filter which TicketRefund to delete.
     */
    where: TicketRefundWhereUniqueInput
  }

  /**
   * TicketRefund deleteMany
   */
  export type TicketRefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketRefunds to delete
     */
    where?: TicketRefundWhereInput
    /**
     * Limit how many TicketRefunds to delete.
     */
    limit?: number
  }

  /**
   * TicketRefund without action
   */
  export type TicketRefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
  }


  /**
   * Model Tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    ticket_id: number | null
    user_id: number | null
    post_id: number | null
    ticket_quantity: number | null
    ticket_cost: number | null
    organizer_id: number | null
  }

  export type TicketsSumAggregateOutputType = {
    ticket_id: number | null
    user_id: number | null
    post_id: number | null
    ticket_quantity: number | null
    ticket_cost: number | null
    organizer_id: number | null
  }

  export type TicketsMinAggregateOutputType = {
    ticket_id: number | null
    user_id: number | null
    post_id: number | null
    ticket_quantity: number | null
    ticket_name: string | null
    ticket_genre: string | null
    ticket_sphere: string | null
    ticket_meetPlace: string | null
    ticket_cost: number | null
    ticket_date: Date | null
    ticket_isHere: boolean | null
    ticket_isRefind: boolean | null
    organizer_id: number | null
    ticket_image: string | null
  }

  export type TicketsMaxAggregateOutputType = {
    ticket_id: number | null
    user_id: number | null
    post_id: number | null
    ticket_quantity: number | null
    ticket_name: string | null
    ticket_genre: string | null
    ticket_sphere: string | null
    ticket_meetPlace: string | null
    ticket_cost: number | null
    ticket_date: Date | null
    ticket_isHere: boolean | null
    ticket_isRefind: boolean | null
    organizer_id: number | null
    ticket_image: string | null
  }

  export type TicketsCountAggregateOutputType = {
    ticket_id: number
    user_id: number
    post_id: number
    ticket_quantity: number
    ticket_name: number
    ticket_genre: number
    ticket_sphere: number
    ticket_meetPlace: number
    ticket_cost: number
    ticket_date: number
    ticket_isHere: number
    ticket_isRefind: number
    organizer_id: number
    ticket_image: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    ticket_id?: true
    user_id?: true
    post_id?: true
    ticket_quantity?: true
    ticket_cost?: true
    organizer_id?: true
  }

  export type TicketsSumAggregateInputType = {
    ticket_id?: true
    user_id?: true
    post_id?: true
    ticket_quantity?: true
    ticket_cost?: true
    organizer_id?: true
  }

  export type TicketsMinAggregateInputType = {
    ticket_id?: true
    user_id?: true
    post_id?: true
    ticket_quantity?: true
    ticket_name?: true
    ticket_genre?: true
    ticket_sphere?: true
    ticket_meetPlace?: true
    ticket_cost?: true
    ticket_date?: true
    ticket_isHere?: true
    ticket_isRefind?: true
    organizer_id?: true
    ticket_image?: true
  }

  export type TicketsMaxAggregateInputType = {
    ticket_id?: true
    user_id?: true
    post_id?: true
    ticket_quantity?: true
    ticket_name?: true
    ticket_genre?: true
    ticket_sphere?: true
    ticket_meetPlace?: true
    ticket_cost?: true
    ticket_date?: true
    ticket_isHere?: true
    ticket_isRefind?: true
    organizer_id?: true
    ticket_image?: true
  }

  export type TicketsCountAggregateInputType = {
    ticket_id?: true
    user_id?: true
    post_id?: true
    ticket_quantity?: true
    ticket_name?: true
    ticket_genre?: true
    ticket_sphere?: true
    ticket_meetPlace?: true
    ticket_cost?: true
    ticket_date?: true
    ticket_isHere?: true
    ticket_isRefind?: true
    organizer_id?: true
    ticket_image?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to aggregate.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type TicketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithAggregationInput | TicketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: TicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    ticket_id: number
    user_id: number
    post_id: number | null
    ticket_quantity: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost: number
    ticket_date: Date
    ticket_isHere: boolean
    ticket_isRefind: boolean
    organizer_id: number | null
    ticket_image: string
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends TicketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type TicketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    user_id?: boolean
    post_id?: boolean
    ticket_quantity?: boolean
    ticket_name?: boolean
    ticket_genre?: boolean
    ticket_sphere?: boolean
    ticket_meetPlace?: boolean
    ticket_cost?: boolean
    ticket_date?: boolean
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: boolean
    ticket_image?: boolean
    TicketRefund?: boolean | Tickets$TicketRefundArgs<ExtArgs>
    CreatedPosts?: boolean | Tickets$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    user_id?: boolean
    post_id?: boolean
    ticket_quantity?: boolean
    ticket_name?: boolean
    ticket_genre?: boolean
    ticket_sphere?: boolean
    ticket_meetPlace?: boolean
    ticket_cost?: boolean
    ticket_date?: boolean
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: boolean
    ticket_image?: boolean
    CreatedPosts?: boolean | Tickets$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    user_id?: boolean
    post_id?: boolean
    ticket_quantity?: boolean
    ticket_name?: boolean
    ticket_genre?: boolean
    ticket_sphere?: boolean
    ticket_meetPlace?: boolean
    ticket_cost?: boolean
    ticket_date?: boolean
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: boolean
    ticket_image?: boolean
    CreatedPosts?: boolean | Tickets$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectScalar = {
    ticket_id?: boolean
    user_id?: boolean
    post_id?: boolean
    ticket_quantity?: boolean
    ticket_name?: boolean
    ticket_genre?: boolean
    ticket_sphere?: boolean
    ticket_meetPlace?: boolean
    ticket_cost?: boolean
    ticket_date?: boolean
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: boolean
    ticket_image?: boolean
  }

  export type TicketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticket_id" | "user_id" | "post_id" | "ticket_quantity" | "ticket_name" | "ticket_genre" | "ticket_sphere" | "ticket_meetPlace" | "ticket_cost" | "ticket_date" | "ticket_isHere" | "ticket_isRefind" | "organizer_id" | "ticket_image", ExtArgs["result"]["tickets"]>
  export type TicketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketRefund?: boolean | Tickets$TicketRefundArgs<ExtArgs>
    CreatedPosts?: boolean | Tickets$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedPosts?: boolean | Tickets$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TicketsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedPosts?: boolean | Tickets$CreatedPostsArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TicketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tickets"
    objects: {
      TicketRefund: Prisma.$TicketRefundPayload<ExtArgs>[]
      CreatedPosts: Prisma.$CreatedPostsPayload<ExtArgs> | null
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_id: number
      user_id: number
      post_id: number | null
      ticket_quantity: number
      ticket_name: string
      ticket_genre: string
      ticket_sphere: string
      ticket_meetPlace: string
      ticket_cost: number
      ticket_date: Date
      ticket_isHere: boolean
      ticket_isRefind: boolean
      organizer_id: number | null
      ticket_image: string
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type TicketsGetPayload<S extends boolean | null | undefined | TicketsDefaultArgs> = $Result.GetResult<Prisma.$TicketsPayload, S>

  type TicketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface TicketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tickets'], meta: { name: 'Tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {TicketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketsFindUniqueArgs>(args: SelectSubset<T, TicketsFindUniqueArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketsFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketsFindFirstArgs>(args?: SelectSubset<T, TicketsFindFirstArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketsFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `ticket_id`
     * const ticketsWithTicket_idOnly = await prisma.tickets.findMany({ select: { ticket_id: true } })
     * 
     */
    findMany<T extends TicketsFindManyArgs>(args?: SelectSubset<T, TicketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {TicketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends TicketsCreateArgs>(args: SelectSubset<T, TicketsCreateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketsCreateManyArgs>(args?: SelectSubset<T, TicketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketsCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `ticket_id`
     * const ticketsWithTicket_idOnly = await prisma.tickets.createManyAndReturn({
     *   select: { ticket_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketsCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickets.
     * @param {TicketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends TicketsDeleteArgs>(args: SelectSubset<T, TicketsDeleteArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {TicketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketsUpdateArgs>(args: SelectSubset<T, TicketsUpdateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketsDeleteManyArgs>(args?: SelectSubset<T, TicketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketsUpdateManyArgs>(args: SelectSubset<T, TicketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketsUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `ticket_id`
     * const ticketsWithTicket_idOnly = await prisma.tickets.updateManyAndReturn({
     *   select: { ticket_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketsUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickets.
     * @param {TicketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends TicketsUpsertArgs>(args: SelectSubset<T, TicketsUpsertArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketsCountArgs>(
      args?: Subset<T, TicketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketsGroupByArgs['orderBy'] }
        : { orderBy?: TicketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tickets model
   */
  readonly fields: TicketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TicketRefund<T extends Tickets$TicketRefundArgs<ExtArgs> = {}>(args?: Subset<T, Tickets$TicketRefundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CreatedPosts<T extends Tickets$CreatedPostsArgs<ExtArgs> = {}>(args?: Subset<T, Tickets$CreatedPostsArgs<ExtArgs>>): Prisma__CreatedPostsClient<$Result.GetResult<Prisma.$CreatedPostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tickets model
   */
  interface TicketsFieldRefs {
    readonly ticket_id: FieldRef<"Tickets", 'Int'>
    readonly user_id: FieldRef<"Tickets", 'Int'>
    readonly post_id: FieldRef<"Tickets", 'Int'>
    readonly ticket_quantity: FieldRef<"Tickets", 'Int'>
    readonly ticket_name: FieldRef<"Tickets", 'String'>
    readonly ticket_genre: FieldRef<"Tickets", 'String'>
    readonly ticket_sphere: FieldRef<"Tickets", 'String'>
    readonly ticket_meetPlace: FieldRef<"Tickets", 'String'>
    readonly ticket_cost: FieldRef<"Tickets", 'Int'>
    readonly ticket_date: FieldRef<"Tickets", 'DateTime'>
    readonly ticket_isHere: FieldRef<"Tickets", 'Boolean'>
    readonly ticket_isRefind: FieldRef<"Tickets", 'Boolean'>
    readonly organizer_id: FieldRef<"Tickets", 'Int'>
    readonly ticket_image: FieldRef<"Tickets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tickets findUnique
   */
  export type TicketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findUniqueOrThrow
   */
  export type TicketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findFirst
   */
  export type TicketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findFirstOrThrow
   */
  export type TicketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findMany
   */
  export type TicketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets create
   */
  export type TicketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tickets.
     */
    data: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
  }

  /**
   * Tickets createMany
   */
  export type TicketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketsCreateManyInput | TicketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickets createManyAndReturn
   */
  export type TicketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketsCreateManyInput | TicketsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tickets update
   */
  export type TicketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tickets.
     */
    data: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
    /**
     * Choose, which Tickets to update.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets updateMany
   */
  export type TicketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Tickets updateManyAndReturn
   */
  export type TicketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tickets upsert
   */
  export type TicketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tickets to update in case it exists.
     */
    where: TicketsWhereUniqueInput
    /**
     * In case the Tickets found by the `where` argument doesn't exist, create a new Tickets with this data.
     */
    create: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
    /**
     * In case the Tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
  }

  /**
   * Tickets delete
   */
  export type TicketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter which Tickets to delete.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets deleteMany
   */
  export type TicketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Tickets.TicketRefund
   */
  export type Tickets$TicketRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    where?: TicketRefundWhereInput
    orderBy?: TicketRefundOrderByWithRelationInput | TicketRefundOrderByWithRelationInput[]
    cursor?: TicketRefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketRefundScalarFieldEnum | TicketRefundScalarFieldEnum[]
  }

  /**
   * Tickets.CreatedPosts
   */
  export type Tickets$CreatedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatedPosts
     */
    select?: CreatedPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatedPosts
     */
    omit?: CreatedPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatedPostsInclude<ExtArgs> | null
    where?: CreatedPostsWhereInput
  }

  /**
   * Tickets without action
   */
  export type TicketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    role_id: number | null
    user_id: number | null
    user_likedMass: number | null
  }

  export type UsersSumAggregateOutputType = {
    role_id: number | null
    user_id: number | null
    user_likedMass: number[]
  }

  export type UsersMinAggregateOutputType = {
    user_name: string | null
    user_surname: string | null
    user_mail: string | null
    user_password: string | null
    user_photo: string | null
    role_id: number | null
    user_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    user_name: string | null
    user_surname: string | null
    user_mail: string | null
    user_password: string | null
    user_photo: string | null
    role_id: number | null
    user_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    user_name: number
    user_surname: number
    user_mail: number
    user_password: number
    user_photo: number
    role_id: number
    user_id: number
    user_likedMass: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    role_id?: true
    user_id?: true
    user_likedMass?: true
  }

  export type UsersSumAggregateInputType = {
    role_id?: true
    user_id?: true
    user_likedMass?: true
  }

  export type UsersMinAggregateInputType = {
    user_name?: true
    user_surname?: true
    user_mail?: true
    user_password?: true
    user_photo?: true
    role_id?: true
    user_id?: true
  }

  export type UsersMaxAggregateInputType = {
    user_name?: true
    user_surname?: true
    user_mail?: true
    user_password?: true
    user_photo?: true
    role_id?: true
    user_id?: true
  }

  export type UsersCountAggregateInputType = {
    user_name?: true
    user_surname?: true
    user_mail?: true
    user_password?: true
    user_photo?: true
    role_id?: true
    user_id?: true
    user_likedMass?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id: number
    user_id: number
    user_likedMass: number[]
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_name?: boolean
    user_surname?: boolean
    user_mail?: boolean
    user_password?: boolean
    user_photo?: boolean
    role_id?: boolean
    user_id?: boolean
    user_likedMass?: boolean
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Organizers?: boolean | Users$OrganizersArgs<ExtArgs>
    TicketRefund?: boolean | Users$TicketRefundArgs<ExtArgs>
    Tickets?: boolean | Users$TicketsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_name?: boolean
    user_surname?: boolean
    user_mail?: boolean
    user_password?: boolean
    user_photo?: boolean
    role_id?: boolean
    user_id?: boolean
    user_likedMass?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_name?: boolean
    user_surname?: boolean
    user_mail?: boolean
    user_password?: boolean
    user_photo?: boolean
    role_id?: boolean
    user_id?: boolean
    user_likedMass?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_name?: boolean
    user_surname?: boolean
    user_mail?: boolean
    user_password?: boolean
    user_photo?: boolean
    role_id?: boolean
    user_id?: boolean
    user_likedMass?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_name" | "user_surname" | "user_mail" | "user_password" | "user_photo" | "role_id" | "user_id" | "user_likedMass", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Organizers?: boolean | Users$OrganizersArgs<ExtArgs>
    TicketRefund?: boolean | Users$TicketRefundArgs<ExtArgs>
    Tickets?: boolean | Users$TicketsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Organizers: Prisma.$OrganizersPayload<ExtArgs>[]
      TicketRefund: Prisma.$TicketRefundPayload<ExtArgs>[]
      Tickets: Prisma.$TicketsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_name: string
      user_surname: string
      user_mail: string
      user_password: string
      user_photo: string
      role_id: number
      user_id: number
      user_likedMass: number[]
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_name`
     * const usersWithUser_nameOnly = await prisma.users.findMany({ select: { user_name: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_name`
     * const usersWithUser_nameOnly = await prisma.users.createManyAndReturn({
     *   select: { user_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_name`
     * const usersWithUser_nameOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends Users$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Organizers<T extends Users$OrganizersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrganizersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TicketRefund<T extends Users$TicketRefundArgs<ExtArgs> = {}>(args?: Subset<T, Users$TicketRefundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketRefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tickets<T extends Users$TicketsArgs<ExtArgs> = {}>(args?: Subset<T, Users$TicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_name: FieldRef<"Users", 'String'>
    readonly user_surname: FieldRef<"Users", 'String'>
    readonly user_mail: FieldRef<"Users", 'String'>
    readonly user_password: FieldRef<"Users", 'String'>
    readonly user_photo: FieldRef<"Users", 'String'>
    readonly role_id: FieldRef<"Users", 'Int'>
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly user_likedMass: FieldRef<"Users", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Comments
   */
  export type Users$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.Organizers
   */
  export type Users$OrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    where?: OrganizersWhereInput
    orderBy?: OrganizersOrderByWithRelationInput | OrganizersOrderByWithRelationInput[]
    cursor?: OrganizersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * Users.TicketRefund
   */
  export type Users$TicketRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketRefund
     */
    select?: TicketRefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketRefund
     */
    omit?: TicketRefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketRefundInclude<ExtArgs> | null
    where?: TicketRefundWhereInput
    orderBy?: TicketRefundOrderByWithRelationInput | TicketRefundOrderByWithRelationInput[]
    cursor?: TicketRefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketRefundScalarFieldEnum | TicketRefundScalarFieldEnum[]
  }

  /**
   * Users.Tickets
   */
  export type Users$TicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    cursor?: TicketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model callbacks
   */

  export type AggregateCallbacks = {
    _count: CallbacksCountAggregateOutputType | null
    _avg: CallbacksAvgAggregateOutputType | null
    _sum: CallbacksSumAggregateOutputType | null
    _min: CallbacksMinAggregateOutputType | null
    _max: CallbacksMaxAggregateOutputType | null
  }

  export type CallbacksAvgAggregateOutputType = {
    callback_id: number | null
  }

  export type CallbacksSumAggregateOutputType = {
    callback_id: number | null
  }

  export type CallbacksMinAggregateOutputType = {
    callback_id: number | null
    callback_name: string | null
  }

  export type CallbacksMaxAggregateOutputType = {
    callback_id: number | null
    callback_name: string | null
  }

  export type CallbacksCountAggregateOutputType = {
    callback_id: number
    callback_name: number
    _all: number
  }


  export type CallbacksAvgAggregateInputType = {
    callback_id?: true
  }

  export type CallbacksSumAggregateInputType = {
    callback_id?: true
  }

  export type CallbacksMinAggregateInputType = {
    callback_id?: true
    callback_name?: true
  }

  export type CallbacksMaxAggregateInputType = {
    callback_id?: true
    callback_name?: true
  }

  export type CallbacksCountAggregateInputType = {
    callback_id?: true
    callback_name?: true
    _all?: true
  }

  export type CallbacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which callbacks to aggregate.
     */
    where?: callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of callbacks to fetch.
     */
    orderBy?: callbacksOrderByWithRelationInput | callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` callbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned callbacks
    **/
    _count?: true | CallbacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallbacksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallbacksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallbacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallbacksMaxAggregateInputType
  }

  export type GetCallbacksAggregateType<T extends CallbacksAggregateArgs> = {
        [P in keyof T & keyof AggregateCallbacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallbacks[P]>
      : GetScalarType<T[P], AggregateCallbacks[P]>
  }




  export type callbacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: callbacksWhereInput
    orderBy?: callbacksOrderByWithAggregationInput | callbacksOrderByWithAggregationInput[]
    by: CallbacksScalarFieldEnum[] | CallbacksScalarFieldEnum
    having?: callbacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallbacksCountAggregateInputType | true
    _avg?: CallbacksAvgAggregateInputType
    _sum?: CallbacksSumAggregateInputType
    _min?: CallbacksMinAggregateInputType
    _max?: CallbacksMaxAggregateInputType
  }

  export type CallbacksGroupByOutputType = {
    callback_id: number
    callback_name: string
    _count: CallbacksCountAggregateOutputType | null
    _avg: CallbacksAvgAggregateOutputType | null
    _sum: CallbacksSumAggregateOutputType | null
    _min: CallbacksMinAggregateOutputType | null
    _max: CallbacksMaxAggregateOutputType | null
  }

  type GetCallbacksGroupByPayload<T extends callbacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallbacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallbacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallbacksGroupByOutputType[P]>
            : GetScalarType<T[P], CallbacksGroupByOutputType[P]>
        }
      >
    >


  export type callbacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    callback_id?: boolean
    callback_name?: boolean
    Organizers?: boolean | callbacks$OrganizersArgs<ExtArgs>
    _count?: boolean | CallbacksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callbacks"]>

  export type callbacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    callback_id?: boolean
    callback_name?: boolean
  }, ExtArgs["result"]["callbacks"]>

  export type callbacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    callback_id?: boolean
    callback_name?: boolean
  }, ExtArgs["result"]["callbacks"]>

  export type callbacksSelectScalar = {
    callback_id?: boolean
    callback_name?: boolean
  }

  export type callbacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"callback_id" | "callback_name", ExtArgs["result"]["callbacks"]>
  export type callbacksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organizers?: boolean | callbacks$OrganizersArgs<ExtArgs>
    _count?: boolean | CallbacksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type callbacksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type callbacksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $callbacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "callbacks"
    objects: {
      Organizers: Prisma.$OrganizersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      callback_id: number
      callback_name: string
    }, ExtArgs["result"]["callbacks"]>
    composites: {}
  }

  type callbacksGetPayload<S extends boolean | null | undefined | callbacksDefaultArgs> = $Result.GetResult<Prisma.$callbacksPayload, S>

  type callbacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<callbacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallbacksCountAggregateInputType | true
    }

  export interface callbacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['callbacks'], meta: { name: 'callbacks' } }
    /**
     * Find zero or one Callbacks that matches the filter.
     * @param {callbacksFindUniqueArgs} args - Arguments to find a Callbacks
     * @example
     * // Get one Callbacks
     * const callbacks = await prisma.callbacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends callbacksFindUniqueArgs>(args: SelectSubset<T, callbacksFindUniqueArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Callbacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {callbacksFindUniqueOrThrowArgs} args - Arguments to find a Callbacks
     * @example
     * // Get one Callbacks
     * const callbacks = await prisma.callbacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends callbacksFindUniqueOrThrowArgs>(args: SelectSubset<T, callbacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Callbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callbacksFindFirstArgs} args - Arguments to find a Callbacks
     * @example
     * // Get one Callbacks
     * const callbacks = await prisma.callbacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends callbacksFindFirstArgs>(args?: SelectSubset<T, callbacksFindFirstArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Callbacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callbacksFindFirstOrThrowArgs} args - Arguments to find a Callbacks
     * @example
     * // Get one Callbacks
     * const callbacks = await prisma.callbacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends callbacksFindFirstOrThrowArgs>(args?: SelectSubset<T, callbacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Callbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callbacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Callbacks
     * const callbacks = await prisma.callbacks.findMany()
     * 
     * // Get first 10 Callbacks
     * const callbacks = await prisma.callbacks.findMany({ take: 10 })
     * 
     * // Only select the `callback_id`
     * const callbacksWithCallback_idOnly = await prisma.callbacks.findMany({ select: { callback_id: true } })
     * 
     */
    findMany<T extends callbacksFindManyArgs>(args?: SelectSubset<T, callbacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Callbacks.
     * @param {callbacksCreateArgs} args - Arguments to create a Callbacks.
     * @example
     * // Create one Callbacks
     * const Callbacks = await prisma.callbacks.create({
     *   data: {
     *     // ... data to create a Callbacks
     *   }
     * })
     * 
     */
    create<T extends callbacksCreateArgs>(args: SelectSubset<T, callbacksCreateArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Callbacks.
     * @param {callbacksCreateManyArgs} args - Arguments to create many Callbacks.
     * @example
     * // Create many Callbacks
     * const callbacks = await prisma.callbacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends callbacksCreateManyArgs>(args?: SelectSubset<T, callbacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Callbacks and returns the data saved in the database.
     * @param {callbacksCreateManyAndReturnArgs} args - Arguments to create many Callbacks.
     * @example
     * // Create many Callbacks
     * const callbacks = await prisma.callbacks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Callbacks and only return the `callback_id`
     * const callbacksWithCallback_idOnly = await prisma.callbacks.createManyAndReturn({
     *   select: { callback_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends callbacksCreateManyAndReturnArgs>(args?: SelectSubset<T, callbacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Callbacks.
     * @param {callbacksDeleteArgs} args - Arguments to delete one Callbacks.
     * @example
     * // Delete one Callbacks
     * const Callbacks = await prisma.callbacks.delete({
     *   where: {
     *     // ... filter to delete one Callbacks
     *   }
     * })
     * 
     */
    delete<T extends callbacksDeleteArgs>(args: SelectSubset<T, callbacksDeleteArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Callbacks.
     * @param {callbacksUpdateArgs} args - Arguments to update one Callbacks.
     * @example
     * // Update one Callbacks
     * const callbacks = await prisma.callbacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends callbacksUpdateArgs>(args: SelectSubset<T, callbacksUpdateArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Callbacks.
     * @param {callbacksDeleteManyArgs} args - Arguments to filter Callbacks to delete.
     * @example
     * // Delete a few Callbacks
     * const { count } = await prisma.callbacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends callbacksDeleteManyArgs>(args?: SelectSubset<T, callbacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callbacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Callbacks
     * const callbacks = await prisma.callbacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends callbacksUpdateManyArgs>(args: SelectSubset<T, callbacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Callbacks and returns the data updated in the database.
     * @param {callbacksUpdateManyAndReturnArgs} args - Arguments to update many Callbacks.
     * @example
     * // Update many Callbacks
     * const callbacks = await prisma.callbacks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Callbacks and only return the `callback_id`
     * const callbacksWithCallback_idOnly = await prisma.callbacks.updateManyAndReturn({
     *   select: { callback_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends callbacksUpdateManyAndReturnArgs>(args: SelectSubset<T, callbacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Callbacks.
     * @param {callbacksUpsertArgs} args - Arguments to update or create a Callbacks.
     * @example
     * // Update or create a Callbacks
     * const callbacks = await prisma.callbacks.upsert({
     *   create: {
     *     // ... data to create a Callbacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Callbacks we want to update
     *   }
     * })
     */
    upsert<T extends callbacksUpsertArgs>(args: SelectSubset<T, callbacksUpsertArgs<ExtArgs>>): Prisma__callbacksClient<$Result.GetResult<Prisma.$callbacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callbacksCountArgs} args - Arguments to filter Callbacks to count.
     * @example
     * // Count the number of Callbacks
     * const count = await prisma.callbacks.count({
     *   where: {
     *     // ... the filter for the Callbacks we want to count
     *   }
     * })
    **/
    count<T extends callbacksCountArgs>(
      args?: Subset<T, callbacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallbacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallbacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CallbacksAggregateArgs>(args: Subset<T, CallbacksAggregateArgs>): Prisma.PrismaPromise<GetCallbacksAggregateType<T>>

    /**
     * Group by Callbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {callbacksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends callbacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: callbacksGroupByArgs['orderBy'] }
        : { orderBy?: callbacksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, callbacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallbacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the callbacks model
   */
  readonly fields: callbacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for callbacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__callbacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organizers<T extends callbacks$OrganizersArgs<ExtArgs> = {}>(args?: Subset<T, callbacks$OrganizersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the callbacks model
   */
  interface callbacksFieldRefs {
    readonly callback_id: FieldRef<"callbacks", 'Int'>
    readonly callback_name: FieldRef<"callbacks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * callbacks findUnique
   */
  export type callbacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * Filter, which callbacks to fetch.
     */
    where: callbacksWhereUniqueInput
  }

  /**
   * callbacks findUniqueOrThrow
   */
  export type callbacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * Filter, which callbacks to fetch.
     */
    where: callbacksWhereUniqueInput
  }

  /**
   * callbacks findFirst
   */
  export type callbacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * Filter, which callbacks to fetch.
     */
    where?: callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of callbacks to fetch.
     */
    orderBy?: callbacksOrderByWithRelationInput | callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for callbacks.
     */
    cursor?: callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` callbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of callbacks.
     */
    distinct?: CallbacksScalarFieldEnum | CallbacksScalarFieldEnum[]
  }

  /**
   * callbacks findFirstOrThrow
   */
  export type callbacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * Filter, which callbacks to fetch.
     */
    where?: callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of callbacks to fetch.
     */
    orderBy?: callbacksOrderByWithRelationInput | callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for callbacks.
     */
    cursor?: callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` callbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of callbacks.
     */
    distinct?: CallbacksScalarFieldEnum | CallbacksScalarFieldEnum[]
  }

  /**
   * callbacks findMany
   */
  export type callbacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * Filter, which callbacks to fetch.
     */
    where?: callbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of callbacks to fetch.
     */
    orderBy?: callbacksOrderByWithRelationInput | callbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing callbacks.
     */
    cursor?: callbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` callbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` callbacks.
     */
    skip?: number
    distinct?: CallbacksScalarFieldEnum | CallbacksScalarFieldEnum[]
  }

  /**
   * callbacks create
   */
  export type callbacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * The data needed to create a callbacks.
     */
    data: XOR<callbacksCreateInput, callbacksUncheckedCreateInput>
  }

  /**
   * callbacks createMany
   */
  export type callbacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many callbacks.
     */
    data: callbacksCreateManyInput | callbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * callbacks createManyAndReturn
   */
  export type callbacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * The data used to create many callbacks.
     */
    data: callbacksCreateManyInput | callbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * callbacks update
   */
  export type callbacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * The data needed to update a callbacks.
     */
    data: XOR<callbacksUpdateInput, callbacksUncheckedUpdateInput>
    /**
     * Choose, which callbacks to update.
     */
    where: callbacksWhereUniqueInput
  }

  /**
   * callbacks updateMany
   */
  export type callbacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update callbacks.
     */
    data: XOR<callbacksUpdateManyMutationInput, callbacksUncheckedUpdateManyInput>
    /**
     * Filter which callbacks to update
     */
    where?: callbacksWhereInput
    /**
     * Limit how many callbacks to update.
     */
    limit?: number
  }

  /**
   * callbacks updateManyAndReturn
   */
  export type callbacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * The data used to update callbacks.
     */
    data: XOR<callbacksUpdateManyMutationInput, callbacksUncheckedUpdateManyInput>
    /**
     * Filter which callbacks to update
     */
    where?: callbacksWhereInput
    /**
     * Limit how many callbacks to update.
     */
    limit?: number
  }

  /**
   * callbacks upsert
   */
  export type callbacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * The filter to search for the callbacks to update in case it exists.
     */
    where: callbacksWhereUniqueInput
    /**
     * In case the callbacks found by the `where` argument doesn't exist, create a new callbacks with this data.
     */
    create: XOR<callbacksCreateInput, callbacksUncheckedCreateInput>
    /**
     * In case the callbacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<callbacksUpdateInput, callbacksUncheckedUpdateInput>
  }

  /**
   * callbacks delete
   */
  export type callbacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
    /**
     * Filter which callbacks to delete.
     */
    where: callbacksWhereUniqueInput
  }

  /**
   * callbacks deleteMany
   */
  export type callbacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which callbacks to delete
     */
    where?: callbacksWhereInput
    /**
     * Limit how many callbacks to delete.
     */
    limit?: number
  }

  /**
   * callbacks.Organizers
   */
  export type callbacks$OrganizersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizers
     */
    select?: OrganizersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizers
     */
    omit?: OrganizersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizersInclude<ExtArgs> | null
    where?: OrganizersWhereInput
    orderBy?: OrganizersOrderByWithRelationInput | OrganizersOrderByWithRelationInput[]
    cursor?: OrganizersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizersScalarFieldEnum | OrganizersScalarFieldEnum[]
  }

  /**
   * callbacks without action
   */
  export type callbacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the callbacks
     */
    select?: callbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the callbacks
     */
    omit?: callbacksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: callbacksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    user_id: 'user_id',
    comment_text: 'comment_text',
    organizer_id: 'organizer_id',
    comment_isVerified: 'comment_isVerified',
    comment_name: 'comment_name',
    post_id: 'post_id'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const CreatedPostsScalarFieldEnum: {
    post_image: 'post_image',
    post_description: 'post_description',
    post_cost: 'post_cost',
    post_meetingPlace: 'post_meetingPlace',
    post_allSeats: 'post_allSeats',
    post_buydSeats: 'post_buydSeats',
    post_checked: 'post_checked',
    organizer_id: 'organizer_id',
    post_id: 'post_id',
    genre_id: 'genre_id',
    post_name: 'post_name',
    post_meetDate: 'post_meetDate',
    post_fullDescription: 'post_fullDescription'
  };

  export type CreatedPostsScalarFieldEnum = (typeof CreatedPostsScalarFieldEnum)[keyof typeof CreatedPostsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    genre_id: 'genre_id',
    genre_name: 'genre_name',
    genre_description: 'genre_description',
    sphere_id: 'sphere_id'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const OrganizersScalarFieldEnum: {
    organizer_description: 'organizer_description',
    organizer_verified: 'organizer_verified',
    organizer_phoneNum: 'organizer_phoneNum',
    organizer_id: 'organizer_id',
    sphere_id: 'sphere_id',
    organizer_nickname: 'organizer_nickname',
    user_id: 'user_id',
    organizer_photo: 'organizer_photo',
    callback_id: 'callback_id',
    organizer_reasonToCancel: 'organizer_reasonToCancel'
  };

  export type OrganizersScalarFieldEnum = (typeof OrganizersScalarFieldEnum)[keyof typeof OrganizersScalarFieldEnum]


  export const ReasonsToRefundScalarFieldEnum: {
    reason_id: 'reason_id',
    reason_name: 'reason_name',
    reason_description: 'reason_description'
  };

  export type ReasonsToRefundScalarFieldEnum = (typeof ReasonsToRefundScalarFieldEnum)[keyof typeof ReasonsToRefundScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    role_name: 'role_name',
    role_id: 'role_id'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const SphereScalarFieldEnum: {
    sphere_id: 'sphere_id',
    sphere_name: 'sphere_name'
  };

  export type SphereScalarFieldEnum = (typeof SphereScalarFieldEnum)[keyof typeof SphereScalarFieldEnum]


  export const TicketRefundScalarFieldEnum: {
    ticketRefund_id: 'ticketRefund_id',
    ticketRefind_description: 'ticketRefind_description',
    ticket_id: 'ticket_id',
    ticketRefind_isConfirm: 'ticketRefind_isConfirm',
    reason_id: 'reason_id',
    user_id: 'user_id',
    ticketRefund_quantity: 'ticketRefund_quantity'
  };

  export type TicketRefundScalarFieldEnum = (typeof TicketRefundScalarFieldEnum)[keyof typeof TicketRefundScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    ticket_id: 'ticket_id',
    user_id: 'user_id',
    post_id: 'post_id',
    ticket_quantity: 'ticket_quantity',
    ticket_name: 'ticket_name',
    ticket_genre: 'ticket_genre',
    ticket_sphere: 'ticket_sphere',
    ticket_meetPlace: 'ticket_meetPlace',
    ticket_cost: 'ticket_cost',
    ticket_date: 'ticket_date',
    ticket_isHere: 'ticket_isHere',
    ticket_isRefind: 'ticket_isRefind',
    organizer_id: 'organizer_id',
    ticket_image: 'ticket_image'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_name: 'user_name',
    user_surname: 'user_surname',
    user_mail: 'user_mail',
    user_password: 'user_password',
    user_photo: 'user_photo',
    role_id: 'role_id',
    user_id: 'user_id',
    user_likedMass: 'user_likedMass'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CallbacksScalarFieldEnum: {
    callback_id: 'callback_id',
    callback_name: 'callback_name'
  };

  export type CallbacksScalarFieldEnum = (typeof CallbacksScalarFieldEnum)[keyof typeof CallbacksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    comment_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    comment_text?: StringFilter<"Comments"> | string
    organizer_id?: IntFilter<"Comments"> | number
    comment_isVerified?: BoolNullableFilter<"Comments"> | boolean | null
    comment_name?: StringFilter<"Comments"> | string
    post_id?: IntNullableFilter<"Comments"> | number | null
    Organizers?: XOR<OrganizersScalarRelationFilter, OrganizersWhereInput>
    CreatedPosts?: XOR<CreatedPostsNullableScalarRelationFilter, CreatedPostsWhereInput> | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    comment_text?: SortOrder
    organizer_id?: SortOrder
    comment_isVerified?: SortOrderInput | SortOrder
    comment_name?: SortOrder
    post_id?: SortOrderInput | SortOrder
    Organizers?: OrganizersOrderByWithRelationInput
    CreatedPosts?: CreatedPostsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    user_id?: IntFilter<"Comments"> | number
    comment_text?: StringFilter<"Comments"> | string
    organizer_id?: IntFilter<"Comments"> | number
    comment_isVerified?: BoolNullableFilter<"Comments"> | boolean | null
    comment_name?: StringFilter<"Comments"> | string
    post_id?: IntNullableFilter<"Comments"> | number | null
    Organizers?: XOR<OrganizersScalarRelationFilter, OrganizersWhereInput>
    CreatedPosts?: XOR<CreatedPostsNullableScalarRelationFilter, CreatedPostsWhereInput> | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "comment_id">

  export type CommentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    comment_text?: SortOrder
    organizer_id?: SortOrder
    comment_isVerified?: SortOrderInput | SortOrder
    comment_name?: SortOrder
    post_id?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    comment_id?: IntWithAggregatesFilter<"Comments"> | number
    user_id?: IntWithAggregatesFilter<"Comments"> | number
    comment_text?: StringWithAggregatesFilter<"Comments"> | string
    organizer_id?: IntWithAggregatesFilter<"Comments"> | number
    comment_isVerified?: BoolNullableWithAggregatesFilter<"Comments"> | boolean | null
    comment_name?: StringWithAggregatesFilter<"Comments"> | string
    post_id?: IntNullableWithAggregatesFilter<"Comments"> | number | null
  }

  export type CreatedPostsWhereInput = {
    AND?: CreatedPostsWhereInput | CreatedPostsWhereInput[]
    OR?: CreatedPostsWhereInput[]
    NOT?: CreatedPostsWhereInput | CreatedPostsWhereInput[]
    post_image?: StringFilter<"CreatedPosts"> | string
    post_description?: StringFilter<"CreatedPosts"> | string
    post_cost?: IntFilter<"CreatedPosts"> | number
    post_meetingPlace?: StringFilter<"CreatedPosts"> | string
    post_allSeats?: DecimalFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_checked?: BoolNullableFilter<"CreatedPosts"> | boolean | null
    organizer_id?: IntFilter<"CreatedPosts"> | number
    post_id?: IntFilter<"CreatedPosts"> | number
    genre_id?: IntFilter<"CreatedPosts"> | number
    post_name?: StringFilter<"CreatedPosts"> | string
    post_meetDate?: DateTimeFilter<"CreatedPosts"> | Date | string
    post_fullDescription?: StringFilter<"CreatedPosts"> | string
    Comments?: CommentsListRelationFilter
    Genres?: XOR<GenresScalarRelationFilter, GenresWhereInput>
    Organizers?: XOR<OrganizersScalarRelationFilter, OrganizersWhereInput>
    Tickets?: TicketsListRelationFilter
  }

  export type CreatedPostsOrderByWithRelationInput = {
    post_image?: SortOrder
    post_description?: SortOrder
    post_cost?: SortOrder
    post_meetingPlace?: SortOrder
    post_allSeats?: SortOrder
    post_buydSeats?: SortOrder
    post_checked?: SortOrderInput | SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
    genre_id?: SortOrder
    post_name?: SortOrder
    post_meetDate?: SortOrder
    post_fullDescription?: SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Genres?: GenresOrderByWithRelationInput
    Organizers?: OrganizersOrderByWithRelationInput
    Tickets?: TicketsOrderByRelationAggregateInput
  }

  export type CreatedPostsWhereUniqueInput = Prisma.AtLeast<{
    post_id?: number
    AND?: CreatedPostsWhereInput | CreatedPostsWhereInput[]
    OR?: CreatedPostsWhereInput[]
    NOT?: CreatedPostsWhereInput | CreatedPostsWhereInput[]
    post_image?: StringFilter<"CreatedPosts"> | string
    post_description?: StringFilter<"CreatedPosts"> | string
    post_cost?: IntFilter<"CreatedPosts"> | number
    post_meetingPlace?: StringFilter<"CreatedPosts"> | string
    post_allSeats?: DecimalFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_checked?: BoolNullableFilter<"CreatedPosts"> | boolean | null
    organizer_id?: IntFilter<"CreatedPosts"> | number
    genre_id?: IntFilter<"CreatedPosts"> | number
    post_name?: StringFilter<"CreatedPosts"> | string
    post_meetDate?: DateTimeFilter<"CreatedPosts"> | Date | string
    post_fullDescription?: StringFilter<"CreatedPosts"> | string
    Comments?: CommentsListRelationFilter
    Genres?: XOR<GenresScalarRelationFilter, GenresWhereInput>
    Organizers?: XOR<OrganizersScalarRelationFilter, OrganizersWhereInput>
    Tickets?: TicketsListRelationFilter
  }, "post_id">

  export type CreatedPostsOrderByWithAggregationInput = {
    post_image?: SortOrder
    post_description?: SortOrder
    post_cost?: SortOrder
    post_meetingPlace?: SortOrder
    post_allSeats?: SortOrder
    post_buydSeats?: SortOrder
    post_checked?: SortOrderInput | SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
    genre_id?: SortOrder
    post_name?: SortOrder
    post_meetDate?: SortOrder
    post_fullDescription?: SortOrder
    _count?: CreatedPostsCountOrderByAggregateInput
    _avg?: CreatedPostsAvgOrderByAggregateInput
    _max?: CreatedPostsMaxOrderByAggregateInput
    _min?: CreatedPostsMinOrderByAggregateInput
    _sum?: CreatedPostsSumOrderByAggregateInput
  }

  export type CreatedPostsScalarWhereWithAggregatesInput = {
    AND?: CreatedPostsScalarWhereWithAggregatesInput | CreatedPostsScalarWhereWithAggregatesInput[]
    OR?: CreatedPostsScalarWhereWithAggregatesInput[]
    NOT?: CreatedPostsScalarWhereWithAggregatesInput | CreatedPostsScalarWhereWithAggregatesInput[]
    post_image?: StringWithAggregatesFilter<"CreatedPosts"> | string
    post_description?: StringWithAggregatesFilter<"CreatedPosts"> | string
    post_cost?: IntWithAggregatesFilter<"CreatedPosts"> | number
    post_meetingPlace?: StringWithAggregatesFilter<"CreatedPosts"> | string
    post_allSeats?: DecimalWithAggregatesFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalWithAggregatesFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_checked?: BoolNullableWithAggregatesFilter<"CreatedPosts"> | boolean | null
    organizer_id?: IntWithAggregatesFilter<"CreatedPosts"> | number
    post_id?: IntWithAggregatesFilter<"CreatedPosts"> | number
    genre_id?: IntWithAggregatesFilter<"CreatedPosts"> | number
    post_name?: StringWithAggregatesFilter<"CreatedPosts"> | string
    post_meetDate?: DateTimeWithAggregatesFilter<"CreatedPosts"> | Date | string
    post_fullDescription?: StringWithAggregatesFilter<"CreatedPosts"> | string
  }

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    genre_id?: IntFilter<"Genres"> | number
    genre_name?: StringFilter<"Genres"> | string
    genre_description?: StringFilter<"Genres"> | string
    sphere_id?: IntFilter<"Genres"> | number
    CreatedPosts?: CreatedPostsListRelationFilter
    Sphere?: XOR<SphereScalarRelationFilter, SphereWhereInput>
  }

  export type GenresOrderByWithRelationInput = {
    genre_id?: SortOrder
    genre_name?: SortOrder
    genre_description?: SortOrder
    sphere_id?: SortOrder
    CreatedPosts?: CreatedPostsOrderByRelationAggregateInput
    Sphere?: SphereOrderByWithRelationInput
  }

  export type GenresWhereUniqueInput = Prisma.AtLeast<{
    genre_id?: number
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    genre_name?: StringFilter<"Genres"> | string
    genre_description?: StringFilter<"Genres"> | string
    sphere_id?: IntFilter<"Genres"> | number
    CreatedPosts?: CreatedPostsListRelationFilter
    Sphere?: XOR<SphereScalarRelationFilter, SphereWhereInput>
  }, "genre_id">

  export type GenresOrderByWithAggregationInput = {
    genre_id?: SortOrder
    genre_name?: SortOrder
    genre_description?: SortOrder
    sphere_id?: SortOrder
    _count?: GenresCountOrderByAggregateInput
    _avg?: GenresAvgOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
    _sum?: GenresSumOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    OR?: GenresScalarWhereWithAggregatesInput[]
    NOT?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    genre_id?: IntWithAggregatesFilter<"Genres"> | number
    genre_name?: StringWithAggregatesFilter<"Genres"> | string
    genre_description?: StringWithAggregatesFilter<"Genres"> | string
    sphere_id?: IntWithAggregatesFilter<"Genres"> | number
  }

  export type OrganizersWhereInput = {
    AND?: OrganizersWhereInput | OrganizersWhereInput[]
    OR?: OrganizersWhereInput[]
    NOT?: OrganizersWhereInput | OrganizersWhereInput[]
    organizer_description?: StringFilter<"Organizers"> | string
    organizer_verified?: BoolNullableFilter<"Organizers"> | boolean | null
    organizer_phoneNum?: StringFilter<"Organizers"> | string
    organizer_id?: IntFilter<"Organizers"> | number
    sphere_id?: IntFilter<"Organizers"> | number
    organizer_nickname?: StringFilter<"Organizers"> | string
    user_id?: IntFilter<"Organizers"> | number
    organizer_photo?: StringFilter<"Organizers"> | string
    callback_id?: IntFilter<"Organizers"> | number
    organizer_reasonToCancel?: StringNullableFilter<"Organizers"> | string | null
    Comments?: CommentsListRelationFilter
    CreatedPosts?: CreatedPostsListRelationFilter
    callbacks?: XOR<CallbacksScalarRelationFilter, callbacksWhereInput>
    Sphere?: XOR<SphereScalarRelationFilter, SphereWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type OrganizersOrderByWithRelationInput = {
    organizer_description?: SortOrder
    organizer_verified?: SortOrderInput | SortOrder
    organizer_phoneNum?: SortOrder
    organizer_id?: SortOrder
    sphere_id?: SortOrder
    organizer_nickname?: SortOrder
    user_id?: SortOrder
    organizer_photo?: SortOrder
    callback_id?: SortOrder
    organizer_reasonToCancel?: SortOrderInput | SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    CreatedPosts?: CreatedPostsOrderByRelationAggregateInput
    callbacks?: callbacksOrderByWithRelationInput
    Sphere?: SphereOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type OrganizersWhereUniqueInput = Prisma.AtLeast<{
    organizer_id?: number
    AND?: OrganizersWhereInput | OrganizersWhereInput[]
    OR?: OrganizersWhereInput[]
    NOT?: OrganizersWhereInput | OrganizersWhereInput[]
    organizer_description?: StringFilter<"Organizers"> | string
    organizer_verified?: BoolNullableFilter<"Organizers"> | boolean | null
    organizer_phoneNum?: StringFilter<"Organizers"> | string
    sphere_id?: IntFilter<"Organizers"> | number
    organizer_nickname?: StringFilter<"Organizers"> | string
    user_id?: IntFilter<"Organizers"> | number
    organizer_photo?: StringFilter<"Organizers"> | string
    callback_id?: IntFilter<"Organizers"> | number
    organizer_reasonToCancel?: StringNullableFilter<"Organizers"> | string | null
    Comments?: CommentsListRelationFilter
    CreatedPosts?: CreatedPostsListRelationFilter
    callbacks?: XOR<CallbacksScalarRelationFilter, callbacksWhereInput>
    Sphere?: XOR<SphereScalarRelationFilter, SphereWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "organizer_id">

  export type OrganizersOrderByWithAggregationInput = {
    organizer_description?: SortOrder
    organizer_verified?: SortOrderInput | SortOrder
    organizer_phoneNum?: SortOrder
    organizer_id?: SortOrder
    sphere_id?: SortOrder
    organizer_nickname?: SortOrder
    user_id?: SortOrder
    organizer_photo?: SortOrder
    callback_id?: SortOrder
    organizer_reasonToCancel?: SortOrderInput | SortOrder
    _count?: OrganizersCountOrderByAggregateInput
    _avg?: OrganizersAvgOrderByAggregateInput
    _max?: OrganizersMaxOrderByAggregateInput
    _min?: OrganizersMinOrderByAggregateInput
    _sum?: OrganizersSumOrderByAggregateInput
  }

  export type OrganizersScalarWhereWithAggregatesInput = {
    AND?: OrganizersScalarWhereWithAggregatesInput | OrganizersScalarWhereWithAggregatesInput[]
    OR?: OrganizersScalarWhereWithAggregatesInput[]
    NOT?: OrganizersScalarWhereWithAggregatesInput | OrganizersScalarWhereWithAggregatesInput[]
    organizer_description?: StringWithAggregatesFilter<"Organizers"> | string
    organizer_verified?: BoolNullableWithAggregatesFilter<"Organizers"> | boolean | null
    organizer_phoneNum?: StringWithAggregatesFilter<"Organizers"> | string
    organizer_id?: IntWithAggregatesFilter<"Organizers"> | number
    sphere_id?: IntWithAggregatesFilter<"Organizers"> | number
    organizer_nickname?: StringWithAggregatesFilter<"Organizers"> | string
    user_id?: IntWithAggregatesFilter<"Organizers"> | number
    organizer_photo?: StringWithAggregatesFilter<"Organizers"> | string
    callback_id?: IntWithAggregatesFilter<"Organizers"> | number
    organizer_reasonToCancel?: StringNullableWithAggregatesFilter<"Organizers"> | string | null
  }

  export type ReasonsToRefundWhereInput = {
    AND?: ReasonsToRefundWhereInput | ReasonsToRefundWhereInput[]
    OR?: ReasonsToRefundWhereInput[]
    NOT?: ReasonsToRefundWhereInput | ReasonsToRefundWhereInput[]
    reason_id?: IntFilter<"ReasonsToRefund"> | number
    reason_name?: StringFilter<"ReasonsToRefund"> | string
    reason_description?: StringFilter<"ReasonsToRefund"> | string
    TicketRefund?: TicketRefundListRelationFilter
  }

  export type ReasonsToRefundOrderByWithRelationInput = {
    reason_id?: SortOrder
    reason_name?: SortOrder
    reason_description?: SortOrder
    TicketRefund?: TicketRefundOrderByRelationAggregateInput
  }

  export type ReasonsToRefundWhereUniqueInput = Prisma.AtLeast<{
    reason_id?: number
    AND?: ReasonsToRefundWhereInput | ReasonsToRefundWhereInput[]
    OR?: ReasonsToRefundWhereInput[]
    NOT?: ReasonsToRefundWhereInput | ReasonsToRefundWhereInput[]
    reason_name?: StringFilter<"ReasonsToRefund"> | string
    reason_description?: StringFilter<"ReasonsToRefund"> | string
    TicketRefund?: TicketRefundListRelationFilter
  }, "reason_id">

  export type ReasonsToRefundOrderByWithAggregationInput = {
    reason_id?: SortOrder
    reason_name?: SortOrder
    reason_description?: SortOrder
    _count?: ReasonsToRefundCountOrderByAggregateInput
    _avg?: ReasonsToRefundAvgOrderByAggregateInput
    _max?: ReasonsToRefundMaxOrderByAggregateInput
    _min?: ReasonsToRefundMinOrderByAggregateInput
    _sum?: ReasonsToRefundSumOrderByAggregateInput
  }

  export type ReasonsToRefundScalarWhereWithAggregatesInput = {
    AND?: ReasonsToRefundScalarWhereWithAggregatesInput | ReasonsToRefundScalarWhereWithAggregatesInput[]
    OR?: ReasonsToRefundScalarWhereWithAggregatesInput[]
    NOT?: ReasonsToRefundScalarWhereWithAggregatesInput | ReasonsToRefundScalarWhereWithAggregatesInput[]
    reason_id?: IntWithAggregatesFilter<"ReasonsToRefund"> | number
    reason_name?: StringWithAggregatesFilter<"ReasonsToRefund"> | string
    reason_description?: StringWithAggregatesFilter<"ReasonsToRefund"> | string
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    role_name?: StringFilter<"Roles"> | string
    role_id?: IntFilter<"Roles"> | number
  }

  export type RolesOrderByWithRelationInput = {
    role_name?: SortOrder
    role_id?: SortOrder
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    role_name?: StringFilter<"Roles"> | string
  }, "role_id">

  export type RolesOrderByWithAggregationInput = {
    role_name?: SortOrder
    role_id?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    role_name?: StringWithAggregatesFilter<"Roles"> | string
    role_id?: IntWithAggregatesFilter<"Roles"> | number
  }

  export type SphereWhereInput = {
    AND?: SphereWhereInput | SphereWhereInput[]
    OR?: SphereWhereInput[]
    NOT?: SphereWhereInput | SphereWhereInput[]
    sphere_id?: IntFilter<"Sphere"> | number
    sphere_name?: StringFilter<"Sphere"> | string
    Genres?: GenresListRelationFilter
    Organizers?: OrganizersListRelationFilter
  }

  export type SphereOrderByWithRelationInput = {
    sphere_id?: SortOrder
    sphere_name?: SortOrder
    Genres?: GenresOrderByRelationAggregateInput
    Organizers?: OrganizersOrderByRelationAggregateInput
  }

  export type SphereWhereUniqueInput = Prisma.AtLeast<{
    sphere_id?: number
    AND?: SphereWhereInput | SphereWhereInput[]
    OR?: SphereWhereInput[]
    NOT?: SphereWhereInput | SphereWhereInput[]
    sphere_name?: StringFilter<"Sphere"> | string
    Genres?: GenresListRelationFilter
    Organizers?: OrganizersListRelationFilter
  }, "sphere_id">

  export type SphereOrderByWithAggregationInput = {
    sphere_id?: SortOrder
    sphere_name?: SortOrder
    _count?: SphereCountOrderByAggregateInput
    _avg?: SphereAvgOrderByAggregateInput
    _max?: SphereMaxOrderByAggregateInput
    _min?: SphereMinOrderByAggregateInput
    _sum?: SphereSumOrderByAggregateInput
  }

  export type SphereScalarWhereWithAggregatesInput = {
    AND?: SphereScalarWhereWithAggregatesInput | SphereScalarWhereWithAggregatesInput[]
    OR?: SphereScalarWhereWithAggregatesInput[]
    NOT?: SphereScalarWhereWithAggregatesInput | SphereScalarWhereWithAggregatesInput[]
    sphere_id?: IntWithAggregatesFilter<"Sphere"> | number
    sphere_name?: StringWithAggregatesFilter<"Sphere"> | string
  }

  export type TicketRefundWhereInput = {
    AND?: TicketRefundWhereInput | TicketRefundWhereInput[]
    OR?: TicketRefundWhereInput[]
    NOT?: TicketRefundWhereInput | TicketRefundWhereInput[]
    ticketRefund_id?: IntFilter<"TicketRefund"> | number
    ticketRefind_description?: StringNullableFilter<"TicketRefund"> | string | null
    ticket_id?: IntFilter<"TicketRefund"> | number
    ticketRefind_isConfirm?: BoolNullableFilter<"TicketRefund"> | boolean | null
    reason_id?: IntFilter<"TicketRefund"> | number
    user_id?: IntFilter<"TicketRefund"> | number
    ticketRefund_quantity?: DecimalFilter<"TicketRefund"> | Decimal | DecimalJsLike | number | string
    ReasonsToRefund?: XOR<ReasonsToRefundScalarRelationFilter, ReasonsToRefundWhereInput>
    Tickets?: XOR<TicketsScalarRelationFilter, TicketsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TicketRefundOrderByWithRelationInput = {
    ticketRefund_id?: SortOrder
    ticketRefind_description?: SortOrderInput | SortOrder
    ticket_id?: SortOrder
    ticketRefind_isConfirm?: SortOrderInput | SortOrder
    reason_id?: SortOrder
    user_id?: SortOrder
    ticketRefund_quantity?: SortOrder
    ReasonsToRefund?: ReasonsToRefundOrderByWithRelationInput
    Tickets?: TicketsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type TicketRefundWhereUniqueInput = Prisma.AtLeast<{
    ticketRefund_id?: number
    AND?: TicketRefundWhereInput | TicketRefundWhereInput[]
    OR?: TicketRefundWhereInput[]
    NOT?: TicketRefundWhereInput | TicketRefundWhereInput[]
    ticketRefind_description?: StringNullableFilter<"TicketRefund"> | string | null
    ticket_id?: IntFilter<"TicketRefund"> | number
    ticketRefind_isConfirm?: BoolNullableFilter<"TicketRefund"> | boolean | null
    reason_id?: IntFilter<"TicketRefund"> | number
    user_id?: IntFilter<"TicketRefund"> | number
    ticketRefund_quantity?: DecimalFilter<"TicketRefund"> | Decimal | DecimalJsLike | number | string
    ReasonsToRefund?: XOR<ReasonsToRefundScalarRelationFilter, ReasonsToRefundWhereInput>
    Tickets?: XOR<TicketsScalarRelationFilter, TicketsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "ticketRefund_id">

  export type TicketRefundOrderByWithAggregationInput = {
    ticketRefund_id?: SortOrder
    ticketRefind_description?: SortOrderInput | SortOrder
    ticket_id?: SortOrder
    ticketRefind_isConfirm?: SortOrderInput | SortOrder
    reason_id?: SortOrder
    user_id?: SortOrder
    ticketRefund_quantity?: SortOrder
    _count?: TicketRefundCountOrderByAggregateInput
    _avg?: TicketRefundAvgOrderByAggregateInput
    _max?: TicketRefundMaxOrderByAggregateInput
    _min?: TicketRefundMinOrderByAggregateInput
    _sum?: TicketRefundSumOrderByAggregateInput
  }

  export type TicketRefundScalarWhereWithAggregatesInput = {
    AND?: TicketRefundScalarWhereWithAggregatesInput | TicketRefundScalarWhereWithAggregatesInput[]
    OR?: TicketRefundScalarWhereWithAggregatesInput[]
    NOT?: TicketRefundScalarWhereWithAggregatesInput | TicketRefundScalarWhereWithAggregatesInput[]
    ticketRefund_id?: IntWithAggregatesFilter<"TicketRefund"> | number
    ticketRefind_description?: StringNullableWithAggregatesFilter<"TicketRefund"> | string | null
    ticket_id?: IntWithAggregatesFilter<"TicketRefund"> | number
    ticketRefind_isConfirm?: BoolNullableWithAggregatesFilter<"TicketRefund"> | boolean | null
    reason_id?: IntWithAggregatesFilter<"TicketRefund"> | number
    user_id?: IntWithAggregatesFilter<"TicketRefund"> | number
    ticketRefund_quantity?: DecimalWithAggregatesFilter<"TicketRefund"> | Decimal | DecimalJsLike | number | string
  }

  export type TicketsWhereInput = {
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    ticket_id?: IntFilter<"Tickets"> | number
    user_id?: IntFilter<"Tickets"> | number
    post_id?: IntNullableFilter<"Tickets"> | number | null
    ticket_quantity?: IntFilter<"Tickets"> | number
    ticket_name?: StringFilter<"Tickets"> | string
    ticket_genre?: StringFilter<"Tickets"> | string
    ticket_sphere?: StringFilter<"Tickets"> | string
    ticket_meetPlace?: StringFilter<"Tickets"> | string
    ticket_cost?: IntFilter<"Tickets"> | number
    ticket_date?: DateTimeFilter<"Tickets"> | Date | string
    ticket_isHere?: BoolFilter<"Tickets"> | boolean
    ticket_isRefind?: BoolFilter<"Tickets"> | boolean
    organizer_id?: IntNullableFilter<"Tickets"> | number | null
    ticket_image?: StringFilter<"Tickets"> | string
    TicketRefund?: TicketRefundListRelationFilter
    CreatedPosts?: XOR<CreatedPostsNullableScalarRelationFilter, CreatedPostsWhereInput> | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TicketsOrderByWithRelationInput = {
    ticket_id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    ticket_quantity?: SortOrder
    ticket_name?: SortOrder
    ticket_genre?: SortOrder
    ticket_sphere?: SortOrder
    ticket_meetPlace?: SortOrder
    ticket_cost?: SortOrder
    ticket_date?: SortOrder
    ticket_isHere?: SortOrder
    ticket_isRefind?: SortOrder
    organizer_id?: SortOrderInput | SortOrder
    ticket_image?: SortOrder
    TicketRefund?: TicketRefundOrderByRelationAggregateInput
    CreatedPosts?: CreatedPostsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type TicketsWhereUniqueInput = Prisma.AtLeast<{
    ticket_id?: number
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    user_id?: IntFilter<"Tickets"> | number
    post_id?: IntNullableFilter<"Tickets"> | number | null
    ticket_quantity?: IntFilter<"Tickets"> | number
    ticket_name?: StringFilter<"Tickets"> | string
    ticket_genre?: StringFilter<"Tickets"> | string
    ticket_sphere?: StringFilter<"Tickets"> | string
    ticket_meetPlace?: StringFilter<"Tickets"> | string
    ticket_cost?: IntFilter<"Tickets"> | number
    ticket_date?: DateTimeFilter<"Tickets"> | Date | string
    ticket_isHere?: BoolFilter<"Tickets"> | boolean
    ticket_isRefind?: BoolFilter<"Tickets"> | boolean
    organizer_id?: IntNullableFilter<"Tickets"> | number | null
    ticket_image?: StringFilter<"Tickets"> | string
    TicketRefund?: TicketRefundListRelationFilter
    CreatedPosts?: XOR<CreatedPostsNullableScalarRelationFilter, CreatedPostsWhereInput> | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "ticket_id">

  export type TicketsOrderByWithAggregationInput = {
    ticket_id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    ticket_quantity?: SortOrder
    ticket_name?: SortOrder
    ticket_genre?: SortOrder
    ticket_sphere?: SortOrder
    ticket_meetPlace?: SortOrder
    ticket_cost?: SortOrder
    ticket_date?: SortOrder
    ticket_isHere?: SortOrder
    ticket_isRefind?: SortOrder
    organizer_id?: SortOrderInput | SortOrder
    ticket_image?: SortOrder
    _count?: TicketsCountOrderByAggregateInput
    _avg?: TicketsAvgOrderByAggregateInput
    _max?: TicketsMaxOrderByAggregateInput
    _min?: TicketsMinOrderByAggregateInput
    _sum?: TicketsSumOrderByAggregateInput
  }

  export type TicketsScalarWhereWithAggregatesInput = {
    AND?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    OR?: TicketsScalarWhereWithAggregatesInput[]
    NOT?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    ticket_id?: IntWithAggregatesFilter<"Tickets"> | number
    user_id?: IntWithAggregatesFilter<"Tickets"> | number
    post_id?: IntNullableWithAggregatesFilter<"Tickets"> | number | null
    ticket_quantity?: IntWithAggregatesFilter<"Tickets"> | number
    ticket_name?: StringWithAggregatesFilter<"Tickets"> | string
    ticket_genre?: StringWithAggregatesFilter<"Tickets"> | string
    ticket_sphere?: StringWithAggregatesFilter<"Tickets"> | string
    ticket_meetPlace?: StringWithAggregatesFilter<"Tickets"> | string
    ticket_cost?: IntWithAggregatesFilter<"Tickets"> | number
    ticket_date?: DateTimeWithAggregatesFilter<"Tickets"> | Date | string
    ticket_isHere?: BoolWithAggregatesFilter<"Tickets"> | boolean
    ticket_isRefind?: BoolWithAggregatesFilter<"Tickets"> | boolean
    organizer_id?: IntNullableWithAggregatesFilter<"Tickets"> | number | null
    ticket_image?: StringWithAggregatesFilter<"Tickets"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_name?: StringFilter<"Users"> | string
    user_surname?: StringFilter<"Users"> | string
    user_mail?: StringFilter<"Users"> | string
    user_password?: StringFilter<"Users"> | string
    user_photo?: StringFilter<"Users"> | string
    role_id?: IntFilter<"Users"> | number
    user_id?: IntFilter<"Users"> | number
    user_likedMass?: IntNullableListFilter<"Users">
    Comments?: CommentsListRelationFilter
    Organizers?: OrganizersListRelationFilter
    TicketRefund?: TicketRefundListRelationFilter
    Tickets?: TicketsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_name?: SortOrder
    user_surname?: SortOrder
    user_mail?: SortOrder
    user_password?: SortOrder
    user_photo?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    user_likedMass?: SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Organizers?: OrganizersOrderByRelationAggregateInput
    TicketRefund?: TicketRefundOrderByRelationAggregateInput
    Tickets?: TicketsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_name?: StringFilter<"Users"> | string
    user_surname?: StringFilter<"Users"> | string
    user_mail?: StringFilter<"Users"> | string
    user_password?: StringFilter<"Users"> | string
    user_photo?: StringFilter<"Users"> | string
    role_id?: IntFilter<"Users"> | number
    user_likedMass?: IntNullableListFilter<"Users">
    Comments?: CommentsListRelationFilter
    Organizers?: OrganizersListRelationFilter
    TicketRefund?: TicketRefundListRelationFilter
    Tickets?: TicketsListRelationFilter
  }, "user_id">

  export type UsersOrderByWithAggregationInput = {
    user_name?: SortOrder
    user_surname?: SortOrder
    user_mail?: SortOrder
    user_password?: SortOrder
    user_photo?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    user_likedMass?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_name?: StringWithAggregatesFilter<"Users"> | string
    user_surname?: StringWithAggregatesFilter<"Users"> | string
    user_mail?: StringWithAggregatesFilter<"Users"> | string
    user_password?: StringWithAggregatesFilter<"Users"> | string
    user_photo?: StringWithAggregatesFilter<"Users"> | string
    role_id?: IntWithAggregatesFilter<"Users"> | number
    user_id?: IntWithAggregatesFilter<"Users"> | number
    user_likedMass?: IntNullableListFilter<"Users">
  }

  export type callbacksWhereInput = {
    AND?: callbacksWhereInput | callbacksWhereInput[]
    OR?: callbacksWhereInput[]
    NOT?: callbacksWhereInput | callbacksWhereInput[]
    callback_id?: IntFilter<"callbacks"> | number
    callback_name?: StringFilter<"callbacks"> | string
    Organizers?: OrganizersListRelationFilter
  }

  export type callbacksOrderByWithRelationInput = {
    callback_id?: SortOrder
    callback_name?: SortOrder
    Organizers?: OrganizersOrderByRelationAggregateInput
  }

  export type callbacksWhereUniqueInput = Prisma.AtLeast<{
    callback_id?: number
    AND?: callbacksWhereInput | callbacksWhereInput[]
    OR?: callbacksWhereInput[]
    NOT?: callbacksWhereInput | callbacksWhereInput[]
    callback_name?: StringFilter<"callbacks"> | string
    Organizers?: OrganizersListRelationFilter
  }, "callback_id">

  export type callbacksOrderByWithAggregationInput = {
    callback_id?: SortOrder
    callback_name?: SortOrder
    _count?: callbacksCountOrderByAggregateInput
    _avg?: callbacksAvgOrderByAggregateInput
    _max?: callbacksMaxOrderByAggregateInput
    _min?: callbacksMinOrderByAggregateInput
    _sum?: callbacksSumOrderByAggregateInput
  }

  export type callbacksScalarWhereWithAggregatesInput = {
    AND?: callbacksScalarWhereWithAggregatesInput | callbacksScalarWhereWithAggregatesInput[]
    OR?: callbacksScalarWhereWithAggregatesInput[]
    NOT?: callbacksScalarWhereWithAggregatesInput | callbacksScalarWhereWithAggregatesInput[]
    callback_id?: IntWithAggregatesFilter<"callbacks"> | number
    callback_name?: StringWithAggregatesFilter<"callbacks"> | string
  }

  export type CommentsCreateInput = {
    comment_text: string
    comment_isVerified?: boolean | null
    comment_name: string
    Organizers: OrganizersCreateNestedOneWithoutCommentsInput
    CreatedPosts?: CreatedPostsCreateNestedOneWithoutCommentsInput
    Users: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    comment_id?: number
    user_id: number
    comment_text: string
    organizer_id: number
    comment_isVerified?: boolean | null
    comment_name: string
    post_id?: number | null
  }

  export type CommentsUpdateInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    Organizers?: OrganizersUpdateOneRequiredWithoutCommentsNestedInput
    CreatedPosts?: CreatedPostsUpdateOneWithoutCommentsNestedInput
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentsCreateManyInput = {
    comment_id?: number
    user_id: number
    comment_text: string
    organizer_id: number
    comment_isVerified?: boolean | null
    comment_name: string
    post_id?: number | null
  }

  export type CommentsUpdateManyMutationInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CreatedPostsCreateInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsCreateNestedManyWithoutCreatedPostsInput
    Genres: GenresCreateNestedOneWithoutCreatedPostsInput
    Organizers: OrganizersCreateNestedOneWithoutCreatedPostsInput
    Tickets?: TicketsCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsUncheckedCreateInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    organizer_id: number
    post_id?: number
    genre_id: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsUncheckedCreateNestedManyWithoutCreatedPostsInput
    Tickets?: TicketsUncheckedCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsUpdateInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUpdateManyWithoutCreatedPostsNestedInput
    Genres?: GenresUpdateOneRequiredWithoutCreatedPostsNestedInput
    Organizers?: OrganizersUpdateOneRequiredWithoutCreatedPostsNestedInput
    Tickets?: TicketsUpdateManyWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsUncheckedUpdateInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUncheckedUpdateManyWithoutCreatedPostsNestedInput
    Tickets?: TicketsUncheckedUpdateManyWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsCreateManyInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    organizer_id: number
    post_id?: number
    genre_id: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
  }

  export type CreatedPostsUpdateManyMutationInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
  }

  export type CreatedPostsUncheckedUpdateManyInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
  }

  export type GenresCreateInput = {
    genre_name: string
    genre_description: string
    CreatedPosts?: CreatedPostsCreateNestedManyWithoutGenresInput
    Sphere: SphereCreateNestedOneWithoutGenresInput
  }

  export type GenresUncheckedCreateInput = {
    genre_id?: number
    genre_name: string
    genre_description: string
    sphere_id: number
    CreatedPosts?: CreatedPostsUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresUpdateInput = {
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
    CreatedPosts?: CreatedPostsUpdateManyWithoutGenresNestedInput
    Sphere?: SphereUpdateOneRequiredWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
    sphere_id?: IntFieldUpdateOperationsInput | number
    CreatedPosts?: CreatedPostsUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresCreateManyInput = {
    genre_id?: number
    genre_name: string
    genre_description: string
    sphere_id: number
  }

  export type GenresUpdateManyMutationInput = {
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
    sphere_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizersCreateInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_nickname: string
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
    Comments?: CommentsCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsCreateNestedManyWithoutOrganizersInput
    callbacks: callbacksCreateNestedOneWithoutOrganizersInput
    Sphere: SphereCreateNestedOneWithoutOrganizersInput
    Users: UsersCreateNestedOneWithoutOrganizersInput
  }

  export type OrganizersUncheckedCreateInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsUncheckedCreateNestedManyWithoutOrganizersInput
  }

  export type OrganizersUpdateInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUpdateManyWithoutOrganizersNestedInput
    callbacks?: callbacksUpdateOneRequiredWithoutOrganizersNestedInput
    Sphere?: SphereUpdateOneRequiredWithoutOrganizersNestedInput
    Users?: UsersUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUncheckedUpdateManyWithoutOrganizersNestedInput
  }

  export type OrganizersCreateManyInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
  }

  export type OrganizersUpdateManyMutationInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizersUncheckedUpdateManyInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReasonsToRefundCreateInput = {
    reason_name: string
    reason_description: string
    TicketRefund?: TicketRefundCreateNestedManyWithoutReasonsToRefundInput
  }

  export type ReasonsToRefundUncheckedCreateInput = {
    reason_id?: number
    reason_name: string
    reason_description: string
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutReasonsToRefundInput
  }

  export type ReasonsToRefundUpdateInput = {
    reason_name?: StringFieldUpdateOperationsInput | string
    reason_description?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUpdateManyWithoutReasonsToRefundNestedInput
  }

  export type ReasonsToRefundUncheckedUpdateInput = {
    reason_id?: IntFieldUpdateOperationsInput | number
    reason_name?: StringFieldUpdateOperationsInput | string
    reason_description?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutReasonsToRefundNestedInput
  }

  export type ReasonsToRefundCreateManyInput = {
    reason_id?: number
    reason_name: string
    reason_description: string
  }

  export type ReasonsToRefundUpdateManyMutationInput = {
    reason_name?: StringFieldUpdateOperationsInput | string
    reason_description?: StringFieldUpdateOperationsInput | string
  }

  export type ReasonsToRefundUncheckedUpdateManyInput = {
    reason_id?: IntFieldUpdateOperationsInput | number
    reason_name?: StringFieldUpdateOperationsInput | string
    reason_description?: StringFieldUpdateOperationsInput | string
  }

  export type RolesCreateInput = {
    role_name: string
  }

  export type RolesUncheckedCreateInput = {
    role_name: string
    role_id?: number
  }

  export type RolesUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type RolesCreateManyInput = {
    role_name: string
    role_id?: number
  }

  export type RolesUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateManyInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type SphereCreateInput = {
    sphere_name: string
    Genres?: GenresCreateNestedManyWithoutSphereInput
    Organizers?: OrganizersCreateNestedManyWithoutSphereInput
  }

  export type SphereUncheckedCreateInput = {
    sphere_id?: number
    sphere_name: string
    Genres?: GenresUncheckedCreateNestedManyWithoutSphereInput
    Organizers?: OrganizersUncheckedCreateNestedManyWithoutSphereInput
  }

  export type SphereUpdateInput = {
    sphere_name?: StringFieldUpdateOperationsInput | string
    Genres?: GenresUpdateManyWithoutSphereNestedInput
    Organizers?: OrganizersUpdateManyWithoutSphereNestedInput
  }

  export type SphereUncheckedUpdateInput = {
    sphere_id?: IntFieldUpdateOperationsInput | number
    sphere_name?: StringFieldUpdateOperationsInput | string
    Genres?: GenresUncheckedUpdateManyWithoutSphereNestedInput
    Organizers?: OrganizersUncheckedUpdateManyWithoutSphereNestedInput
  }

  export type SphereCreateManyInput = {
    sphere_id?: number
    sphere_name: string
  }

  export type SphereUpdateManyMutationInput = {
    sphere_name?: StringFieldUpdateOperationsInput | string
  }

  export type SphereUncheckedUpdateManyInput = {
    sphere_id?: IntFieldUpdateOperationsInput | number
    sphere_name?: StringFieldUpdateOperationsInput | string
  }

  export type TicketRefundCreateInput = {
    ticketRefind_description?: string | null
    ticketRefind_isConfirm?: boolean | null
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
    ReasonsToRefund: ReasonsToRefundCreateNestedOneWithoutTicketRefundInput
    Tickets: TicketsCreateNestedOneWithoutTicketRefundInput
    Users: UsersCreateNestedOneWithoutTicketRefundInput
  }

  export type TicketRefundUncheckedCreateInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticket_id: number
    ticketRefind_isConfirm?: boolean | null
    reason_id: number
    user_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUpdateInput = {
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ReasonsToRefund?: ReasonsToRefundUpdateOneRequiredWithoutTicketRefundNestedInput
    Tickets?: TicketsUpdateOneRequiredWithoutTicketRefundNestedInput
    Users?: UsersUpdateOneRequiredWithoutTicketRefundNestedInput
  }

  export type TicketRefundUncheckedUpdateInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reason_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundCreateManyInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticket_id: number
    ticketRefind_isConfirm?: boolean | null
    reason_id: number
    user_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUpdateManyMutationInput = {
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUncheckedUpdateManyInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reason_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketsCreateInput = {
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
    TicketRefund?: TicketRefundCreateNestedManyWithoutTicketsInput
    CreatedPosts?: CreatedPostsCreateNestedOneWithoutTicketsInput
    Users: UsersCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateInput = {
    ticket_id?: number
    user_id: number
    post_id?: number | null
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type TicketsUpdateInput = {
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUpdateManyWithoutTicketsNestedInput
    CreatedPosts?: CreatedPostsUpdateOneWithoutTicketsNestedInput
    Users?: UsersUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type TicketsCreateManyInput = {
    ticket_id?: number
    user_id: number
    post_id?: number | null
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
  }

  export type TicketsUpdateManyMutationInput = {
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUncheckedUpdateManyInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Organizers?: OrganizersCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundCreateNestedManyWithoutUsersInput
    Tickets?: TicketsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Organizers?: OrganizersUncheckedCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutUsersInput
    Tickets?: TicketsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Organizers?: OrganizersUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Organizers?: OrganizersUncheckedUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
  }

  export type UsersUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
  }

  export type UsersUncheckedUpdateManyInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
  }

  export type callbacksCreateInput = {
    callback_name: string
    Organizers?: OrganizersCreateNestedManyWithoutCallbacksInput
  }

  export type callbacksUncheckedCreateInput = {
    callback_id?: number
    callback_name: string
    Organizers?: OrganizersUncheckedCreateNestedManyWithoutCallbacksInput
  }

  export type callbacksUpdateInput = {
    callback_name?: StringFieldUpdateOperationsInput | string
    Organizers?: OrganizersUpdateManyWithoutCallbacksNestedInput
  }

  export type callbacksUncheckedUpdateInput = {
    callback_id?: IntFieldUpdateOperationsInput | number
    callback_name?: StringFieldUpdateOperationsInput | string
    Organizers?: OrganizersUncheckedUpdateManyWithoutCallbacksNestedInput
  }

  export type callbacksCreateManyInput = {
    callback_id?: number
    callback_name: string
  }

  export type callbacksUpdateManyMutationInput = {
    callback_name?: StringFieldUpdateOperationsInput | string
  }

  export type callbacksUncheckedUpdateManyInput = {
    callback_id?: IntFieldUpdateOperationsInput | number
    callback_name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizersScalarRelationFilter = {
    is?: OrganizersWhereInput
    isNot?: OrganizersWhereInput
  }

  export type CreatedPostsNullableScalarRelationFilter = {
    is?: CreatedPostsWhereInput | null
    isNot?: CreatedPostsWhereInput | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    comment_text?: SortOrder
    organizer_id?: SortOrder
    comment_isVerified?: SortOrder
    comment_name?: SortOrder
    post_id?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    comment_text?: SortOrder
    organizer_id?: SortOrder
    comment_isVerified?: SortOrder
    comment_name?: SortOrder
    post_id?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    comment_text?: SortOrder
    organizer_id?: SortOrder
    comment_isVerified?: SortOrder
    comment_name?: SortOrder
    post_id?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type GenresScalarRelationFilter = {
    is?: GenresWhereInput
    isNot?: GenresWhereInput
  }

  export type TicketsListRelationFilter = {
    every?: TicketsWhereInput
    some?: TicketsWhereInput
    none?: TicketsWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreatedPostsCountOrderByAggregateInput = {
    post_image?: SortOrder
    post_description?: SortOrder
    post_cost?: SortOrder
    post_meetingPlace?: SortOrder
    post_allSeats?: SortOrder
    post_buydSeats?: SortOrder
    post_checked?: SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
    genre_id?: SortOrder
    post_name?: SortOrder
    post_meetDate?: SortOrder
    post_fullDescription?: SortOrder
  }

  export type CreatedPostsAvgOrderByAggregateInput = {
    post_cost?: SortOrder
    post_allSeats?: SortOrder
    post_buydSeats?: SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
    genre_id?: SortOrder
  }

  export type CreatedPostsMaxOrderByAggregateInput = {
    post_image?: SortOrder
    post_description?: SortOrder
    post_cost?: SortOrder
    post_meetingPlace?: SortOrder
    post_allSeats?: SortOrder
    post_buydSeats?: SortOrder
    post_checked?: SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
    genre_id?: SortOrder
    post_name?: SortOrder
    post_meetDate?: SortOrder
    post_fullDescription?: SortOrder
  }

  export type CreatedPostsMinOrderByAggregateInput = {
    post_image?: SortOrder
    post_description?: SortOrder
    post_cost?: SortOrder
    post_meetingPlace?: SortOrder
    post_allSeats?: SortOrder
    post_buydSeats?: SortOrder
    post_checked?: SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
    genre_id?: SortOrder
    post_name?: SortOrder
    post_meetDate?: SortOrder
    post_fullDescription?: SortOrder
  }

  export type CreatedPostsSumOrderByAggregateInput = {
    post_cost?: SortOrder
    post_allSeats?: SortOrder
    post_buydSeats?: SortOrder
    organizer_id?: SortOrder
    post_id?: SortOrder
    genre_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CreatedPostsListRelationFilter = {
    every?: CreatedPostsWhereInput
    some?: CreatedPostsWhereInput
    none?: CreatedPostsWhereInput
  }

  export type SphereScalarRelationFilter = {
    is?: SphereWhereInput
    isNot?: SphereWhereInput
  }

  export type CreatedPostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenresCountOrderByAggregateInput = {
    genre_id?: SortOrder
    genre_name?: SortOrder
    genre_description?: SortOrder
    sphere_id?: SortOrder
  }

  export type GenresAvgOrderByAggregateInput = {
    genre_id?: SortOrder
    sphere_id?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    genre_id?: SortOrder
    genre_name?: SortOrder
    genre_description?: SortOrder
    sphere_id?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    genre_id?: SortOrder
    genre_name?: SortOrder
    genre_description?: SortOrder
    sphere_id?: SortOrder
  }

  export type GenresSumOrderByAggregateInput = {
    genre_id?: SortOrder
    sphere_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CallbacksScalarRelationFilter = {
    is?: callbacksWhereInput
    isNot?: callbacksWhereInput
  }

  export type OrganizersCountOrderByAggregateInput = {
    organizer_description?: SortOrder
    organizer_verified?: SortOrder
    organizer_phoneNum?: SortOrder
    organizer_id?: SortOrder
    sphere_id?: SortOrder
    organizer_nickname?: SortOrder
    user_id?: SortOrder
    organizer_photo?: SortOrder
    callback_id?: SortOrder
    organizer_reasonToCancel?: SortOrder
  }

  export type OrganizersAvgOrderByAggregateInput = {
    organizer_id?: SortOrder
    sphere_id?: SortOrder
    user_id?: SortOrder
    callback_id?: SortOrder
  }

  export type OrganizersMaxOrderByAggregateInput = {
    organizer_description?: SortOrder
    organizer_verified?: SortOrder
    organizer_phoneNum?: SortOrder
    organizer_id?: SortOrder
    sphere_id?: SortOrder
    organizer_nickname?: SortOrder
    user_id?: SortOrder
    organizer_photo?: SortOrder
    callback_id?: SortOrder
    organizer_reasonToCancel?: SortOrder
  }

  export type OrganizersMinOrderByAggregateInput = {
    organizer_description?: SortOrder
    organizer_verified?: SortOrder
    organizer_phoneNum?: SortOrder
    organizer_id?: SortOrder
    sphere_id?: SortOrder
    organizer_nickname?: SortOrder
    user_id?: SortOrder
    organizer_photo?: SortOrder
    callback_id?: SortOrder
    organizer_reasonToCancel?: SortOrder
  }

  export type OrganizersSumOrderByAggregateInput = {
    organizer_id?: SortOrder
    sphere_id?: SortOrder
    user_id?: SortOrder
    callback_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TicketRefundListRelationFilter = {
    every?: TicketRefundWhereInput
    some?: TicketRefundWhereInput
    none?: TicketRefundWhereInput
  }

  export type TicketRefundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReasonsToRefundCountOrderByAggregateInput = {
    reason_id?: SortOrder
    reason_name?: SortOrder
    reason_description?: SortOrder
  }

  export type ReasonsToRefundAvgOrderByAggregateInput = {
    reason_id?: SortOrder
  }

  export type ReasonsToRefundMaxOrderByAggregateInput = {
    reason_id?: SortOrder
    reason_name?: SortOrder
    reason_description?: SortOrder
  }

  export type ReasonsToRefundMinOrderByAggregateInput = {
    reason_id?: SortOrder
    reason_name?: SortOrder
    reason_description?: SortOrder
  }

  export type ReasonsToRefundSumOrderByAggregateInput = {
    reason_id?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    role_name?: SortOrder
    role_id?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    role_name?: SortOrder
    role_id?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    role_name?: SortOrder
    role_id?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type GenresListRelationFilter = {
    every?: GenresWhereInput
    some?: GenresWhereInput
    none?: GenresWhereInput
  }

  export type OrganizersListRelationFilter = {
    every?: OrganizersWhereInput
    some?: OrganizersWhereInput
    none?: OrganizersWhereInput
  }

  export type GenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SphereCountOrderByAggregateInput = {
    sphere_id?: SortOrder
    sphere_name?: SortOrder
  }

  export type SphereAvgOrderByAggregateInput = {
    sphere_id?: SortOrder
  }

  export type SphereMaxOrderByAggregateInput = {
    sphere_id?: SortOrder
    sphere_name?: SortOrder
  }

  export type SphereMinOrderByAggregateInput = {
    sphere_id?: SortOrder
    sphere_name?: SortOrder
  }

  export type SphereSumOrderByAggregateInput = {
    sphere_id?: SortOrder
  }

  export type ReasonsToRefundScalarRelationFilter = {
    is?: ReasonsToRefundWhereInput
    isNot?: ReasonsToRefundWhereInput
  }

  export type TicketsScalarRelationFilter = {
    is?: TicketsWhereInput
    isNot?: TicketsWhereInput
  }

  export type TicketRefundCountOrderByAggregateInput = {
    ticketRefund_id?: SortOrder
    ticketRefind_description?: SortOrder
    ticket_id?: SortOrder
    ticketRefind_isConfirm?: SortOrder
    reason_id?: SortOrder
    user_id?: SortOrder
    ticketRefund_quantity?: SortOrder
  }

  export type TicketRefundAvgOrderByAggregateInput = {
    ticketRefund_id?: SortOrder
    ticket_id?: SortOrder
    reason_id?: SortOrder
    user_id?: SortOrder
    ticketRefund_quantity?: SortOrder
  }

  export type TicketRefundMaxOrderByAggregateInput = {
    ticketRefund_id?: SortOrder
    ticketRefind_description?: SortOrder
    ticket_id?: SortOrder
    ticketRefind_isConfirm?: SortOrder
    reason_id?: SortOrder
    user_id?: SortOrder
    ticketRefund_quantity?: SortOrder
  }

  export type TicketRefundMinOrderByAggregateInput = {
    ticketRefund_id?: SortOrder
    ticketRefind_description?: SortOrder
    ticket_id?: SortOrder
    ticketRefind_isConfirm?: SortOrder
    reason_id?: SortOrder
    user_id?: SortOrder
    ticketRefund_quantity?: SortOrder
  }

  export type TicketRefundSumOrderByAggregateInput = {
    ticketRefund_id?: SortOrder
    ticket_id?: SortOrder
    reason_id?: SortOrder
    user_id?: SortOrder
    ticketRefund_quantity?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TicketsCountOrderByAggregateInput = {
    ticket_id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    ticket_quantity?: SortOrder
    ticket_name?: SortOrder
    ticket_genre?: SortOrder
    ticket_sphere?: SortOrder
    ticket_meetPlace?: SortOrder
    ticket_cost?: SortOrder
    ticket_date?: SortOrder
    ticket_isHere?: SortOrder
    ticket_isRefind?: SortOrder
    organizer_id?: SortOrder
    ticket_image?: SortOrder
  }

  export type TicketsAvgOrderByAggregateInput = {
    ticket_id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    ticket_quantity?: SortOrder
    ticket_cost?: SortOrder
    organizer_id?: SortOrder
  }

  export type TicketsMaxOrderByAggregateInput = {
    ticket_id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    ticket_quantity?: SortOrder
    ticket_name?: SortOrder
    ticket_genre?: SortOrder
    ticket_sphere?: SortOrder
    ticket_meetPlace?: SortOrder
    ticket_cost?: SortOrder
    ticket_date?: SortOrder
    ticket_isHere?: SortOrder
    ticket_isRefind?: SortOrder
    organizer_id?: SortOrder
    ticket_image?: SortOrder
  }

  export type TicketsMinOrderByAggregateInput = {
    ticket_id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    ticket_quantity?: SortOrder
    ticket_name?: SortOrder
    ticket_genre?: SortOrder
    ticket_sphere?: SortOrder
    ticket_meetPlace?: SortOrder
    ticket_cost?: SortOrder
    ticket_date?: SortOrder
    ticket_isHere?: SortOrder
    ticket_isRefind?: SortOrder
    organizer_id?: SortOrder
    ticket_image?: SortOrder
  }

  export type TicketsSumOrderByAggregateInput = {
    ticket_id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    ticket_quantity?: SortOrder
    ticket_cost?: SortOrder
    organizer_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsersCountOrderByAggregateInput = {
    user_name?: SortOrder
    user_surname?: SortOrder
    user_mail?: SortOrder
    user_password?: SortOrder
    user_photo?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    user_likedMass?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    role_id?: SortOrder
    user_id?: SortOrder
    user_likedMass?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_name?: SortOrder
    user_surname?: SortOrder
    user_mail?: SortOrder
    user_password?: SortOrder
    user_photo?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_name?: SortOrder
    user_surname?: SortOrder
    user_mail?: SortOrder
    user_password?: SortOrder
    user_photo?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    role_id?: SortOrder
    user_id?: SortOrder
    user_likedMass?: SortOrder
  }

  export type callbacksCountOrderByAggregateInput = {
    callback_id?: SortOrder
    callback_name?: SortOrder
  }

  export type callbacksAvgOrderByAggregateInput = {
    callback_id?: SortOrder
  }

  export type callbacksMaxOrderByAggregateInput = {
    callback_id?: SortOrder
    callback_name?: SortOrder
  }

  export type callbacksMinOrderByAggregateInput = {
    callback_id?: SortOrder
    callback_name?: SortOrder
  }

  export type callbacksSumOrderByAggregateInput = {
    callback_id?: SortOrder
  }

  export type OrganizersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<OrganizersCreateWithoutCommentsInput, OrganizersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: OrganizersCreateOrConnectWithoutCommentsInput
    connect?: OrganizersWhereUniqueInput
  }

  export type CreatedPostsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<CreatedPostsCreateWithoutCommentsInput, CreatedPostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutCommentsInput
    connect?: CreatedPostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type OrganizersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<OrganizersCreateWithoutCommentsInput, OrganizersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: OrganizersCreateOrConnectWithoutCommentsInput
    upsert?: OrganizersUpsertWithoutCommentsInput
    connect?: OrganizersWhereUniqueInput
    update?: XOR<XOR<OrganizersUpdateToOneWithWhereWithoutCommentsInput, OrganizersUpdateWithoutCommentsInput>, OrganizersUncheckedUpdateWithoutCommentsInput>
  }

  export type CreatedPostsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<CreatedPostsCreateWithoutCommentsInput, CreatedPostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutCommentsInput
    upsert?: CreatedPostsUpsertWithoutCommentsInput
    disconnect?: CreatedPostsWhereInput | boolean
    delete?: CreatedPostsWhereInput | boolean
    connect?: CreatedPostsWhereUniqueInput
    update?: XOR<XOR<CreatedPostsUpdateToOneWithWhereWithoutCommentsInput, CreatedPostsUpdateWithoutCommentsInput>, CreatedPostsUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentsCreateNestedManyWithoutCreatedPostsInput = {
    create?: XOR<CommentsCreateWithoutCreatedPostsInput, CommentsUncheckedCreateWithoutCreatedPostsInput> | CommentsCreateWithoutCreatedPostsInput[] | CommentsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCreatedPostsInput | CommentsCreateOrConnectWithoutCreatedPostsInput[]
    createMany?: CommentsCreateManyCreatedPostsInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type GenresCreateNestedOneWithoutCreatedPostsInput = {
    create?: XOR<GenresCreateWithoutCreatedPostsInput, GenresUncheckedCreateWithoutCreatedPostsInput>
    connectOrCreate?: GenresCreateOrConnectWithoutCreatedPostsInput
    connect?: GenresWhereUniqueInput
  }

  export type OrganizersCreateNestedOneWithoutCreatedPostsInput = {
    create?: XOR<OrganizersCreateWithoutCreatedPostsInput, OrganizersUncheckedCreateWithoutCreatedPostsInput>
    connectOrCreate?: OrganizersCreateOrConnectWithoutCreatedPostsInput
    connect?: OrganizersWhereUniqueInput
  }

  export type TicketsCreateNestedManyWithoutCreatedPostsInput = {
    create?: XOR<TicketsCreateWithoutCreatedPostsInput, TicketsUncheckedCreateWithoutCreatedPostsInput> | TicketsCreateWithoutCreatedPostsInput[] | TicketsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutCreatedPostsInput | TicketsCreateOrConnectWithoutCreatedPostsInput[]
    createMany?: TicketsCreateManyCreatedPostsInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutCreatedPostsInput = {
    create?: XOR<CommentsCreateWithoutCreatedPostsInput, CommentsUncheckedCreateWithoutCreatedPostsInput> | CommentsCreateWithoutCreatedPostsInput[] | CommentsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCreatedPostsInput | CommentsCreateOrConnectWithoutCreatedPostsInput[]
    createMany?: CommentsCreateManyCreatedPostsInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type TicketsUncheckedCreateNestedManyWithoutCreatedPostsInput = {
    create?: XOR<TicketsCreateWithoutCreatedPostsInput, TicketsUncheckedCreateWithoutCreatedPostsInput> | TicketsCreateWithoutCreatedPostsInput[] | TicketsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutCreatedPostsInput | TicketsCreateOrConnectWithoutCreatedPostsInput[]
    createMany?: TicketsCreateManyCreatedPostsInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentsUpdateManyWithoutCreatedPostsNestedInput = {
    create?: XOR<CommentsCreateWithoutCreatedPostsInput, CommentsUncheckedCreateWithoutCreatedPostsInput> | CommentsCreateWithoutCreatedPostsInput[] | CommentsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCreatedPostsInput | CommentsCreateOrConnectWithoutCreatedPostsInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutCreatedPostsInput | CommentsUpsertWithWhereUniqueWithoutCreatedPostsInput[]
    createMany?: CommentsCreateManyCreatedPostsInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutCreatedPostsInput | CommentsUpdateWithWhereUniqueWithoutCreatedPostsInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutCreatedPostsInput | CommentsUpdateManyWithWhereWithoutCreatedPostsInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type GenresUpdateOneRequiredWithoutCreatedPostsNestedInput = {
    create?: XOR<GenresCreateWithoutCreatedPostsInput, GenresUncheckedCreateWithoutCreatedPostsInput>
    connectOrCreate?: GenresCreateOrConnectWithoutCreatedPostsInput
    upsert?: GenresUpsertWithoutCreatedPostsInput
    connect?: GenresWhereUniqueInput
    update?: XOR<XOR<GenresUpdateToOneWithWhereWithoutCreatedPostsInput, GenresUpdateWithoutCreatedPostsInput>, GenresUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type OrganizersUpdateOneRequiredWithoutCreatedPostsNestedInput = {
    create?: XOR<OrganizersCreateWithoutCreatedPostsInput, OrganizersUncheckedCreateWithoutCreatedPostsInput>
    connectOrCreate?: OrganizersCreateOrConnectWithoutCreatedPostsInput
    upsert?: OrganizersUpsertWithoutCreatedPostsInput
    connect?: OrganizersWhereUniqueInput
    update?: XOR<XOR<OrganizersUpdateToOneWithWhereWithoutCreatedPostsInput, OrganizersUpdateWithoutCreatedPostsInput>, OrganizersUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type TicketsUpdateManyWithoutCreatedPostsNestedInput = {
    create?: XOR<TicketsCreateWithoutCreatedPostsInput, TicketsUncheckedCreateWithoutCreatedPostsInput> | TicketsCreateWithoutCreatedPostsInput[] | TicketsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutCreatedPostsInput | TicketsCreateOrConnectWithoutCreatedPostsInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutCreatedPostsInput | TicketsUpsertWithWhereUniqueWithoutCreatedPostsInput[]
    createMany?: TicketsCreateManyCreatedPostsInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutCreatedPostsInput | TicketsUpdateWithWhereUniqueWithoutCreatedPostsInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutCreatedPostsInput | TicketsUpdateManyWithWhereWithoutCreatedPostsInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutCreatedPostsNestedInput = {
    create?: XOR<CommentsCreateWithoutCreatedPostsInput, CommentsUncheckedCreateWithoutCreatedPostsInput> | CommentsCreateWithoutCreatedPostsInput[] | CommentsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutCreatedPostsInput | CommentsCreateOrConnectWithoutCreatedPostsInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutCreatedPostsInput | CommentsUpsertWithWhereUniqueWithoutCreatedPostsInput[]
    createMany?: CommentsCreateManyCreatedPostsInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutCreatedPostsInput | CommentsUpdateWithWhereUniqueWithoutCreatedPostsInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutCreatedPostsInput | CommentsUpdateManyWithWhereWithoutCreatedPostsInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type TicketsUncheckedUpdateManyWithoutCreatedPostsNestedInput = {
    create?: XOR<TicketsCreateWithoutCreatedPostsInput, TicketsUncheckedCreateWithoutCreatedPostsInput> | TicketsCreateWithoutCreatedPostsInput[] | TicketsUncheckedCreateWithoutCreatedPostsInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutCreatedPostsInput | TicketsCreateOrConnectWithoutCreatedPostsInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutCreatedPostsInput | TicketsUpsertWithWhereUniqueWithoutCreatedPostsInput[]
    createMany?: TicketsCreateManyCreatedPostsInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutCreatedPostsInput | TicketsUpdateWithWhereUniqueWithoutCreatedPostsInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutCreatedPostsInput | TicketsUpdateManyWithWhereWithoutCreatedPostsInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type CreatedPostsCreateNestedManyWithoutGenresInput = {
    create?: XOR<CreatedPostsCreateWithoutGenresInput, CreatedPostsUncheckedCreateWithoutGenresInput> | CreatedPostsCreateWithoutGenresInput[] | CreatedPostsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutGenresInput | CreatedPostsCreateOrConnectWithoutGenresInput[]
    createMany?: CreatedPostsCreateManyGenresInputEnvelope
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
  }

  export type SphereCreateNestedOneWithoutGenresInput = {
    create?: XOR<SphereCreateWithoutGenresInput, SphereUncheckedCreateWithoutGenresInput>
    connectOrCreate?: SphereCreateOrConnectWithoutGenresInput
    connect?: SphereWhereUniqueInput
  }

  export type CreatedPostsUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<CreatedPostsCreateWithoutGenresInput, CreatedPostsUncheckedCreateWithoutGenresInput> | CreatedPostsCreateWithoutGenresInput[] | CreatedPostsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutGenresInput | CreatedPostsCreateOrConnectWithoutGenresInput[]
    createMany?: CreatedPostsCreateManyGenresInputEnvelope
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
  }

  export type CreatedPostsUpdateManyWithoutGenresNestedInput = {
    create?: XOR<CreatedPostsCreateWithoutGenresInput, CreatedPostsUncheckedCreateWithoutGenresInput> | CreatedPostsCreateWithoutGenresInput[] | CreatedPostsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutGenresInput | CreatedPostsCreateOrConnectWithoutGenresInput[]
    upsert?: CreatedPostsUpsertWithWhereUniqueWithoutGenresInput | CreatedPostsUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: CreatedPostsCreateManyGenresInputEnvelope
    set?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    disconnect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    delete?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    update?: CreatedPostsUpdateWithWhereUniqueWithoutGenresInput | CreatedPostsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: CreatedPostsUpdateManyWithWhereWithoutGenresInput | CreatedPostsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: CreatedPostsScalarWhereInput | CreatedPostsScalarWhereInput[]
  }

  export type SphereUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<SphereCreateWithoutGenresInput, SphereUncheckedCreateWithoutGenresInput>
    connectOrCreate?: SphereCreateOrConnectWithoutGenresInput
    upsert?: SphereUpsertWithoutGenresInput
    connect?: SphereWhereUniqueInput
    update?: XOR<XOR<SphereUpdateToOneWithWhereWithoutGenresInput, SphereUpdateWithoutGenresInput>, SphereUncheckedUpdateWithoutGenresInput>
  }

  export type CreatedPostsUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<CreatedPostsCreateWithoutGenresInput, CreatedPostsUncheckedCreateWithoutGenresInput> | CreatedPostsCreateWithoutGenresInput[] | CreatedPostsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutGenresInput | CreatedPostsCreateOrConnectWithoutGenresInput[]
    upsert?: CreatedPostsUpsertWithWhereUniqueWithoutGenresInput | CreatedPostsUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: CreatedPostsCreateManyGenresInputEnvelope
    set?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    disconnect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    delete?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    update?: CreatedPostsUpdateWithWhereUniqueWithoutGenresInput | CreatedPostsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: CreatedPostsUpdateManyWithWhereWithoutGenresInput | CreatedPostsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: CreatedPostsScalarWhereInput | CreatedPostsScalarWhereInput[]
  }

  export type CommentsCreateNestedManyWithoutOrganizersInput = {
    create?: XOR<CommentsCreateWithoutOrganizersInput, CommentsUncheckedCreateWithoutOrganizersInput> | CommentsCreateWithoutOrganizersInput[] | CommentsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutOrganizersInput | CommentsCreateOrConnectWithoutOrganizersInput[]
    createMany?: CommentsCreateManyOrganizersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CreatedPostsCreateNestedManyWithoutOrganizersInput = {
    create?: XOR<CreatedPostsCreateWithoutOrganizersInput, CreatedPostsUncheckedCreateWithoutOrganizersInput> | CreatedPostsCreateWithoutOrganizersInput[] | CreatedPostsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutOrganizersInput | CreatedPostsCreateOrConnectWithoutOrganizersInput[]
    createMany?: CreatedPostsCreateManyOrganizersInputEnvelope
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
  }

  export type callbacksCreateNestedOneWithoutOrganizersInput = {
    create?: XOR<callbacksCreateWithoutOrganizersInput, callbacksUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: callbacksCreateOrConnectWithoutOrganizersInput
    connect?: callbacksWhereUniqueInput
  }

  export type SphereCreateNestedOneWithoutOrganizersInput = {
    create?: XOR<SphereCreateWithoutOrganizersInput, SphereUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: SphereCreateOrConnectWithoutOrganizersInput
    connect?: SphereWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutOrganizersInput = {
    create?: XOR<UsersCreateWithoutOrganizersInput, UsersUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrganizersInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsUncheckedCreateNestedManyWithoutOrganizersInput = {
    create?: XOR<CommentsCreateWithoutOrganizersInput, CommentsUncheckedCreateWithoutOrganizersInput> | CommentsCreateWithoutOrganizersInput[] | CommentsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutOrganizersInput | CommentsCreateOrConnectWithoutOrganizersInput[]
    createMany?: CommentsCreateManyOrganizersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type CreatedPostsUncheckedCreateNestedManyWithoutOrganizersInput = {
    create?: XOR<CreatedPostsCreateWithoutOrganizersInput, CreatedPostsUncheckedCreateWithoutOrganizersInput> | CreatedPostsCreateWithoutOrganizersInput[] | CreatedPostsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutOrganizersInput | CreatedPostsCreateOrConnectWithoutOrganizersInput[]
    createMany?: CreatedPostsCreateManyOrganizersInputEnvelope
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommentsUpdateManyWithoutOrganizersNestedInput = {
    create?: XOR<CommentsCreateWithoutOrganizersInput, CommentsUncheckedCreateWithoutOrganizersInput> | CommentsCreateWithoutOrganizersInput[] | CommentsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutOrganizersInput | CommentsCreateOrConnectWithoutOrganizersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutOrganizersInput | CommentsUpsertWithWhereUniqueWithoutOrganizersInput[]
    createMany?: CommentsCreateManyOrganizersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutOrganizersInput | CommentsUpdateWithWhereUniqueWithoutOrganizersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutOrganizersInput | CommentsUpdateManyWithWhereWithoutOrganizersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CreatedPostsUpdateManyWithoutOrganizersNestedInput = {
    create?: XOR<CreatedPostsCreateWithoutOrganizersInput, CreatedPostsUncheckedCreateWithoutOrganizersInput> | CreatedPostsCreateWithoutOrganizersInput[] | CreatedPostsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutOrganizersInput | CreatedPostsCreateOrConnectWithoutOrganizersInput[]
    upsert?: CreatedPostsUpsertWithWhereUniqueWithoutOrganizersInput | CreatedPostsUpsertWithWhereUniqueWithoutOrganizersInput[]
    createMany?: CreatedPostsCreateManyOrganizersInputEnvelope
    set?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    disconnect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    delete?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    update?: CreatedPostsUpdateWithWhereUniqueWithoutOrganizersInput | CreatedPostsUpdateWithWhereUniqueWithoutOrganizersInput[]
    updateMany?: CreatedPostsUpdateManyWithWhereWithoutOrganizersInput | CreatedPostsUpdateManyWithWhereWithoutOrganizersInput[]
    deleteMany?: CreatedPostsScalarWhereInput | CreatedPostsScalarWhereInput[]
  }

  export type callbacksUpdateOneRequiredWithoutOrganizersNestedInput = {
    create?: XOR<callbacksCreateWithoutOrganizersInput, callbacksUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: callbacksCreateOrConnectWithoutOrganizersInput
    upsert?: callbacksUpsertWithoutOrganizersInput
    connect?: callbacksWhereUniqueInput
    update?: XOR<XOR<callbacksUpdateToOneWithWhereWithoutOrganizersInput, callbacksUpdateWithoutOrganizersInput>, callbacksUncheckedUpdateWithoutOrganizersInput>
  }

  export type SphereUpdateOneRequiredWithoutOrganizersNestedInput = {
    create?: XOR<SphereCreateWithoutOrganizersInput, SphereUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: SphereCreateOrConnectWithoutOrganizersInput
    upsert?: SphereUpsertWithoutOrganizersInput
    connect?: SphereWhereUniqueInput
    update?: XOR<XOR<SphereUpdateToOneWithWhereWithoutOrganizersInput, SphereUpdateWithoutOrganizersInput>, SphereUncheckedUpdateWithoutOrganizersInput>
  }

  export type UsersUpdateOneRequiredWithoutOrganizersNestedInput = {
    create?: XOR<UsersCreateWithoutOrganizersInput, UsersUncheckedCreateWithoutOrganizersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrganizersInput
    upsert?: UsersUpsertWithoutOrganizersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrganizersInput, UsersUpdateWithoutOrganizersInput>, UsersUncheckedUpdateWithoutOrganizersInput>
  }

  export type CommentsUncheckedUpdateManyWithoutOrganizersNestedInput = {
    create?: XOR<CommentsCreateWithoutOrganizersInput, CommentsUncheckedCreateWithoutOrganizersInput> | CommentsCreateWithoutOrganizersInput[] | CommentsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutOrganizersInput | CommentsCreateOrConnectWithoutOrganizersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutOrganizersInput | CommentsUpsertWithWhereUniqueWithoutOrganizersInput[]
    createMany?: CommentsCreateManyOrganizersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutOrganizersInput | CommentsUpdateWithWhereUniqueWithoutOrganizersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutOrganizersInput | CommentsUpdateManyWithWhereWithoutOrganizersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type CreatedPostsUncheckedUpdateManyWithoutOrganizersNestedInput = {
    create?: XOR<CreatedPostsCreateWithoutOrganizersInput, CreatedPostsUncheckedCreateWithoutOrganizersInput> | CreatedPostsCreateWithoutOrganizersInput[] | CreatedPostsUncheckedCreateWithoutOrganizersInput[]
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutOrganizersInput | CreatedPostsCreateOrConnectWithoutOrganizersInput[]
    upsert?: CreatedPostsUpsertWithWhereUniqueWithoutOrganizersInput | CreatedPostsUpsertWithWhereUniqueWithoutOrganizersInput[]
    createMany?: CreatedPostsCreateManyOrganizersInputEnvelope
    set?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    disconnect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    delete?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    connect?: CreatedPostsWhereUniqueInput | CreatedPostsWhereUniqueInput[]
    update?: CreatedPostsUpdateWithWhereUniqueWithoutOrganizersInput | CreatedPostsUpdateWithWhereUniqueWithoutOrganizersInput[]
    updateMany?: CreatedPostsUpdateManyWithWhereWithoutOrganizersInput | CreatedPostsUpdateManyWithWhereWithoutOrganizersInput[]
    deleteMany?: CreatedPostsScalarWhereInput | CreatedPostsScalarWhereInput[]
  }

  export type TicketRefundCreateNestedManyWithoutReasonsToRefundInput = {
    create?: XOR<TicketRefundCreateWithoutReasonsToRefundInput, TicketRefundUncheckedCreateWithoutReasonsToRefundInput> | TicketRefundCreateWithoutReasonsToRefundInput[] | TicketRefundUncheckedCreateWithoutReasonsToRefundInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutReasonsToRefundInput | TicketRefundCreateOrConnectWithoutReasonsToRefundInput[]
    createMany?: TicketRefundCreateManyReasonsToRefundInputEnvelope
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
  }

  export type TicketRefundUncheckedCreateNestedManyWithoutReasonsToRefundInput = {
    create?: XOR<TicketRefundCreateWithoutReasonsToRefundInput, TicketRefundUncheckedCreateWithoutReasonsToRefundInput> | TicketRefundCreateWithoutReasonsToRefundInput[] | TicketRefundUncheckedCreateWithoutReasonsToRefundInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutReasonsToRefundInput | TicketRefundCreateOrConnectWithoutReasonsToRefundInput[]
    createMany?: TicketRefundCreateManyReasonsToRefundInputEnvelope
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
  }

  export type TicketRefundUpdateManyWithoutReasonsToRefundNestedInput = {
    create?: XOR<TicketRefundCreateWithoutReasonsToRefundInput, TicketRefundUncheckedCreateWithoutReasonsToRefundInput> | TicketRefundCreateWithoutReasonsToRefundInput[] | TicketRefundUncheckedCreateWithoutReasonsToRefundInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutReasonsToRefundInput | TicketRefundCreateOrConnectWithoutReasonsToRefundInput[]
    upsert?: TicketRefundUpsertWithWhereUniqueWithoutReasonsToRefundInput | TicketRefundUpsertWithWhereUniqueWithoutReasonsToRefundInput[]
    createMany?: TicketRefundCreateManyReasonsToRefundInputEnvelope
    set?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    disconnect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    delete?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    update?: TicketRefundUpdateWithWhereUniqueWithoutReasonsToRefundInput | TicketRefundUpdateWithWhereUniqueWithoutReasonsToRefundInput[]
    updateMany?: TicketRefundUpdateManyWithWhereWithoutReasonsToRefundInput | TicketRefundUpdateManyWithWhereWithoutReasonsToRefundInput[]
    deleteMany?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
  }

  export type TicketRefundUncheckedUpdateManyWithoutReasonsToRefundNestedInput = {
    create?: XOR<TicketRefundCreateWithoutReasonsToRefundInput, TicketRefundUncheckedCreateWithoutReasonsToRefundInput> | TicketRefundCreateWithoutReasonsToRefundInput[] | TicketRefundUncheckedCreateWithoutReasonsToRefundInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutReasonsToRefundInput | TicketRefundCreateOrConnectWithoutReasonsToRefundInput[]
    upsert?: TicketRefundUpsertWithWhereUniqueWithoutReasonsToRefundInput | TicketRefundUpsertWithWhereUniqueWithoutReasonsToRefundInput[]
    createMany?: TicketRefundCreateManyReasonsToRefundInputEnvelope
    set?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    disconnect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    delete?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    update?: TicketRefundUpdateWithWhereUniqueWithoutReasonsToRefundInput | TicketRefundUpdateWithWhereUniqueWithoutReasonsToRefundInput[]
    updateMany?: TicketRefundUpdateManyWithWhereWithoutReasonsToRefundInput | TicketRefundUpdateManyWithWhereWithoutReasonsToRefundInput[]
    deleteMany?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
  }

  export type GenresCreateNestedManyWithoutSphereInput = {
    create?: XOR<GenresCreateWithoutSphereInput, GenresUncheckedCreateWithoutSphereInput> | GenresCreateWithoutSphereInput[] | GenresUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSphereInput | GenresCreateOrConnectWithoutSphereInput[]
    createMany?: GenresCreateManySphereInputEnvelope
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type OrganizersCreateNestedManyWithoutSphereInput = {
    create?: XOR<OrganizersCreateWithoutSphereInput, OrganizersUncheckedCreateWithoutSphereInput> | OrganizersCreateWithoutSphereInput[] | OrganizersUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutSphereInput | OrganizersCreateOrConnectWithoutSphereInput[]
    createMany?: OrganizersCreateManySphereInputEnvelope
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
  }

  export type GenresUncheckedCreateNestedManyWithoutSphereInput = {
    create?: XOR<GenresCreateWithoutSphereInput, GenresUncheckedCreateWithoutSphereInput> | GenresCreateWithoutSphereInput[] | GenresUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSphereInput | GenresCreateOrConnectWithoutSphereInput[]
    createMany?: GenresCreateManySphereInputEnvelope
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type OrganizersUncheckedCreateNestedManyWithoutSphereInput = {
    create?: XOR<OrganizersCreateWithoutSphereInput, OrganizersUncheckedCreateWithoutSphereInput> | OrganizersCreateWithoutSphereInput[] | OrganizersUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutSphereInput | OrganizersCreateOrConnectWithoutSphereInput[]
    createMany?: OrganizersCreateManySphereInputEnvelope
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
  }

  export type GenresUpdateManyWithoutSphereNestedInput = {
    create?: XOR<GenresCreateWithoutSphereInput, GenresUncheckedCreateWithoutSphereInput> | GenresCreateWithoutSphereInput[] | GenresUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSphereInput | GenresCreateOrConnectWithoutSphereInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutSphereInput | GenresUpsertWithWhereUniqueWithoutSphereInput[]
    createMany?: GenresCreateManySphereInputEnvelope
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutSphereInput | GenresUpdateWithWhereUniqueWithoutSphereInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutSphereInput | GenresUpdateManyWithWhereWithoutSphereInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type OrganizersUpdateManyWithoutSphereNestedInput = {
    create?: XOR<OrganizersCreateWithoutSphereInput, OrganizersUncheckedCreateWithoutSphereInput> | OrganizersCreateWithoutSphereInput[] | OrganizersUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutSphereInput | OrganizersCreateOrConnectWithoutSphereInput[]
    upsert?: OrganizersUpsertWithWhereUniqueWithoutSphereInput | OrganizersUpsertWithWhereUniqueWithoutSphereInput[]
    createMany?: OrganizersCreateManySphereInputEnvelope
    set?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    disconnect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    delete?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    update?: OrganizersUpdateWithWhereUniqueWithoutSphereInput | OrganizersUpdateWithWhereUniqueWithoutSphereInput[]
    updateMany?: OrganizersUpdateManyWithWhereWithoutSphereInput | OrganizersUpdateManyWithWhereWithoutSphereInput[]
    deleteMany?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
  }

  export type GenresUncheckedUpdateManyWithoutSphereNestedInput = {
    create?: XOR<GenresCreateWithoutSphereInput, GenresUncheckedCreateWithoutSphereInput> | GenresCreateWithoutSphereInput[] | GenresUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSphereInput | GenresCreateOrConnectWithoutSphereInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutSphereInput | GenresUpsertWithWhereUniqueWithoutSphereInput[]
    createMany?: GenresCreateManySphereInputEnvelope
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutSphereInput | GenresUpdateWithWhereUniqueWithoutSphereInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutSphereInput | GenresUpdateManyWithWhereWithoutSphereInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type OrganizersUncheckedUpdateManyWithoutSphereNestedInput = {
    create?: XOR<OrganizersCreateWithoutSphereInput, OrganizersUncheckedCreateWithoutSphereInput> | OrganizersCreateWithoutSphereInput[] | OrganizersUncheckedCreateWithoutSphereInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutSphereInput | OrganizersCreateOrConnectWithoutSphereInput[]
    upsert?: OrganizersUpsertWithWhereUniqueWithoutSphereInput | OrganizersUpsertWithWhereUniqueWithoutSphereInput[]
    createMany?: OrganizersCreateManySphereInputEnvelope
    set?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    disconnect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    delete?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    update?: OrganizersUpdateWithWhereUniqueWithoutSphereInput | OrganizersUpdateWithWhereUniqueWithoutSphereInput[]
    updateMany?: OrganizersUpdateManyWithWhereWithoutSphereInput | OrganizersUpdateManyWithWhereWithoutSphereInput[]
    deleteMany?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
  }

  export type ReasonsToRefundCreateNestedOneWithoutTicketRefundInput = {
    create?: XOR<ReasonsToRefundCreateWithoutTicketRefundInput, ReasonsToRefundUncheckedCreateWithoutTicketRefundInput>
    connectOrCreate?: ReasonsToRefundCreateOrConnectWithoutTicketRefundInput
    connect?: ReasonsToRefundWhereUniqueInput
  }

  export type TicketsCreateNestedOneWithoutTicketRefundInput = {
    create?: XOR<TicketsCreateWithoutTicketRefundInput, TicketsUncheckedCreateWithoutTicketRefundInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutTicketRefundInput
    connect?: TicketsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutTicketRefundInput = {
    create?: XOR<UsersCreateWithoutTicketRefundInput, UsersUncheckedCreateWithoutTicketRefundInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTicketRefundInput
    connect?: UsersWhereUniqueInput
  }

  export type ReasonsToRefundUpdateOneRequiredWithoutTicketRefundNestedInput = {
    create?: XOR<ReasonsToRefundCreateWithoutTicketRefundInput, ReasonsToRefundUncheckedCreateWithoutTicketRefundInput>
    connectOrCreate?: ReasonsToRefundCreateOrConnectWithoutTicketRefundInput
    upsert?: ReasonsToRefundUpsertWithoutTicketRefundInput
    connect?: ReasonsToRefundWhereUniqueInput
    update?: XOR<XOR<ReasonsToRefundUpdateToOneWithWhereWithoutTicketRefundInput, ReasonsToRefundUpdateWithoutTicketRefundInput>, ReasonsToRefundUncheckedUpdateWithoutTicketRefundInput>
  }

  export type TicketsUpdateOneRequiredWithoutTicketRefundNestedInput = {
    create?: XOR<TicketsCreateWithoutTicketRefundInput, TicketsUncheckedCreateWithoutTicketRefundInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutTicketRefundInput
    upsert?: TicketsUpsertWithoutTicketRefundInput
    connect?: TicketsWhereUniqueInput
    update?: XOR<XOR<TicketsUpdateToOneWithWhereWithoutTicketRefundInput, TicketsUpdateWithoutTicketRefundInput>, TicketsUncheckedUpdateWithoutTicketRefundInput>
  }

  export type UsersUpdateOneRequiredWithoutTicketRefundNestedInput = {
    create?: XOR<UsersCreateWithoutTicketRefundInput, UsersUncheckedCreateWithoutTicketRefundInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTicketRefundInput
    upsert?: UsersUpsertWithoutTicketRefundInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTicketRefundInput, UsersUpdateWithoutTicketRefundInput>, UsersUncheckedUpdateWithoutTicketRefundInput>
  }

  export type TicketRefundCreateNestedManyWithoutTicketsInput = {
    create?: XOR<TicketRefundCreateWithoutTicketsInput, TicketRefundUncheckedCreateWithoutTicketsInput> | TicketRefundCreateWithoutTicketsInput[] | TicketRefundUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutTicketsInput | TicketRefundCreateOrConnectWithoutTicketsInput[]
    createMany?: TicketRefundCreateManyTicketsInputEnvelope
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
  }

  export type CreatedPostsCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CreatedPostsCreateWithoutTicketsInput, CreatedPostsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutTicketsInput
    connect?: CreatedPostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTicketsInput
    connect?: UsersWhereUniqueInput
  }

  export type TicketRefundUncheckedCreateNestedManyWithoutTicketsInput = {
    create?: XOR<TicketRefundCreateWithoutTicketsInput, TicketRefundUncheckedCreateWithoutTicketsInput> | TicketRefundCreateWithoutTicketsInput[] | TicketRefundUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutTicketsInput | TicketRefundCreateOrConnectWithoutTicketsInput[]
    createMany?: TicketRefundCreateManyTicketsInputEnvelope
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TicketRefundUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<TicketRefundCreateWithoutTicketsInput, TicketRefundUncheckedCreateWithoutTicketsInput> | TicketRefundCreateWithoutTicketsInput[] | TicketRefundUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutTicketsInput | TicketRefundCreateOrConnectWithoutTicketsInput[]
    upsert?: TicketRefundUpsertWithWhereUniqueWithoutTicketsInput | TicketRefundUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: TicketRefundCreateManyTicketsInputEnvelope
    set?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    disconnect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    delete?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    update?: TicketRefundUpdateWithWhereUniqueWithoutTicketsInput | TicketRefundUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: TicketRefundUpdateManyWithWhereWithoutTicketsInput | TicketRefundUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
  }

  export type CreatedPostsUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<CreatedPostsCreateWithoutTicketsInput, CreatedPostsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CreatedPostsCreateOrConnectWithoutTicketsInput
    upsert?: CreatedPostsUpsertWithoutTicketsInput
    disconnect?: CreatedPostsWhereInput | boolean
    delete?: CreatedPostsWhereInput | boolean
    connect?: CreatedPostsWhereUniqueInput
    update?: XOR<XOR<CreatedPostsUpdateToOneWithWhereWithoutTicketsInput, CreatedPostsUpdateWithoutTicketsInput>, CreatedPostsUncheckedUpdateWithoutTicketsInput>
  }

  export type UsersUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTicketsInput
    upsert?: UsersUpsertWithoutTicketsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTicketsInput, UsersUpdateWithoutTicketsInput>, UsersUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketRefundUncheckedUpdateManyWithoutTicketsNestedInput = {
    create?: XOR<TicketRefundCreateWithoutTicketsInput, TicketRefundUncheckedCreateWithoutTicketsInput> | TicketRefundCreateWithoutTicketsInput[] | TicketRefundUncheckedCreateWithoutTicketsInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutTicketsInput | TicketRefundCreateOrConnectWithoutTicketsInput[]
    upsert?: TicketRefundUpsertWithWhereUniqueWithoutTicketsInput | TicketRefundUpsertWithWhereUniqueWithoutTicketsInput[]
    createMany?: TicketRefundCreateManyTicketsInputEnvelope
    set?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    disconnect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    delete?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    update?: TicketRefundUpdateWithWhereUniqueWithoutTicketsInput | TicketRefundUpdateWithWhereUniqueWithoutTicketsInput[]
    updateMany?: TicketRefundUpdateManyWithWhereWithoutTicketsInput | TicketRefundUpdateManyWithWhereWithoutTicketsInput[]
    deleteMany?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
  }

  export type UsersCreateuser_likedMassInput = {
    set: number[]
  }

  export type CommentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type OrganizersCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrganizersCreateWithoutUsersInput, OrganizersUncheckedCreateWithoutUsersInput> | OrganizersCreateWithoutUsersInput[] | OrganizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutUsersInput | OrganizersCreateOrConnectWithoutUsersInput[]
    createMany?: OrganizersCreateManyUsersInputEnvelope
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
  }

  export type TicketRefundCreateNestedManyWithoutUsersInput = {
    create?: XOR<TicketRefundCreateWithoutUsersInput, TicketRefundUncheckedCreateWithoutUsersInput> | TicketRefundCreateWithoutUsersInput[] | TicketRefundUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutUsersInput | TicketRefundCreateOrConnectWithoutUsersInput[]
    createMany?: TicketRefundCreateManyUsersInputEnvelope
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
  }

  export type TicketsCreateNestedManyWithoutUsersInput = {
    create?: XOR<TicketsCreateWithoutUsersInput, TicketsUncheckedCreateWithoutUsersInput> | TicketsCreateWithoutUsersInput[] | TicketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUsersInput | TicketsCreateOrConnectWithoutUsersInput[]
    createMany?: TicketsCreateManyUsersInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type OrganizersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrganizersCreateWithoutUsersInput, OrganizersUncheckedCreateWithoutUsersInput> | OrganizersCreateWithoutUsersInput[] | OrganizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutUsersInput | OrganizersCreateOrConnectWithoutUsersInput[]
    createMany?: OrganizersCreateManyUsersInputEnvelope
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
  }

  export type TicketRefundUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TicketRefundCreateWithoutUsersInput, TicketRefundUncheckedCreateWithoutUsersInput> | TicketRefundCreateWithoutUsersInput[] | TicketRefundUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutUsersInput | TicketRefundCreateOrConnectWithoutUsersInput[]
    createMany?: TicketRefundCreateManyUsersInputEnvelope
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
  }

  export type TicketsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TicketsCreateWithoutUsersInput, TicketsUncheckedCreateWithoutUsersInput> | TicketsCreateWithoutUsersInput[] | TicketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUsersInput | TicketsCreateOrConnectWithoutUsersInput[]
    createMany?: TicketsCreateManyUsersInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type UsersUpdateuser_likedMassInput = {
    set?: number[]
    push?: number | number[]
  }

  export type CommentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type OrganizersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrganizersCreateWithoutUsersInput, OrganizersUncheckedCreateWithoutUsersInput> | OrganizersCreateWithoutUsersInput[] | OrganizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutUsersInput | OrganizersCreateOrConnectWithoutUsersInput[]
    upsert?: OrganizersUpsertWithWhereUniqueWithoutUsersInput | OrganizersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrganizersCreateManyUsersInputEnvelope
    set?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    disconnect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    delete?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    update?: OrganizersUpdateWithWhereUniqueWithoutUsersInput | OrganizersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrganizersUpdateManyWithWhereWithoutUsersInput | OrganizersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
  }

  export type TicketRefundUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TicketRefundCreateWithoutUsersInput, TicketRefundUncheckedCreateWithoutUsersInput> | TicketRefundCreateWithoutUsersInput[] | TicketRefundUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutUsersInput | TicketRefundCreateOrConnectWithoutUsersInput[]
    upsert?: TicketRefundUpsertWithWhereUniqueWithoutUsersInput | TicketRefundUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TicketRefundCreateManyUsersInputEnvelope
    set?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    disconnect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    delete?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    update?: TicketRefundUpdateWithWhereUniqueWithoutUsersInput | TicketRefundUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TicketRefundUpdateManyWithWhereWithoutUsersInput | TicketRefundUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
  }

  export type TicketsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TicketsCreateWithoutUsersInput, TicketsUncheckedCreateWithoutUsersInput> | TicketsCreateWithoutUsersInput[] | TicketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUsersInput | TicketsCreateOrConnectWithoutUsersInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutUsersInput | TicketsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TicketsCreateManyUsersInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutUsersInput | TicketsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutUsersInput | TicketsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type OrganizersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrganizersCreateWithoutUsersInput, OrganizersUncheckedCreateWithoutUsersInput> | OrganizersCreateWithoutUsersInput[] | OrganizersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutUsersInput | OrganizersCreateOrConnectWithoutUsersInput[]
    upsert?: OrganizersUpsertWithWhereUniqueWithoutUsersInput | OrganizersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrganizersCreateManyUsersInputEnvelope
    set?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    disconnect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    delete?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    update?: OrganizersUpdateWithWhereUniqueWithoutUsersInput | OrganizersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrganizersUpdateManyWithWhereWithoutUsersInput | OrganizersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
  }

  export type TicketRefundUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TicketRefundCreateWithoutUsersInput, TicketRefundUncheckedCreateWithoutUsersInput> | TicketRefundCreateWithoutUsersInput[] | TicketRefundUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketRefundCreateOrConnectWithoutUsersInput | TicketRefundCreateOrConnectWithoutUsersInput[]
    upsert?: TicketRefundUpsertWithWhereUniqueWithoutUsersInput | TicketRefundUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TicketRefundCreateManyUsersInputEnvelope
    set?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    disconnect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    delete?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    connect?: TicketRefundWhereUniqueInput | TicketRefundWhereUniqueInput[]
    update?: TicketRefundUpdateWithWhereUniqueWithoutUsersInput | TicketRefundUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TicketRefundUpdateManyWithWhereWithoutUsersInput | TicketRefundUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
  }

  export type TicketsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TicketsCreateWithoutUsersInput, TicketsUncheckedCreateWithoutUsersInput> | TicketsCreateWithoutUsersInput[] | TicketsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutUsersInput | TicketsCreateOrConnectWithoutUsersInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutUsersInput | TicketsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TicketsCreateManyUsersInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutUsersInput | TicketsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutUsersInput | TicketsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type OrganizersCreateNestedManyWithoutCallbacksInput = {
    create?: XOR<OrganizersCreateWithoutCallbacksInput, OrganizersUncheckedCreateWithoutCallbacksInput> | OrganizersCreateWithoutCallbacksInput[] | OrganizersUncheckedCreateWithoutCallbacksInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutCallbacksInput | OrganizersCreateOrConnectWithoutCallbacksInput[]
    createMany?: OrganizersCreateManyCallbacksInputEnvelope
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
  }

  export type OrganizersUncheckedCreateNestedManyWithoutCallbacksInput = {
    create?: XOR<OrganizersCreateWithoutCallbacksInput, OrganizersUncheckedCreateWithoutCallbacksInput> | OrganizersCreateWithoutCallbacksInput[] | OrganizersUncheckedCreateWithoutCallbacksInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutCallbacksInput | OrganizersCreateOrConnectWithoutCallbacksInput[]
    createMany?: OrganizersCreateManyCallbacksInputEnvelope
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
  }

  export type OrganizersUpdateManyWithoutCallbacksNestedInput = {
    create?: XOR<OrganizersCreateWithoutCallbacksInput, OrganizersUncheckedCreateWithoutCallbacksInput> | OrganizersCreateWithoutCallbacksInput[] | OrganizersUncheckedCreateWithoutCallbacksInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutCallbacksInput | OrganizersCreateOrConnectWithoutCallbacksInput[]
    upsert?: OrganizersUpsertWithWhereUniqueWithoutCallbacksInput | OrganizersUpsertWithWhereUniqueWithoutCallbacksInput[]
    createMany?: OrganizersCreateManyCallbacksInputEnvelope
    set?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    disconnect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    delete?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    update?: OrganizersUpdateWithWhereUniqueWithoutCallbacksInput | OrganizersUpdateWithWhereUniqueWithoutCallbacksInput[]
    updateMany?: OrganizersUpdateManyWithWhereWithoutCallbacksInput | OrganizersUpdateManyWithWhereWithoutCallbacksInput[]
    deleteMany?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
  }

  export type OrganizersUncheckedUpdateManyWithoutCallbacksNestedInput = {
    create?: XOR<OrganizersCreateWithoutCallbacksInput, OrganizersUncheckedCreateWithoutCallbacksInput> | OrganizersCreateWithoutCallbacksInput[] | OrganizersUncheckedCreateWithoutCallbacksInput[]
    connectOrCreate?: OrganizersCreateOrConnectWithoutCallbacksInput | OrganizersCreateOrConnectWithoutCallbacksInput[]
    upsert?: OrganizersUpsertWithWhereUniqueWithoutCallbacksInput | OrganizersUpsertWithWhereUniqueWithoutCallbacksInput[]
    createMany?: OrganizersCreateManyCallbacksInputEnvelope
    set?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    disconnect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    delete?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    connect?: OrganizersWhereUniqueInput | OrganizersWhereUniqueInput[]
    update?: OrganizersUpdateWithWhereUniqueWithoutCallbacksInput | OrganizersUpdateWithWhereUniqueWithoutCallbacksInput[]
    updateMany?: OrganizersUpdateManyWithWhereWithoutCallbacksInput | OrganizersUpdateManyWithWhereWithoutCallbacksInput[]
    deleteMany?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrganizersCreateWithoutCommentsInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_nickname: string
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
    CreatedPosts?: CreatedPostsCreateNestedManyWithoutOrganizersInput
    callbacks: callbacksCreateNestedOneWithoutOrganizersInput
    Sphere: SphereCreateNestedOneWithoutOrganizersInput
    Users: UsersCreateNestedOneWithoutOrganizersInput
  }

  export type OrganizersUncheckedCreateWithoutCommentsInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
    CreatedPosts?: CreatedPostsUncheckedCreateNestedManyWithoutOrganizersInput
  }

  export type OrganizersCreateOrConnectWithoutCommentsInput = {
    where: OrganizersWhereUniqueInput
    create: XOR<OrganizersCreateWithoutCommentsInput, OrganizersUncheckedCreateWithoutCommentsInput>
  }

  export type CreatedPostsCreateWithoutCommentsInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Genres: GenresCreateNestedOneWithoutCreatedPostsInput
    Organizers: OrganizersCreateNestedOneWithoutCreatedPostsInput
    Tickets?: TicketsCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsUncheckedCreateWithoutCommentsInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    organizer_id: number
    post_id?: number
    genre_id: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Tickets?: TicketsUncheckedCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsCreateOrConnectWithoutCommentsInput = {
    where: CreatedPostsWhereUniqueInput
    create: XOR<CreatedPostsCreateWithoutCommentsInput, CreatedPostsUncheckedCreateWithoutCommentsInput>
  }

  export type UsersCreateWithoutCommentsInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Organizers?: OrganizersCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundCreateNestedManyWithoutUsersInput
    Tickets?: TicketsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Organizers?: OrganizersUncheckedCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutUsersInput
    Tickets?: TicketsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type OrganizersUpsertWithoutCommentsInput = {
    update: XOR<OrganizersUpdateWithoutCommentsInput, OrganizersUncheckedUpdateWithoutCommentsInput>
    create: XOR<OrganizersCreateWithoutCommentsInput, OrganizersUncheckedCreateWithoutCommentsInput>
    where?: OrganizersWhereInput
  }

  export type OrganizersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: OrganizersWhereInput
    data: XOR<OrganizersUpdateWithoutCommentsInput, OrganizersUncheckedUpdateWithoutCommentsInput>
  }

  export type OrganizersUpdateWithoutCommentsInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedPosts?: CreatedPostsUpdateManyWithoutOrganizersNestedInput
    callbacks?: callbacksUpdateOneRequiredWithoutOrganizersNestedInput
    Sphere?: SphereUpdateOneRequiredWithoutOrganizersNestedInput
    Users?: UsersUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateWithoutCommentsInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedPosts?: CreatedPostsUncheckedUpdateManyWithoutOrganizersNestedInput
  }

  export type CreatedPostsUpsertWithoutCommentsInput = {
    update: XOR<CreatedPostsUpdateWithoutCommentsInput, CreatedPostsUncheckedUpdateWithoutCommentsInput>
    create: XOR<CreatedPostsCreateWithoutCommentsInput, CreatedPostsUncheckedCreateWithoutCommentsInput>
    where?: CreatedPostsWhereInput
  }

  export type CreatedPostsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: CreatedPostsWhereInput
    data: XOR<CreatedPostsUpdateWithoutCommentsInput, CreatedPostsUncheckedUpdateWithoutCommentsInput>
  }

  export type CreatedPostsUpdateWithoutCommentsInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Genres?: GenresUpdateOneRequiredWithoutCreatedPostsNestedInput
    Organizers?: OrganizersUpdateOneRequiredWithoutCreatedPostsNestedInput
    Tickets?: TicketsUpdateManyWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsUncheckedUpdateWithoutCommentsInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Tickets?: TicketsUncheckedUpdateManyWithoutCreatedPostsNestedInput
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Organizers?: OrganizersUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Organizers?: OrganizersUncheckedUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentsCreateWithoutCreatedPostsInput = {
    comment_text: string
    comment_isVerified?: boolean | null
    comment_name: string
    Organizers: OrganizersCreateNestedOneWithoutCommentsInput
    Users: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutCreatedPostsInput = {
    comment_id?: number
    user_id: number
    comment_text: string
    organizer_id: number
    comment_isVerified?: boolean | null
    comment_name: string
  }

  export type CommentsCreateOrConnectWithoutCreatedPostsInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutCreatedPostsInput, CommentsUncheckedCreateWithoutCreatedPostsInput>
  }

  export type CommentsCreateManyCreatedPostsInputEnvelope = {
    data: CommentsCreateManyCreatedPostsInput | CommentsCreateManyCreatedPostsInput[]
    skipDuplicates?: boolean
  }

  export type GenresCreateWithoutCreatedPostsInput = {
    genre_name: string
    genre_description: string
    Sphere: SphereCreateNestedOneWithoutGenresInput
  }

  export type GenresUncheckedCreateWithoutCreatedPostsInput = {
    genre_id?: number
    genre_name: string
    genre_description: string
    sphere_id: number
  }

  export type GenresCreateOrConnectWithoutCreatedPostsInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutCreatedPostsInput, GenresUncheckedCreateWithoutCreatedPostsInput>
  }

  export type OrganizersCreateWithoutCreatedPostsInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_nickname: string
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
    Comments?: CommentsCreateNestedManyWithoutOrganizersInput
    callbacks: callbacksCreateNestedOneWithoutOrganizersInput
    Sphere: SphereCreateNestedOneWithoutOrganizersInput
    Users: UsersCreateNestedOneWithoutOrganizersInput
  }

  export type OrganizersUncheckedCreateWithoutCreatedPostsInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutOrganizersInput
  }

  export type OrganizersCreateOrConnectWithoutCreatedPostsInput = {
    where: OrganizersWhereUniqueInput
    create: XOR<OrganizersCreateWithoutCreatedPostsInput, OrganizersUncheckedCreateWithoutCreatedPostsInput>
  }

  export type TicketsCreateWithoutCreatedPostsInput = {
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
    TicketRefund?: TicketRefundCreateNestedManyWithoutTicketsInput
    Users: UsersCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateWithoutCreatedPostsInput = {
    ticket_id?: number
    user_id: number
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type TicketsCreateOrConnectWithoutCreatedPostsInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutCreatedPostsInput, TicketsUncheckedCreateWithoutCreatedPostsInput>
  }

  export type TicketsCreateManyCreatedPostsInputEnvelope = {
    data: TicketsCreateManyCreatedPostsInput | TicketsCreateManyCreatedPostsInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutCreatedPostsInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutCreatedPostsInput, CommentsUncheckedUpdateWithoutCreatedPostsInput>
    create: XOR<CommentsCreateWithoutCreatedPostsInput, CommentsUncheckedCreateWithoutCreatedPostsInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutCreatedPostsInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutCreatedPostsInput, CommentsUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type CommentsUpdateManyWithWhereWithoutCreatedPostsInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutCreatedPostsInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    comment_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    comment_text?: StringFilter<"Comments"> | string
    organizer_id?: IntFilter<"Comments"> | number
    comment_isVerified?: BoolNullableFilter<"Comments"> | boolean | null
    comment_name?: StringFilter<"Comments"> | string
    post_id?: IntNullableFilter<"Comments"> | number | null
  }

  export type GenresUpsertWithoutCreatedPostsInput = {
    update: XOR<GenresUpdateWithoutCreatedPostsInput, GenresUncheckedUpdateWithoutCreatedPostsInput>
    create: XOR<GenresCreateWithoutCreatedPostsInput, GenresUncheckedCreateWithoutCreatedPostsInput>
    where?: GenresWhereInput
  }

  export type GenresUpdateToOneWithWhereWithoutCreatedPostsInput = {
    where?: GenresWhereInput
    data: XOR<GenresUpdateWithoutCreatedPostsInput, GenresUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type GenresUpdateWithoutCreatedPostsInput = {
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
    Sphere?: SphereUpdateOneRequiredWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateWithoutCreatedPostsInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
    sphere_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizersUpsertWithoutCreatedPostsInput = {
    update: XOR<OrganizersUpdateWithoutCreatedPostsInput, OrganizersUncheckedUpdateWithoutCreatedPostsInput>
    create: XOR<OrganizersCreateWithoutCreatedPostsInput, OrganizersUncheckedCreateWithoutCreatedPostsInput>
    where?: OrganizersWhereInput
  }

  export type OrganizersUpdateToOneWithWhereWithoutCreatedPostsInput = {
    where?: OrganizersWhereInput
    data: XOR<OrganizersUpdateWithoutCreatedPostsInput, OrganizersUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type OrganizersUpdateWithoutCreatedPostsInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutOrganizersNestedInput
    callbacks?: callbacksUpdateOneRequiredWithoutOrganizersNestedInput
    Sphere?: SphereUpdateOneRequiredWithoutOrganizersNestedInput
    Users?: UsersUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateWithoutCreatedPostsInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutOrganizersNestedInput
  }

  export type TicketsUpsertWithWhereUniqueWithoutCreatedPostsInput = {
    where: TicketsWhereUniqueInput
    update: XOR<TicketsUpdateWithoutCreatedPostsInput, TicketsUncheckedUpdateWithoutCreatedPostsInput>
    create: XOR<TicketsCreateWithoutCreatedPostsInput, TicketsUncheckedCreateWithoutCreatedPostsInput>
  }

  export type TicketsUpdateWithWhereUniqueWithoutCreatedPostsInput = {
    where: TicketsWhereUniqueInput
    data: XOR<TicketsUpdateWithoutCreatedPostsInput, TicketsUncheckedUpdateWithoutCreatedPostsInput>
  }

  export type TicketsUpdateManyWithWhereWithoutCreatedPostsInput = {
    where: TicketsScalarWhereInput
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyWithoutCreatedPostsInput>
  }

  export type TicketsScalarWhereInput = {
    AND?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
    OR?: TicketsScalarWhereInput[]
    NOT?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
    ticket_id?: IntFilter<"Tickets"> | number
    user_id?: IntFilter<"Tickets"> | number
    post_id?: IntNullableFilter<"Tickets"> | number | null
    ticket_quantity?: IntFilter<"Tickets"> | number
    ticket_name?: StringFilter<"Tickets"> | string
    ticket_genre?: StringFilter<"Tickets"> | string
    ticket_sphere?: StringFilter<"Tickets"> | string
    ticket_meetPlace?: StringFilter<"Tickets"> | string
    ticket_cost?: IntFilter<"Tickets"> | number
    ticket_date?: DateTimeFilter<"Tickets"> | Date | string
    ticket_isHere?: BoolFilter<"Tickets"> | boolean
    ticket_isRefind?: BoolFilter<"Tickets"> | boolean
    organizer_id?: IntNullableFilter<"Tickets"> | number | null
    ticket_image?: StringFilter<"Tickets"> | string
  }

  export type CreatedPostsCreateWithoutGenresInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsCreateNestedManyWithoutCreatedPostsInput
    Organizers: OrganizersCreateNestedOneWithoutCreatedPostsInput
    Tickets?: TicketsCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsUncheckedCreateWithoutGenresInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    organizer_id: number
    post_id?: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsUncheckedCreateNestedManyWithoutCreatedPostsInput
    Tickets?: TicketsUncheckedCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsCreateOrConnectWithoutGenresInput = {
    where: CreatedPostsWhereUniqueInput
    create: XOR<CreatedPostsCreateWithoutGenresInput, CreatedPostsUncheckedCreateWithoutGenresInput>
  }

  export type CreatedPostsCreateManyGenresInputEnvelope = {
    data: CreatedPostsCreateManyGenresInput | CreatedPostsCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type SphereCreateWithoutGenresInput = {
    sphere_name: string
    Organizers?: OrganizersCreateNestedManyWithoutSphereInput
  }

  export type SphereUncheckedCreateWithoutGenresInput = {
    sphere_id?: number
    sphere_name: string
    Organizers?: OrganizersUncheckedCreateNestedManyWithoutSphereInput
  }

  export type SphereCreateOrConnectWithoutGenresInput = {
    where: SphereWhereUniqueInput
    create: XOR<SphereCreateWithoutGenresInput, SphereUncheckedCreateWithoutGenresInput>
  }

  export type CreatedPostsUpsertWithWhereUniqueWithoutGenresInput = {
    where: CreatedPostsWhereUniqueInput
    update: XOR<CreatedPostsUpdateWithoutGenresInput, CreatedPostsUncheckedUpdateWithoutGenresInput>
    create: XOR<CreatedPostsCreateWithoutGenresInput, CreatedPostsUncheckedCreateWithoutGenresInput>
  }

  export type CreatedPostsUpdateWithWhereUniqueWithoutGenresInput = {
    where: CreatedPostsWhereUniqueInput
    data: XOR<CreatedPostsUpdateWithoutGenresInput, CreatedPostsUncheckedUpdateWithoutGenresInput>
  }

  export type CreatedPostsUpdateManyWithWhereWithoutGenresInput = {
    where: CreatedPostsScalarWhereInput
    data: XOR<CreatedPostsUpdateManyMutationInput, CreatedPostsUncheckedUpdateManyWithoutGenresInput>
  }

  export type CreatedPostsScalarWhereInput = {
    AND?: CreatedPostsScalarWhereInput | CreatedPostsScalarWhereInput[]
    OR?: CreatedPostsScalarWhereInput[]
    NOT?: CreatedPostsScalarWhereInput | CreatedPostsScalarWhereInput[]
    post_image?: StringFilter<"CreatedPosts"> | string
    post_description?: StringFilter<"CreatedPosts"> | string
    post_cost?: IntFilter<"CreatedPosts"> | number
    post_meetingPlace?: StringFilter<"CreatedPosts"> | string
    post_allSeats?: DecimalFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFilter<"CreatedPosts"> | Decimal | DecimalJsLike | number | string
    post_checked?: BoolNullableFilter<"CreatedPosts"> | boolean | null
    organizer_id?: IntFilter<"CreatedPosts"> | number
    post_id?: IntFilter<"CreatedPosts"> | number
    genre_id?: IntFilter<"CreatedPosts"> | number
    post_name?: StringFilter<"CreatedPosts"> | string
    post_meetDate?: DateTimeFilter<"CreatedPosts"> | Date | string
    post_fullDescription?: StringFilter<"CreatedPosts"> | string
  }

  export type SphereUpsertWithoutGenresInput = {
    update: XOR<SphereUpdateWithoutGenresInput, SphereUncheckedUpdateWithoutGenresInput>
    create: XOR<SphereCreateWithoutGenresInput, SphereUncheckedCreateWithoutGenresInput>
    where?: SphereWhereInput
  }

  export type SphereUpdateToOneWithWhereWithoutGenresInput = {
    where?: SphereWhereInput
    data: XOR<SphereUpdateWithoutGenresInput, SphereUncheckedUpdateWithoutGenresInput>
  }

  export type SphereUpdateWithoutGenresInput = {
    sphere_name?: StringFieldUpdateOperationsInput | string
    Organizers?: OrganizersUpdateManyWithoutSphereNestedInput
  }

  export type SphereUncheckedUpdateWithoutGenresInput = {
    sphere_id?: IntFieldUpdateOperationsInput | number
    sphere_name?: StringFieldUpdateOperationsInput | string
    Organizers?: OrganizersUncheckedUpdateManyWithoutSphereNestedInput
  }

  export type CommentsCreateWithoutOrganizersInput = {
    comment_text: string
    comment_isVerified?: boolean | null
    comment_name: string
    CreatedPosts?: CreatedPostsCreateNestedOneWithoutCommentsInput
    Users: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutOrganizersInput = {
    comment_id?: number
    user_id: number
    comment_text: string
    comment_isVerified?: boolean | null
    comment_name: string
    post_id?: number | null
  }

  export type CommentsCreateOrConnectWithoutOrganizersInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutOrganizersInput, CommentsUncheckedCreateWithoutOrganizersInput>
  }

  export type CommentsCreateManyOrganizersInputEnvelope = {
    data: CommentsCreateManyOrganizersInput | CommentsCreateManyOrganizersInput[]
    skipDuplicates?: boolean
  }

  export type CreatedPostsCreateWithoutOrganizersInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsCreateNestedManyWithoutCreatedPostsInput
    Genres: GenresCreateNestedOneWithoutCreatedPostsInput
    Tickets?: TicketsCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsUncheckedCreateWithoutOrganizersInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    post_id?: number
    genre_id: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsUncheckedCreateNestedManyWithoutCreatedPostsInput
    Tickets?: TicketsUncheckedCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsCreateOrConnectWithoutOrganizersInput = {
    where: CreatedPostsWhereUniqueInput
    create: XOR<CreatedPostsCreateWithoutOrganizersInput, CreatedPostsUncheckedCreateWithoutOrganizersInput>
  }

  export type CreatedPostsCreateManyOrganizersInputEnvelope = {
    data: CreatedPostsCreateManyOrganizersInput | CreatedPostsCreateManyOrganizersInput[]
    skipDuplicates?: boolean
  }

  export type callbacksCreateWithoutOrganizersInput = {
    callback_name: string
  }

  export type callbacksUncheckedCreateWithoutOrganizersInput = {
    callback_id?: number
    callback_name: string
  }

  export type callbacksCreateOrConnectWithoutOrganizersInput = {
    where: callbacksWhereUniqueInput
    create: XOR<callbacksCreateWithoutOrganizersInput, callbacksUncheckedCreateWithoutOrganizersInput>
  }

  export type SphereCreateWithoutOrganizersInput = {
    sphere_name: string
    Genres?: GenresCreateNestedManyWithoutSphereInput
  }

  export type SphereUncheckedCreateWithoutOrganizersInput = {
    sphere_id?: number
    sphere_name: string
    Genres?: GenresUncheckedCreateNestedManyWithoutSphereInput
  }

  export type SphereCreateOrConnectWithoutOrganizersInput = {
    where: SphereWhereUniqueInput
    create: XOR<SphereCreateWithoutOrganizersInput, SphereUncheckedCreateWithoutOrganizersInput>
  }

  export type UsersCreateWithoutOrganizersInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundCreateNestedManyWithoutUsersInput
    Tickets?: TicketsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutOrganizersInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutUsersInput
    Tickets?: TicketsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutOrganizersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrganizersInput, UsersUncheckedCreateWithoutOrganizersInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutOrganizersInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutOrganizersInput, CommentsUncheckedUpdateWithoutOrganizersInput>
    create: XOR<CommentsCreateWithoutOrganizersInput, CommentsUncheckedCreateWithoutOrganizersInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutOrganizersInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutOrganizersInput, CommentsUncheckedUpdateWithoutOrganizersInput>
  }

  export type CommentsUpdateManyWithWhereWithoutOrganizersInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutOrganizersInput>
  }

  export type CreatedPostsUpsertWithWhereUniqueWithoutOrganizersInput = {
    where: CreatedPostsWhereUniqueInput
    update: XOR<CreatedPostsUpdateWithoutOrganizersInput, CreatedPostsUncheckedUpdateWithoutOrganizersInput>
    create: XOR<CreatedPostsCreateWithoutOrganizersInput, CreatedPostsUncheckedCreateWithoutOrganizersInput>
  }

  export type CreatedPostsUpdateWithWhereUniqueWithoutOrganizersInput = {
    where: CreatedPostsWhereUniqueInput
    data: XOR<CreatedPostsUpdateWithoutOrganizersInput, CreatedPostsUncheckedUpdateWithoutOrganizersInput>
  }

  export type CreatedPostsUpdateManyWithWhereWithoutOrganizersInput = {
    where: CreatedPostsScalarWhereInput
    data: XOR<CreatedPostsUpdateManyMutationInput, CreatedPostsUncheckedUpdateManyWithoutOrganizersInput>
  }

  export type callbacksUpsertWithoutOrganizersInput = {
    update: XOR<callbacksUpdateWithoutOrganizersInput, callbacksUncheckedUpdateWithoutOrganizersInput>
    create: XOR<callbacksCreateWithoutOrganizersInput, callbacksUncheckedCreateWithoutOrganizersInput>
    where?: callbacksWhereInput
  }

  export type callbacksUpdateToOneWithWhereWithoutOrganizersInput = {
    where?: callbacksWhereInput
    data: XOR<callbacksUpdateWithoutOrganizersInput, callbacksUncheckedUpdateWithoutOrganizersInput>
  }

  export type callbacksUpdateWithoutOrganizersInput = {
    callback_name?: StringFieldUpdateOperationsInput | string
  }

  export type callbacksUncheckedUpdateWithoutOrganizersInput = {
    callback_id?: IntFieldUpdateOperationsInput | number
    callback_name?: StringFieldUpdateOperationsInput | string
  }

  export type SphereUpsertWithoutOrganizersInput = {
    update: XOR<SphereUpdateWithoutOrganizersInput, SphereUncheckedUpdateWithoutOrganizersInput>
    create: XOR<SphereCreateWithoutOrganizersInput, SphereUncheckedCreateWithoutOrganizersInput>
    where?: SphereWhereInput
  }

  export type SphereUpdateToOneWithWhereWithoutOrganizersInput = {
    where?: SphereWhereInput
    data: XOR<SphereUpdateWithoutOrganizersInput, SphereUncheckedUpdateWithoutOrganizersInput>
  }

  export type SphereUpdateWithoutOrganizersInput = {
    sphere_name?: StringFieldUpdateOperationsInput | string
    Genres?: GenresUpdateManyWithoutSphereNestedInput
  }

  export type SphereUncheckedUpdateWithoutOrganizersInput = {
    sphere_id?: IntFieldUpdateOperationsInput | number
    sphere_name?: StringFieldUpdateOperationsInput | string
    Genres?: GenresUncheckedUpdateManyWithoutSphereNestedInput
  }

  export type UsersUpsertWithoutOrganizersInput = {
    update: XOR<UsersUpdateWithoutOrganizersInput, UsersUncheckedUpdateWithoutOrganizersInput>
    create: XOR<UsersCreateWithoutOrganizersInput, UsersUncheckedCreateWithoutOrganizersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrganizersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrganizersInput, UsersUncheckedUpdateWithoutOrganizersInput>
  }

  export type UsersUpdateWithoutOrganizersInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrganizersInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type TicketRefundCreateWithoutReasonsToRefundInput = {
    ticketRefind_description?: string | null
    ticketRefind_isConfirm?: boolean | null
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
    Tickets: TicketsCreateNestedOneWithoutTicketRefundInput
    Users: UsersCreateNestedOneWithoutTicketRefundInput
  }

  export type TicketRefundUncheckedCreateWithoutReasonsToRefundInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticket_id: number
    ticketRefind_isConfirm?: boolean | null
    user_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundCreateOrConnectWithoutReasonsToRefundInput = {
    where: TicketRefundWhereUniqueInput
    create: XOR<TicketRefundCreateWithoutReasonsToRefundInput, TicketRefundUncheckedCreateWithoutReasonsToRefundInput>
  }

  export type TicketRefundCreateManyReasonsToRefundInputEnvelope = {
    data: TicketRefundCreateManyReasonsToRefundInput | TicketRefundCreateManyReasonsToRefundInput[]
    skipDuplicates?: boolean
  }

  export type TicketRefundUpsertWithWhereUniqueWithoutReasonsToRefundInput = {
    where: TicketRefundWhereUniqueInput
    update: XOR<TicketRefundUpdateWithoutReasonsToRefundInput, TicketRefundUncheckedUpdateWithoutReasonsToRefundInput>
    create: XOR<TicketRefundCreateWithoutReasonsToRefundInput, TicketRefundUncheckedCreateWithoutReasonsToRefundInput>
  }

  export type TicketRefundUpdateWithWhereUniqueWithoutReasonsToRefundInput = {
    where: TicketRefundWhereUniqueInput
    data: XOR<TicketRefundUpdateWithoutReasonsToRefundInput, TicketRefundUncheckedUpdateWithoutReasonsToRefundInput>
  }

  export type TicketRefundUpdateManyWithWhereWithoutReasonsToRefundInput = {
    where: TicketRefundScalarWhereInput
    data: XOR<TicketRefundUpdateManyMutationInput, TicketRefundUncheckedUpdateManyWithoutReasonsToRefundInput>
  }

  export type TicketRefundScalarWhereInput = {
    AND?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
    OR?: TicketRefundScalarWhereInput[]
    NOT?: TicketRefundScalarWhereInput | TicketRefundScalarWhereInput[]
    ticketRefund_id?: IntFilter<"TicketRefund"> | number
    ticketRefind_description?: StringNullableFilter<"TicketRefund"> | string | null
    ticket_id?: IntFilter<"TicketRefund"> | number
    ticketRefind_isConfirm?: BoolNullableFilter<"TicketRefund"> | boolean | null
    reason_id?: IntFilter<"TicketRefund"> | number
    user_id?: IntFilter<"TicketRefund"> | number
    ticketRefund_quantity?: DecimalFilter<"TicketRefund"> | Decimal | DecimalJsLike | number | string
  }

  export type GenresCreateWithoutSphereInput = {
    genre_name: string
    genre_description: string
    CreatedPosts?: CreatedPostsCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateWithoutSphereInput = {
    genre_id?: number
    genre_name: string
    genre_description: string
    CreatedPosts?: CreatedPostsUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresCreateOrConnectWithoutSphereInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutSphereInput, GenresUncheckedCreateWithoutSphereInput>
  }

  export type GenresCreateManySphereInputEnvelope = {
    data: GenresCreateManySphereInput | GenresCreateManySphereInput[]
    skipDuplicates?: boolean
  }

  export type OrganizersCreateWithoutSphereInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_nickname: string
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
    Comments?: CommentsCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsCreateNestedManyWithoutOrganizersInput
    callbacks: callbacksCreateNestedOneWithoutOrganizersInput
    Users: UsersCreateNestedOneWithoutOrganizersInput
  }

  export type OrganizersUncheckedCreateWithoutSphereInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsUncheckedCreateNestedManyWithoutOrganizersInput
  }

  export type OrganizersCreateOrConnectWithoutSphereInput = {
    where: OrganizersWhereUniqueInput
    create: XOR<OrganizersCreateWithoutSphereInput, OrganizersUncheckedCreateWithoutSphereInput>
  }

  export type OrganizersCreateManySphereInputEnvelope = {
    data: OrganizersCreateManySphereInput | OrganizersCreateManySphereInput[]
    skipDuplicates?: boolean
  }

  export type GenresUpsertWithWhereUniqueWithoutSphereInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutSphereInput, GenresUncheckedUpdateWithoutSphereInput>
    create: XOR<GenresCreateWithoutSphereInput, GenresUncheckedCreateWithoutSphereInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutSphereInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutSphereInput, GenresUncheckedUpdateWithoutSphereInput>
  }

  export type GenresUpdateManyWithWhereWithoutSphereInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutSphereInput>
  }

  export type GenresScalarWhereInput = {
    AND?: GenresScalarWhereInput | GenresScalarWhereInput[]
    OR?: GenresScalarWhereInput[]
    NOT?: GenresScalarWhereInput | GenresScalarWhereInput[]
    genre_id?: IntFilter<"Genres"> | number
    genre_name?: StringFilter<"Genres"> | string
    genre_description?: StringFilter<"Genres"> | string
    sphere_id?: IntFilter<"Genres"> | number
  }

  export type OrganizersUpsertWithWhereUniqueWithoutSphereInput = {
    where: OrganizersWhereUniqueInput
    update: XOR<OrganizersUpdateWithoutSphereInput, OrganizersUncheckedUpdateWithoutSphereInput>
    create: XOR<OrganizersCreateWithoutSphereInput, OrganizersUncheckedCreateWithoutSphereInput>
  }

  export type OrganizersUpdateWithWhereUniqueWithoutSphereInput = {
    where: OrganizersWhereUniqueInput
    data: XOR<OrganizersUpdateWithoutSphereInput, OrganizersUncheckedUpdateWithoutSphereInput>
  }

  export type OrganizersUpdateManyWithWhereWithoutSphereInput = {
    where: OrganizersScalarWhereInput
    data: XOR<OrganizersUpdateManyMutationInput, OrganizersUncheckedUpdateManyWithoutSphereInput>
  }

  export type OrganizersScalarWhereInput = {
    AND?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
    OR?: OrganizersScalarWhereInput[]
    NOT?: OrganizersScalarWhereInput | OrganizersScalarWhereInput[]
    organizer_description?: StringFilter<"Organizers"> | string
    organizer_verified?: BoolNullableFilter<"Organizers"> | boolean | null
    organizer_phoneNum?: StringFilter<"Organizers"> | string
    organizer_id?: IntFilter<"Organizers"> | number
    sphere_id?: IntFilter<"Organizers"> | number
    organizer_nickname?: StringFilter<"Organizers"> | string
    user_id?: IntFilter<"Organizers"> | number
    organizer_photo?: StringFilter<"Organizers"> | string
    callback_id?: IntFilter<"Organizers"> | number
    organizer_reasonToCancel?: StringNullableFilter<"Organizers"> | string | null
  }

  export type ReasonsToRefundCreateWithoutTicketRefundInput = {
    reason_name: string
    reason_description: string
  }

  export type ReasonsToRefundUncheckedCreateWithoutTicketRefundInput = {
    reason_id?: number
    reason_name: string
    reason_description: string
  }

  export type ReasonsToRefundCreateOrConnectWithoutTicketRefundInput = {
    where: ReasonsToRefundWhereUniqueInput
    create: XOR<ReasonsToRefundCreateWithoutTicketRefundInput, ReasonsToRefundUncheckedCreateWithoutTicketRefundInput>
  }

  export type TicketsCreateWithoutTicketRefundInput = {
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
    CreatedPosts?: CreatedPostsCreateNestedOneWithoutTicketsInput
    Users: UsersCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateWithoutTicketRefundInput = {
    ticket_id?: number
    user_id: number
    post_id?: number | null
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
  }

  export type TicketsCreateOrConnectWithoutTicketRefundInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutTicketRefundInput, TicketsUncheckedCreateWithoutTicketRefundInput>
  }

  export type UsersCreateWithoutTicketRefundInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Organizers?: OrganizersCreateNestedManyWithoutUsersInput
    Tickets?: TicketsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutTicketRefundInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Organizers?: OrganizersUncheckedCreateNestedManyWithoutUsersInput
    Tickets?: TicketsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutTicketRefundInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTicketRefundInput, UsersUncheckedCreateWithoutTicketRefundInput>
  }

  export type ReasonsToRefundUpsertWithoutTicketRefundInput = {
    update: XOR<ReasonsToRefundUpdateWithoutTicketRefundInput, ReasonsToRefundUncheckedUpdateWithoutTicketRefundInput>
    create: XOR<ReasonsToRefundCreateWithoutTicketRefundInput, ReasonsToRefundUncheckedCreateWithoutTicketRefundInput>
    where?: ReasonsToRefundWhereInput
  }

  export type ReasonsToRefundUpdateToOneWithWhereWithoutTicketRefundInput = {
    where?: ReasonsToRefundWhereInput
    data: XOR<ReasonsToRefundUpdateWithoutTicketRefundInput, ReasonsToRefundUncheckedUpdateWithoutTicketRefundInput>
  }

  export type ReasonsToRefundUpdateWithoutTicketRefundInput = {
    reason_name?: StringFieldUpdateOperationsInput | string
    reason_description?: StringFieldUpdateOperationsInput | string
  }

  export type ReasonsToRefundUncheckedUpdateWithoutTicketRefundInput = {
    reason_id?: IntFieldUpdateOperationsInput | number
    reason_name?: StringFieldUpdateOperationsInput | string
    reason_description?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUpsertWithoutTicketRefundInput = {
    update: XOR<TicketsUpdateWithoutTicketRefundInput, TicketsUncheckedUpdateWithoutTicketRefundInput>
    create: XOR<TicketsCreateWithoutTicketRefundInput, TicketsUncheckedCreateWithoutTicketRefundInput>
    where?: TicketsWhereInput
  }

  export type TicketsUpdateToOneWithWhereWithoutTicketRefundInput = {
    where?: TicketsWhereInput
    data: XOR<TicketsUpdateWithoutTicketRefundInput, TicketsUncheckedUpdateWithoutTicketRefundInput>
  }

  export type TicketsUpdateWithoutTicketRefundInput = {
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
    CreatedPosts?: CreatedPostsUpdateOneWithoutTicketsNestedInput
    Users?: UsersUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateWithoutTicketRefundInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUpsertWithoutTicketRefundInput = {
    update: XOR<UsersUpdateWithoutTicketRefundInput, UsersUncheckedUpdateWithoutTicketRefundInput>
    create: XOR<UsersCreateWithoutTicketRefundInput, UsersUncheckedCreateWithoutTicketRefundInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTicketRefundInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTicketRefundInput, UsersUncheckedUpdateWithoutTicketRefundInput>
  }

  export type UsersUpdateWithoutTicketRefundInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Organizers?: OrganizersUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutTicketRefundInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Organizers?: OrganizersUncheckedUpdateManyWithoutUsersNestedInput
    Tickets?: TicketsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type TicketRefundCreateWithoutTicketsInput = {
    ticketRefind_description?: string | null
    ticketRefind_isConfirm?: boolean | null
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
    ReasonsToRefund: ReasonsToRefundCreateNestedOneWithoutTicketRefundInput
    Users: UsersCreateNestedOneWithoutTicketRefundInput
  }

  export type TicketRefundUncheckedCreateWithoutTicketsInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticketRefind_isConfirm?: boolean | null
    reason_id: number
    user_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundCreateOrConnectWithoutTicketsInput = {
    where: TicketRefundWhereUniqueInput
    create: XOR<TicketRefundCreateWithoutTicketsInput, TicketRefundUncheckedCreateWithoutTicketsInput>
  }

  export type TicketRefundCreateManyTicketsInputEnvelope = {
    data: TicketRefundCreateManyTicketsInput | TicketRefundCreateManyTicketsInput[]
    skipDuplicates?: boolean
  }

  export type CreatedPostsCreateWithoutTicketsInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsCreateNestedManyWithoutCreatedPostsInput
    Genres: GenresCreateNestedOneWithoutCreatedPostsInput
    Organizers: OrganizersCreateNestedOneWithoutCreatedPostsInput
  }

  export type CreatedPostsUncheckedCreateWithoutTicketsInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    organizer_id: number
    post_id?: number
    genre_id: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
    Comments?: CommentsUncheckedCreateNestedManyWithoutCreatedPostsInput
  }

  export type CreatedPostsCreateOrConnectWithoutTicketsInput = {
    where: CreatedPostsWhereUniqueInput
    create: XOR<CreatedPostsCreateWithoutTicketsInput, CreatedPostsUncheckedCreateWithoutTicketsInput>
  }

  export type UsersCreateWithoutTicketsInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Organizers?: OrganizersCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutTicketsInput = {
    user_name: string
    user_surname: string
    user_mail: string
    user_password: string
    user_photo: string
    role_id?: number
    user_id?: number
    user_likedMass?: UsersCreateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Organizers?: OrganizersUncheckedCreateNestedManyWithoutUsersInput
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutTicketsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
  }

  export type TicketRefundUpsertWithWhereUniqueWithoutTicketsInput = {
    where: TicketRefundWhereUniqueInput
    update: XOR<TicketRefundUpdateWithoutTicketsInput, TicketRefundUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketRefundCreateWithoutTicketsInput, TicketRefundUncheckedCreateWithoutTicketsInput>
  }

  export type TicketRefundUpdateWithWhereUniqueWithoutTicketsInput = {
    where: TicketRefundWhereUniqueInput
    data: XOR<TicketRefundUpdateWithoutTicketsInput, TicketRefundUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketRefundUpdateManyWithWhereWithoutTicketsInput = {
    where: TicketRefundScalarWhereInput
    data: XOR<TicketRefundUpdateManyMutationInput, TicketRefundUncheckedUpdateManyWithoutTicketsInput>
  }

  export type CreatedPostsUpsertWithoutTicketsInput = {
    update: XOR<CreatedPostsUpdateWithoutTicketsInput, CreatedPostsUncheckedUpdateWithoutTicketsInput>
    create: XOR<CreatedPostsCreateWithoutTicketsInput, CreatedPostsUncheckedCreateWithoutTicketsInput>
    where?: CreatedPostsWhereInput
  }

  export type CreatedPostsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CreatedPostsWhereInput
    data: XOR<CreatedPostsUpdateWithoutTicketsInput, CreatedPostsUncheckedUpdateWithoutTicketsInput>
  }

  export type CreatedPostsUpdateWithoutTicketsInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUpdateManyWithoutCreatedPostsNestedInput
    Genres?: GenresUpdateOneRequiredWithoutCreatedPostsNestedInput
    Organizers?: OrganizersUpdateOneRequiredWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsUncheckedUpdateWithoutTicketsInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUncheckedUpdateManyWithoutCreatedPostsNestedInput
  }

  export type UsersUpsertWithoutTicketsInput = {
    update: XOR<UsersUpdateWithoutTicketsInput, UsersUncheckedUpdateWithoutTicketsInput>
    create: XOR<UsersCreateWithoutTicketsInput, UsersUncheckedCreateWithoutTicketsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTicketsInput, UsersUncheckedUpdateWithoutTicketsInput>
  }

  export type UsersUpdateWithoutTicketsInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Organizers?: OrganizersUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutTicketsInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_surname?: StringFieldUpdateOperationsInput | string
    user_mail?: StringFieldUpdateOperationsInput | string
    user_password?: StringFieldUpdateOperationsInput | string
    user_photo?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    user_likedMass?: UsersUpdateuser_likedMassInput | number[]
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Organizers?: OrganizersUncheckedUpdateManyWithoutUsersNestedInput
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentsCreateWithoutUsersInput = {
    comment_text: string
    comment_isVerified?: boolean | null
    comment_name: string
    Organizers: OrganizersCreateNestedOneWithoutCommentsInput
    CreatedPosts?: CreatedPostsCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUsersInput = {
    comment_id?: number
    comment_text: string
    organizer_id: number
    comment_isVerified?: boolean | null
    comment_name: string
    post_id?: number | null
  }

  export type CommentsCreateOrConnectWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsCreateManyUsersInputEnvelope = {
    data: CommentsCreateManyUsersInput | CommentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type OrganizersCreateWithoutUsersInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_nickname: string
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
    Comments?: CommentsCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsCreateNestedManyWithoutOrganizersInput
    callbacks: callbacksCreateNestedOneWithoutOrganizersInput
    Sphere: SphereCreateNestedOneWithoutOrganizersInput
  }

  export type OrganizersUncheckedCreateWithoutUsersInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsUncheckedCreateNestedManyWithoutOrganizersInput
  }

  export type OrganizersCreateOrConnectWithoutUsersInput = {
    where: OrganizersWhereUniqueInput
    create: XOR<OrganizersCreateWithoutUsersInput, OrganizersUncheckedCreateWithoutUsersInput>
  }

  export type OrganizersCreateManyUsersInputEnvelope = {
    data: OrganizersCreateManyUsersInput | OrganizersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type TicketRefundCreateWithoutUsersInput = {
    ticketRefind_description?: string | null
    ticketRefind_isConfirm?: boolean | null
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
    ReasonsToRefund: ReasonsToRefundCreateNestedOneWithoutTicketRefundInput
    Tickets: TicketsCreateNestedOneWithoutTicketRefundInput
  }

  export type TicketRefundUncheckedCreateWithoutUsersInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticket_id: number
    ticketRefind_isConfirm?: boolean | null
    reason_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundCreateOrConnectWithoutUsersInput = {
    where: TicketRefundWhereUniqueInput
    create: XOR<TicketRefundCreateWithoutUsersInput, TicketRefundUncheckedCreateWithoutUsersInput>
  }

  export type TicketRefundCreateManyUsersInputEnvelope = {
    data: TicketRefundCreateManyUsersInput | TicketRefundCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type TicketsCreateWithoutUsersInput = {
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
    TicketRefund?: TicketRefundCreateNestedManyWithoutTicketsInput
    CreatedPosts?: CreatedPostsCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateWithoutUsersInput = {
    ticket_id?: number
    post_id?: number | null
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
    TicketRefund?: TicketRefundUncheckedCreateNestedManyWithoutTicketsInput
  }

  export type TicketsCreateOrConnectWithoutUsersInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutUsersInput, TicketsUncheckedCreateWithoutUsersInput>
  }

  export type TicketsCreateManyUsersInputEnvelope = {
    data: TicketsCreateManyUsersInput | TicketsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUsersInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type OrganizersUpsertWithWhereUniqueWithoutUsersInput = {
    where: OrganizersWhereUniqueInput
    update: XOR<OrganizersUpdateWithoutUsersInput, OrganizersUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizersCreateWithoutUsersInput, OrganizersUncheckedCreateWithoutUsersInput>
  }

  export type OrganizersUpdateWithWhereUniqueWithoutUsersInput = {
    where: OrganizersWhereUniqueInput
    data: XOR<OrganizersUpdateWithoutUsersInput, OrganizersUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizersUpdateManyWithWhereWithoutUsersInput = {
    where: OrganizersScalarWhereInput
    data: XOR<OrganizersUpdateManyMutationInput, OrganizersUncheckedUpdateManyWithoutUsersInput>
  }

  export type TicketRefundUpsertWithWhereUniqueWithoutUsersInput = {
    where: TicketRefundWhereUniqueInput
    update: XOR<TicketRefundUpdateWithoutUsersInput, TicketRefundUncheckedUpdateWithoutUsersInput>
    create: XOR<TicketRefundCreateWithoutUsersInput, TicketRefundUncheckedCreateWithoutUsersInput>
  }

  export type TicketRefundUpdateWithWhereUniqueWithoutUsersInput = {
    where: TicketRefundWhereUniqueInput
    data: XOR<TicketRefundUpdateWithoutUsersInput, TicketRefundUncheckedUpdateWithoutUsersInput>
  }

  export type TicketRefundUpdateManyWithWhereWithoutUsersInput = {
    where: TicketRefundScalarWhereInput
    data: XOR<TicketRefundUpdateManyMutationInput, TicketRefundUncheckedUpdateManyWithoutUsersInput>
  }

  export type TicketsUpsertWithWhereUniqueWithoutUsersInput = {
    where: TicketsWhereUniqueInput
    update: XOR<TicketsUpdateWithoutUsersInput, TicketsUncheckedUpdateWithoutUsersInput>
    create: XOR<TicketsCreateWithoutUsersInput, TicketsUncheckedCreateWithoutUsersInput>
  }

  export type TicketsUpdateWithWhereUniqueWithoutUsersInput = {
    where: TicketsWhereUniqueInput
    data: XOR<TicketsUpdateWithoutUsersInput, TicketsUncheckedUpdateWithoutUsersInput>
  }

  export type TicketsUpdateManyWithWhereWithoutUsersInput = {
    where: TicketsScalarWhereInput
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyWithoutUsersInput>
  }

  export type OrganizersCreateWithoutCallbacksInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_nickname: string
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
    Comments?: CommentsCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsCreateNestedManyWithoutOrganizersInput
    Sphere: SphereCreateNestedOneWithoutOrganizersInput
    Users: UsersCreateNestedOneWithoutOrganizersInput
  }

  export type OrganizersUncheckedCreateWithoutCallbacksInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutOrganizersInput
    CreatedPosts?: CreatedPostsUncheckedCreateNestedManyWithoutOrganizersInput
  }

  export type OrganizersCreateOrConnectWithoutCallbacksInput = {
    where: OrganizersWhereUniqueInput
    create: XOR<OrganizersCreateWithoutCallbacksInput, OrganizersUncheckedCreateWithoutCallbacksInput>
  }

  export type OrganizersCreateManyCallbacksInputEnvelope = {
    data: OrganizersCreateManyCallbacksInput | OrganizersCreateManyCallbacksInput[]
    skipDuplicates?: boolean
  }

  export type OrganizersUpsertWithWhereUniqueWithoutCallbacksInput = {
    where: OrganizersWhereUniqueInput
    update: XOR<OrganizersUpdateWithoutCallbacksInput, OrganizersUncheckedUpdateWithoutCallbacksInput>
    create: XOR<OrganizersCreateWithoutCallbacksInput, OrganizersUncheckedCreateWithoutCallbacksInput>
  }

  export type OrganizersUpdateWithWhereUniqueWithoutCallbacksInput = {
    where: OrganizersWhereUniqueInput
    data: XOR<OrganizersUpdateWithoutCallbacksInput, OrganizersUncheckedUpdateWithoutCallbacksInput>
  }

  export type OrganizersUpdateManyWithWhereWithoutCallbacksInput = {
    where: OrganizersScalarWhereInput
    data: XOR<OrganizersUpdateManyMutationInput, OrganizersUncheckedUpdateManyWithoutCallbacksInput>
  }

  export type CommentsCreateManyCreatedPostsInput = {
    comment_id?: number
    user_id: number
    comment_text: string
    organizer_id: number
    comment_isVerified?: boolean | null
    comment_name: string
  }

  export type TicketsCreateManyCreatedPostsInput = {
    ticket_id?: number
    user_id: number
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
  }

  export type CommentsUpdateWithoutCreatedPostsInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    Organizers?: OrganizersUpdateOneRequiredWithoutCommentsNestedInput
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutCreatedPostsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUncheckedUpdateManyWithoutCreatedPostsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
  }

  export type TicketsUpdateWithoutCreatedPostsInput = {
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUpdateManyWithoutTicketsNestedInput
    Users?: UsersUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateWithoutCreatedPostsInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateManyWithoutCreatedPostsInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
  }

  export type CreatedPostsCreateManyGenresInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    organizer_id: number
    post_id?: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
  }

  export type CreatedPostsUpdateWithoutGenresInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUpdateManyWithoutCreatedPostsNestedInput
    Organizers?: OrganizersUpdateOneRequiredWithoutCreatedPostsNestedInput
    Tickets?: TicketsUpdateManyWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsUncheckedUpdateWithoutGenresInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUncheckedUpdateManyWithoutCreatedPostsNestedInput
    Tickets?: TicketsUncheckedUpdateManyWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsUncheckedUpdateManyWithoutGenresInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyOrganizersInput = {
    comment_id?: number
    user_id: number
    comment_text: string
    comment_isVerified?: boolean | null
    comment_name: string
    post_id?: number | null
  }

  export type CreatedPostsCreateManyOrganizersInput = {
    post_image: string
    post_description: string
    post_cost: number
    post_meetingPlace: string
    post_allSeats: Decimal | DecimalJsLike | number | string
    post_buydSeats: Decimal | DecimalJsLike | number | string
    post_checked?: boolean | null
    post_id?: number
    genre_id: number
    post_name: string
    post_meetDate: Date | string
    post_fullDescription: string
  }

  export type CommentsUpdateWithoutOrganizersInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    CreatedPosts?: CreatedPostsUpdateOneWithoutCommentsNestedInput
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutOrganizersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentsUncheckedUpdateManyWithoutOrganizersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CreatedPostsUpdateWithoutOrganizersInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUpdateManyWithoutCreatedPostsNestedInput
    Genres?: GenresUpdateOneRequiredWithoutCreatedPostsNestedInput
    Tickets?: TicketsUpdateManyWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsUncheckedUpdateWithoutOrganizersInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUncheckedUpdateManyWithoutCreatedPostsNestedInput
    Tickets?: TicketsUncheckedUpdateManyWithoutCreatedPostsNestedInput
  }

  export type CreatedPostsUncheckedUpdateManyWithoutOrganizersInput = {
    post_image?: StringFieldUpdateOperationsInput | string
    post_description?: StringFieldUpdateOperationsInput | string
    post_cost?: IntFieldUpdateOperationsInput | number
    post_meetingPlace?: StringFieldUpdateOperationsInput | string
    post_allSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_buydSeats?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    post_checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    post_name?: StringFieldUpdateOperationsInput | string
    post_meetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post_fullDescription?: StringFieldUpdateOperationsInput | string
  }

  export type TicketRefundCreateManyReasonsToRefundInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticket_id: number
    ticketRefind_isConfirm?: boolean | null
    user_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUpdateWithoutReasonsToRefundInput = {
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Tickets?: TicketsUpdateOneRequiredWithoutTicketRefundNestedInput
    Users?: UsersUpdateOneRequiredWithoutTicketRefundNestedInput
  }

  export type TicketRefundUncheckedUpdateWithoutReasonsToRefundInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUncheckedUpdateManyWithoutReasonsToRefundInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type GenresCreateManySphereInput = {
    genre_id?: number
    genre_name: string
    genre_description: string
  }

  export type OrganizersCreateManySphereInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
  }

  export type GenresUpdateWithoutSphereInput = {
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
    CreatedPosts?: CreatedPostsUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateWithoutSphereInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
    CreatedPosts?: CreatedPostsUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateManyWithoutSphereInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    genre_name?: StringFieldUpdateOperationsInput | string
    genre_description?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizersUpdateWithoutSphereInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUpdateManyWithoutOrganizersNestedInput
    callbacks?: callbacksUpdateOneRequiredWithoutOrganizersNestedInput
    Users?: UsersUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateWithoutSphereInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUncheckedUpdateManyWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateManyWithoutSphereInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketRefundCreateManyTicketsInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticketRefind_isConfirm?: boolean | null
    reason_id: number
    user_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUpdateWithoutTicketsInput = {
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ReasonsToRefund?: ReasonsToRefundUpdateOneRequiredWithoutTicketRefundNestedInput
    Users?: UsersUpdateOneRequiredWithoutTicketRefundNestedInput
  }

  export type TicketRefundUncheckedUpdateWithoutTicketsInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reason_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUncheckedUpdateManyWithoutTicketsInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reason_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CommentsCreateManyUsersInput = {
    comment_id?: number
    comment_text: string
    organizer_id: number
    comment_isVerified?: boolean | null
    comment_name: string
    post_id?: number | null
  }

  export type OrganizersCreateManyUsersInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    organizer_photo?: string
    callback_id: number
    organizer_reasonToCancel?: string | null
  }

  export type TicketRefundCreateManyUsersInput = {
    ticketRefund_id?: number
    ticketRefind_description?: string | null
    ticket_id: number
    ticketRefind_isConfirm?: boolean | null
    reason_id: number
    ticketRefund_quantity: Decimal | DecimalJsLike | number | string
  }

  export type TicketsCreateManyUsersInput = {
    ticket_id?: number
    post_id?: number | null
    ticket_quantity?: number
    ticket_name: string
    ticket_genre: string
    ticket_sphere: string
    ticket_meetPlace: string
    ticket_cost?: number
    ticket_date: Date | string
    ticket_isHere?: boolean
    ticket_isRefind?: boolean
    organizer_id?: number | null
    ticket_image: string
  }

  export type CommentsUpdateWithoutUsersInput = {
    comment_text?: StringFieldUpdateOperationsInput | string
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    Organizers?: OrganizersUpdateOneRequiredWithoutCommentsNestedInput
    CreatedPosts?: CreatedPostsUpdateOneWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUsersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentsUncheckedUpdateManyWithoutUsersInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    comment_text?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    comment_isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment_name?: StringFieldUpdateOperationsInput | string
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrganizersUpdateWithoutUsersInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUpdateManyWithoutOrganizersNestedInput
    callbacks?: callbacksUpdateOneRequiredWithoutOrganizersNestedInput
    Sphere?: SphereUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateWithoutUsersInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUncheckedUpdateManyWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateManyWithoutUsersInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    callback_id?: IntFieldUpdateOperationsInput | number
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketRefundUpdateWithoutUsersInput = {
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ReasonsToRefund?: ReasonsToRefundUpdateOneRequiredWithoutTicketRefundNestedInput
    Tickets?: TicketsUpdateOneRequiredWithoutTicketRefundNestedInput
  }

  export type TicketRefundUncheckedUpdateWithoutUsersInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reason_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketRefundUncheckedUpdateManyWithoutUsersInput = {
    ticketRefund_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_description?: NullableStringFieldUpdateOperationsInput | string | null
    ticket_id?: IntFieldUpdateOperationsInput | number
    ticketRefind_isConfirm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reason_id?: IntFieldUpdateOperationsInput | number
    ticketRefund_quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketsUpdateWithoutUsersInput = {
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUpdateManyWithoutTicketsNestedInput
    CreatedPosts?: CreatedPostsUpdateOneWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateWithoutUsersInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
    TicketRefund?: TicketRefundUncheckedUpdateManyWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateManyWithoutUsersInput = {
    ticket_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_quantity?: IntFieldUpdateOperationsInput | number
    ticket_name?: StringFieldUpdateOperationsInput | string
    ticket_genre?: StringFieldUpdateOperationsInput | string
    ticket_sphere?: StringFieldUpdateOperationsInput | string
    ticket_meetPlace?: StringFieldUpdateOperationsInput | string
    ticket_cost?: IntFieldUpdateOperationsInput | number
    ticket_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_isHere?: BoolFieldUpdateOperationsInput | boolean
    ticket_isRefind?: BoolFieldUpdateOperationsInput | boolean
    organizer_id?: NullableIntFieldUpdateOperationsInput | number | null
    ticket_image?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizersCreateManyCallbacksInput = {
    organizer_description: string
    organizer_verified?: boolean | null
    organizer_phoneNum: string
    organizer_id?: number
    sphere_id: number
    organizer_nickname: string
    user_id: number
    organizer_photo?: string
    organizer_reasonToCancel?: string | null
  }

  export type OrganizersUpdateWithoutCallbacksInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUpdateManyWithoutOrganizersNestedInput
    Sphere?: SphereUpdateOneRequiredWithoutOrganizersNestedInput
    Users?: UsersUpdateOneRequiredWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateWithoutCallbacksInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutOrganizersNestedInput
    CreatedPosts?: CreatedPostsUncheckedUpdateManyWithoutOrganizersNestedInput
  }

  export type OrganizersUncheckedUpdateManyWithoutCallbacksInput = {
    organizer_description?: StringFieldUpdateOperationsInput | string
    organizer_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organizer_phoneNum?: StringFieldUpdateOperationsInput | string
    organizer_id?: IntFieldUpdateOperationsInput | number
    sphere_id?: IntFieldUpdateOperationsInput | number
    organizer_nickname?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    organizer_photo?: StringFieldUpdateOperationsInput | string
    organizer_reasonToCancel?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}