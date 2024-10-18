/**
 * Returns the truecolor value of the given AutoCad color index value
 * @return {Number} truecolor value as a number
 */
export function getAcadColor(index: any): number;
/**
 * Parses the 2D or 3D coordinate, vector, or point. When complete,
 * the scanner remains on the last group of the coordinate.
 * @param {*} scanner
 */
export function parsePoint(scanner: any): {
    x: any;
    y: any;
    z: any;
};
/** Some entities may contain embedded object which is started by group 101. All the rest data until
 * end of entity should not be interpreted as entity attributes. There is no documentation for this
 * feature.
 * @param scanner
 */
export function skipEmbeddedObject(scanner: any): void;
/**
 * Attempts to parse codes common to all entities. Returns true if the group
 * was handled by this function.
 * @param {*} entity - the entity currently being parsed
 * @param {*} curr - the current group being parsed
 */
export function checkCommonEntityProperties(entity: any, curr: any, scanner: any): boolean;
