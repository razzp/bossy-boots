import { isNotBigInt } from '../../guards/type/isNotBigInt';
import { AssertionError } from '../../internal/AssertionError';

function assertIsBigInt(value: unknown): asserts value is bigint {
    if (isNotBigInt(value)) {
        throw new AssertionError('Value should be bigint');
    }
}

export { assertIsBigInt };
