import { isNotString } from '../../guards/type/isNotString';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value has a type of `string`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsString(value: unknown): asserts value is string {
    if (isNotString(value)) {
        throw new AssertionError('Value should be string');
    }
}

export { assertIsString };
