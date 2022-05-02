import { AssertionError } from '../internal/AssertionError';

/**
 * Assert that condition is true.
 * @since 0.1.0
 *
 * @param {unknown} condition The condition to check
 * @param {string} [message] The message to throw if the check fails
 */
function assert(condition: unknown, message?: string): asserts condition {
    if (!condition) {
        throw new AssertionError(message);
    }
}

export { assert };
