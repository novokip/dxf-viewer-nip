declare function EntityParser(): void;
declare class EntityParser {
    parseEntity(scanner: any, currentGroup: any): {
        type: any;
    };
}
declare namespace EntityParser {
    let ForEntityName: string;
}
export default EntityParser;
