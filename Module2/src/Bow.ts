import { Weapon } from "./Weapon";

export interface BowProps {
    baseDamage: number;
    baseDurability: number;
    value: number;
    weight: number;
}

export class Bow extends Weapon {
    constructor({ baseDamage, baseDurability, value, weight }: BowProps) {
        super({ baseDamage, baseDurability, value, weight, name: "bow" });
    }
}

const bow1 = new Bow({
    value: 100,
    baseDurability: 1,
    baseDamage: 5,
    weight: 1,
});

// console.log(bow1.toString(), bow1.polish(), bow1.toString())
