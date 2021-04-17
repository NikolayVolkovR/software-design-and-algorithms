export interface Comparable<T> {
    compareTo(other: T): number;
    getWeight(): number;
}
