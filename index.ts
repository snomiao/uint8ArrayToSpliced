import { concatUint8Arrays } from "uint8array-extras";

export function uint8ArrayToSpliced(
  target: Uint8Array,
  offset: number,
  deleteLength: number,
  replaceValue: Uint8Array
): Uint8Array {
  const deleted = target.slice(offset, offset + deleteLength);

  return concatUint8Arrays([
    target.slice(0, offset),
    // target.slice(offset, offset+deleteLength), // deleted
    replaceValue, // replaced content
    target.slice(offset + deleteLength, Infinity), // slice from after
  ]);
}
