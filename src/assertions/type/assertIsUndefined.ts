import { isNotUndefined } from '../../guards/type/isNotUndefined';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that value has a type of `undefined`.
 * @since 0.1.0
 *
 * @param {unknown} value The value to assert
 */
function assertIsUndefined(value: unknown): asserts value is undefined {
    if (isNotUndefined(value)) {
        throw new AssertionError('Value should be undefined');
    }
}

export { assertIsUndefined };
