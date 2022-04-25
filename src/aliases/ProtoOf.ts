type ProtoOf<T> = T extends {
    prototype: infer P;
}
    ? P
    : never;

export { ProtoOf };
