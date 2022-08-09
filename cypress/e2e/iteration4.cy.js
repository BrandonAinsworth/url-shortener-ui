// COMMENTS: For uniformity
// USER STORY 1: When a user fills out and submits the form, the new shortened URL is rendered


describe('Iteration 4', () => {
  
  beforeEach(() => {
    cy.intercept('GET','http://localhost:3001/api/v1/urls', { fixture: 'url'})
    cy.visit('http://localhost:3000/')
  })
  
  it('Should pass User Story 1', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls',{ fixture: 'newurl' })
    cy.intercept('GET','http://localhost:3001/api/v1/urls', { fixture: 'addurl'})
    cy.get('[data-cy="title-input"]').type('Scott')
    cy.get('[data-cy="url-input"]').type('ScottizrllyKool.com/VoteToMakeScottsdaleMine')
    cy.get('[data-cy="submit-button"]').click()
    cy.get(':nth-child(2) > [data-cy="title"]').contains('Scott')
    cy.get(':nth-child(2) > [data-cy="long"]').contains('ScottizrllyKool.com/VoteToMakeScottsdaleMine')
    cy.get(':nth-child(2) > [data-cy="short"]').contains('http://localhost:3001/useshorturl/2')
  })
})