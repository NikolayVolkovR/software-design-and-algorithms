import { Item } from './Item';
import { Pages } from './Pages';
import { Page, PageMaterial, PageType } from './Page';
import { pagesIterableMixin } from './PagesIterableMixin';

export class Magazine extends Item {
    constructor(pages: Pages, title: string) {
        super(pages, title);
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.items.length}`;
    }
}

const magazinePages = new Pages([
    new Page(1, PageType.Magazine, PageMaterial.Magazine),
    new Page(2, PageType.Magazine, PageMaterial.Magazine),
    new Page(3, PageType.Magazine, PageMaterial.Magazine),
]);

export const IterableMagazine = pagesIterableMixin(Magazine);

const magazine = new IterableMagazine(magazinePages, 'Wow magazine');

/*console.log(magazine.toString());
for (let page of magazine) {
    console.log(page);
}*/
