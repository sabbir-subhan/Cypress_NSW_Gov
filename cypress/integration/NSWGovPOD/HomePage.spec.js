describe('NSW.GOV.AU Home Page Cypress Test', () => {
    it('Visits NSW.GOV.AU and check Page Title', () => {
      cy.visit('https://www.nsw.gov.au')
      cy.title().should('contain','Home')
    })

    it('Enter data in Central Search box', () => {
        cy.get('#home-search-autosuggest-input').type('corona')
        cy.get('#home-search-autosuggest > .search-bar__submit').click()
        //search result page should have value 
        cy.get('.search-results__title > h2').should('have.text','Search results for ‘corona’')
        
      })
  })