type InstanceOf<T> = T extends Array<infer X>
    ? InstanceOf<X>
    : T extends { prototype: infer X }
    ? X
    : never;

export { InstanceOf };
