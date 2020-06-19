describe('NSW.GOV.AU Home Page-Axe Test', () => {
    it('Visits Home and Has no detectable a11y violations', () => {
      cy.visit('https://www.nsw.gov.au/')
      cy.injectAxe()      
      cy.checkA11y()
    })

    it('Visits covid-19 and Has no detectable a11y violations', () => {
      cy.visit('https://www.nsw.gov.au/covid-19/')
      cy.injectAxe()      
      cy.checkA11y()
    })
   
  })