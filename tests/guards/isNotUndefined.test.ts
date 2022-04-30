import { isNotUndefined } from '../../src/guards/isNotUndefined';

test('Given a defined input, returns true', () => {
    expect(isNotUndefined('foo')).toBe(true);
});

test('Given an undefined input, returns false', () => {
    expect(isNotUndefined(undefined)).toBe(false);
});
