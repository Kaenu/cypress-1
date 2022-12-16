/// <reference types="Cypress" />

describe('home/landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost')
    cy.contains('Categories').click()
    cy.get('input#username-field').type('root')
    cy.get('input#password-field').type('sUP3R53CR3T#')
    cy.get('button[type=submit').click()
    cy.contains('Home').click()
  })

  it('shows the title', () => {
    cy.visit('http://localhost')
    cy.get('body').should('contain.text', 'Welcome to Productive!')
  })
  
  it('lists the products', () => {
    cy.contains('Products').click()
    cy.contains('bread3')
    cy.contains('Frisches Brot')
  })

  it('creates a new product', () => {
    cy.contains('Products').click()
    cy.contains('Create New Product').click()
    cy.get('input#name-field').type('some new product')
    cy.get('input#sku-field').type('A12390esf')
    cy.get('input#price-field').type('420.00')
    cy.get('input#stock-field').type('10')
    cy.contains('Save and Close').click()
  })

  it('can update a product', () => {
    cy.contains('Products').click()
    cy.contains('Edit').click()
  })

  it('can delete a product', () => {
    // ? how can we check that we have deleted the product successfully
  })

  it('shows the login button if we are logged out')
  it('shows the logout button if we are logged in')
})