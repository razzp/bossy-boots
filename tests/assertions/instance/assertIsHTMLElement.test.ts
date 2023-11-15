import { JSDOM } from 'jsdom';

import { assertIsHTMLElement } from '../../../src/assertions/instance/assertIsHTMLElement';
import { AssertionError } from '../../../src/internal/AssertionError';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.HTMLElement = window.HTMLElement;
});

test('Given an HTMLElement, does not throw', () => {
    expect(() =>
        assertIsHTMLElement(document.createElement('div'))
    ).not.toThrowError();
});

test('Given an input that is not an HTMLElement, throws', () => {
    expect(() =>
        assertIsHTMLElement(
            document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        )
    ).toThrowError(AssertionError);

    expect(() => assertIsHTMLElement(null)).toThrowError(AssertionError);
});