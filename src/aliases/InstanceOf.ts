import type { ProtoOf } from './ProtoOf';

type InstanceOf<T> = T extends Array<infer U> ? ProtoOf<U> : ProtoOf<T>;

export { InstanceOf };
