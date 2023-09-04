Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Alecio')
    cy.get('#lastName').type('Medeiros')
    cy.get('#email').type('Alecio@email.com')
    cy.get('#phone').type('4399999999')
    cy.get('#open-text-area').type('otimo curso!!!')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
})