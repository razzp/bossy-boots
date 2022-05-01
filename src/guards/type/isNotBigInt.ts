import { isBigInt } from './isBigInt';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotBigInt<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'bigint'> {
    return !isBigInt(value);
}

export { isNotBigInt };
