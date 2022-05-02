import { isNotNull } from '../../guards/type/isNotNull';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value has a type of `null`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNull(value: unknown): asserts value is null {
    if (isNotNull(value)) {
        throw new AssertionError('Value should be null');
    }
}

export { assertIsNull };
