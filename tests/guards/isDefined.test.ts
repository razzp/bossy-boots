import { isDefined } from '../../src/guards/isDefined';

test('Given a defined input, returns true', () => {
    expect(isDefined('foo')).toBe(true);
});

test('Given an undefined input, returns false', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
});
