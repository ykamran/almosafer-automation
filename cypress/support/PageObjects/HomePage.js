class HomePage {

    elements = {
        languageDisplayHeader: () => cy.get('[data-testid="Header__LanguageSwitch"]'),
        currencyButton: () => cy.get('[data-testid="Header__CurrencySelector"]'),
        whatsappContactHeader: () => cy.get('a[data-testid="ContactUs__WhatsApp"]'),
        callUsFooter: () => cy.get('[data-testid="ContactUs__Number"]'),
        supportFooter: () => cy.get('.sc-ESoVU > strong'),
        qitafLogo: () => cy.get('[data-testid="Footer__QitafLogo"]'),
        hotelTab: () => cy.get('#uncontrolled-tab-example-tab-hotels'),
        fromDateCalender: () => cy.get('[data-testid="FlightSearchBox__FromDateButton"] > span[class^=sc-]:nth(1)'),
        toDateCalender: () => cy.get('[data-testid="FlightSearchBox__ToDateButton"] > span[class^=sc-]:nth(1)'),
        hotelsTab: () => cy.get('#uncontrolled-tab-example-tab-hotels'),

    }

    navigate() {
        cy.visit(Cypress.env('url'));
    }

    switchToHotelTab() {
        this.elements.hotelsTab().click()
    }

    verifyDefaultLanguage(en, ar) {
        this.elements.languageDisplayHeader().then(function (element) {
            if (element.text() == "English") {
                this.elements.languageDisplayHeader().should('have.text', en)
            } else {
                this.elements.languageDisplayHeader().should('have.text', ar)
            }
        })
    }
}

export default new HomePage();
//sc-fvLVrH dICPCh
//sc-fvLVrH dICPCh
//sc-jPPmml