import { isString } from '../../guards/type/isString';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value *does not* have a type of `string`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotString<T>(value: T): asserts value is Exclude<T, string> {
    if (isString(value)) {
        throw new AssertionError('Value should not be string');
    }
}

export { assertIsNotString };
