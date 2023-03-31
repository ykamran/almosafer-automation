/// <reference types="Cypress" />
import HomePage from '../support/PageObjects/HomePage'
import SearchResult from '../support/PageObjects/SearchResult'
import HotelsTab from "../support/PageObjects/HotelsTab";


describe("Almosafer Automation", ()=>
{
    beforeEach(function(){
        cy.fixture('almosafer').then(function(data)
        {
            this.data = data
        })
})

//Visit URL
it("Visit URL",function(){
    HomePage.navigate()
})


//Verify Default Language is AR
 it("Verify Default Language of Home Page",function(){  
    HomePage.verifyDefaultLanguageIsArabic();
 })


// //verify the default curreny is SAR
it("Verify default curreny is SAR",function(){   
    HomePage.verifyDefaultCurrency(this.data.defaultCurrency)
 })
 

//verify contact number
 it("Verify contact number",function(){ 
    HomePage.verifyCallUsContact(this.data.callUs);
  })


// //Verify “qitaf” logo is displayed in footer
 it("Verify “qitaf” logo is displayed in footer",function(){  
    HomePage.verifyQitafLogo()
  } )


//Check Hotel tab is disabled by Default
 it("Check Hotel tab is disabled by Default",function(){  
    HomePage.verifyHotelTabIsDisabled()
 } )


//Flight departure date is set to “today+1day” by default
it("Flight departure date is set to “today+1day” by default",function(){  
    HomePage.verifyFlightDepartureDate(this.data.numberOfDaysIncreaseDeparture);
} )


//Flight return date is set to “today+2day” by default
it("Flight return date is set to “today+2day” by default",function(){  
    HomePage.verifyArrivalDate(this.data.numberOfDaysIncreaseArrival);
} )


 //Check Flights tab is Enabled by Default
 it("Check Flights tab is enabled by Default",function(){  
    HomePage.verifyFlightsTabIsEnabled()
 } )

 //verify Whatsapp contact number
it("Verify Whatsapp contact number",function(){ 
    HomePage.verifyWhatsappContact(this.data.whatsappContactNumber);
  })

   //verify SignIn button is visible
it("Verify SignIn button is visible",function(){ 
    HomePage.verifySignInButton();
  })

//Use random method to change language and verify if the language is as chosen
it("Random method to change language and verify if the language is changed",function(){
    HomePage.switchRandomLanguageAndVerify(this.data.supportedLanguages)
 })


//Switch to Hotels Tab
it("Switch to Hotels Tab",function(){  
    HomePage.switchToHotelTab();
} )


//Input Location (Select Different Values for Different Locations)
it("Input Location (Select Different Values for Different Locations)",function(){
    HomePage.verifyLanguageAndSetLocation(this.data.englishLocations, this.data.arabicLocations)
})


//Click First Autocomplete Result
it("Click First Autocomplete Result",function(){  
        HotelsTab.clickOnFirstAutoCompleteResult()
} )


 //Randomly select “1 room, 2 adults, 0 children” or “1 room, 1 adult, 0 children” option
it("Randomly select option of people",function(){
    HotelsTab.selectAccommodationChoice(this.data.accommodationChoices)
})

//Click on Search Button
it("Click on Search Button",function(){  

    HotelsTab.clickOnSearchHotelButton();
} )

//Wait Untill Loading Bar is not visible
it("Verify the Loading  is complete/loading bar is not visible",function(){  
    SearchResult.verifyLoadingIsCompleted()
} )

//Verify the Results Found Count is Visible
it("Verify the Results Found Count is Visible",function(){  
   SearchResult.verifyResultFoundCountVisibility();
} )

//Verify the searched location as same as the selected input location
it("Verify the searched location as same as the selected input location",function(){  
    SearchResult.verifySearchLocationIsCorrect();
 } )

//click on lowest price
it("Click on lowest price Filter Button",function(){   
    SearchResult.elements.lowestPriceFilterButton().click();
} )


//Verify the MostPopular Button is visible
it("Verify the MostPopular Button is visible",function(){   
    SearchResult.verifyMostPopularButtonVisibility()
} )

//Verify the Visa Logo
it("Verify the Visa Logo is visible",function(){   
    SearchResult.verifyVisaLogoVisibility()
} )


//Verify the sorting is as selected (Lowest Price at top)
it("Verify the sorting is as selected (Lowest Price at top)",function(){  
    SearchResult.verifySortingByLowestPrice()
})

//Verify the search Filter is visible
it("Verify the search Filter is visible",function(){  
    SearchResult.verifySearchFilterIsVisible()
})

})


