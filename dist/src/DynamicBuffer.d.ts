/** Get TypedArray type corresponding to the specified NativeType. */
export function NativeArray(type: any): Float32ArrayConstructor | Uint16ArrayConstructor | Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float64ArrayConstructor;
/** Typed-array-based buffer which can be dynamically extended. */
export class DynamicBuffer {
    /**
     * @param type Array type, see NativeType.
     * @param initialCapacity Initial capacity, number of elements.
     */
    constructor(type: any, initialCapacity?: number);
    type: any;
    capacity: number;
    size: number;
    buffer: Uint8Array | Int8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
    GetSize(): number;
    /**
     * Append new value to the buffer end.
     * @return Appended value position in the buffer.
     */
    Push(value: any): number;
    Get(index: any): number;
    /** Copy content to the specified buffer.
     * @param dstBuffer Destination buffer, should be typed array of the same type.
     * @param dstOffset {number} Offset in elements in the destination buffer.
     * @param srcOffset {number} Offset in elements in this buffer.
     * @param size {number} Number of elements to copy, -1 (default) to copy till this buffer end.
     */
    CopyTo(dstBuffer: any, dstOffset: number, srcOffset?: number, size?: number): void;
    _CheckGrow(): void;
}
export namespace NativeType {
    let INT8: number;
    let UINT8: number;
    let UINT8_CLAMPED: number;
    let INT16: number;
    let UINT16: number;
    let INT32: number;
    let UINT32: number;
    let INT64: number;
    let UINT64: number;
    let FLOAT32: number;
    let FLOAT64: number;
}
