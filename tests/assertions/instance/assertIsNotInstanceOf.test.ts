/**
 * @jest-environment jsdom
 */

import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotInstanceOf } from '../../../src/assertions/instance/assertIsNotInstanceOf';

test('Given instance(s) that match the input, throws', () => {
    const date = new Date();
    const element = document.createElement('div');

    expect(() => assertIsNotInstanceOf(date, Date)).toThrow(AssertionError);
    expect(() => assertIsNotInstanceOf(date, Date, Element)).toThrow(
        AssertionError,
    );
    expect(() => assertIsNotInstanceOf(element, Element)).toThrow(
        AssertionError,
    );
    expect(() => assertIsNotInstanceOf(element, Element, Date)).toThrow(
        AssertionError,
    );
});

test('Given instance(s) that do not match the input, does not throw', () => {
    expect(() => assertIsNotInstanceOf(null, Date)).not.toThrow();
    expect(() => assertIsNotInstanceOf(null, Element)).not.toThrow();
    expect(() => assertIsNotInstanceOf(null, Element, Date)).not.toThrow();
});
