import { GConstructor } from './types';
import { Pages } from './Pages';

type IterableItemType = GConstructor<{ pages: Pages }>;
export function pagesIterableMixin<TBase extends IterableItemType>(Base: TBase) {
    return class Iterable extends Base {
        [Symbol.iterator]() {
            let count = 0;
            let isDone = false;
            let next = () => {
                if (count >= this.pages.items.length) {
                    isDone = true;
                }

                return {
                    done: isDone,
                    value: isDone ? null : `${this.toString()}, ${this.pages.items[count++].toString()}`,
                };
            };

            return { next };
        }
    };
}
