import { isNotNullish } from '../../guards/type/isNotNullish';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `null` or `undefined`.
 * @memberof Assertions.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNullish(value: unknown): asserts value is null | undefined {
    if (isNotNullish(value)) {
        throw new AssertionError('Value should be null or undefined');
    }
}

export { assertIsNullish };
