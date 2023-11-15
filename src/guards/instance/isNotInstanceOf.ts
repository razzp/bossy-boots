import { isInstanceOf } from './isInstanceOf';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

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
function isNotInstanceOf<TValue, TPrototypes extends Function[]>(
    value: TValue,
    ...prototypes: TPrototypes
): value is NotInstanceOf<TValue, TPrototypes> {
    return !isInstanceOf(value, ...prototypes);
}

export { isNotInstanceOf };
