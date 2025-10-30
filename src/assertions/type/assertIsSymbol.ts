import { isNotSymbol } from '../../guards/type/isNotSymbol';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value has a type of `symbol`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsSymbol(value: unknown): asserts value is symbol {
    if (isNotSymbol(value)) {
        throw new AssertionError('Value should be symbol');
    }
}

export { assertIsSymbol };
