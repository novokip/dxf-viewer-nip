export default function DxfParser(): void;
export default class DxfParser {
    _entityHandlers: {};
    parse(source: any, done: any): never;
    registerEntityHandler(handlerType: any): void;
    parseSync(source: any): {} | null;
    parseStream(stream: any, done: any): void;
    _parse(dxfString: any): {};
}
