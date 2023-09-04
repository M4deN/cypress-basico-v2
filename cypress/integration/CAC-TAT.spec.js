/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('/src/index.html')
    })

    it('verifica o título da aplicação', function() {  
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'otimo curso!!! otimo curso!!! otimo curso!!! otimo curso!!! otimo curso!!! otimo curso!!! otimo curso!!! otimo curso!!! otimo curso!!! otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!  otimo curso!!!'
        cy.get('#firstName').type('Alecio')
        cy.get('#lastName').type('Medeiros')
        cy.get('#email').type('Alecio@email.com')
        cy.get('#phone').type('4399999999')
        cy.get('#open-text-area').type(longText,{delay:0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {  
        cy.get('#firstName').type('Alecio')
        cy.get('#lastName').type('Medeiros')
        cy.get('#email').type('Alecio@email,com')
        cy.get('#phone').type('4399999999')
        cy.get('#open-text-area').type('otimo curso!!!')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('campo telefone vazio, quando preenchido com valor errado', function() {  
        cy.get('#firstName').type('Alecio')
        cy.get('#lastName').type('Medeiros')
        cy.get('#email').type('Alecio@email.com')
        cy.get('#phone').type('aleciomedeiros').should('have.value', '')
        cy.get('#open-text-area').type('otimo curso!!!')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {  
        cy.get('#firstName').type('Alecio')
        cy.get('#lastName').type('Medeiros')
        cy.get('#email').type('Alecio@email.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('otimo curso!!!')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function() {  
        cy.get('#firstName').type('Alecio').should('have.value', 'Alecio').clear().should('have.value', '')
        cy.get('#lastName').type('Medeiros').should('have.value', 'Medeiros').clear().should('have.value', '')
        cy.get('#email').type('Alecio@email.com').should('have.value', 'Alecio@email.com').clear().should('have.value', '')
        cy.get('#phone').type('4399999999').should('have.value', '4399999999').clear().should('have.value', '')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('otimo curso!!!').should('have.value', 'otimo curso!!!').clear().should('have.value', '')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
  })
