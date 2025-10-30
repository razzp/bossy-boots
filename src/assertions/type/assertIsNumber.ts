import { isNotNumber } from '../../guards/type/isNotNumber';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value has a type of `number`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNumber(value: unknown): asserts value is number {
    if (isNotNumber(value)) {
        throw new AssertionError('Value should be number');
    }
}

export { assertIsNumber };
