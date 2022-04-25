import { isDefined } from './isDefined';

import type { NotDefined } from '../aliases/NotDefined';

function isNotDefined<T>(value: T): value is NotDefined<T> {
    return !isDefined(value);
}

export { isNotDefined };
