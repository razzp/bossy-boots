import { isNotNullish } from '../guards/isNotNullish';
import { AssertionError } from '../internal/AssertionError';

import type { Nullish } from '../aliases/Nullish';

function assertIsNullish<T>(value: T): asserts value is Nullish<T> {
    if (isNotNullish(value)) {
        throw new AssertionError('Value should be null or undefined.');
    }
}

export { assertIsNullish };
