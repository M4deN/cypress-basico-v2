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
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {  
        cy.get('#firstName').type('Alecio')
        cy.get('#lastName').type('Medeiros')
        cy.get('#email').type('Alecio@email,com')
        cy.get('#phone').type('4399999999')
        cy.get('#open-text-area').type('otimo curso!!!')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('campo telefone vazio, quando preenchido com valor errado', function() {  
        cy.get('#firstName').type('Alecio')
        cy.get('#lastName').type('Medeiros')
        cy.get('#email').type('Alecio@email.com')
        cy.get('#phone').type('aleciomedeiros').should('have.value', '')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('otimo curso!!!')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {  
        cy.get('#firstName').type('Alecio')
        cy.get('#lastName').type('Medeiros')
        cy.get('#email').type('Alecio@email.com')
        cy.get('#phone-checkbox').check().should('be.checked')
        cy.get('#open-text-area').type('otimo curso!!!')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {  
        cy.get('#firstName').type('Alecio').should('have.value', 'Alecio').clear().should('have.value', '')
        cy.get('#lastName').type('Medeiros').should('have.value', 'Medeiros').clear().should('have.value', '')
        cy.get('#email').type('Alecio@email.com').should('have.value', 'Alecio@email.com').clear().should('have.value', '')
        cy.get('#phone').type('4399999999').should('have.value', '4399999999').clear().should('have.value', '')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('otimo curso!!!').should('have.value', 'otimo curso!!!').clear().should('have.value', '')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {  
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('envia o formuário com sucesso usando um comando customizado', function() {  
        cy.fillMandatoryFieldsAndSubmit()
    })
    //Lessons 03
    it('seleciona um produto (YouTube) por seu texto', function() {  
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })
    it('seleciona um produto (Mentoria) por seu valor (value)', function() {  
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })
    it('seleciona um produto (Blog) por seu índice', function() {  
        cy.get('#product').select(1).should('have.value', 'blog')
    })
    //Lessons 04 
    it('marca o tipo de atendimento "Feedback"', function() {  
        cy.contains('Tipo de atendimento').should('have.text', 'Tipo de atendimento')
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
    })
    it('marca cada tipo de atendimento', function() {  
        cy.get('input[type="radio"]').should('have.length',3).each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })       
    })
    //Lessons 05 npm run cy:open
    it('marca ambos checkboxes, depois desmarca o último (versão que pede o exercicio)', function() {  
        cy.get('#email-checkbox').should('have.value','email').check().should('be.checked')
        cy.get('#phone-checkbox').should('have.value','phone').check()
        cy.get('#phone-checkbox').should('have.value','phone').last().uncheck().should('not.be.checked')
    })
    it('marca ambos checkboxes, depois desmarca o último (versão otimizada, desmarcando o primeiro)', function() {  
        cy.get('input[type="checkbox"]').should('have.length',2).check()
        cy.get('input[type="checkbox"]').should('have.length',2).first().uncheck().should('not.be.checked')
    })
  })
  
