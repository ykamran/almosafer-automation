class HotelsPage {

    elements = {

        locationInput: () => cy.get('[data-testid="AutoCompleteInput"]'),
        firstAutoComplete: () => cy.get('[data-testid="AutoCompleteResultItem0"]'),
        searchButton: () => cy.get('[data-testid="HotelSearchBox__SearchButton"]'),

    }


}

export default new HotelsPage();