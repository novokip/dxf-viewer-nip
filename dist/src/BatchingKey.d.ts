/** Comparator function for arbitrary types. Null is always first. This is used just to make some
 * ordering for keys in tree structures, so no locale-aware string comparison.
 */
export function CompareValues(v1: any, v2: any): 0 | 1 | -1;
/** Key for render batches. */
export class BatchingKey {
    /**
     * Components order matters for lookup by prefix.
     * @param layerName {?String} Layer name, null if not bound to a layer (e.g. block definition).
     * @param blockName {?String} Block name if applicable. If specified and geometryType is not
     *  BLOCK_INSTANCE, the batch is part of block definition. Otherwise it is block instance.
     * @param geometryType {?number} One of BatchingKey.GeometryType.
     * @param color {number} Color ARGB value.
     * @param lineType {?number} Line type ID, null for non-lines. Zero is default type (solid
     *  line).
     */
    constructor(layerName: string | null, blockName: string | null, geometryType: number | null, color: number, lineType: number | null);
    layerName: string | null;
    blockName: string | null;
    geometryType: number | null;
    color: number;
    lineType: number | null;
    /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
     * Null values are always first.
     */
    Compare(other: any): number;
    IsIndexed(): boolean;
    IsInstanced(): boolean;
}
export namespace BatchingKey {
    let GeometryType: Readonly<{
        POINTS: 0;
        LINES: 1;
        INDEXED_LINES: 2;
        TRIANGLES: 3;
        INDEXED_TRIANGLES: 4;
        BLOCK_INSTANCE: 5;
        /** Shaped point instances. */
        POINT_INSTANCE: 6;
    }>;
}
