import { JSDOM } from 'jsdom';

import { isHTMLElement } from '../../../src/guards/instance/isHTMLElement';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.HTMLElement = window.HTMLElement;
});

test('Given an HTMLElement, returns true', () => {
    expect(isHTMLElement(document.createElement('div'))).toBe(true);
});

test('Given an input that is not an HTMLElement, returns false', () => {
    expect(
        isHTMLElement(
            document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        )
    ).toBe(false);

    expect(isHTMLElement(null)).toBe(false);
});