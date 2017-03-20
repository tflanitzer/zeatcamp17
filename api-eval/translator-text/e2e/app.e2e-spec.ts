import { TranslatorTextPage } from './app.po';

describe('translator-text App', function() {
  let page: TranslatorTextPage;

  beforeEach(() => {
    page = new TranslatorTextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
