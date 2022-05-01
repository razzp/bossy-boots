import { isNumber } from './isNumber';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotNumber<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'number'> {
    return !isNumber(value);
}

export { isNotNumber };
