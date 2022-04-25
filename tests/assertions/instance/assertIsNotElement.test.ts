import { JSDOM } from 'jsdom';

import { assertIsNotElement } from '../../../src/assertions/instance/assertIsNotElement';
import { AssertionError } from '../../../src/internal/AssertionError';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
});

test('Given an Element, throws', () => {
    expect(() =>
        assertIsNotElement(document.createElement('div'))
    ).toThrowError(AssertionError);
});

test('Given an input that is not an Element, does not throw', () => {
    expect(() => assertIsNotElement(null)).not.toThrowError();
});
