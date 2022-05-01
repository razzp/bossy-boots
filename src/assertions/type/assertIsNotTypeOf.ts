import { isTypeOf } from '../../guards/type/isTypeOf';
import { AssertionError } from '../../internal/AssertionError';

import type { PrimitivesMap } from '../../interfaces/PrimitivesMap';
import type { NotTypeOf } from '../../aliases/NotTypeOf';

function assertIsNotTypeOf<TValue, TTypes extends (keyof PrimitivesMap)[]>(
    value: TValue,
    ...types: TTypes
): asserts value is NotTypeOf<TValue, TTypes> {
    if (isTypeOf(value, ...types)) {
        throw new AssertionError(
            `Value should not be of type ${typeof value}.`
        );
    }
}

export { assertIsNotTypeOf };
