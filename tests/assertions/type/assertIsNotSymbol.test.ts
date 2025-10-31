import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotSymbol } from '../../../src/assertions/type/assertIsNotSymbol';

test('Given a non-symbol input, does not throw', () => {
    expect(() => assertIsNotSymbol('foo')).not.toThrow();
});

test('Given a symbol input, throws', () => {
    expect(() => assertIsNotSymbol(Symbol())).toThrow(AssertionError);
});
