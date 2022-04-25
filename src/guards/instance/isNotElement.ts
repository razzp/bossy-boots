import { isElement } from './isElement';

function isNotElement<T>(value: T): value is Exclude<T, Element> {
    return !isElement(value);
}

export { isNotElement };
