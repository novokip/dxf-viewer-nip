export class MaterialKey {
    /**
     * @param instanceType {Number} One of InstanceType values.
     * @param geometryType {?number} One of BatchingKey.GeometryType.
     * @param color {number} Color ARGB value.
     * @param lineType {?number} Line type ID, null for non-lines. Zero is default type (solid
     *  line).
     */
    constructor(instanceType: number, geometryType: number | null, color: number, lineType: number | null);
    instanceType: number;
    geometryType: number | null;
    color: number;
    lineType: number | null;
    /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
     * Null values are always first.
     */
    Compare(other: any): number;
}
