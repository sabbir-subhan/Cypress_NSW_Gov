describe('NSW.GOV.AU Home Page-Axe Test', () => {
    it('Visits NSW.GOV.AU and Has no detectable a11y violations', () => {
      cy.visit('https://www.nsw.gov.au/covid-19')
      cy.injectAxe()      
      cy.checkA11y()
    })
   
  })