import { JSDOM } from 'jsdom';

import { assertIsNotInstanceOf } from '../../../src/assertions/instance/assertIsNotInstanceOf';
import { AssertionError } from '../../../src/internal/AssertionError';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
    global.Date = window.Date;
});

test('Given instance(s) that match the input, throws', () => {
    const date = new Date();
    const element = document.createElement('div');

    expect(() => assertIsNotInstanceOf(date, Date)).toThrowError(
        AssertionError
    );
    expect(() => assertIsNotInstanceOf(date, Date, Element)).toThrowError(
        AssertionError
    );
    expect(() => assertIsNotInstanceOf(element, Element)).toThrowError(
        AssertionError
    );
    expect(() => assertIsNotInstanceOf(element, Element, Date)).toThrowError(
        AssertionError
    );
});

test('Given instance(s) that do not match the input, does not throw', () => {
    expect(() => assertIsNotInstanceOf(null, Date)).not.toThrowError();
    expect(() => assertIsNotInstanceOf(null, Element)).not.toThrowError();
    expect(() => assertIsNotInstanceOf(null, Element, Date)).not.toThrowError();
});
