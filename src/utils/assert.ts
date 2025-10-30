import { AssertionError } from '../AssertionError';

/**
 * Assert that a condition is true.
 *
 * @param condition - The condition to assert
 * @param message - An optional message to include if the assertion fails
 * 
 * @throws {@link AssertionError}
 * Thrown if `condition` is not met.
 *
 * @public
 */
function assert(condition: unknown, message?: string): asserts condition {
    if (!condition) {
        throw new AssertionError(message);
    }
}

export { assert };
