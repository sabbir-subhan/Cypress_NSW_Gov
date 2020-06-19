describe('NSW.GOV.AU Home Page-Axe Test', () => {
    it('Visits NSW.GOV.AU and Has no detectable a11y violations', () => {
      cy.visit('https://dcs-staging.cd.pnx.com.au/',
      {
        auth: {
          username: 'dcs',
          password: 'dcs!@#'
        }
      }
      )
      cy.injectAxe()      
      cy.checkA11y()
    })
   
  })