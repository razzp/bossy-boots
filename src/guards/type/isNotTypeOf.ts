import { isTypeOf } from './isTypeOf';

import type { NotTypeOf } from '../../aliases/NotTypeOf';
import type { PrimitivesMap } from '../../interfaces/PrimitivesMap';

function isNotTypeOf<TValue, TTypes extends (keyof PrimitivesMap)[]>(
    value: TValue,
    ...types: TTypes
): value is NotTypeOf<TValue, TTypes> {
    return !isTypeOf(value, ...types);
}

export { isNotTypeOf };
