import { isNullish } from './isNullish';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotNullish<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'null' | 'undefined'> {
    return !isNullish(value);
}

export { isNotNullish };
