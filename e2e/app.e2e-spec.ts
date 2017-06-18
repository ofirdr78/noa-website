import { TaskItPage } from './app.po';

describe('task-it App', () => {
  let page: TaskItPage;

  beforeEach(() => {
    page = new TaskItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
