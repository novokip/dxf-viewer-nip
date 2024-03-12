/** This class prepares an internal representation of a DXF file, optimized fo WebGL rendering. It
 * is decoupled in such a way so that it should be possible to build it in a web-worker, effectively
 * transfer it to the main thread, and easily apply it to a Three.js scene there.
 */
export class DxfScene {
    constructor(options: any);
    options: any;
    origin: {
        x: any;
        y: any;
    } | null;
    batches: any;
    layers: Map<any, any>;
    blocks: Map<any, any>;
    /** Indexed by dimension style name, value is DIMSTYLE object from parsed DXF. */
    dimStyles: Map<any, any>;
    /** Indexed by variable name (without leading '$'). */
    vars: Map<any, any>;
    fontStyles: Map<any, any>;
    inserts: Map<any, any>;
    bounds: {
        minX: any;
        maxX: any;
        minY: any;
        maxY: any;
    } | null;
    pointShapeBlock: Block | null;
    numBlocksFlattened: number;
    numEntitiesFiltered: number;
    /** Build the scene from the provided parsed DXF.
     * @param dxf {{}} Parsed DXF file.
     * @param fontFetchers {?Function[]} List of font fetchers. Fetcher should return promise with
     *  loaded font object (opentype.js). They are invoked only when necessary. Each glyph is being
     *  searched sequentially in each provided font.
     */
    Build(dxf: {}, fontFetchers: Function[] | null): Promise<void>;
    angBase: any;
    angDir: any;
    pdSize: any;
    isMetric: boolean | undefined;
    textRenderer: TextRenderer | undefined;
    hasMissingChars: boolean | undefined;
    scene: {
        vertices: ArrayBuffer;
        indices: ArrayBuffer;
        transforms: ArrayBuffer;
        batches: never[];
        layers: never[];
        origin: {
            x: any;
            y: any;
        } | null;
        bounds: {
            minX: any;
            maxX: any;
            minY: any;
            maxY: any;
        } | null;
        hasMissingChars: boolean | undefined;
    } | undefined;
    /** @return False to suppress the specified entity, true to permit rendering. */
    _FilterEntity(entity: any): boolean;
    _FetchFonts(dxf: any): Promise<void>;
    _ProcessDxfEntity(entity: any, blockCtx?: null): void;
    /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */
    _ProcessEntity(entity: Entity, blockCtx?: BlockContext | null): void;
    /**
     * @param entity
     * @param vertex
     * @param blockCtx {?BlockContext}
     * @return {number}
     */
    _GetLineType(entity: any, vertex?: null, blockCtx?: BlockContext | null): number;
    /** Check if start/end with are not specified. */
    _IsPlainLine(entity: any): boolean;
    _DecomposeLine(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    /** Generate vertices for bulged line segment.
     *
     * @param vertices Generated vertices pushed here.
     * @param startVtx Starting vertex. Assuming it is already present in the vertices array.
     * @param endVtx Ending vertex.
     * @param bulge Bulge value (see DXF specification).
     */
    _GenerateBulgeVertices(vertices: any, startVtx: any, endVtx: any, bulge: any): void;
    /** Generate vertices for arc segment.
     *
     * @param vertices Generated vertices pushed here.
     * @param {{x, y}} center  Center vector.
     * @param {number} radius
     * @param {?number} startAngle Start angle in radians. Zero if not specified. Arc is drawn in
     *  CCW direction from start angle towards end angle.
     * @param {?number} endAngle Optional end angle in radians. Full circle is drawn if not
     *  specified.
     * @param {?number} tessellationAngle Arc tessellation angle in radians, default value is taken
     *  from scene options.
     * @param {?number} yRadius Specify to get ellipse arc. `radius` parameter used as X radius.
     * @param {?Matrix3} transform Optional transform matrix for the arc. Applied as last operation.
     * @param {?number} rotation Optional rotation angle for generated arc. Mostly for ellipses.
     * @param {?boolean} cwAngleDir Angles counted in clockwise direction from X positive direction.
     * @return {Vector2[]} List of generated vertices.
     */
    _GenerateArcVertices({ vertices, center, radius, startAngle, endAngle, tessellationAngle, yRadius, transform, rotation, ccwAngleDir }: {
        vertices: any;
        center: any;
        radius: any;
        startAngle?: null | undefined;
        endAngle?: null | undefined;
        tessellationAngle?: null | undefined;
        yRadius?: null | undefined;
        transform?: null | undefined;
        rotation?: null | undefined;
        ccwAngleDir?: boolean | undefined;
    }): Vector2[];
    _DecomposeArc(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    _DecomposeCircle(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    _DecomposeEllipse(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    _DecomposePoint(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    _DecomposeAttribute(entity: any, blockCtx: any): Generator<Entity, void, any>;
    /** Create line segments for point marker.
     * @param vertices
     * @param markType
     * @param position {?{x,y}} point center position, default is zero.
     */
    _CreatePointMarker(vertices: any, markType: any, position?: {
        x;
        y;
    } | null): void;
    /** Create point shape block if not yet done. */
    _CreatePointShapeBlock(): void;
    _Decompose3DFace(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    _DecomposeSolid(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    _DecomposeFace(entity: any, vertices: any, blockCtx: any, wireframe: any, transform?: null): Generator<Entity, void, unknown>;
    _DecomposeText(entity: any, blockCtx: any): Generator<Entity, void, any>;
    _DecomposeMText(entity: any, blockCtx: any): Generator<Entity, void, any>;
    /**
     * @return {?LinearDimension} Dimension handler instance, null if not possible to create from
     * the provided entity.
     */
    _CreateLinearDimension(entity: any): LinearDimension | null;
    _DecomposeDimension(entity: any, blockCtx: any): Generator<Entity, void, any>;
    _DecomposeHatch(entity: any, blockCtx: any): Generator<Entity, void, unknown>;
    /** @return {Vector2[][]} Each loop is a list of points in OCS coordinates. */
    _GetHatchBoundaryLoops(entity: any): Vector2[][];
    _GetDimStyleValue(valueName: any, entity: any, style: any): any;
    /**
     * Updates batches directly.
     * @param entity
     * @param blockCtx {?BlockContext} Nested block insert when non-null.
     */
    _ProcessInsert(entity: any, blockCtx?: BlockContext | null): void;
    /** Flatten block definition batch. It is merged into suitable instant rendering batch. */
    _FlattenBatch(blockBatch: any, layerName: any, blockColor: any, blockLineType: any, transform: any): void;
    /**
     * Generate entities for shaped polyline (e.g. line resulting in mesh). All segments are shaped
     * (have start/end width). Segments may be bulge.
     * @param vertices
     * @param layer
     * @param color
     * @param lineType
     * @param shape {Boolean} True if closed polyline.
     * @return {Generator<Entity>}
     */
    _GenerateShapedPolyline(vertices: any, layer: any, color: any, lineType: any, shape: boolean): Generator<Entity>;
    /** Mirror entity vertices if necessary in case of extrusionDirection with negative Z specified.
     *
     * @param entity Entity to check.
     * @param vertices {?{x,y}[]} Vertices array to use instead of entity vertices attribute.
     * @return {{x,y}[]} Vertices array with mirrored X if necessary. All attributes preserved.
     */
    _MirrorEntityVertices(entity: any, vertices?: {
        x;
        y;
    }[] | null): {
        x;
        y;
    }[];
    _DecomposePolyline(entity: any, blockCtx?: null): Generator<Entity, void, any>;
    _DecomposePolyfaceMesh(entity: any, blockCtx?: null): Generator<Entity, void, unknown>;
    _DecomposeSpline(entity: any, blockCtx?: null): Generator<Entity, void, unknown>;
    /** Get a point on a B-spline.
     * https://github.com/thibauts/b-spline
     * @param t {number} Point position on spline, [0..1].
     * @param degree {number} B-spline degree.
     * @param points {number[][]} Control points. Each point should have the same dimension which
     *  defines dimension of the result.
     * @param knots {?number[]} Knot vector. Should have size `points.length + degree + 1`. Default
     *  is uniform spline.
     * @param weights {?number} Optional weights vector.
     * @return {number[]} Resulting point on the specified position.
     */
    _InterpolateSpline(t: number, degree: number, points: number[][], knots?: number[] | null, weights?: number | null): number[];
    /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */
    _ProcessPoints(entity: Entity, blockCtx?: BlockContext | null): void;
    /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */
    _ProcessLineSegments(entity: Entity, blockCtx?: BlockContext | null): void;
    /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */
    _ProcessPolyline(entity: Entity, blockCtx?: BlockContext | null): void;
    /**
     * @param entity {Entity}
     * @param blockCtx {?BlockContext}
     */
    _ProcessTriangles(entity: Entity, blockCtx?: BlockContext | null): void;
    /** Resolve entity color.
     *
     * @param entity
     * @param blockCtx {?BlockContext}
     * @return {number} RGB color value. For block entity it also may be one of ColorCode values
     *  which are resolved on block instantiation.
     */
    _GetEntityColor(entity: any, blockCtx?: BlockContext | null): number;
    /** @return {?string} Layer name, null for block entity. */
    _GetEntityLayer(entity: any, blockCtx?: null): string | null;
    /** Check extrusionDirection property of the entity and return corresponding transform matrix.
     *
     * @return {?Matrix3} Null if not transform required.
     */
    _GetEntityExtrusionTransform(entity: any): Matrix3 | null;
    /** @return {RenderBatch} */
    _GetBatch(key: any): RenderBatch;
    /**
     * Apply all necessary final transforms to a vertex before just before storing it in a rendering
     * batch.
     * @param v {{x: number, y: number}}
     * @param blockCtx {BlockContext}
     * @return {{x: number, y: number}}
     */
    _TransformVertex(v: {
        x: number;
        y: number;
    }, blockCtx?: BlockContext): {
        x: number;
        y: number;
    };
    /** @param v {{x,y}} Vertex to extend bounding box with and set origin. */
    _UpdateBounds(v: {
        x;
        y;
    }): void;
    _BuildScene(): {
        vertices: ArrayBuffer;
        indices: ArrayBuffer;
        transforms: ArrayBuffer;
        batches: never[];
        layers: never[];
        origin: {
            x: any;
            y: any;
        } | null;
        bounds: {
            minX: any;
            maxX: any;
            minY: any;
            maxY: any;
        } | null;
        hasMissingChars: boolean | undefined;
    };
}
export namespace DxfScene {
    namespace DefaultOptions {
        let arcTessellationAngle: number;
        let minArcTessellationSubdivisions: number;
        let wireframeMesh: boolean;
        let suppressPaperSpace: boolean;
        let textOptions: {
            curveSubdivision: number;
            fallbackChar: string;
        };
    }
}
/** Internal entity representation. DXF features are decomposed into these simpler entities. Whole
 * entity always shares single material.
 */
export class Entity {
    /** @param type {number} See Entity.Type
     * @param vertices {{x, y}[]}
     * @param indices {?number[]} Indices for indexed geometry.
     * @param layer {?string}
     * @param color {number}
     * @param lineType {?number}
     * @param shape {Boolean} true if closed shape.
     */
    constructor({ type, vertices, indices, layer, color, lineType, shape }: number);
    type: any;
    vertices: any;
    indices: any;
    layer: any;
    color: any;
    lineType: any;
    shape: any;
    _IterateVertices(startIndex: any, count: any): Generator<any, void, unknown>;
    /** Split line into chunks with at most INDEXED_CHUNK_SIZE vertices in each one. Each chunk is
     * an object with the following properties:
     *  * "verticesCount" - length of "vertices"
     *  * "vertices" - iterator for included vertices.
     *  * "indices" - iterator for indices.
     *  Closed shapes are handled properly.
     */
    _IterateLineChunks(): Generator<{
        verticesCount: number;
        vertices: Generator<any, void, unknown>;
        indices: Generator<number, void, unknown>;
    }, void, unknown>;
}
export namespace Entity {
    let Type: Readonly<{
        POINTS: 0;
        /** Each vertices pair defines a segment. */
        LINE_SEGMENTS: 1;
        POLYLINE: 2;
        TRIANGLES: 3;
    }>;
}
/** Special color values, used for block entities. Regular entities color is resolved instantly. */
export const ColorCode: Readonly<{
    BY_LAYER: -1;
    BY_BLOCK: -2;
}>;
declare class Block {
    /** @param data {{}} Raw DXF entity. */
    constructor(data: {});
    data: {};
    useCount: number;
    nestedUseCount: number;
    verticesCount: number;
    offset: any;
    batches: any[];
    flatten: boolean;
    /** Bounds in block coordinates (with offset applied). */
    bounds: {
        minX: any;
        maxX: any;
        minY: any;
        maxY: any;
    } | null;
    /** Set block flattening flag based on usage statistics.
     * @return {Boolean} New flatten flag state.
     */
    SetFlatten(): boolean;
    /** @return {Boolean} True if has something to draw. */
    HasGeometry(): boolean;
    /** @param {{}} entity May be either INSERT or DIMENSION. */
    RegisterInsert(entity: {}): void;
    RegisterNestedUse(usedByBlock: any): void;
    /** @return {BlockContext} Context for block definition. */
    DefinitionContext(): BlockContext;
    InstantiationContext(): BlockContext;
    UpdateBounds(v: any): void;
}
import { TextRenderer } from "./TextRenderer";
declare class BlockContext {
    constructor(block: any, type: any);
    block: any;
    type: any;
    origin: any;
    transform: Matrix3;
    /** @return {string} Block name */
    get name(): string;
    /**
     * @param v {{x,y}}
     * @return {{x,y}}
     */
    TransformVertex(v: {
        x;
        y;
    }): {
        x;
        y;
    };
    /**
     * Get transform for block instance.
     * @param entity Raw DXF INSERT entity.
     * @return {Matrix3} Transform matrix for block instance to apply to the block definition.
     */
    GetInsertionTransform(entity: any): Matrix3;
    /**
     * Create context for nested block.
     * @param block {Block} Nested block.
     * @param entity Raw DXF INSERT entity.
     * @return {BlockContext} Context to use for nested block entities.
     */
    NestedBlockContext(block: Block, entity: any): BlockContext;
}
declare namespace BlockContext {
    let Type_1: Readonly<{
        DEFINITION: 0;
        NESTED_DEFINITION: 1;
        INSTANTIATION: 2;
    }>;
    export { Type_1 as Type };
}
import { Vector2 } from "three";
import { LinearDimension } from "./LinearDimension";
import { Matrix3 } from "three";
declare class RenderBatch {
    constructor(key: any);
    key: any;
    chunks: any[] | undefined;
    transforms: DynamicBuffer | undefined;
    vertices: DynamicBuffer | undefined;
    PushVertex(v: any): number;
    /**
     * @param matrix {Matrix3} 3x3 Transform matrix. Assuming 2D affine transform so only top 3x2
     *  sub-matrix is taken.
     */
    PushInstanceTransform(matrix: Matrix3): void;
    /** This method actually reserves space for the specified number of indexed vertices in some
     * chunk. The returned object should be used to push exactly the same amount vertices and any
     * number of their referring indices.
     * @param verticesCount Number of vertices in the chunk.
     * @return {IndexedChunkWriter}
     */
    PushChunk(verticesCount: any): IndexedChunkWriter;
    /** Merge other batch into this one. They should have the same geometry type. Instanced batches
     * are disallowed.
     *
     * @param batch {RenderBatch}
     * @param transform {?Matrix3} Optional transform to apply for merged vertices.
     */
    Merge(batch: RenderBatch, transform?: Matrix3 | null): void;
    /** @return Vertices buffer required size in bytes. */
    GetVerticesBufferSize(): number;
    /** @return Indices buffer required size in bytes. */
    GetIndicesBufferSize(): number;
    /** @return Instances transforms buffer required size in bytes. */
    GetTransformsSize(): number;
    Serialize(buffers: any): {
        key: any;
        chunks: never[];
    } | {
        key: any;
        transformsOffset: any;
        transformsSize: number;
    } | {
        key: any;
        verticesOffset: any;
        verticesSize: number;
    };
    _NewChunk(initialCapacity: any): IndexedChunk;
}
import { DynamicBuffer } from "./DynamicBuffer";
declare class IndexedChunkWriter {
    constructor(chunk: any, verticesCount: any);
    chunk: any;
    verticesCount: any;
    verticesOffset: number;
    numVerticesPushed: number;
    PushVertex(v: any): void;
    PushIndex(idx: any): void;
    Finish(): void;
}
declare class IndexedChunk {
    constructor(initialCapacity: any);
    indices: DynamicBuffer;
    vertices: DynamicBuffer;
    Serialize(buffers: any): {
        verticesOffset: any;
        verticesSize: number;
        indicesOffset: any;
        indicesSize: number;
    };
}
export {};
