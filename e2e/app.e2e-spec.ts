import { PnoPage } from './app.po';

describe('pno App', function() {
  let page: PnoPage;

  beforeEach(() => {
    page = new PnoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
