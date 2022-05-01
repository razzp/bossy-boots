import { isTypeOf } from './isTypeOf';

import type { NotTypeOf } from '../../aliases/NotTypeOf';
import type { Primitive } from '../../aliases/Primitive';

function isNotTypeOf<TValue, TTypes extends Primitive[]>(
    value: TValue,
    ...types: TTypes
): value is NotTypeOf<TValue, TTypes> {
    return !isTypeOf(value, ...types);
}

export { isNotTypeOf };
