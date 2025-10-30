import { isTypeOf } from './isTypeOf';

import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';

/**
 * Check that a value's type *does not* match one or more types.
 *
 * @param value - The value to assert
 * @param types - The types(s) to check
 * @returns `true` if check passes, otherwise `false`
 * 
 * @public
 */
function isNotTypeOf<T, U extends Primitive[]>(
    value: T,
    ...types: U
): value is Exclude<T, TypeOf<U>> {
    return !isTypeOf(value, ...types);
}

export { isNotTypeOf };
