describe('NSW.GOV.AU Home Page Cypress Test', () => {
    it('Visits COVID SAFE Business Registration Page and check Page Title', () => {
      cy.visit('https://dcs-qa.cd.pnx.com.au/register-your-business-as-covid-safe',{
        auth: {
          username: 'dcs',
          password: 'dcs!@#'
        }
      })
      cy.title().should('contain','Register your business as COVID Safe')
    })

    it('Click Top Check Boxes', () => {
      cy.get('.js-form-item-business-obligations > .nsw-form-checkbox__label').click()
      cy.get('.js-form-item-business-authorised > .nsw-form-checkbox__label').click()
      cy.get('.js-form-item-business-confirmed > .nsw-form-checkbox__label').click()
      
    })
    it('Enter Mandatory Data', () => {
      cy.get('#edit-business-name').type('Test Automation')
      cy.get('#edit-business-address').type('14 Macdoland St')
      cy.get('#edit-business-industry').select('Agriculture')
      cy.get('#edit-business-phone').type('04030218963')
      cy.get('#edit-business-email').type('sabbir.subhan@customerservice.nsw.gov.au')
      cy.get('#edit-abn').type('12345678911')
      cy.get('#edit-contact-name').type('Sabbir')
      cy.get('#edit-contact-phone').type('04030218963')
      cy.get('#edit-contact-email').type('sabbir.subhan@customerservice.nsw.gov.au')
    })

    it('Click Botton Check Boxes', () => {
      cy.get('.js-form-item-business-iagree > .nsw-form-checkbox__label').click()
      cy.get('.js-form-item-business-termsandconditions > .nsw-form-checkbox__label').click()
      cy.get('.js-form-item-business-updates > .nsw-form-checkbox__label').click()
      
    })
    it('Click on Submitt button',() =>{
      cy.get('#edit-submit').click()

    })
 


  })