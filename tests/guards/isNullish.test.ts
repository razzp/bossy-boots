import { isNullish } from '../../src/guards/type/isNullish';

test('Given a non-nullish input, returns false', () => {
    expect(isNullish('foo')).toBe(false);
});

test('Given a nullish input, returns true', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
});
