import { AssertionError } from '../../AssertionError';
import { isUndefined } from '../../guards/type/isUndefined';

/**
 * Assert that a value *does not* have a type of `undefined`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotUndefined<T>(
    value: T,
): asserts value is Exclude<T, undefined> {
    if (isUndefined(value)) {
        throw new AssertionError('Value should not be undefined');
    }
}

export { assertIsNotUndefined };
