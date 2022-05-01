import type { InstanceOf } from '../../aliases/InstanceOf';

function isInstanceOf<TInstances extends Function[]>(
    value: unknown,
    ...instances: TInstances
): value is InstanceOf<TInstances> {
    return instances.some((instance) => value instanceof instance);
}

export { isInstanceOf };
