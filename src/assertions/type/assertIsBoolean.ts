import { isNotBoolean } from '../../guards/type/isNotBoolean';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value has a type of `boolean`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsBoolean(value: unknown): asserts value is boolean {
    if (isNotBoolean(value)) {
        throw new AssertionError('Value should be boolean');
    }
}

export { assertIsBoolean };
