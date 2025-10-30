import { assertIsBigInt } from '../../../src/assertions/type/assertIsBigInt';
import { AssertionError } from '../../../src/AssertionError';

test('Given a non-bigint input, throws', () => {
    expect(() => assertIsBigInt('foo')).toThrow(AssertionError);
});

test('Given a bigint input, does not throw', () => {
    expect(() => assertIsBigInt(BigInt(1))).not.toThrow();
});
