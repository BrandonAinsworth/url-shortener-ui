//COMMENTS: I added these to match the iteration parameters. 
// Since they are kind of long for the it block, 
// I figured I'd make it easy and label them


// USER STORY 1: When a user visits the page, 
// they can view the page title and the existing shortened URLs

// USER STORY 2: When a user visits the page, they can view the Form with the proper inputs

// USER STORY 3: When a user fills out the form,
// the information is reflected in the input fields

describe('Iteration 3', () => {
  
  beforeEach(() => {
    cy.intercept('GET','http://localhost:3001/api/v1/urls', { fixture: 'url'})
    cy.visit('http://localhost:3000/')
  })
  
  it('Should pass User Story 1', () => {
    cy.get('[data-cy="page-title"]').contains('URL Shortener')
    cy.get('[data-cy="title"]').contains('Awesome photo')
    cy.get('[data-cy="short"]').contains('http://localhost:3001/useshorturl/1')
    cy.get('[data-cy="long"]').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })

  it('Should pass User Story 2', () => {
    cy.get('[data-cy="title-input"]').invoke('attr', 'placeholder').should('contain', 'Title')
    cy.get('[data-cy="url-input"]').invoke('attr', 'placeholder').should('contain', 'URL')
    cy.get('[data-cy="submit-button"]').contains('Shorten Please')
  })

  it('Should pass User Story 3', () => {
    cy.get('[data-cy="title-input"]').type('Travis')
    cy.get('[data-cy="url-input"]').type('Travis.com/TravisKalikoze/SuperCoolPage')
    cy.get('[data-cy="title-input"]').invoke('attr', 'value').should('contain', 'Travis')
    cy.get('[data-cy="url-input"]').invoke('attr', 'value').should('contain', 'Travis.com/TravisKalikoze/SuperCoolPage')
  })

})