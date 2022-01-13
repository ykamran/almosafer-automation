class SearchResult {

    elements =
        {
            lowestPriceFilterButton: () => cy.get('button[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]'),
        }

    isPriceNotSorted = false;
    minPrice = -1000;

    setMinPrice(price) {
        this.minPrice = price;
    }

    setPriceNotSorted(priceNotSorted) {
        this.isPriceNotSorted = priceNotSorted;
    }
}

export default new SearchResult();