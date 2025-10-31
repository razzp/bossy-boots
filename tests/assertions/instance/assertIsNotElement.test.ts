/**
 * @jest-environment jsdom
 */

import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotElement } from '../../../src/assertions/instance/assertIsNotElement';

test('Given an Element, throws', () => {
    expect(() => assertIsNotElement(document.createElement('div'))).toThrow(
        AssertionError,
    );
});

test('Given an input that is not an Element, does not throw', () => {
    expect(() => assertIsNotElement(null)).not.toThrow();
});
