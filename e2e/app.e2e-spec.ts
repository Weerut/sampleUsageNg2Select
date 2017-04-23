import { SampleNg2SelectPage } from './app.po';

describe('sample-ng2-select App', () => {
  let page: SampleNg2SelectPage;

  beforeEach(() => {
    page = new SampleNg2SelectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
