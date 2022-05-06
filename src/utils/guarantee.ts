import { assertIsNotNullish } from '../assertions/type/assertIsNotNullish';

/**
 * Guarantee that a value is not nullish *(`null` or `undefined`)*, with an optional fallback.
 * @memberof Utils
 * @since 0.1.0
 *
 * @param {unknown} value The value to guarantee
 * @param {unknown} [fallback] An optional fallback value
 *
 * @returns {unknown} `value` or `fallback` if either are not nullish, otherwise will `throw`
 */
function guarantee<T, U = never>(value: T, fallback?: U): NonNullable<unknown> {
    // If value is nullish, try using fallback instead.
    const result = value ?? fallback;

    // Assert that the result is not nullish.
    assertIsNotNullish(result);

    // Result is not nullish. Return it.
    return result;
}

export { guarantee };
