import { CursoFirebasePage } from './app.po';

describe('curso-firebase App', () => {
  let page: CursoFirebasePage;

  beforeEach(() => {
    page = new CursoFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
