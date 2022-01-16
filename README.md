# Almosafer Automation
## Automation Test Coverage

Prerequisite

* Node.js 12 or 14 and above
* Install npm


Installing Project

* Clone repo
* Go to project Directory
* Run following command:
    * npm install


Code Structure

* cypress/integration/almosafer-automation.js : Contains the test execution Script
* cypress/support/PageObjects : Contains all pages classes and its implementation.
* cypress/support/commands.js : Customized commands of cypress 
* cypress/results : Contains the execution Reports
* package.json : Contains Dependencies
* cypress/results : Reports of execution
* cypress/videos : Contains Videos of the execution
* cypress/screenshots : Contains the Screenshots


How to run the Script:

    * npx cypress run --spec cypress/integration/almosafer-automation.js
* Run the script headed 
    * npx cypress run --headed --spec cypress/integration/almosafer-automation.js

* Report will be generated at the following location :
    * cypress/results


Steps Of Execution

* Visit URL
* Verify Default Language of Home Page
* Verify default curreny is SAR
* Verify contact number
* Verify “qitaf” logo is displayed in footer
* Check Hotel tab is disabled by Default
* Flight departure date is set to “today+1day” by default
* Flight return date is set to “today+2day” by default
* Check Flights tab is enabled by Default
* Verify Whatsapp contact number
* Verify SignIn button is visible
* Random method to change language and verify if the language is changed
* Switch to Hotels Tab
* Input Location (Select Different Values for Different Locations)
* Click First Autocomplete Result
* Randomly select option of people
* Click on Search Button
* Verify the Loading is complete/loading bar is not visible
* Verify the Results Found Count is Visible
* Verify the searched location as same as the selected input location
* Click on lowest price Filter Button
* Verify the MostPopular Button is visible
* Verify the Visa Logo is visible
* Verify the sorting is as selected (The lowest price at top)
* Verify the search Filter is visible