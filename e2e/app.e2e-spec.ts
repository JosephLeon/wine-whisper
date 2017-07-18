import { WineWhisperPage } from './app.po';

describe('wine-whisper App', () => {
  let page: WineWhisperPage;

  beforeEach(() => {
    page = new WineWhisperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
