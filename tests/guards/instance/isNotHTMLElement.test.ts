/**
 * @jest-environment jsdom
 */

import { isNotHTMLElement } from '../../../src/guards/instance/isNotHTMLElement';

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
