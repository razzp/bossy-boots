/**
 * @jest-environment jsdom
 */

import { assertIsNotElement } from '../../../src/assertions/instance/assertIsNotElement';
import { AssertionError } from '../../../src/AssertionError';

test('Given an Element, throws', () => {
    expect(() => assertIsNotElement(document.createElement('div'))).toThrow(
        AssertionError
    );
});

test('Given an input that is not an Element, does not throw', () => {
    expect(() => assertIsNotElement(null)).not.toThrow();
});
