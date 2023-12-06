import { isNull } from '../../guards/type/isNull';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value *does not* have a type of `null`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotNull<T>(value: T): asserts value is Exclude<T, null> {
    if (isNull(value)) {
        throw new AssertionError('Value should not be null');
    }
}

export { assertIsNotNull };
