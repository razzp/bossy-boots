import { isNotSymbol } from '../../../src/guards/type/isNotSymbol';

test('Given a non-symbol input, returns true', () => {
    expect(isNotSymbol('foo')).toBe(true);
});

test('Given a symbol input, returns false', () => {
    expect(isNotSymbol(Symbol())).toBe(false);
});
