class HotelsTab {

    elements = {
            
        locationInput: () => cy.get('[data-testid="AutoCompleteInput"]'),
        firstAutoComplete: () => cy.get('[data-testid="AutoCompleteResultItem0"]'),
        searchButton: () => cy.get('[data-testid="HotelSearchBox__SearchButton"]'),

    }
    
        
    clickOnSearchHotelButton(){
        this.elements.searchButton().click()
    }
    
    clickOnFirstAutoCompleteResult(){
        this.elements.firstAutoComplete().click()
    }

    selectAccommodationChoice(accommodationChoices) {
        cy.randomValue(accommodationChoices).then(data => {
            cy.get('select').select(data)
        })
    }
}
    
export default new HotelsTab();