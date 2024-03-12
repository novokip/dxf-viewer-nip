/** Fetches and parses DXF file. */
export class DxfFetcher {
    constructor(url: any, encoding?: string);
    url: any;
    encoding: string;
    /** @param progressCbk {Function} (phase, receivedSize, totalSize) */
    Fetch(progressCbk?: Function): Promise<{} | null>;
}
