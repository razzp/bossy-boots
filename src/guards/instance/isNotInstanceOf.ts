import type { InstanceOf } from '../../aliases/InstanceOf';
import { isInstanceOf } from './isInstanceOf';

/**
 * Check that a value is *not* an instance of one or more prototypes.
 *
 * @param value - The value to assert
 * @param prototypes - The prototype(s) to check
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isNotInstanceOf<T, U extends Function[]>(
    value: T,
    ...prototypes: U
): value is Exclude<T, InstanceOf<U>> {
    return !isInstanceOf(value, ...prototypes);
}

export { isNotInstanceOf };
