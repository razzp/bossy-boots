/**
 * @jest-environment jsdom
 */

import { isNotInstanceOf } from '../../../src/guards/instance/isNotInstanceOf';

test('Given instance(s) that match the input, returns false', () => {
    const element = document.createElement('div');
    const date = new Date();

    expect(isNotInstanceOf(date, Date)).toBe(false);
    expect(isNotInstanceOf(date, Date, Element)).toBe(false);
    expect(isNotInstanceOf(element, Element)).toBe(false);
    expect(isNotInstanceOf(element, Element, Date)).toBe(false);
});

test('Given instance(s) that do not match the input, returns true', () => {
    expect(isNotInstanceOf(null, Element)).toBe(true);
    expect(isNotInstanceOf(null, Date)).toBe(true);
    expect(isNotInstanceOf(null, Element, Date)).toBe(true);
});
