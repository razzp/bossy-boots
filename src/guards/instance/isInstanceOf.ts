import type { InstanceOf } from '../../aliases/InstanceOf';

function isInstanceOf<TPrototypes extends Function[]>(
    value: unknown,
    ...prototypes: TPrototypes
): value is InstanceOf<TPrototypes> {
    return prototypes.some((prototype) => value instanceof prototype);
}

export { isInstanceOf };
