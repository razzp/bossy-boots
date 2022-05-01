import type { InstanceOf } from '../../aliases/InstanceOf';

function isInstanceOf<TValue, TInstances extends Function[]>(
    value: TValue,
    ...instances: TInstances
): value is InstanceOf<TValue, TInstances> {
    return instances.some((instance) => value instanceof instance);
}

export { isInstanceOf };
