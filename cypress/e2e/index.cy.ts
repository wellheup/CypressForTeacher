/// <reference types="cypress" />

describe('test the Syllabus tab of the teacher web app', () => {
  it('goes to index page', () => {
    cy.visit('https://teacher-phillipmm.replit.app/');

    cy.get('.nav-item').should('have.length', 5);
    // check for each tab
  })
})
