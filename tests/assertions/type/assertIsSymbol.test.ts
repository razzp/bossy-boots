import { assertIsSymbol } from '../../../src/assertions/type/assertIsSymbol';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-symbol input, throws', () => {
    expect(() => assertIsSymbol('foo')).toThrowError(AssertionError);
});

test('Given a symbol input, does not throw', () => {
    expect(() => assertIsSymbol(Symbol())).not.toThrowError();
});
