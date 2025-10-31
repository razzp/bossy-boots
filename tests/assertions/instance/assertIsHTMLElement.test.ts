/**
 * @jest-environment jsdom
 */

import { AssertionError } from '../../../src/AssertionError';
import { assertIsHTMLElement } from '../../../src/assertions/instance/assertIsHTMLElement';

test('Given an HTMLElement, does not throw', () => {
    expect(() =>
        assertIsHTMLElement(document.createElement('div')),
    ).not.toThrow();
});

test('Given an input that is not an HTMLElement, throws', () => {
    expect(() =>
        assertIsHTMLElement(
            document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        ),
    ).toThrow(AssertionError);

    expect(() => assertIsHTMLElement(null)).toThrow(AssertionError);
});
