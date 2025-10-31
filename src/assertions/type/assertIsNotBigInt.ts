import { AssertionError } from '../../AssertionError';
import { isBigInt } from '../../guards/type/isBigInt';

/**
 * Assert that a value *does not* have a type of `bigint`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotBigInt<T>(value: T): asserts value is Exclude<T, bigint> {
    if (isBigInt(value)) {
        throw new AssertionError('Value should not be bigint');
    }
}

export { assertIsNotBigInt };
