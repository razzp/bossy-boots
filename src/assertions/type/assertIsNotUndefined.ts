import { isUndefined } from '../../guards/type/isUndefined';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value *does not* have a type of `undefined`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotUndefined<T>(
    value: T
): asserts value is Exclude<T, undefined> {
    if (isUndefined(value)) {
        throw new AssertionError('Value should not be undefined');
    }
}

export { assertIsNotUndefined };
