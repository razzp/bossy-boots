import { isNotUndefined } from '../../guards/type/isNotUndefined';
import { AssertionError } from '../../internal/AssertionError';

/**
 * Assert that a value has a type of `undefined`.
 * @memberof Assertions.Type
 * @since 1.0.0
 *
 * @param {unknown} value The value to assert
 *
 * @returns {void}
 */
function assertIsUndefined(value: unknown): asserts value is undefined {
    if (isNotUndefined(value)) {
        throw new AssertionError('Value should be undefined');
    }
}

export { assertIsUndefined };
