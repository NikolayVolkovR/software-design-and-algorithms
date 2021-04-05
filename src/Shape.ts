import { Point } from "./Point";

type PointsArray = {
    0: Point,
    1: Point,
    3: Point,
} & Point[];

// public points: [Point, Point, Point] & Point[]

export abstract class Shape {
    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean);
    constructor(public points: PointsArray, public color = "green", public filled = true) {
        if (points.length < 3) {
            throw new Error('Number of Points should be 3 at least');
        }
    }
    abstract getType(): string;
    toString(): string {
        const points = this.points.map((point) => point.toString()).join(', ');

        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${points}.`;
    }
    getPerimeter(): number {
        return this.points.reduce((perimeter, point, index, points) => {
            return index < points.length ? perimeter + point.distance(points[index + 1]) : perimeter;
        }, 0);
    }
}
