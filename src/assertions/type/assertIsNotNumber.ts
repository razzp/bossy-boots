import { isNumber } from '../../guards/type/isNumber';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value *does not* have a type of `number`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotNumber<T>(value: T): asserts value is Exclude<T, number> {
    if (isNumber(value)) {
        throw new AssertionError('Value should not be number');
    }
}

export { assertIsNotNumber };
