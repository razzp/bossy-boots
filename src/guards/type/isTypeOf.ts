import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';

/**
 * Check that value's type matches one or more types.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 * @param {Array.<boolean|bigint|null|number|string|symbol|undefined>} types The types(s) to check
 *
 * @returns {boolean} `true` if the check passes, `false` otherwise
 */
function isTypeOf<TTypes extends Primitive[]>(
    value: unknown,
    ...types: TTypes
): value is TypeOf<TTypes> {
    return types.some((type) => typeof value === type);
}

export { isTypeOf };
