import { Page, PageMaterial, PageType } from './Page';
import { Constructor } from './types';

export class Pages {
    items: Page[];

    constructor(items: Page[]) {
        this.items = items;
    }
}

function PagesIterableMixin<TBase extends Constructor>(pages: TBase) {
    return class IterablePages extends Pages {
        [Symbol.iterator]() {
            // simple way: return this.items.values()
            let count = 0;
            let isDone = false;
            let next = () => {
                if (count >= this.items.length) {
                    isDone = true;
                }

                return {
                    done: isDone,
                    value: this.items[count++],
                };
            };

            return { next };
        }
    };
}

export const PagesIterable = PagesIterableMixin(Pages);

const iterablePages = new PagesIterable([
    new Page(1, PageType.Book, PageMaterial.Book),
    new Page(2, PageType.Magazine, PageMaterial.Magazine),
    new Page(3, PageType.Comics, PageMaterial.Comics),
]);
