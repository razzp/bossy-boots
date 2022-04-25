import { isTypeOf } from '../../../src/guards/type/isTypeOf';

test('Given type(s) that match the input, returns true', () => {
    const bool = true;
    const string = 'foo';

    expect(isTypeOf(bool, 'boolean')).toBe(true);
    expect(isTypeOf(bool, 'boolean', 'string')).toBe(true);
    expect(isTypeOf(string, 'string')).toBe(true);
    expect(isTypeOf(string, 'string', 'boolean')).toBe(true);
});

test('Given type(s) that do not match the input, returns false', () => {
    expect(isTypeOf(null, 'boolean')).toBe(false);
    expect(isTypeOf(null, 'string')).toBe(false);
    expect(isTypeOf(null, 'string', 'boolean')).toBe(false);
});
