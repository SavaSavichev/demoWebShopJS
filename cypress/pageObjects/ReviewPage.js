import { Header, SideMenu } from './';

class ReviewPage {
  constructor() {
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  getTitle = () => cy.get('#AddProductReview_Title');
  getText = () => cy.get('#AddProductReview_ReviewText');
  getSubmitReviewButton = () => cy.get("input[value='Submit review']");
  getMessageText = () => cy.get("div[class='result']");

  enterRevievTitle(title) {
    this.getTitle().should('be.visible').type(title);

    return this;
  }

  enterReviewText(text) {
    this.getText().should('be.visible').type(text);

    return this;
  }

  clickSubmitReview() {
    this.getSubmitReviewButton().should('be.visible').click();

    return this;
  }

  checkMessageText(expectedText) {
    this.getMessageText()
      .invoke('text')
      .then((text) => {
        expect(expectedText).to.eq(text.trim());
      });
  }
}

export default ReviewPage;
