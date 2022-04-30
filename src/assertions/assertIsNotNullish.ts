import { isNullish } from '../guards/isNullish';
import { AssertionError } from '../internal/AssertionError';

import type { NotNullish } from '../aliases/NotNullish';

function assertIsNotNullish<T>(value: T): asserts value is NotNullish<T> {
    if (isNullish(value)) {
        throw new AssertionError(`Value is ${String(value)}.`);
    }
}

export { assertIsNotNullish };
