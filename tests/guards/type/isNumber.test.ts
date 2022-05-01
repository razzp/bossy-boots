import { isNumber } from '../../../src/guards/type/isNumber';

test('Given a non-number input, returns false', () => {
    expect(isNumber('foo')).toBe(false);
});

test('Given a number input, returns true', () => {
    expect(isNumber(1)).toBe(true);
});
