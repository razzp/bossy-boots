import type { GetTypes } from './GetTypes';

type NotTypeOf<TValue, TTypes> = Exclude<TValue, GetTypes<TTypes>>;

export { NotTypeOf };
