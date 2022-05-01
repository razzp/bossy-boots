import type { TypeOf } from './TypeOf';

type NotTypeOf<TValue, TTypes> = Exclude<TValue, TypeOf<TTypes>>;

export { NotTypeOf };
