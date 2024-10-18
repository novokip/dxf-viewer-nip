/** Find intersection points of two segments in a parametric form.
 * @param {Vector2} a1 First segment start point.
 * @param {Vector2} a2 First segment end point.
 * @param {Vector2} b1 Second segment start point.
 * @param {Vector2} b2 Second segment end point.
 * @param {boolean} force Force intersection calculation even if intersection point is out of
 *  segment range.
 * @return {?number[3]} Parameters for the first and second segment in the intersection point
 *  (parameter value 0 corresponds to a start point, 1 - to an end point). Third number is segments
 *  direction vectors pseudo-cross-product. Null if there is no intersection.
 */
export function IntersectSegmentsParametric(a1: Vector2, a2: Vector2, b1: Vector2, b2: Vector2, force?: boolean): number[3] | null;
/**  Find intersection points of two segments.
 * @param {Vector2} a1 First segment start point.
 * @param {Vector2} a2 First segment end point.
 * @param {Vector2} b1 Second segment start point.
 * @param {Vector2} b2 Second segment end point.
 * @return {?Vector2} Intersection point coordinate, null if no intersection.
 */
export function IntersectSegments(a1: Vector2, a2: Vector2, b1: Vector2, b2: Vector2): Vector2 | null;
import { Vector2 } from "three";
