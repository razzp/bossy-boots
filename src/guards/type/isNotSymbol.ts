import { isSymbol } from './isSymbol';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotSymbol<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'symbol'> {
    return !isSymbol(value);
}

export { isNotSymbol };
