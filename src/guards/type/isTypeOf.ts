import type { Primitive } from '../../aliases/Primitive';
import type { TypeOf } from '../../aliases/TypeOf';

/**
 * Check that a value's type matches one or more types.
 * @memberof Guards.Type
 * @since 0.1.0
 *
 * @example
 * function foo(input: string | number | symbol | boolean) {
 *     if (isTypeOf(input, "number", "boolean")) {
 *         input; // number | boolean
 *     }
 * }
 *
 * @param {unknown} value The value to assert
 * @param {Array.<Primitive>} types The types(s) to check
 *
 * @returns {boolean}
 */
function isTypeOf<TTypes extends Primitive[]>(
    value: unknown,
    ...types: TTypes
): value is TypeOf<TTypes> {
    return types.some((type) => typeof value === type);
}

export { isTypeOf };
