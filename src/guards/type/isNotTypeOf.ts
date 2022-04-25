import { isTypeOf } from './isTypeOf';

import type { NotTypeOf } from '../../aliases/NotTypeOf';
import type { TypeMap } from '../../interfaces/TypeMap';

function isNotTypeOf<T, U extends (keyof TypeMap)[]>(
    value: T,
    ...types: U
): value is NotTypeOf<T, U> {
    return !isTypeOf(value, ...types);
}

export { isNotTypeOf };
