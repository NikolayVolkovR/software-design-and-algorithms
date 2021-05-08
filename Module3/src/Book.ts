import {Item} from './Item';
import {Pages} from './Pages';
import {Page, PageMaterial, PageType} from './Page';
import {pagesIterableMixin} from './PagesIterableMixin';
import {PageFactory, TypeOfPage} from "./PageFactory";

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

const pageFactory = PageFactory.getInstance();

const bookPages = new Pages([
    pageFactory.create(TypeOfPage.Book, 1),
    pageFactory.create(TypeOfPage.Book, 2),
    pageFactory.create(TypeOfPage.Book, 3),
]);

export const IterableBook = pagesIterableMixin(Book);

const book = new IterableBook(bookPages, 'Main book', 'People');

/*console.log(book.toString());
for (let page of book) {
    console.log(page);
}*/
