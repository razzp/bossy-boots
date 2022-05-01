import { assertIsNotNumber } from '../../../src/assertions/type/assertIsNotNumber';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-number input, does not throw', () => {
    expect(() => assertIsNotNumber('foo')).not.toThrowError();
});

test('Given a number input, throws', () => {
    expect(() => assertIsNotNumber(1)).toThrowError(AssertionError);
});
