import {Item} from './Item';
import {Pages} from './Pages';
import {Page, PageMaterial, PageType} from './Page';
import {pagesIterableMixin} from './PagesIterableMixin';
import {PageFactory, TypeOfPage} from "./PageFactory";

export class Comics extends Item {
    _author: string;
    _title: string;
    _artist: string;

    constructor(pages: Pages, title: string, author: string, artist: string) {
        super(pages, title);
        this._author = author;
        this._title = title;
        this._artist = artist;
    }

    get title() {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get artist() {
        return this._artist;
    }

    set artist(value: string) {
        this._artist = value;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.items.length}`;
    }
}

const pageFactory = PageFactory.getInstance();

const comicsPages = new Pages([
    pageFactory.create(TypeOfPage.Comics,1),
    pageFactory.create(TypeOfPage.Comics,2),
    pageFactory.create(TypeOfPage.Comics,3),
]);

export const IterableComics = pagesIterableMixin(Comics);
const comics = new IterableComics(comicsPages, 'X-Man', 'Any', 'Superman');

/*console.log(comics.toString());
for (let page of comics) {
    console.log(page);
}*/
