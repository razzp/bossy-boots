import { isBigInt } from '../../guards/type/isBigInt';
import { AssertionError } from '../../internal/AssertionError';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotBigInt<TValue>(
    value: TValue
): asserts value is NotTypeOf<TValue, 'bigint'> {
    if (isBigInt(value)) {
        throw new AssertionError('Value is a bigint.');
    }
}

export { assertIsNotBigInt };
