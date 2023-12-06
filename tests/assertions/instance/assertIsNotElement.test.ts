/**
 * @jest-environment jsdom
 */

import { assertIsNotElement } from '../../../src/assertions/instance/assertIsNotElement';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given an Element, throws', () => {
    expect(() =>
        assertIsNotElement(document.createElement('div'))
    ).toThrowError(AssertionError);
});

test('Given an input that is not an Element, does not throw', () => {
    expect(() => assertIsNotElement(null)).not.toThrowError();
});
