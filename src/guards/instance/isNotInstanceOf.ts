import { isInstanceOf } from './isInstanceOf';

import type { InstanceOf } from '../../aliases/InstanceOf';

/**
 * Check that a value is *not* an instance of one or more prototypes.
 * @memberof Guards.Instance
 * @since 1.0.0
 *
 * @example
 * function foo(input: Red | Yellow | Green | Blue) {
 *     if (isNotInstanceOf(input, Yellow, Blue)) {
 *         input; // Red | Green
 *     }
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
 *
 * @returns {boolean}
 */
function isNotInstanceOf<T, U extends Function[]>(
    value: T,
    ...prototypes: U
): value is Exclude<T, InstanceOf<U>> {
    return !isInstanceOf(value, ...prototypes);
}

export { isNotInstanceOf };
