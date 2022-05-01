import { isNotNumber } from '../../../src/guards/type/isNotNumber';

test('Given a non-number input, returns true', () => {
    expect(isNotNumber('foo')).toBe(true);
});

test('Given a number input, returns false', () => {
    expect(isNotNumber(1)).toBe(false);
});
