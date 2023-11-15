import { isNotBigInt } from '../../guards/type/isNotBigInt';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `bigint`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsBigInt(value: unknown): asserts value is bigint {
    if (isNotBigInt(value)) {
        throw new AssertionError('Value should be bigint');
    }
}

export { assertIsBigInt };
