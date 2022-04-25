import { isNotDefined } from '../../src/guards/isNotDefined';

test('Given a defined input, returns false', () => {
    expect(isNotDefined('foo')).toBe(false);
});

test('Given an undefined input, returns true', () => {
    expect(isNotDefined(null)).toBe(true);
    expect(isNotDefined(undefined)).toBe(true);
});
