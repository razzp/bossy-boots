type PrimitiveMap = {
    boolean: boolean;
    bigint: bigint;
    null: null;
    number: number;
    string: string;
    symbol: symbol;
    undefined: undefined;
};

type Primitive = keyof PrimitiveMap;

export { Primitive, PrimitiveMap };
