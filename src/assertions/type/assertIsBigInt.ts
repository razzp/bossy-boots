import { isNotBigInt } from '../../guards/type/isNotBigInt';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value has a type of `bigint`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsBigInt(value: unknown): asserts value is bigint {
    if (isNotBigInt(value)) {
        throw new AssertionError('Value should be bigint');
    }
}

export { assertIsBigInt };
