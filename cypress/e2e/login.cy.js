describe('Login Module', () => {

  it('TC-L-01 Login with valid credentials', () => {
    cy.login('Admin', 'admin123')
    cy.url().should('include', '/dashboard')
  })

  it('TC-L-02 Login with invalid password', () => {
    cy.login('Admin', 'wrong123')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC-L-06 Logout', () => {
    cy.login('Admin', 'admin123')
    cy.get('.oxd-userdropdown-name').click()
    cy.contains('Logout').click()
    cy.url().should('include', '/auth/login')
  })

})
