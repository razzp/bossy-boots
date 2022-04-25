import { isNotTypeOf } from '../../../src/guards/type/isNotTypeOf';

test('Given type(s) that match the input, returns false', () => {
    const bool = true;
    const string = 'foo';

    expect(isNotTypeOf(bool, 'boolean')).toBe(false);
    expect(isNotTypeOf(bool, 'boolean', 'string')).toBe(false);
    expect(isNotTypeOf(string, 'string')).toBe(false);
    expect(isNotTypeOf(string, 'string', 'boolean')).toBe(false);
});

test('Given type(s) that do not match the input, returns true', () => {
    expect(isNotTypeOf(null, 'boolean')).toBe(true);
    expect(isNotTypeOf(null, 'string')).toBe(true);
    expect(isNotTypeOf(null, 'string', 'boolean')).toBe(true);
});
