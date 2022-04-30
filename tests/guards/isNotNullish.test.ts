import { isNotNullish } from '../../src/guards/isNotNullish';

test('Given a non-nullish input, returns true', () => {
    expect(isNotNullish('foo')).toBe(true);
});

test('Given a nullish input, returns false', () => {
    expect(isNotNullish(null)).toBe(false);
    expect(isNotNullish(undefined)).toBe(false);
});
