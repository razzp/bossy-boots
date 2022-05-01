import { isNull } from '../../guards/type/isNull';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotNull<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'null'> {
    if (isNull(value)) {
        throw new AssertionError('Value is null.');
    }
}

export { assertIsNotNull };
