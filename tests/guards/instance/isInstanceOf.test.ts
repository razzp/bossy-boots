/**
 * @jest-environment jsdom
 */

import { isInstanceOf } from '../../../src/guards/instance/isInstanceOf';

test('Given instance(s) that match the input, returns true', () => {
    const element = document.createElement('div');
    const date = new Date();

    expect(isInstanceOf(date, Date)).toBe(true);
    expect(isInstanceOf(date, Date, Element)).toBe(true);
    expect(isInstanceOf(element, Element)).toBe(true);
    expect(isInstanceOf(element, Element, Date)).toBe(true);
});

test('Given instance(s) that do not match the input, returns false', () => {
    expect(isInstanceOf(null, Element)).toBe(false);
    expect(isInstanceOf(null, Date)).toBe(false);
    expect(isInstanceOf(null, Element, Date)).toBe(false);
});
