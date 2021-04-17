import { Comparable } from "./Comparable";

export interface ItemProps {
    value: number;
    name: string;
    weight: number;
}

let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
    private readonly id: number;
    private value: number;
    private name: string;
    private weight: number;

    protected constructor({ value, name, weight }: ItemProps) {
        this.id = numberOfItems++;
        this.value = value;
        this.name = name;
        this.weight = weight;
    }

    use() {}

    compareTo(other: Item) {
        const valueDiff = this.value - other.value;
        if (valueDiff) {
            return valueDiff > 0 ? 1 : -1;
        }

        if (this.name.toLowerCase > other.name.toLowerCase) {
            return 1;
        } else if (this.name.toLowerCase < other.name.toLowerCase) {
            return -1;
        }

        return 0;
    }

    toString() {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

    getId() {
        return this.id;
    }

    getValue() {
        return this.value;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    setValue(price) {
        this.value = price;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    reset() {
        numberOfItems = 0;
    }
}
