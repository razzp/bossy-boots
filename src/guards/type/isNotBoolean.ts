import { isBoolean } from './isBoolean';

import type { NotTypeOf } from '../../aliases/NotTypeOf';

function isNotBoolean<TValue>(
    value: TValue
): value is NotTypeOf<TValue, 'boolean'> {
    return !isBoolean(value);
}

export { isNotBoolean };
