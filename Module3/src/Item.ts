import {Pages} from "./Pages";

export abstract class Item {
    _title: string;
    pages: Pages;

    protected constructor(pages: Pages, title: string) {
        this.pages = pages;
        this._title = title;
    }

    get title() {
        return this._title
    }

    set title(value: string) {
        this._title = value;
    }

    abstract toString(): string;
}