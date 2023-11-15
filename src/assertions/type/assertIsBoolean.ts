import { isNotBoolean } from '../../guards/type/isNotBoolean';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `boolean`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsBoolean(value: unknown): asserts value is boolean {
    if (isNotBoolean(value)) {
        throw new AssertionError('Value should be boolean');
    }
}

export { assertIsBoolean };
