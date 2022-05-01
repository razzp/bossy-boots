import { isNotBoolean } from '../../guards/type/isNotBoolean';
import { AssertionError } from '../../internal/AssertionError';

function assertIsBoolean(value: unknown): asserts value is boolean {
    if (isNotBoolean(value)) {
        throw new AssertionError('Value should be boolean');
    }
}

export { assertIsBoolean };
