import { assertIsNotNumber } from '../../../src/assertions/type/assertIsNotNumber';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-number input, does not throw', () => {
    expect(() => assertIsNotNumber('foo')).not.toThrow();
});

test('Given a number input, throws', () => {
    expect(() => assertIsNotNumber(1)).toThrow(AssertionError);
});
