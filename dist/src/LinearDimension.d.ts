/**
 * @property {{color: ?number, start: Vector2, end: Vector2}[]} lines
 * @property {{color: ?number, vertices: Vector2[]}[], indices: number[]} triangles On or more
 *  triangles in each item.
 * @property {{text: string, size: number, angle: number, color: number, position: Vector2}[]} texts
 *   Each item position is specified as middle point of the rendered text.
 */
export class DimensionLayout {
    lines: any[];
    triangles: any[];
    texts: any[];
    AddLine(start: any, end: any, color?: null): void;
    /** Add one or more triangles. */
    AddTriangles(vertices: any, indices: any, color?: null): void;
    AddText(text: any, size: any, angle: any, color: any, position: any): void;
}
/** Encapsulates all calculations about linear dimensions layout. */
export class LinearDimension {
    /**
     * @typedef LinearDimensionParams
     * @property {Vector2} p1 First definition point.
     * @property {Vector2} p2 Second definition point.
     * @property {Vector2} anchor Anchor point defines dimension line location.
     * @property {?number} angle Rotation angle for rotated dimension, deg.
     * @property {boolean} isAligned Dimension line is parallel to base line for aligned dimension.
     * @property {?string} text Dimension text pattern.
     * @property {?Vector2} textAnchor Text location (middle point) override.
     * @property {?number} textRotation Rotation angle of the dimension text away from its default
     *  orientation (the direction of the dimension line)
     */
    /**
     * @param {LinearDimensionParams} params
     * @param {Function<any(string)>} styleResolver Provides value for a requested style parameter.
     * @param {Function<number(string, number)>} textWidthCalculator Get text width in model space
     *  units for a given text and font size (height).
     */
    constructor(params: {
        /**
         * First definition point.
         */
        p1: Vector2;
        /**
         * Second definition point.
         */
        p2: Vector2;
        /**
         * Anchor point defines dimension line location.
         */
        anchor: Vector2;
        /**
         * Rotation angle for rotated dimension, deg.
         */
        angle: number | null;
        /**
         * Dimension line is parallel to base line for aligned dimension.
         */
        isAligned: boolean;
        /**
         * Dimension text pattern.
         */
        text: string | null;
        /**
         * Text location (middle point) override.
         */
        textAnchor: Vector2 | null;
        /**
         * Rotation angle of the dimension text away from its default
         * orientation (the direction of the dimension line)
         */
        textRotation: number | null;
    }, styleResolver: any, textWidthCalculator: any);
    params: {
        /**
         * First definition point.
         */
        p1: Vector2;
        /**
         * Second definition point.
         */
        p2: Vector2;
        /**
         * Anchor point defines dimension line location.
         */
        anchor: Vector2;
        /**
         * Rotation angle for rotated dimension, deg.
         */
        angle: number | null;
        /**
         * Dimension line is parallel to base line for aligned dimension.
         */
        isAligned: boolean;
        /**
         * Dimension text pattern.
         */
        text: string | null;
        /**
         * Text location (middle point) override.
         */
        textAnchor: Vector2 | null;
        /**
         * Rotation angle of the dimension text away from its default
         * orientation (the direction of the dimension line)
         */
        textRotation: number | null;
    };
    styleResolver: any;
    textWidthCalculator: any;
    isValid: boolean;
    IsValid(): boolean;
    GetTexts(): string[];
    /**
     * @return {DimensionLayout}
     */
    GenerateLayout(): DimensionLayout;
    _CreateArrowShape(layout: any, transform: any, color: any): void;
    _CreateTick(layout: any, transform: any, color: any): void;
    /** Calculate and set basic geometric parameters (some points and vectors which define the
     * dimension layout).
     */
    _CalculateGeometry(): void;
    vBase: Vector2 | undefined;
    vDim: Vector2 | undefined;
    d1: Vector2 | undefined;
    d2: Vector2 | undefined;
    vDimNorm: Vector2 | undefined;
    _GetText(): string;
}
import { Vector2 } from "three";
