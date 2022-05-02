import { isInstanceOf } from './isInstanceOf';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

/**
 * Check that value is *not* an instance of one or more prototypes.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Function[]} prototypes The prototype(s) to check
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isNotInstanceOf<TValue, TPrototypes extends Function[]>(
    value: TValue,
    ...prototypes: TPrototypes
): value is NotInstanceOf<TValue, TPrototypes> {
    return !isInstanceOf(value, ...prototypes);
}

export { isNotInstanceOf };
