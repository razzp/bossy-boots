import { isNotString } from '../../guards/type/isNotString';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `string`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsString(value: unknown): asserts value is string {
    if (isNotString(value)) {
        throw new AssertionError('Value should be string');
    }
}

export { assertIsString };
