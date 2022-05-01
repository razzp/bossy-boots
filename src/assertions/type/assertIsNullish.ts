import { isNotNullish } from '../../guards/type/isNotNullish';
import { AssertionError } from '../../internal/AssertionError';

import type { TypeOf } from '../../aliases/TypeOf';

function assertIsNullish<TValue>(
    value: TValue
): asserts value is TypeOf<TValue, 'null' | 'undefined'> {
    if (isNotNullish(value)) {
        throw new AssertionError('Value should be null or undefined.');
    }
}

export { assertIsNullish };
