import Header from "./Header";
import SideMenu from "./SideMenu";

class ReviewPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getTitle = () => cy.get("#AddProductReview_Title");
    getText = () => cy.get("#AddProductReview_ReviewText");
    getSubmitReviewButton = () => cy.get("input[value='Submit review']");
    getMessageText = () => cy.get("div[class='result']");

    enterRevievTitle(title) {
        this.getTitle().type(title);

        return this;
    }

    enterReviewText(text) {
        this.getText().type(text);

        return this;
    }

    clickSubmitReview() {
        this.getSubmitReviewButton().click();

        return this;
    }

    checkMessageText(expectedText) {
        this.getMessageText().invoke("text").then((text) => {
            expect(expectedText).to.eq(text.trim());
        });
    }
}

export default ReviewPage;