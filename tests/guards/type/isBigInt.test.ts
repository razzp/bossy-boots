import { isBigInt } from '../../../src/guards/type/isBigInt';

test('Given a non-bigint input, returns false', () => {
    expect(isBigInt('foo')).toBe(false);
});

test('Given a bigint input, returns true', () => {
    expect(isBigInt(BigInt(1))).toBe(true);
});
