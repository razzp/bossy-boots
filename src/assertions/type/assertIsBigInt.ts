import { AssertionError } from '../../AssertionError';
import { isNotBigInt } from '../../guards/type/isNotBigInt';

/**
 * Assert that a value has a type of `bigint`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsBigInt(value: unknown): asserts value is bigint {
    if (isNotBigInt(value)) {
        throw new AssertionError('Value should be bigint');
    }
}

export { assertIsBigInt };
