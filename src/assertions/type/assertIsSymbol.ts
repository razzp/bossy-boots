import { isNotSymbol } from '../../guards/type/isNotSymbol';
import { AssertionError } from '../../internal/AssertionError';

function assertIsSymbol(value: unknown): asserts value is symbol {
    if (isNotSymbol(value)) {
        throw new AssertionError('Value should be a symbol.');
    }
}

export { assertIsSymbol };
