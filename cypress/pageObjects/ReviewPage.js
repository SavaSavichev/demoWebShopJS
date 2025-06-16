class ReviewPage {

    getTitle = () => cy.get("#AddProductReview_Title");
    getText = () => cy.get("#AddProductReview_ReviewText");
    getSubmitReviewButton = () => cy.get("input[value='Submit review']");
    getMessageText = () => cy.get("div[class='result']");

    enterRevievTitle(title) {
        this.getTitle().type(title);

        return this;
    }

    enterReviexText(text) {
        this.getText().type(text);

        return this;
    }

    clickSubmitReview() {
        this.getSubmitReviewButton().click();

        return this;
    }

    checkMessageText(expectedText) {
        this.getMessageText().invoke('text').then((text) => {
            expect(text.trim()).to.eq(expectedText);
        });
    }
}

export default ReviewPage;