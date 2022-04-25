import type { InstanceOf } from './InstanceOf';

type NotInstanceOf<T, U> = T extends InstanceOf<U> ? never : T;

export { NotInstanceOf };
