import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";
import {Sword} from "./Sword";
import {Bow} from "./Bow";
import {ItemWeightComparator} from "./ItemWeightComparator";

export class Inventory {
    items: Item[] = [];
    constructor() {}

    addItem(item: Item) {
        this.items.push(item);
    }

    sort();
    sort(comparator: ItemComparator);
    sort(comparator?: ItemComparator) {
        if (comparator) {
            this.items.sort(comparator.compare);
        } else {
            this.items.sort((a, b) => {
                if (a.getValue() < b.getValue()) {
                    return -1;
                } else if (a.getValue() > b.getValue()) {
                    return 1;
                }
                return 0;
            });
        }
    }

    toString() {
        return this.items.join('\n');
    }
}

const inventory = new Inventory();
const sword1 = new Sword({
    value: 100,
    weight: 5,
    baseDamage: 10,
    baseDurability: 0.7
});
const bow1 = new Bow({
    value: 150,
    weight: 1,
    baseDamage: 3,
    baseDurability: 0.8

});

inventory.addItem(sword1);
inventory.addItem(bow1);
console.log(inventory.toString());
const weightComparator = new ItemWeightComparator();
inventory.sort(weightComparator);
console.log(inventory.toString());
