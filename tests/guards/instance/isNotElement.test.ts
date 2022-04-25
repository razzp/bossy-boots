import { JSDOM } from 'jsdom';

import { isNotElement } from '../../../src/guards/instance/isNotElement';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
});

test('Given an Element, returns false', () => {
    expect(isNotElement(document.createElement('div'))).toBe(false);
});

test('Given an input that is not an Element, returns true', () => {
    expect(isNotElement(null)).toBe(true);
});
