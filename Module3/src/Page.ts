export enum PageType {
    Book = 'with text',
    Magazine = 'with article',
    Comics = 'with images'
}

export enum PageMaterial {
    Book = 'simple paper',
    Magazine = 'glossy paper',
    Comics = 'glossy paper'
}



export class Page {
    constructor(private pageNumber: number, private pageType: string, private pageMaterial: string) {}

    toString() {
        return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
    }
}

export class BookPage extends Page {
    constructor(pageNumber: number) {
        super(pageNumber, PageType.Book, PageMaterial.Book);
    }
}

export class MagazinePage extends Page {
    constructor(pageNumber: number) {
        super(pageNumber, PageType.Magazine, PageMaterial.Magazine);
    }
}

export class ComicsPage extends Page {
    constructor(pageNumber: number) {
        super(pageNumber, PageType.Comics, PageMaterial.Comics);
    }
}