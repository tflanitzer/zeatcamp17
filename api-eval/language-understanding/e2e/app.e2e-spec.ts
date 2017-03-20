import { LanguageUnderstandingPage } from './app.po';

describe('language-understanding App', function() {
  let page: LanguageUnderstandingPage;

  beforeEach(() => {
    page = new LanguageUnderstandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
