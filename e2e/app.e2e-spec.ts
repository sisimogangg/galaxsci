import { GalaxsciPage } from './app.po';

describe('galaxsci App', () => {
  let page: GalaxsciPage;

  beforeEach(() => {
    page = new GalaxsciPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
