import { isInstanceOf } from './isInstanceOf';

function isElement(value: unknown): value is Element {
    return isInstanceOf(value, Element);
}

export { isElement };
