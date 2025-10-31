/**
 * @jest-environment jsdom
 */

import { isElement } from '../../../src/guards/instance/isElement';

test('Given an Element, returns true', () => {
    expect(isElement(document.createElement('div'))).toBe(true);
});

test('Given an input that is not an Element, returns false', () => {
    expect(isElement(null)).toBe(false);
});
