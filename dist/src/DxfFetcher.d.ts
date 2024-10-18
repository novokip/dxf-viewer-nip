/** Fetches and parses DXF file. */
export class DxfFetcher {
    constructor(url: any, encoding: string | undefined, props: any);
    url: any;
    encoding: string;
    props: any;
    /** @param progressCbk {Function} (phase, receivedSize, totalSize) */
    Fetch(progressCbk?: Function): Promise<{} | null>;
}
