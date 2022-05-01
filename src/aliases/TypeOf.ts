import type { GetTypes } from './GetTypes';

type TypeOf<TValue, TTypes> = Extract<TValue, GetTypes<TTypes>>;

export { TypeOf };
