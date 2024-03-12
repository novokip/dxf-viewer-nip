export class Matrix2 {
    /**
     *
     * @param {number} a00
     * @param {number} a01
     * @param {number} a10
     * @param {number} a11
     */
    constructor(a00: number, a01: number, a10: number, a11: number);
    a00: number;
    a01: number;
    a10: number;
    a11: number;
    /**
     * Multiply Vector2 to this matrix as Av
     * @param {Vector2} v
     * @returns {Vector2} transformed v
     */
    multiply(v: Vector2): Vector2;
    /**
     * Return determinant of this matrix
     * @returns {number}
     */
    det(): number;
    /**
     * Return inverse of this matrix. If inverse is not exists i.e.
     * this.det() === 0, return `undefined`.
     * @param {number | undefined} - in case of pre computed determinant, you may pass it to parameter
     * @returns {Matrix2 | undefined} inverse of this matrix
     */
    inverse(determinant?: any): Matrix2 | undefined;
    /**
     * Solve linear equation Ax = b using Gauss-Jordan reduction
     * where A is `this`. If it's singular, return `undefined`
     * @param {Vector2} b
     * @returns {Vector2 | undefined}
     */
    solve(b: Vector2): Vector2 | undefined;
}
import { Vector2 } from "three";
