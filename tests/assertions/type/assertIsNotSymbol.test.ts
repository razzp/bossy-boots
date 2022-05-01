import { assertIsNotSymbol } from '../../../src/assertions/type/assertIsNotSymbol';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-symbol input, does not throw', () => {
    expect(() => assertIsNotSymbol('foo')).not.toThrowError();
});

test('Given a symbol input, throws', () => {
    expect(() => assertIsNotSymbol(Symbol())).toThrowError(AssertionError);
});
