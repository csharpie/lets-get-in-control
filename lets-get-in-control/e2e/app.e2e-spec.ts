import { LetsGetInControlPage } from './app.po';

describe('lets-get-in-control App', () => {
  let page: LetsGetInControlPage;

  beforeEach(() => {
    page = new LetsGetInControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
