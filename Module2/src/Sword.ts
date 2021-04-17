import { Weapon } from "./Weapon";
import { ItemWeightComparator } from "./ItemWeightComparator";

export interface SwordProps {
    baseDamage: number;
    baseDurability: number;
    value: number;
    weight: number;
}

export class Sword extends Weapon {
    constructor({ baseDamage, baseDurability, value, weight }: SwordProps) {
        super({ baseDamage, baseDurability, value, weight, name: "sword" });
    }
}

const sword1 = new Sword({
    baseDurability: 0.7893,
    baseDamage: 100,
    weight: 2.032,
    value: 300,
});
const sword2 = new Sword({
    baseDurability: 2,
    baseDamage: 3,
    weight: 4,
    value: 5,
});
const sword3 = new Sword({
    baseDurability: 3,
    baseDamage: 4,
    weight: 5,
    value: 6,
});

/*const comparator = new ItemWeightComparator();

console.log(sword1.polish(), sword1.getDamage());
console.log(sword1.polish(), sword1.getDamage());
console.log(sword1.polish(), sword1.getDamage());
console.log(sword1.polish(), sword1.getDamage());*/
