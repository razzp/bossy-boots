import { AssertionError } from '../../AssertionError';
import { isString } from '../../guards/type/isString';

/**
 * Assert that a value *does not* have a type of `string`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotString<T>(value: T): asserts value is Exclude<T, string> {
    if (isString(value)) {
        throw new AssertionError('Value should not be string');
    }
}

export { assertIsNotString };
