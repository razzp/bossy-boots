import type { TypeMap } from '../interfaces/TypeMap';

type TypeOf<T> = T extends Array<infer U>
    ? U extends keyof TypeMap
        ? TypeMap[U]
        : never
    : never;

export { TypeOf };
