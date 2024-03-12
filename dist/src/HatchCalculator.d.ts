export const HatchStyle: Readonly<{
    ODD_PARITY: 0;
    OUTERMOST: 1;
    THROUGH_ENTIRE_AREA: 2;
}>;
export class HatchCalculator {
    /**
     * Arrays of `Path` to use as boundary, and each `Path` is array of `Point`.
     *
     * @param {Vector2[][]} boundaryLoops
     * @param {HatchStyle} style
     */
    constructor(boundaryLoops: Vector2[][], style: Readonly<{
        ODD_PARITY: 0;
        OUTERMOST: 1;
        THROUGH_ENTIRE_AREA: 2;
    }>);
    boundaryLoops: Vector2[][];
    style: Readonly<{
        ODD_PARITY: 0;
        OUTERMOST: 1;
        THROUGH_ENTIRE_AREA: 2;
    }>;
    /**
     * Clip `line` using strategy defined by `this.style`
     *
     * @param {[Vector2, Vector2]} line Line segment defined by start and end points. Assuming start
     *  and end points lie out of the boundary loops specified in the constructor.
     * @returns {[Vector2, Vector2][]} clipped line segments
     */
    ClipLine(line: [Vector2, Vector2]): [Vector2, Vector2][];
    /**
     * @param {Vector2} seedPoint Pattern seed point coordinates in OCS.
     * @param {?number} angle Pattern rotation angle in radians.
     * @param {?number} scale Pattern scale.
     * @return {Matrix3} Transformation from OCS to pattern space.
     */
    GetPatternTransform({ seedPoint, angle, scale }: Vector2): Matrix3;
    /**
     * @param {Matrix3} patTransform Transformation from OCS to pattern space previously obtained by
     *      GetPatternTransform() method.
     * @param {?Vector2} basePoint Line base point coordinate in pattern space.
     * @param {?number} angle Line direction angle in radians, CCW from +X direction.
     * @return {Matrix3} Transformation from OCS to pattern line space. Line is started at origin
     *  and directed into position X axis direction.
     */
    GetLineTransform({ patTransform, basePoint, angle }: Matrix3): Matrix3;
    /**
     * @param {Matrix3} transform Transformation from OCS to target coordinates space.
     * @return {Box2} Pattern AABB in target coordinate space.
     */
    GetBoundingBox(transform: Matrix3): Box2;
}
import { Vector2 } from "three";
import { Matrix3 } from "three";
import { Box2 } from "three";
