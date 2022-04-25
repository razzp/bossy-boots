/**
 * Convert an array of strings into a nicely formatted list.
 * @private
 */
function toReadableList(values: string[]): string {
    return values.join(', ').replace(/,(?!.*,)/, ' or');
}

export { toReadableList };
