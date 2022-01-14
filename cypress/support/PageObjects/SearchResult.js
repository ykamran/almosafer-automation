class SearchResult
{
    elements = {            
        lowestPriceFilterButton: () => cy.get('button[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]'),
        loadingBar: () => cy.get('p.before'),
        mostPopularButton: () => cy.get('[data-testid="HotelSearchResult__sort__RECOMMENDATION"]'),
        resultFoundCount: () => cy.get('[data-testid="HotelSearchResult__resultsFoundCount"]'),
        visaLogo: () => cy.get('[data-testid="Footer__VisaCardLogo"]')
    }

    isPriceNotSorted = false;
    minPrice = -1;


    verifyLoadingIsCompleted(){
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
            cy.log('Element At: ' + index + ', Element Price: ' + price + ', Min. Price: ' + searchResult.minPrice + ', isPriceNotSorted: ' + searchResult.isPriceNotSorted);

            if (index === 0)
            {
                searchResult.minPrice = parseFloat(price);
                cy.log('Setting Up Initial Min Price: ' + searchResult.minPrice);
            }
            else
            {
                if (price < searchResult.minPrice)
                {
                    searchResult.isPriceNotSorted = true;
                    searchResult.minPrice = parseFloat(price);

                    cy.log('Found another Min Price: ' + searchResult.minPrice);
                }
            }

        }).then(() => {
            cy.log('Final Min Price: ' + searchResult.minPrice);
            cy.log('SearchResult -> verifySortingByLowestPrice Completed.');
        });
    }
}

export default new SearchResult();