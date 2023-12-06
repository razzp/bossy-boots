/**
 * @jest-environment jsdom
 */

import { assertIsInstanceOf } from '../../../src/assertions/instance/assertIsInstanceOf';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given instance(s) that match the input, does not throw', () => {
    const date = new Date();
    const element = document.createElement('div');

    expect(() => assertIsInstanceOf(date, Date)).not.toThrowError();
    expect(() => assertIsInstanceOf(date, Date, Element)).not.toThrowError();
    expect(() => assertIsInstanceOf(element, Element)).not.toThrowError();
    expect(() => assertIsInstanceOf(element, Element, Date)).not.toThrowError();
});

test('Given instance(s) that do not match the input, throws', () => {
    expect(() => assertIsInstanceOf(null, Date)).toThrowError(AssertionError);
    expect(() => assertIsInstanceOf(null, Element)).toThrowError(
        AssertionError
    );
    expect(() => assertIsInstanceOf(null, Element, Date)).toThrowError(
        AssertionError
    );
});
