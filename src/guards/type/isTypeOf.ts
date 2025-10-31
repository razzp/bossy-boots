import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';

/**
 * Check that a value's type matches one or more types.
 *
 * @param value - The value to assert
 * @param types - The types(s) to check
 * @returns `true` if check passes, otherwise `false`
 *
 * @public
 */
function isTypeOf<T extends Primitive[]>(
    value: unknown,
    ...types: T
): value is TypeOf<T> {
    return types.some((type) => typeof value === type);
}

export { isTypeOf };
