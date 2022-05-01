import { isString } from './isString';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotString<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'string'> {
    return !isString(value);
}

export { isNotString };
