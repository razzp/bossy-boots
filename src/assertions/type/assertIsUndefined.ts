import { isNotUndefined } from '../../guards/type/isNotUndefined';
import { AssertionError } from '../../internal/AssertionError';

import type { TypeOf } from '../../aliases/TypeOf';

function assertIsUndefined<TValue>(
    value: TValue
): asserts value is TypeOf<TValue, 'undefined'> {
    if (isNotUndefined(value)) {
        throw new AssertionError('Value should be undefined.');
    }
}

export { assertIsUndefined };
