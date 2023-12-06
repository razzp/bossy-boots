/**
 * @jest-environment jsdom
 */

import { isNotElement } from '../../../src/guards/instance/isNotElement';

test('Given an Element, returns false', () => {
    expect(isNotElement(document.createElement('div'))).toBe(false);
});

test('Given an input that is not an Element, returns true', () => {
    expect(isNotElement(null)).toBe(true);
});
