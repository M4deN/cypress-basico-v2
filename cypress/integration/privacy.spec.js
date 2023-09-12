Cypress._.times(5, function(){
    beforeEach(function(){
        cy.visit('/src/privacy.html')
    })
    it('testa a página da política de privacidade de forma independente', function() {  
        cy.get('#title').should('have.text','CAC TAT - Política de privacidade')
    })
})