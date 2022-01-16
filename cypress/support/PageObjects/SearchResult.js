import HotelsTab from "./HotelsTab";

class SearchResult
{
    elements = {            
        lowestPriceFilterButton: () => cy.get('button[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]'),
        loadingBar: () => cy.get('p.before'),
        mostPopularButton: () => cy.get('[data-testid="HotelSearchResult__sort__RECOMMENDATION"]'),
        resultFoundCount: () => cy.get('[data-testid="HotelSearchResult__resultsFoundCount"]'),
        visaLogo: () => cy.get('[data-testid="Footer__VisaCardLogo"]'),
        locationInput: () => cy.get('[data-testid="AutoCompleteInput"]'),
        searchFilter:() => cy.get('[data-testid="HotelSearchResult__filters__filterByName__input"]'),
    }

    isPriceSorted = true;
    minPrice = -1;

    verifyLoadingIsCompleted(){
        cy.waitUntil(() => this.elements.resultFoundCount().should("exist"))
        this.elements.loadingBar().should("not.exist")
    }

    verifyResultFoundCountVisibility(){
        this.elements.resultFoundCount().should("be.visible")
    }

    verifyMostPopularButtonVisibility(){
        this.elements.mostPopularButton().should("be.visible")
    }
    
    verifyVisaLogoVisibility(){
        this.elements.visaLogo().should("be.visible")
    }

    verifySortingByLowestPrice()
    {
        cy.log('SearchResult -> verifySortingByLowestPrice Started.');
        let priceListElements = cy.get('.Price__Wrapper.PriceDisplay__FinalRate');
        let searchResult = this;

        priceListElements.each((element, index, list) => {

            let price = element.find('.Price__Value').text();
            cy.log('Element At: ' + index + ', Element Price: ' + price + ', Min. Price: ' + searchResult.minPrice + ', isPriceSorted: ' + searchResult.isPriceSorted);

            if (index === 0)
            {
                searchResult.minPrice = parseFloat(price);
                cy.log('Setting Up Initial Min Price: ' + searchResult.minPrice);
            }
            else
            {
                if (price < searchResult.minPrice)
                {
                    searchResult.isPriceSorted = false;
                    searchResult.minPrice = parseFloat(price);

                    cy.log('Found another Min Price: ' + searchResult.minPrice);
                }
            }

        }).then(() => {
            expect(searchResult.isPriceSorted).to.be.true
            cy.log('Final Min Price: ' + searchResult.minPrice);
            cy.log('SearchResult -> verifySortingByLowestPrice Completed.');
        });
    }

    verifySearchLocationIsCorrect(){
         this.elements.locationInput().should('have.attr', 'value', HotelsTab.inputLocation);
    }
    
    verifySearchFilterIsVisible(){
        this.elements.searchFilter().should("be.visible")
    }

}

export default new SearchResult();