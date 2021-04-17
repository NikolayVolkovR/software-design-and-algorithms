import { Consumable } from "./Consumable";

export interface PizzaProps {
    numberOfSlices: number;
    spoiled: boolean;
}

export class Pizza extends Consumable {
    private readonly numberOfSlices: number;
    private slicesEaten: number;

    constructor({ numberOfSlices, spoiled }: PizzaProps) {
        super({ spoiled, name: "pizza", value: 2, weight: 0.5 });
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }

    eat(): string {
        if (++this.slicesEaten <= this.numberOfSlices) {
            this.slicesEaten === this.numberOfSlices && this.setConsumed();
            return `You eat ${this.slicesEaten} of ${this.numberOfSlices} slices of pizza`;
        }
    }
}

const pizza1 = new Pizza({ numberOfSlices: 3, spoiled: false });

console.log(pizza1.use());
console.log(pizza1.use());
console.log(pizza1.use());
console.log(pizza1.use());
