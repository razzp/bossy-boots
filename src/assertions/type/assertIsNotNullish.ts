import { isNullish } from '../../guards/type/isNullish';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value *does not* have a type of `null` or `undefined`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotNullish<T>(value: T): asserts value is NonNullable<T> {
    if (isNullish(value)) {
        throw new AssertionError(`Value should not be null or undefined`);
    }
}

export { assertIsNotNullish };
