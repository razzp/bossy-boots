import { isString } from '../../guards/type/isString';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotString<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'string'> {
    if (isString(value)) {
        throw new AssertionError('Value is a string.');
    }
}

export { assertIsNotString };
