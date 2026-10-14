describe('Orange HRM Tests', () => {

const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-title',
    wrongCredentialAlert: '.oxd-alert',

}
  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type ('Admin')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.sectionTitleTopBar).contains('Dashboard')
 })

   it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type ('Test')
    cy.get(selectorslist.passwordField).type('Test')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
 
 })
})