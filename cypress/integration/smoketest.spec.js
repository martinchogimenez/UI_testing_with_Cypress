describe ('Homepage validation', function (){

    it ('Validating A/B Testing link', function (){
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get(':nth-child(1) > a').click();
        cy.get('.large-4 > div').should('be.visible')
    })

    it ('Validating Add/Remove Elements link and funcionalities', function(){
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('ul > :nth-child(2) > a').click();
        cy.get('button').click();
        cy.get('.added-manually').click();
        cy.get('.added-manually').should('not.exist');
    })

    it ('Validating Basic Auth link and funcionalities', function(){
        cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('be.visible');
    })
})