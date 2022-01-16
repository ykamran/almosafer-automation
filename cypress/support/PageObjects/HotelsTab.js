
class HotelsTab {

    elements = {
            
        locationInput: () => cy.get('[data-testid="AutoCompleteInput"]'),
        firstAutoComplete: () => cy.get('[data-testid="AutoCompleteResultItem0"]'),
        searchButton: () => cy.get('[data-testid="HotelSearchBox__SearchButton"]'),

    }
    
    inputLocation = ""
        
    clickOnSearchHotelButton(){
        this.elements.searchButton().click()
    }
    
    clickOnFirstAutoCompleteResult(){
        this.elements.firstAutoComplete().click()
        this.getinputLocationValue()
    }

    selectAccommodationChoice(accommodationChoices) {
        cy.randomValue(accommodationChoices).then(data => {
            cy.get('select').select(data)
        })
    }

    getinputLocationValue(){
        let hotelsTab = this;
        cy.get('input[data-testid="AutoCompleteInput"]').invoke('val').then(data => {
            hotelsTab.inputLocation = data.valueOf()
            cy.log("Location That is going to be searched is " + hotelsTab.inputLocation)
         })
    }
}
    
export default new HotelsTab();