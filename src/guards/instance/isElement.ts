import { isInstanceOf } from './isInstanceOf';

import type { InstanceOf } from '../../aliases/InstanceOf';

function isElement<TValue>(
    value: TValue
): value is InstanceOf<TValue, typeof Element> {
    return isInstanceOf(value, Element);
}

export { isElement };
