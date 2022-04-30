import { isUndefined } from './isUndefined';

import type { NotUndefined } from '../../aliases/NotUndefined';

function isNotUndefined<T>(value: T): value is NotUndefined<T> {
    return !isUndefined(value);
}

export { isNotUndefined };
