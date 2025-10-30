import { isNumber } from '../../guards/type/isNumber';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value *does not* have a type of `number`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotNumber<T>(value: T): asserts value is Exclude<T, number> {
    if (isNumber(value)) {
        throw new AssertionError('Value should not be number');
    }
}

export { assertIsNotNumber };
