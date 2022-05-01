import { assertIsBigInt } from '../../../src/assertions/type/assertIsBigInt';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-bigint input, throws', () => {
    expect(() => assertIsBigInt('foo')).toThrowError(AssertionError);
});

test('Given a bigint input, does not throw', () => {
    expect(() => assertIsBigInt(BigInt(1))).not.toThrowError();
});
