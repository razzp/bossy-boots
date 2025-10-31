import { AssertionError } from '../../../src/AssertionError';
import { assertIsNotBigInt } from '../../../src/assertions/type/assertIsNotBigInt';

test('Given a non-bigint input, does not throw', () => {
    expect(() => assertIsNotBigInt('foo')).not.toThrow();
});

test('Given a bigint input, throws', () => {
    expect(() => assertIsNotBigInt(BigInt(1))).toThrow(AssertionError);
});
