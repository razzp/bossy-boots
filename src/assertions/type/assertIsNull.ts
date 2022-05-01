import { isNotNull } from '../../guards/type/isNotNull';
import { AssertionError } from '../../internal/AssertionError';

import type { TypeOf } from '../../aliases/TypeOf';

function assertIsNull<TValue>(
    value: TValue
): asserts value is TypeOf<TValue, 'null'> {
    if (isNotNull(value)) {
        throw new AssertionError('Value should be null.');
    }
}

export { assertIsNull };
