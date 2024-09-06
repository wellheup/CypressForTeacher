/// <reference types="cypress" />

describe('test the Syllabus tab of the teacher web app', () => {
  it('goes to index page', () => {
    cy.visit('https://teacher-phillipmm.replit.app/');

    cy.get('#syllabus-tab').click();

    cy.get('#newEntryForm').should('not.be.visible')
    cy.wait(1000);
    cy.get('#addNewBookButton').click();
    cy.wait(1000);
    cy.get('#newEntryForm').should('be.visible')
    cy.contains('Add New Entry').should('exist');
    cy.get('#newEntryForm-book').should('exist');
    cy.get('#newEntryForm-author').should('exist');
    cy.get('#newEntryForm-series').should('exist');
    cy.get('#newEntryForm-num_in_series').should('exist');
    cy.get('#newEntryForm-is_completed').should('exist');
    cy.get('#newEntryForm-added_by').should('exist');
    cy.get('#newEntryForm-season').should('exist');
    cy.get('#newEntryForm-is_extra_credit').should('exist');
    cy.get('#newEntryForm-date_completed').should('exist');
    cy.get('#newEntryForm-up_votes').should('exist');
    cy.get('#newEntryForm-down_votes').should('exist');
    cy.get('#newEntryForm-genre').should('exist');
    cy.contains('Save').should('exist');
    cy.contains('Cancel').should('exist');
    // click cancel
    cy.contains('Cancel').click();
    cy.get('#newEntryForm').should('not.be.visible');
    cy.get('#addNewBookButton').click();
    // fill out form
    //...
    // cy.get('Save').click();


    // make sure pop ups are all invisible
    // check for presence of all buttons
    // click each button
      // check for popup visibility changes
      // fill out popup and mimic the unit tests

  })
})
