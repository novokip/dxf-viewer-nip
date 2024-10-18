/**
 * Parse special characters in text entities and convert them to corresponding unicode
 * characters.
 * https://knowledge.autodesk.com/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ENU/AutoCAD-Core/files/GUID-518E1A9D-398C-4A8A-AC32-2D85590CDBE1-htm.html
 * @param {string} text Raw string.
 * @return {string} String with special characters replaced.
 */
export function ParseSpecialChars(text: string): string;
/**
 * Helper class for rendering text.
 * Currently it is just basic very simplified implementation for MVP. Further work should include:
 *  * Support DXF text styles and weight.
 *  * Bitmap fonts generation in texture atlas for more optimal rendering.
 */
export class TextRenderer {
    /**
     * @param fontFetchers {?Function[]} List of font fetchers. Fetcher should return promise with
     *  loaded font object (opentype.js). They are invoked only when necessary. Each glyph is being
     *  searched sequentially in each provided font.
     * @param options {?{}} See TextRenderer.DefaultOptions.
     */
    constructor(fontFetchers: Function[] | null, options?: {} | null);
    fontFetchers: Function[] | null;
    fonts: any[];
    options: any;
    shapes: Map<any, any>;
    stubShapeLoaded: boolean;
    stubShape: any;
    /** Fetch necessary fonts to render the provided text. Should be called for each string which
     * will be rendered later.
     * @param text {string}
     * @return {Boolean} True if all characters can be rendered, false if none of the provided fonts
     *  contains glyphs for some of the specified text characters.
     */
    FetchFonts(text: string): boolean;
    get canRender(): boolean;
    /** Get width in model space units for a single line of text.
     * @param text {string}
     * @param fontSize {number}
     */
    GetLineWidth(text: string, fontSize: number): number;
    /**
     * @param text {string}
     * @param startPos {{x,y}}
     * @param endPos {?{x,y}} TEXT group second alignment point.
     * @param rotation {?number} Rotation attribute, deg.
     * @param widthFactor {?number} Relative X scale factor (group 41)
     * @param hAlign {?number} Horizontal text justification type code (group 72)
     * @param vAlign {?number} Vertical text justification type code (group 73).
     * @param color {number}
     * @param layer {?string}
     * @param fontSize {number}
     * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
     *  glyph.
     */
    Render({ text, startPos, endPos, rotation, widthFactor, hAlign, vAlign, color, layer, fontSize }: string): Generator<Entity>;
    /**
     * @param {MTextFormatEntity[]} formattedText Parsed formatted text.
     * @param {{x, y}} position Insertion position.
     * @param {Number} fontSize
     * @param {?Number} width Text block width, no wrapping if undefined.
     * @param {?Number} rotation Text block rotation in degrees.
     * @param {?{x, y}} direction Text block orientation defined as direction vector. Takes a
     * precedence over rotation if both provided.
     * @param {number} attachment Attachment point, one of MTextAttachment values.
     * @param {?number} lineSpacing Line spacing ratio relative to default one (5/3 of font size).
     * @param {number} color
     * @param {?string} layer
     * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
     *  glyph.
     */
    RenderMText({ formattedText, position, fontSize, width, rotation, direction, attachment, lineSpacing, color, layer }: MTextFormatEntity[]): Generator<Entity>;
    /** @return {CharShape} Shape for the specified character.
     * Each shape is indexed triangles mesh for font size 1. They should be further transformed as
     * needed.
     */
    _GetCharShape(char: any): CharShape;
    _CreateCharShape(char: any): any;
    _FetchFont(fontFetcher: any): Promise<Font>;
}
export namespace TextRenderer {
    namespace DefaultOptions {
        let curveSubdivision: number;
        let fallbackChar: string;
    }
}
/** TEXT group attribute 72 values. */
export const HAlign: Readonly<{
    LEFT: 0;
    CENTER: 1;
    RIGHT: 2;
    ALIGNED: 3;
    MIDDLE: 4;
    FIT: 5;
}>;
/** TEXT group attribute 73 values. */
export const VAlign: Readonly<{
    BASELINE: 0;
    BOTTOM: 1;
    MIDDLE: 2;
    TOP: 3;
}>;
export type CharPath = {
    advance: number;
    path: ShapePath | null;
    /**
     * : number, xMax: number, yMin: number, yMax: number}
     */
    bounds: xMin;
};
import { Entity } from "./DxfScene";
/** @typedef {Object} CharPath
 * @property advance {number}
 * @property path {?ShapePath}
 * @property bounds {xMin: number, xMax: number, yMin: number, yMax: number}
 */
declare class CharShape {
    /**
     * @param font {Font}
     * @param glyph {CharPath}
     * @param options {{}} Renderer options.
     */
    constructor(font: Font, glyph: CharPath, options: {});
    font: Font;
    advance: number;
    bounds: xMin;
    vertices: any[] | null;
    indices: number[] | undefined;
    /** Get vertices array transformed to the specified position and with the specified size.
     * @param position {{x,y}}
     * @param size {number}
     * @return {Vector2[]}
     */
    GetVertices(position: {
        x;
        y;
    }, size: number): Vector2[];
}
declare class Font {
    constructor(data: any);
    data: any;
    charMap: Map<any, any>;
    scale: number;
    /**
     * @param char {string} Character code point as string.
     * @return {Boolean} True if the font has glyphs for the specified character.
     */
    HasChar(char: string): boolean;
    /**
     * @param char {string} Character code point as string.
     * @return {?CharPath} Path is scaled to size 1. Null if no glyphs for the specified characters.
     */
    GetCharPath(char: string): CharPath | null;
    /**
     * @param c1 {string}
     * @param c2 {string}
     * @return {number}
     */
    GetKerning(c1: string, c2: string): number;
}
import { ShapePath } from "three/src/extras/core/ShapePath.js";
import { Vector2 } from "three";
export {};
