/**
 * @jest-environment jsdom
 */

import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotHTMLElement } from '../../../src/assertions/instance/assertIsNotHTMLElement';

test('Given an HTMLElement, throws', () => {
    expect(() => assertIsNotHTMLElement(document.createElement('div'))).toThrow(
        AssertionError,
    );
});

test('Given an input that is not an HTMLElement, does not throw', () => {
    expect(() =>
        assertIsNotHTMLElement(
            document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        ),
    ).not.toThrow();

    expect(() => assertIsNotHTMLElement(null)).not.toThrow();
});
