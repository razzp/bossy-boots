import { assertIsNumber } from '../../../src/assertions/type/assertIsNumber';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-number input, throws', () => {
    expect(() => assertIsNumber('foo')).toThrowError(AssertionError);
});

test('Given a number input, does not throw', () => {
    expect(() => assertIsNumber(1)).not.toThrowError();
});
