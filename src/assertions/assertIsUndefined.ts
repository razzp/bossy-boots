import { isNotUndefined } from '../guards/isNotUndefined';
import { AssertionError } from '../internal/AssertionError';

function assertIsUndefined(value: unknown): asserts value is undefined {
    if (isNotUndefined(value)) {
        throw new AssertionError('Value should not be defined.');
    }
}

export { assertIsUndefined };
