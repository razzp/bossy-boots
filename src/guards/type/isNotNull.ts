import { isNull } from './isNull';

import type { NotNull } from '../../aliases/NotNull';

function isNotNull<T>(value: T): value is NotNull<T> {
    return !isNull(value);
}

export { isNotNull };
