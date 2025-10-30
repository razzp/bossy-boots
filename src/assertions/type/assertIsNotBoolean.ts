import { isBoolean } from '../../guards/type/isBoolean';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value *does not* have a type of `boolean`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotBoolean<T>(value: T): asserts value is Exclude<T, boolean> {
    if (isBoolean(value)) {
        throw new AssertionError('Value should not be boolean');
    }
}

export { assertIsNotBoolean };
