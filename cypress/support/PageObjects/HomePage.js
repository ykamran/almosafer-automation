import HotelsTab from "./HotelsTab";

class HomePage{

    elements =
    {
        languageDisplayHeader: () => cy.get('html'),
        currencyButton: () => cy.get('[data-testid="Header__CurrencySelector"]'),
        whatsappContactNumber: () => cy.get('a[data-testid="ContactUs__WhatsApp"]'),
        callUsFooter: () => cy.get('[data-testid="ContactUs__Number"]'),
        supportFooter: () => cy.get('.sc-ESoVU > strong'),
        qitafLogo: () => cy.get('[data-testid="Footer__QitafLogo"]'),
        flightsTab: () => cy.get('#uncontrolled-tab-example-tab-flights'),
        hotelTab: ()=> cy.get('#uncontrolled-tab-example-tab-hotels'),
        fromDateCalender: ()=>  cy.get('[data-testid="FlightSearchBox__FromDateButton"] > span[class^=sc-]:nth(1)'),
        toDateCalender: ()=>  cy.get('[data-testid="FlightSearchBox__ToDateButton"] > span[class^=sc-]:nth(1)'),
        hotelsTab: ()=>  cy.get('#uncontrolled-tab-example-tab-hotels'),
        currentLanguage: ()=> cy.get('a[data-testid="Header__LanguageSwitch"]'),
        signInButton: ()=> cy.get('[data-testid="Header__SignInButton"]')
    }

    navigate(){
        cy.visit('');
    } 

    switchToHotelTab(){
        this.elements.hotelsTab().click()
    }

    verifyDefaultCurrency(defaultCurrency)
    {
        this.elements.currencyButton().should('contain', defaultCurrency) 
    }


    verifyQitafLogo(){
        this.elements.qitafLogo().should('be.visible')  
    }
    


    verifyFlightDepartureDate(NumberOfDaysIncreaseDeparture)
    {
        cy.getNextDate(NumberOfDaysIncreaseDeparture).then(data => {
            this.elements.fromDateCalender().should('have.text',data)
        })
    }   

    verifyArrivalDate(NumberOfDaysIncreaseArrival)
    {
        cy.getNextDate(NumberOfDaysIncreaseArrival).then(data => {
        this.elements.toDateCalender().should('have.text',data)
     })
    }

    verifyHotelTabIsDisabled()
    {
        this.elements.hotelTab().should('have.attr', 'aria-selected', 'false');
    }

    verifyFlightsTabIsEnabled()
    {
        this.elements.flightsTab().should('have.attr', 'aria-selected', 'true');
    }

    verifyDefaultLanguageIsArabic(){
       this.elements.languageDisplayHeader().should('have.attr', 'lang', 'ar');
    }

    verifyWhatsappContact(whatsappContactNumber){
        this.elements.whatsappContactNumber().should('have.text',whatsappContactNumber)
    }

    verifyCallUsContact(callUsContact){
        this.elements.callUsFooter().should('have.text', callUsContact)
    }

    verifySignInButton(){
        this.elements.signInButton().should("be.visible")
    }

    switchRandomLanguageAndVerify(listOfsupportedLanguages) {
        let homePage = this;
        cy.randomValue(listOfsupportedLanguages).then(randomSelectedLanguage => {

            homePage.elements.currentLanguage().then(function (element) {
                let currentLanguage;

                if (element.text() === "English") {
                    currentLanguage = "ar";
                }
                else {
                    currentLanguage = "en"
                }
                if (randomSelectedLanguage !== currentLanguage)
                {
                    homePage.elements.currentLanguage().click()
                    expect(cy.url().should('include', randomSelectedLanguage))
                } else {
                    expect(cy.url().should('include', randomSelectedLanguage))
                }
            })
        })
    }

    verifyLanguageAndSetLocation(englishLocations, arabicLocations)
    {
        let homePage = this;
        homePage.elements.currentLanguage().then(function(element)
        {
            if(element.text() === 'English'){
                cy.randomValue(arabicLocations).then(data => {
                    HotelsTab.elements.locationInput().type(data)
                })
            }
            else
                cy.randomValue(englishLocations).then(data => {
                    HotelsTab.elements.locationInput().type(data)
                })
        })
    }
}

export default new HomePage();