export default class ExtendedDataParser {
    appName: any;
    appNameWarningShown: boolean;
    lastString: any;
    sectionStack: {
        values: never[];
    }[];
    failure: boolean;
    /**
     * Feed next token.
     * @return {boolean} True if new parser instance should be created for this token.
     */
    Feed(curr: any): boolean;
    /** Finalize XDATA section parsing. */
    Finish(entity: any): void;
    get _currentSection(): {
        values: never[];
    };
    _CreateSection(): {
        values: never[];
    };
    _CreateValue(code: any, value: any): {
        code: any;
        value: any;
    };
}
