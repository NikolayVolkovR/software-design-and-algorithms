import {Item} from './Item';
import {Pages} from './Pages';
import {Page, PageMaterial, PageType} from './Page';
import {pagesIterableMixin} from './PagesIterableMixin';
import {PageFactory, TypeOfPage} from "./PageFactory";

export class Magazine extends Item {
    constructor(pages: Pages, title: string) {
        super(pages, title);
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.items.length}`;
    }
}

const pageFactory = PageFactory.getInstance();

const magazinePages = new Pages([
    pageFactory.create(TypeOfPage.Magazine, 1),
    pageFactory.create(TypeOfPage.Magazine, 2),
    pageFactory.create(TypeOfPage.Magazine, 3),
]);

export const IterableMagazine = pagesIterableMixin(Magazine);

const magazine = new IterableMagazine(magazinePages, 'Wow magazine');

/*console.log(magazine.toString());
for (let page of magazine) {
    console.log(page);
}*/
