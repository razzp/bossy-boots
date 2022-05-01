import { isElement } from './isElement';

import type { NotInstanceOf } from '../../aliases/NotInstanceOf';

function isNotElement<TValue>(
    value: TValue
): value is NotInstanceOf<TValue, typeof Element> {
    return !isElement(value);
}

export { isNotElement };
