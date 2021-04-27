describe('Burrito Orders', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', { fixture:'mock-orders.json' })
    cy.intercept('POST','http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      body: {
        id: 4, 
        name: 'Jerry', 
        ingredients: ['beans', 'sofritas', 'carnitas']
      }
    })
    cy.visit('http://localhost:3000/?name=&beans=')
  })

  it('should display a header', () => {
    cy.contains('Burrito Builder')
  })

  it('should display a form with a text input, a list of buttons, and a submit button', () => {
    cy.get('form')
    cy.get('input[name=name]')
    cy.get('button[name=beans]')
    cy.get('button')
      .contains('Submit Order')
  })

  it('should display all current orders', () => {
    cy.get('section').children().should('have.length', 4)
    cy.get('h3')
      .contains('Tic');
    cy.get('ul[class=ingredient-list]')
      .contains('steak')
    cy.get('ul[class=ingredient-list]')
    .contains('cilantro')
    cy.get('ul[class=ingredient-list]')
    .contains('lettuce')
  })

  it('should add a new order card to the UI when a name and ingredients are submitted', () => {
    cy.get('input[name=name]')
      .type('Jerry')
    cy.get('button[name=beans]')
      .click()
    cy.get('button[name=sofritas]')
      .click()
    cy.get('button[name=carnitas]')
      .click()
    cy.get('button.submit-button')
      .click()
    cy.get('section').children().should('have.length', 5)
    cy.get('h3')
      .contains('Jerry');
  })
});