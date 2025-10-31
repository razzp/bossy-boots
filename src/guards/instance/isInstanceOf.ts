import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Check that a value is an instance of one or more prototypes.
 *
 * @param value - The value to assert
 * @param prototypes - The prototype(s) to check
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isInstanceOf<T extends Function[]>(
    value: unknown,
    ...prototypes: T
): value is InstanceOf<T> {
    return prototypes.some((prototype) => value instanceof prototype);
}

export { isInstanceOf };
