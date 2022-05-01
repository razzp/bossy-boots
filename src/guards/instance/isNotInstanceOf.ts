import { isInstanceOf } from './isInstanceOf';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function isNotInstanceOf<TValue, TInstances extends Function[]>(
    value: TValue,
    ...instances: TInstances
): value is NotInstanceOf<TValue, TInstances> {
    return !isInstanceOf(value, ...instances);
}

export { isNotInstanceOf };
