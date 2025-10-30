import { isNotString } from '../../guards/type/isNotString';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value has a type of `string`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsString(value: unknown): asserts value is string {
    if (isNotString(value)) {
        throw new AssertionError('Value should be string');
    }
}

export { assertIsString };
