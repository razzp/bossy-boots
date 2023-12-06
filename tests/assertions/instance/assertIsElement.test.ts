/**
 * @jest-environment jsdom
 */

import { assertIsElement } from '../../../src/assertions/instance/assertIsElement';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given an Element, does not throw', () => {
    expect(() =>
        assertIsElement(document.createElement('div'))
    ).not.toThrowError();
});

test('Given an input that is not an Element, throws', () => {
    expect(() => assertIsElement(null)).toThrowError(AssertionError);
});
