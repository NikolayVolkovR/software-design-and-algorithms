import { Item } from "./Item";

export interface ConsumableProps {
    name: string;
    value: number;
    weight: number;
    spoiled: boolean;
}

export class Consumable extends Item {
    private consumed: boolean;
    private spoiled: boolean;

    constructor({ name, spoiled, value, weight }: ConsumableProps) {
        super({ weight, name, value });
        this.consumed = false;
        this.spoiled = spoiled;
    }

    use() {
        if (!this.spoiled && !this.consumed) {
            return this.eat();
        } else {
            return `There is nothing left of the ${this.getName()} to consume.`;
        }
    }

    eat() {
        this.setConsumed();
        return `You eat the ${this.getName()}. ${
            this.isSpoiled() ? "You feel sick" : ""
        }`.trim();
    }

    isConsumed() {
        return this.consumed;
    }

    setConsumed() {
        this.consumed = true;
    }

    isSpoiled() {
        return this.spoiled;
    }
}
