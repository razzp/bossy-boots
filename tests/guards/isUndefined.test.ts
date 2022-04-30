import { isUndefined } from '../../src/guards/type/isUndefined';

test('Given a non-undefined input, returns false', () => {
    expect(isUndefined('foo')).toBe(false);
    expect(isUndefined(null)).toBe(false);
});

test('Given an undefined input, returns true', () => {
    expect(isUndefined(undefined)).toBe(true);
});
