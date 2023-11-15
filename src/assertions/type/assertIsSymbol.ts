import { isNotSymbol } from '../../guards/type/isNotSymbol';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `symbol`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsSymbol(value: unknown): asserts value is symbol {
    if (isNotSymbol(value)) {
        throw new AssertionError('Value should be symbol');
    }
}

export { assertIsSymbol };
