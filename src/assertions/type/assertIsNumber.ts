import { isNotNumber } from '../../guards/type/isNotNumber';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `number`.
 * @memberof Assertions.Type
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNumber(value: unknown): asserts value is number {
    if (isNotNumber(value)) {
        throw new AssertionError('Value should be number');
    }
}

export { assertIsNumber };
