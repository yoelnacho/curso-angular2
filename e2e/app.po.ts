export class CursoAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('curso-angular2-app h1')).getText();
  }
}
