export class MTextFormatParser {
    entities: any[];
    Parse(text: any): void;
    /** @typedef MTextFormatEntity
     * @property type One of EntityType
     *
     * @return {MTextFormatEntity[]} List of format chunks. Each chunk is either a text chunk with
     * TEXT type or some format entity. Entity with type SCOPE represents format scope which has
     * nested list of entities in "content" property.
     */
    GetContent(): {
        /**
         * One of EntityType
         */
        type: any;
    }[];
    /** Return only text chunks in a flattened sequence of strings. */
    GetText(): Generator<any, void, any>;
}
export namespace MTextFormatParser {
    export { EntityType };
}
declare const EntityType: Readonly<{
    TEXT: 0;
    SCOPE: 1;
    PARAGRAPH: 2;
    NON_BREAKING_SPACE: 3;
    /** "alignment" property is either "r", "c", "l", "j", "d" for right, center, left, justify
     * (seems to be the same as left), distribute (justify) alignment.
     */
    PARAGRAPH_ALIGNMENT: 4;
}>;
export {};
