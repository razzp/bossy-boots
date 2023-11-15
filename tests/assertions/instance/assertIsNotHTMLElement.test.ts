import { JSDOM } from 'jsdom';

import { assertIsNotHTMLElement } from '../../../src/assertions/instance/assertIsNotHTMLElement';
import { AssertionError } from '../../../src/internal/AssertionError';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.HTMLElement = window.HTMLElement;
});

test('Given an HTMLElement, throws', () => {
    expect(() =>
        assertIsNotHTMLElement(document.createElement('div'))
    ).toThrowError(AssertionError);
});

test('Given an input that is not an HTMLElement, does not throw', () => {
    expect(() =>
        assertIsNotHTMLElement(
            document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        )
    ).not.toThrowError();

    expect(() => assertIsNotHTMLElement(null)).not.toThrowError();
});
