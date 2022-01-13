import dayjs from 'dayjs'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//


// Cypress.Commands.add('addProducts', (productName) => { 
// cy.get('h4.card-title').each((el,index,$list,) => {


//     if(el.text().includes(productName)){

//         cy.get('button.btn.btn-info').eq(index).click()

//     }  
//     })
// })

// function that returns the desired next date depending on Counter
Cypress.Commands.add('getNextDate', ($counter) => {
    const targetDate = dayjs()
        .add($counter, 'day')
        .format('DD')
    return cy.wrap(targetDate);
})

//funcation that returns random value
Cypress.Commands.add('randomValue', ($list) => {
    var colors = $list;
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    return cy.wrap(randColor);
})


//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
