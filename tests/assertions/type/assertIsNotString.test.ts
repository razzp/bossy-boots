import { assertIsNotString } from '../../../src/assertions/type/assertIsNotString';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-string input, does not throw', () => {
    expect(() => assertIsNotString(1)).not.toThrowError();
});

test('Given a string input, throws', () => {
    expect(() => assertIsNotString('foo')).toThrowError(AssertionError);
});
