import { isSymbol } from '../../guards/type/isSymbol';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value *does not* have a type of `symbol`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotSymbol<T>(value: T): asserts value is Exclude<T, symbol> {
    if (isSymbol(value)) {
        throw new AssertionError('Value should not be symbol');
    }
}

export { assertIsNotSymbol };
