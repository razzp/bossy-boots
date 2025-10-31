import { AssertionError } from '../../AssertionError';
import { isNotUndefined } from '../../guards/type/isNotUndefined';

/**
 * Assert that a value has a type of `undefined`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsUndefined(value: unknown): asserts value is undefined {
    if (isNotUndefined(value)) {
        throw new AssertionError('Value should be undefined');
    }
}

export { assertIsUndefined };
