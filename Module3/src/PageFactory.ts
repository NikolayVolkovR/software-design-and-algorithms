import {BookPage, ComicsPage, MagazinePage, Page} from './Page';

export enum TypeOfPage {
    Book = 'book',
    Magazine = 'magazine',
    Comics = 'comics',
}

export class PageFactory {
    private static instance: PageFactory;
    private constructor() {}
    public static getInstance(): PageFactory {
        if (!PageFactory.instance) {
            PageFactory.instance = new PageFactory();
        }
        return PageFactory.instance;
    }

    create(type: TypeOfPage, pageNumber: number): Page {
        switch (type) {
            case TypeOfPage.Book: {
                return new BookPage(pageNumber);
            }
            case TypeOfPage.Magazine: {
                return new MagazinePage(pageNumber);
            }
            case TypeOfPage.Comics: {
                return new ComicsPage(pageNumber);
            }
            default: {
                return new BookPage(pageNumber);
            }
        }
    }
}
