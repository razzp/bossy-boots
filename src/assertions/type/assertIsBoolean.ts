import { AssertionError } from '../../AssertionError';
import { isNotBoolean } from '../../guards/type/isNotBoolean';

/**
 * Assert that a value has a type of `boolean`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsBoolean(value: unknown): asserts value is boolean {
    if (isNotBoolean(value)) {
        throw new AssertionError('Value should be boolean');
    }
}

export { assertIsBoolean };
