import { isNotNullish } from '../../guards/type/isNotNullish';
import { AssertionError } from '../../internal/AssertionError';

function assertIsNullish(value: unknown): asserts value is null | undefined {
    if (isNotNullish(value)) {
        throw new AssertionError('Value should be null or undefined.');
    }
}

export { assertIsNullish };
