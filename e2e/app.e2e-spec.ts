import { NGApp1Page } from './app.po';

describe('ngapp1 App', () => {
  let page: NGApp1Page;

  beforeEach(() => {
    page = new NGApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
