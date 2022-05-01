import type { GetInstances } from './GetInstances';

type NotInstanceOf<TValue, TInstances> = Exclude<
    TValue,
    GetInstances<TInstances>
>;

export { NotInstanceOf };
