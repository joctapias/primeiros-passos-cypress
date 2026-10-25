import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-title',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: ".orangehrm-firstname",
    lastNameField: ".orangehrm-lastname",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateClosePage: "[data-v-d7b71de4='']",
    submitButton: "[type='submit']",

}

  it.only('User info Update Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type (userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorslist.lastNameField).clear().type('LastName')
    cy.get(selectorslist.genericField).eq(4).clear().type(555566666)
    cy.get(selectorslist.genericField).eq(5).clear().type(555566666)
    cy.get(selectorslist.genericField).eq(6).clear().type(555566666)
    cy.get(selectorslist.dateField).eq(0).type('2005/03/10')
    cy.get(selectorslist.dateClosePage).eq(2).click()
    cy.get(selectorslist.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Success')
    
 })

   it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type (userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
 
 })
})