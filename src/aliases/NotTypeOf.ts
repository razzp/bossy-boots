import type { TypeOf } from './TypeOf';

type NotTypeOf<T, U> = T extends TypeOf<U> ? never : T;

export { NotTypeOf };
