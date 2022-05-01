import { isNotBigInt } from '../../../src/guards/type/isNotBigInt';

test('Given a non-bigint input, returns true', () => {
    expect(isNotBigInt('foo')).toBe(true);
});

test('Given a bigint input, returns false', () => {
    expect(isNotBigInt(BigInt(1))).toBe(false);
});
