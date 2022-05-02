import { isNotNumber } from '../../guards/type/isNotNumber';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value has a type of `number`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsNumber(value: unknown): asserts value is number {
    if (isNotNumber(value)) {
        throw new AssertionError('Value should be number');
    }
}

export { assertIsNumber };
