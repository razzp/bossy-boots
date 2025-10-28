import { assertIsNotNullish } from '../assertions/type/assertIsNotNullish';

/**
 * Guarantee that a value is not nullish *(`null` or `undefined`)*.
 * @memberof Utils
 * @since 1.0.0
 *
 * @example
 * // Value will be `null | Element`
 * const foo = document.querySelectorAll('.foo');
 *
 * // Value will be `Element`.
 * const bar = guarantee(document.querySelectorAll('.bar'));
 *
 * @param {unknown} value The value to guarantee
 *
 * @returns {unknown} `value` if not nullish, otherwise will `throw`
 */
function guarantee<T>(value: T): NonNullable<T> {
    // Assert that the value is not nullish.
    assertIsNotNullish(value);

    // Result is not nullish. Return it.
    return value;
}

export { guarantee };
