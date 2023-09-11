/// <reference types="Cypress" />

describe('Privacy CAC TAT', function() {
    beforeEach(function(){
        cy.visit('/src/privacy.html')
    })

    it('testa a página da política de privacidade de forma independente', function() {  
        cy.get('#title').should('have.text','CAC TAT - Política de privacidade')
    })
})