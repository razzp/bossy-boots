import type { InstanceOf } from './InstanceOf';

type NotInstanceOf<TValue, TInstances> = Exclude<
    TValue,
    InstanceOf<TInstances>
>;

export { NotInstanceOf };
