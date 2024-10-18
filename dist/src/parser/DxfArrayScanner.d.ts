/**
 * DxfArrayScanner
 *
 * Based off the AutoCad 2012 DXF Reference
 * http://images.autodesk.com/adsk/files/autocad_2012_pdf_dxf-reference_enu.pdf
 *
 * Reads through an array representing lines of a dxf file. Takes an array and
 * provides an easy interface to extract group code and value pairs.
 * @param data - an array where each element represents a line in the dxf file
 * @constructor
 */
export default function DxfArrayScanner(data: any): void;
export default class DxfArrayScanner {
    /**
     * DxfArrayScanner
     *
     * Based off the AutoCad 2012 DXF Reference
     * http://images.autodesk.com/adsk/files/autocad_2012_pdf_dxf-reference_enu.pdf
     *
     * Reads through an array representing lines of a dxf file. Takes an array and
     * provides an easy interface to extract group code and value pairs.
     * @param data - an array where each element represents a line in the dxf file
     * @constructor
     */
    constructor(data: any);
    _pointer: number;
    _data: any;
    _eof: boolean;
    /**
     * Gets the next group (code, value) from the array. A group is two consecutive elements
     * in the array. The first is the code, the second is the value.
     * @returns {{code: Number}|*}
     */
    next(): {
        code: number;
    } | any;
    lastReadGroup: {
        code: number;
    } | undefined;
    peek(): {
        code: number;
    };
    rewind(numberOfGroups: any): void;
    /**
     * Returns true if there is another code/value pair (2 elements in the array).
     * @returns {boolean}
     */
    hasNext(): boolean;
    /**
     * Returns true if the scanner is at the end of the array
     * @returns {boolean}
     */
    isEOF(): boolean;
}
