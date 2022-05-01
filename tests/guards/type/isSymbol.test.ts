import { isSymbol } from '../../../src/guards/type/isSymbol';

test('Given a non-symbol input, returns false', () => {
    expect(isSymbol('foo')).toBe(false);
});

test('Given a symbol input, returns true', () => {
    expect(isSymbol(Symbol())).toBe(true);
});
