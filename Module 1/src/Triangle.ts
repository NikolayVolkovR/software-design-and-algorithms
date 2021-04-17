import { Shape } from './Shape';
import { Point } from "./Point";

const epsilon = 0.05;

export class Triangle extends Shape {
    constructor(a: Point, b: Point, c: Point);
    constructor(a: Point, b: Point, c: Point, color: string);
    constructor(a: Point, b: Point, c: Point, color: string, filled: boolean);
    constructor(public a: Point, public b: Point, public c: Point, color?: string, filled?: boolean) {
        super([a, b, c]);
    }

    toString(): string {
        return `Triangle[v1=${this.a.toString()},v2=${this.b.toString()},v3=${this.c.toString()}]`;
    }

    getType(): string {
        const ab = this.a.distance(this.b);
        const bc = this.b.distance(this.c);
        const ca = this.c.distance(this.a);

        const ab_bc_equals = ab - bc < epsilon;
        const bc_ca_equals = bc - ca < epsilon;
        const ca_ab_equals = ca - ab < epsilon;

        if (ab_bc_equals && bc_ca_equals && ca_ab_equals) {
            return "equilateral triangle";
        } else if ((ab_bc_equals && bc_ca_equals) || (bc_ca_equals && ca_ab_equals) || (ca_ab_equals && ab_bc_equals)) {
            return "isosceles triangle";
        } else {
            return "scalene triangle";
        }

    }
}
