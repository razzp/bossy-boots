import { isNotNull } from '../../guards/type/isNotNull';
import { AssertionError } from '../../internal/AssertionError';

function assertIsNull(value: unknown): asserts value is null {
    if (isNotNull(value)) {
        throw new AssertionError('Value should be null.');
    }
}

export { assertIsNull };
