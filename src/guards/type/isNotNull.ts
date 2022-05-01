import { isNull } from './isNull';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotNull<TValue>(value: TValue): value is NotTypeOf<TValue, 'null'> {
    return !isNull(value);
}

export { isNotNull };
