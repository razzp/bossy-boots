import { assertIsNotNullish } from '../assertions/type/assertIsNotNullish';

/**
 * Guarantee that value is not `null` or `undefined`.
 * @since 0.1.0
 *
 * @param {T} value The value to guarantee
 *
 * @returns {T} `value` if not `null` or `undefined`, otherwise will `throw`
 */
function guarantee<T>(value: T): NonNullable<T>;

/**
 * Guarantee that value is not `null` or `undefined`, with an optional fallback.
 * @since 0.1.0
 *
 * @param {T} value The value to guarantee
 * @param {U} fallback A fallback value if `value` is `null` or `undefined`
 *
 * @returns {T|U} `value` or `fallback` if either are not `null` or `undefined`, otherwise will `throw`
 */
function guarantee<T, U>(value: T, fallback: U): NonNullable<T | U>;

/**
 * Guarantee that value is not `null` or `undefined`, with an optional fallback.
 * @since 0.1.0
 *
 * @param {T} value The value to guarantee
 * @param {U} [fallback] A fallback value if `value` is `null` or `undefined`
 *
 * @returns {T|U} `value` or `fallback` if either are not `null` or `undefined`, otherwise will `throw`
 */
function guarantee(value: unknown, fallback?: unknown): NonNullable<unknown> {
    // If value is nullish, try using fallback instead.
    const result = value ?? fallback;

    // Assert that the result is not nullish.
    assertIsNotNullish(result);

    // Result is not nullish. Return it.
    return result;
}

export { guarantee };
