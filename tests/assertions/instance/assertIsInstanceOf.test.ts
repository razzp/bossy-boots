/**
 * @jest-environment jsdom
 */

import { AssertionError } from '../../../src/AssertionError';
import { assertIsInstanceOf } from '../../../src/assertions/instance/assertIsInstanceOf';

test('Given instance(s) that match the input, does not throw', () => {
    const date = new Date();
    const element = document.createElement('div');

    expect(() => assertIsInstanceOf(date, Date)).not.toThrow();
    expect(() => assertIsInstanceOf(date, Date, Element)).not.toThrow();
    expect(() => assertIsInstanceOf(element, Element)).not.toThrow();
    expect(() => assertIsInstanceOf(element, Element, Date)).not.toThrow();
});

test('Given instance(s) that do not match the input, throws', () => {
    expect(() => assertIsInstanceOf(null, Date)).toThrow(AssertionError);
    expect(() => assertIsInstanceOf(null, Element)).toThrow(AssertionError);
    expect(() => assertIsInstanceOf(null, Element, Date)).toThrow(
        AssertionError,
    );
});
