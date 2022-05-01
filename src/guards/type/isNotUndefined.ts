import { isUndefined } from './isUndefined';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotUndefined<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'undefined'> {
    return !isUndefined(value);
}

export { isNotUndefined };
