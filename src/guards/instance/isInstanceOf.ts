import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Check that a value is an instance of one or more prototypes.
 * @memberof Guards.Instance
 * @since 1.0.0
 *
 * @example
 * function foo(input: Red | Yellow | Green | Blue) {
 *     if (isInstanceOf(input, Yellow, Blue)) {
 *         input; // Yellow | Blue
 *     }
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
 *
 * @returns {boolean}
 */
function isInstanceOf<T extends Function[]>(
    value: unknown,
    ...prototypes: T
): value is InstanceOf<T> {
    return prototypes.some((prototype) => value instanceof prototype);
}

export { isInstanceOf };
