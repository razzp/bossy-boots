import { isInstanceOf } from './isInstanceOf';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function isNotInstanceOf<T, U extends Function[]>(
    value: T,
    ...funcs: U
): value is NotInstanceOf<T, U> {
    return !isInstanceOf(value, ...funcs);
}

export { isNotInstanceOf };
