/** Wraps web-worker instance and provides unified interface to its services, including the when
 * web-worker is not used and all heavy operations are performed in main thread.
 */
export class DxfWorker {
    /** @param worker Web worker instance with DxfViewer.SetupWorker() function called. Can be null
     *  for synchronous operations.
     *  @param isWorker True for worker-side wrapper.
     */
    constructor(worker: any, isWorker?: boolean);
    worker: any;
    reqSeq: number | undefined;
    requests: Map<any, any> | undefined;
    progressCbk: any;
    /**
     * @param url DXF file URL.
     * @param fonts {?string[]} Fonts URLs.
     * @param options Viewer options. See DxfViewer.DefaultOptions.
     * @param progressCbk {Function?} (phase, processedSize, totalSize)
     */
    Load(url: any, fonts: string[] | null, options: any, progressCbk: Function | null, props: any): Promise<any>;
    Destroy(noWait?: boolean): Promise<void>;
    _ProcessRequest(event: any): Promise<void>;
    _ProcessRequestMessage(type: any, data: any, transfers: any, seq: any): Promise<{
        scene: any;
        dxf: any;
    } | null>;
    _ProcessResponse(event: any): Promise<void>;
    _OnError(error: any): Promise<void>;
    _SendRequest(type: any, data?: null, progressCbk?: null): Promise<any>;
    _SendProgress(seq: any, phase: any, size: any, totalSize: any): void;
    /** @return {Object} DxfScene serialized scene. */
    _Load(url: any, fonts: any, options: any, progressCbk: any, props: any): Object;
    _CreateFontFetchers(urls: any, progressCbk: any): (() => Promise<any>)[];
    _CloneOptions(options: any): any;
}
export namespace DxfWorker {
    export namespace WorkerMsg {
        let LOAD: string;
        let PROGRESS: string;
        let DESTROY: string;
    }
    export { Request };
}
declare class Request {
    constructor(seq: any, progressCbk: any);
    seq: any;
    progressCbk: any;
    promise: Promise<any>;
    _Resolve: (value: any) => void;
    _Reject: (reason?: any) => void;
    GetResponse(): Promise<any>;
    SetResponse(response: any): void;
    SetError(error: any): void;
}
export {};
