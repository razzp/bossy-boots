import { JSDOM } from 'jsdom';

import { isNotHTMLElement } from '../../../src/guards/instance/isNotHTMLElement';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.HTMLElement = window.HTMLElement;
});

test('Given an HTMLElement, returns false', () => {
    expect(isNotHTMLElement(document.createElement('div'))).toBe(false);
});

test('Given an input that is not an HTMLElement, returns true', () => {
    expect(
        isNotHTMLElement(
            document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        )
    ).toBe(true);

    expect(isNotHTMLElement(null)).toBe(true);
});
