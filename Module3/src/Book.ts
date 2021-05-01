import { Item } from './Item';
import { Pages } from './Pages';
import { Page, PageMaterial, PageType } from './Page';
import { pagesIterableMixin } from './PagesIterableMixin';

export class Book extends Item {
    _author: string;

    constructor(pages: Pages, title: string, author: string) {
        super(pages, title);
        this._author = author;
    }

    get author() {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.items.length}`;
    }
}

const bookPages = new Pages([
    new Page(1, PageType.Book, PageMaterial.Book),
    new Page(2, PageType.Book, PageMaterial.Book),
    new Page(3, PageType.Book, PageMaterial.Book),
]);

export const IterableBook = pagesIterableMixin(Book);

const book = new IterableBook(bookPages, 'Main book', 'People');

/*console.log(book.toString());
for (let page of book) {
    console.log(page);
}*/
