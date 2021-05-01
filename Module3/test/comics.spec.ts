import {Pages} from "../src/pages";
import {Page} from "../src/page";
import { IterableComics as Comics} from "../src/comics";

describe('Comics', () => {
  it('toString should return correct value', () => {
    let counter = 1;
    const comics = new Comics( new Pages([
      new Page(1, 'with images', 'glossy paper'),
      new Page(2, 'with images', 'glossy paper')
    ]),'Spider-Man', 'Stan Lee', 'some author');

    for (const pageDescription of comics) {
      expect(pageDescription).toEqual(`Comics: Spider-Man by Stan Lee, the artist is some author, number of pages: 2, here is page with images #${counter} and it\'s material is glossy paper`);
      counter++;
    }
  });
});
