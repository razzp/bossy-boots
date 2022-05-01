import type { GetInstances } from './GetInstances';

type InstanceOf<TValue, TInstances> = Extract<TValue, GetInstances<TInstances>>;

export { InstanceOf };
