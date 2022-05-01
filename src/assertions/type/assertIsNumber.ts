import { isNotNumber } from '../../guards/type/isNotNumber';
import { AssertionError } from '../../internal/AssertionError';

function assertIsNumber(value: unknown): asserts value is number {
    if (isNotNumber(value)) {
        throw new AssertionError('Value should be a number.');
    }
}

export { assertIsNumber };
