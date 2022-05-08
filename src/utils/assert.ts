import { AssertionError } from '../internal/AssertionError';

/**
 * Assert that a condition is true.
 * @memberof Utils
 * @since 0.1.0
 *
 * @example
 * function foo(input: number) {
 *     assert(input === 1);
 *     input; // 1
 * }
 *
 * @param {unknown} condition The condition to assert
 * @param {string} [message] An optional message to include if the assertion fails
 *
 * @returns {void}
 */
function assert(condition: unknown, message?: string): asserts condition {
    if (!condition) {
        throw new AssertionError(message);
    }
}

export { assert };
