/// <reference types="Cypress" />
import HomePage from '../../support/PageObjects/HomePage'
import HotelsPage from '../../support/PageObjects/HotelsPage'
import SearchResult from '../../support/PageObjects/SearchResult'

describe("Almosafer Automation", function () {
    beforeEach(function () {
        cy.fixture('almosafer').then(function (data) {
            this.data = data
        })

    })

//Visit URL
    it("Visit URL", function () {
        HomePage.navigate()
    })


// //Verify Default Language is AR
    it("Verify Default Language of Home Page", function () {
        HomePage.elements.languageDisplayHeader().then(function (element) {
            if (element.text() == "English") {
                HomePage.elements.languageDisplayHeader().should('have.text', this.data.defaultLangauageTextArabic)
            } else {
                HomePage.elements.languageDisplayHeader().should('have.text', this.data.defaultLangauageTextEnglish)
            }


        })
    })


// //verify the default curreny is SAR
    it("Verify default currency is SAR", function () {
        HomePage.elements.currencyButton().should('contain', this.data.defaultCurrency)
    })


//verify contact numbers
    it("Verify contact numbers", function () {
        HomePage.elements.whatsappConatctHeader().should('have.text', this.data.whatsappConatctHeader)
        HomePage.elements.callUsFooter().should('have.text', this.data.callUs)
    })


// //Verify “qitaf” logo is displayed in footer
    it("Verify “qitaf” logo is displayed in footer", function () {
        HomePage.elements.qitafLogo().should('be.visible')
    })


// //Check Hotel tab is disabled by Default
    it("Check Hotel tab is disabled by Default", function () {
        HomePage.elements.hotelTab().should('have.attr', 'aria-selected', 'false')
    })

//Flight departure date is set to “today+1day” by default
    it("Flight departure date is set to “today+1day” by default", function () {
        cy.getNextDate(this.data.NumberOfDaysIncreaseDeparture).then(data => {
            HomePage.elements.fromDateCalender().should('have.text', data)
        })
    })


//Flight return date is set to “today+2day” by default
    it("Flight return date is set to “today+2day” by default", function () {
        cy.getNextDate(this.data.NumberOfDaysIncreaseArrival).then(data => {
            HomePage.elements.toDateCalender().should('have.text', data)
        })
    })


//Use random method to change language and verify if the language is as chosen
    it("Random method to change language and verify if the language is changed", function () {
        cy.randomValue(this.data.availableLanguages).then(randomLanguage => {
            HomePage.elements.languageDisplayHeader().then(function (element) {
                if (element.text() == "English") {
                    var currentLanguage = "ar"
                } else {
                    currentLanguage = "en"
                }
                if (randomLanguage != currentLanguage) {
                    HomePage.elements.languageDisplayHeader().click()
                    var UpdatedLanguage = randomLanguage;
                    expect(cy.url().should('include', UpdatedLanguage))
                } else {
                    UpdatedLanguage = currentLanguage;
                    expect(cy.url().should('include', UpdatedLanguage))

                }
            })
        })

    })


//Switch to Hotels Tab
    it("Switch to Hotels Tab", function () {
        HomePage.switchToHotelTab();
    })


//Input Location (Select Different Values for Different Locations)
    it("Input Location (Select Different Values for Different Locations)", function () {
        HomePage.elements.languageDisplayHeader().then(function (element) {
            if (element.text() == "English") {
                cy.randomValue(this.data.arabicLocation).then(data => {
                    HotelsPage.elements.locationInput().type(data)
                })
            } else
                cy.randomValue(this.data.englishLocation).then(data => {
                    HotelsPage.elements.locationInput().type(data)
                })
        })
    })


//Click First Autocomplete Result
    it("Click First Autocomplete Result", function () {
        HotelsPage.elements.firstAutoComplete().click()
    })

    //Randomly select “1 room, 2 adults, 0 children” or “1 room, 1 adult, 0 children” option
    it("Randomly select option of people", function () {
        cy.randomValue(this.data.accomodationChoicesEnglish).then(data => {
            cy.get('select').select(data)
        })

    })

//Click on Search Button
    it("Click on Search Button", function () {
        HotelsPage.elements.searchButton().click()

        cy.get('.sc-bdVaJa.iXZJbM.container > section > .sc-gNJABI').should('')
    })


//click on lowest price
    it("Click on lowest price Filter Button", function () {
        SearchResult.elements.lowestPriceFilterButton().click();

        cy.log('Search Result Elements on lowestPriceFilterButton Started.');
        let priceListElements = cy.get('.Price__Wrapper.PriceDisplay__FinalRate');
        priceListElements.each((element, index, list) => {
            let price = element.find('.Price__Value').text();
            cy.log('Element At: ' + index + ', Element Price: ' + price + ', Min. Price: ' + SearchResult.minPrice + ', isPriceNotSorted: ' + SearchResult.isPriceNotSorted);

            if (SearchResult.minPrice == -1000) {
                SearchResult.setMinPrice(parseFloat(price));
                cy.log('Setting Up Initial Min Price: ' + SearchResult.minPrice);
            } else {
                if (price < SearchResult.minPrice) {
                    SearchResult.setPriceNotSorted(true);
                    SearchResult.setMinPrice(parseFloat(price));

                    cy.log('Found another Min Price: ' + SearchResult.minPrice);
                }
            }
        }).then(() => {
            cy.log('Final Min. Price: ' + SearchResult.minPrice);
            cy.log('Search Result Elements on lowestPriceFilterButton Completed.');
        });
    })
})



