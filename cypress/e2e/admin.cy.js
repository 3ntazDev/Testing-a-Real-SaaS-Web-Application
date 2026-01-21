describe('Admin Module', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('TC-ADM-01 Add user', () => {
  cy.get('a[href*="admin"]').click()
  cy.contains('Add').click()

  cy.get('input.oxd-input').eq(1).type('testuser01')
  cy.get('input[type="password"]').first().type('Test@123')
  cy.get('input[type="password"]').last().type('Test@123')

  cy.contains('Save').click()
  cy.url().should('include', '/admin/viewSystemUsers')
})


  

})
