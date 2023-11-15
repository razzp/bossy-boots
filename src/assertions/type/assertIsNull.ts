import { isNotNull } from '../../guards/type/isNotNull';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `null`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNull(value: unknown): asserts value is null {
    if (isNotNull(value)) {
        throw new AssertionError('Value should be null');
    }
}

export { assertIsNull };
