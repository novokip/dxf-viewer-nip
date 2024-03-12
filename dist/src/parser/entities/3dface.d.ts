declare function EntityParser(): void;
declare class EntityParser {
    parseEntity(scanner: any, curr: any): {
        type: any;
        vertices: never[];
    };
}
declare namespace EntityParser {
    let ForEntityName: string;
}
export default EntityParser;
