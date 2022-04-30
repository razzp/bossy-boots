import { isNullish } from './isNullish';

import type { NotNullish } from '../aliases/NotNullish';

function isNotNullish<T>(value: T): value is NotNullish<T> {
    return !isNullish(value);
}

export { isNotNullish };
