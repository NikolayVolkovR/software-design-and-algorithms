import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        const weightDiff = first.getWeight() - second.getWeight();

        if (weightDiff) {
            return weightDiff > 0 ? 1 : -1;
        }

        return first.compareTo(second);
    }
}
