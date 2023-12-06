import { isBoolean } from '../../guards/type/isBoolean';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value *does not* have a type of `boolean`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotBoolean<T>(value: T): asserts value is Exclude<T, boolean> {
    if (isBoolean(value)) {
        throw new AssertionError('Value should not be boolean');
    }
}

export { assertIsNotBoolean };
