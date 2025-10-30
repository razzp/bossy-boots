import { isNull } from '../../guards/type/isNull';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value *does not* have a type of `null`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotNull<T>(value: T): asserts value is Exclude<T, null> {
    if (isNull(value)) {
        throw new AssertionError('Value should not be null');
    }
}

export { assertIsNotNull };
