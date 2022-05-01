import { isUndefined } from '../../guards/type/isUndefined';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotUndefined<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'undefined'> {
    if (isUndefined(value)) {
        throw new AssertionError('Value is undefined.');
    }
}

export { assertIsNotUndefined };
