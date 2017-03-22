import { CognitiveShowcasePage } from './app.po';

describe('cognitive-showcase App', function() {
  let page: CognitiveShowcasePage;

  beforeEach(() => {
    page = new CognitiveShowcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
