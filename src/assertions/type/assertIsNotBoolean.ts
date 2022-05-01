import { isBoolean } from '../../guards/type/isBoolean';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotBoolean<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'boolean'> {
    if (isBoolean(value)) {
        throw new AssertionError('Value is a boolean.');
    }
}

export { assertIsNotBoolean };
