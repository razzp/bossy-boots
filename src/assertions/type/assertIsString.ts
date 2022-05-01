import { isNotString } from '../../guards/type/isNotString';
import { AssertionError } from '../../internal/AssertionError';

function assertIsString(value: unknown): asserts value is string {
    if (isNotString(value)) {
        throw new AssertionError('Value should be a string.');
    }
}

export { assertIsString };
