import { AssertionError } from '../../AssertionError';
import { isNotNull } from '../../guards/type/isNotNull';

/**
 * Assert that a value has a type of `null`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNull(value: unknown): asserts value is null {
    if (isNotNull(value)) {
        throw new AssertionError('Value should be null');
    }
}

export { assertIsNull };
