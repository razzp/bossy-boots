import type { InstanceOf } from '../../aliases/InstanceOf';

function isInstanceOf<T extends Function[]>(
    value: unknown,
    ...funcs: T
): value is InstanceOf<T> {
    return funcs.some((func) => value instanceof func);
}

export { isInstanceOf };
