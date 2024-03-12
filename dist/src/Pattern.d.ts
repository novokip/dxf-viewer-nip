/** @param {Pattern} pattern */
export function RegisterPattern(pattern: Pattern, isMetric?: boolean): void;
/** @return {?Pattern} */
export function LookupPattern(name: any, isMetric?: boolean): Pattern | null;
/**
 * @typedef PatternLineDef
 * @property {number} angle Line angle in radians.
 * @property {?Vector2} base Base point for scaling, rotation and anchoring. [0,0] if not specified.
 * @property {Vector2} offset Offset for line instantiation.
 * @property {?number[]} dashes Dash lengths. Solid line if not specified. Negative numbers for
 *  spaces, positive for dashes, zero for dots.
 */
export class Pattern {
    static ParsePatFile(content: any): Pattern;
    /**
     * @param {PatternLineDef[]} lines
     * @param {boolean} offsetInLineSpace Line offset is defined in line space when true, in pattern
     *  space when false. Pattern space offset is the observed behavior of AutoDesk viewer for
     *  patterns defined in hatch entity itself.
     */
    constructor(lines: PatternLineDef[], name?: null, offsetInLineSpace?: boolean);
    lines: PatternLineDef[];
    name: any;
    offsetInLineSpace: boolean;
}
export type PatternLineDef = {
    /**
     * Line angle in radians.
     */
    angle: number;
    /**
     * Base point for scaling, rotation and anchoring. [0,0] if not specified.
     */
    base: Vector2 | null;
    /**
     * Offset for line instantiation.
     */
    offset: Vector2;
    /**
     * Dash lengths. Solid line if not specified. Negative numbers for
     * spaces, positive for dashes, zero for dots.
     */
    dashes: number[] | null;
};
import { Vector2 } from "three";
