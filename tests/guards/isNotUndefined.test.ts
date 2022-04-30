import { isNotUndefined } from '../../src/guards/isNotUndefined';

test('Given a non-undefined input, returns true', () => {
    expect(isNotUndefined('foo')).toBe(true);
    expect(isNotUndefined(null)).toBe(true);
});

test('Given an undefined input, returns false', () => {
    expect(isNotUndefined(undefined)).toBe(false);
});
