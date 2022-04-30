import { isUndefined } from '../../src/guards/isUndefined';

test('Given a defined input, returns false', () => {
    expect(isUndefined('foo')).toBe(false);
});

test('Given an undefined input, returns true', () => {
    expect(isUndefined(undefined)).toBe(true);
});
