import { AssertionError } from '../../AssertionError';
import { isNullish } from '../../guards/type/isNullish';

/**
 * Assert that a value *does not* have a type of `null` or `undefined`.
 *
 * @param value - The value to assert
 *
 * @public
 */
function assertIsNotNullish<T>(value: T): asserts value is NonNullable<T> {
    if (isNullish(value)) {
        throw new AssertionError(`Value should not be null or undefined`);
    }
}

export { assertIsNotNullish };
