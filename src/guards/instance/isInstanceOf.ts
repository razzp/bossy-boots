import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Check that value is an instance of one or more prototypes.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isInstanceOf<TPrototypes extends Function[]>(
    value: unknown,
    ...prototypes: TPrototypes
): value is InstanceOf<TPrototypes> {
    return prototypes.some((prototype) => value instanceof prototype);
}

export { isInstanceOf };
