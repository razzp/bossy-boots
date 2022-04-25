import { JSDOM } from 'jsdom';

import { isElement } from '../../../src/guards/instance/isElement';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
});

test('Given an Element, returns true', () => {
    expect(isElement(document.createElement('div'))).toBe(true);
});

test('Given an input that is not an Element, returns false', () => {
    expect(isElement(null)).toBe(false);
});
