import { assertIsNotNullish } from '../assertions/type/assertIsNotNullish';

/**
 * Guarantee that a value is not nullish.
 *
 * @param value - The value to guarantee
 * @returns `value` if not nullish, otherwise will throw
 *
 * @throws {@link AssertionError}
 * Thrown if `value` is nullish.
 *
 * @public
 */
function guarantee<T>(value: T): NonNullable<T> {
    // Assert that the value is not nullish.
    assertIsNotNullish(value);

    // Result is not nullish. Return it.
    return value;
}

export { guarantee };
