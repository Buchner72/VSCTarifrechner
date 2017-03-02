import { TarfRechnerVSCAppPage } from './app.po';

describe('tarf-rechner-vsc-app App', function() {
  let page: TarfRechnerVSCAppPage;

  beforeEach(() => {
    page = new TarfRechnerVSCAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
