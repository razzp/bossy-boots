import { assertIsNotBigInt } from '../../../src/assertions/type/assertIsNotBigInt';
import { AssertionError } from '../../../src/internal/AssertionError';

test('Given a non-bigint input, does not throw', () => {
    expect(() => assertIsNotBigInt('foo')).not.toThrowError();
});

test('Given a bigint input, throws', () => {
    expect(() => assertIsNotBigInt(BigInt(1))).toThrowError(AssertionError);
});
