import { isBigInt } from '../../guards/type/isBigInt';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value *does not* have a type of `bigint`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsNotBigInt<T>(value: T): asserts value is Exclude<T, bigint> {
    if (isBigInt(value)) {
        throw new AssertionError('Value should not be bigint');
    }
}

export { assertIsNotBigInt };
