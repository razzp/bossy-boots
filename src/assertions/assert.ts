import { AssertionError } from '../internal/AssertionError';

function assert(condition: unknown, message?: string): asserts condition {
    if (!condition) {
        throw new AssertionError(message);
    }
}

export { assert };
