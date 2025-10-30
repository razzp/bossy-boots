import { isNotNullish } from '../../guards/type/isNotNullish';
import { AssertionError } from '../../AssertionError';

/**
 * Assert that a value has a type of `null` or `undefined`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNullish(value: unknown): asserts value is null | undefined {
    if (isNotNullish(value)) {
        throw new AssertionError('Value should be null or undefined');
    }
}

export { assertIsNullish };
