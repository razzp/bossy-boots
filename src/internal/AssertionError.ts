class AssertionError extends Error {
    constructor(message?: string) {
        super(message);

        this.name = 'AssertionError';
    }
}

export { AssertionError };
