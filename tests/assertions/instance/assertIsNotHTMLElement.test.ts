/**
 * @jest-environment jsdom
 */

import { assertIsNotHTMLElement } from '../../../src/assertions/instance/assertIsNotHTMLElement';
import { AssertionError } from '../../../src/internal/AssertionError';

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
