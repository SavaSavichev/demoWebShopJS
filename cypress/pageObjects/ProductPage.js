import Header from "./Header";

class ProductPage extends Header {
    getFreeShipping = () => cy.get(".free-shipping");

}

export default ProductPage;