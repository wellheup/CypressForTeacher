/// <reference types="cypress" />

describe('test the Syllabus tab of the teacher web app', () => {
  it('navs to syllabus tab and verifies presence of UI elements', () => {
    cy.visit('https://teacher-phillipmm.replit.app/');

    cy.get('#syllabus-tab').click();

    cy.get('#newEntryForm').should('not.be.visible')
    cy.wait(1000);
    // TODO: check for each form to be invisible
    // TODO: check for presence of all buttons

  })

  it('verifies behavior of New Assignment button and Form submission', () => {
    cy.get('#addNewBookButton').click();
    cy.wait(1000);
    cy.get('#newEntryForm').should('be.visible')
    cy.contains('Add New Entry').should('exist');
    cy.get('#newEntryForm-book').should('exist');
  })


  it('verifies behavior of Add Book button and Form submission', () => {
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
    cy.contains('Cancel').click();
    cy.get('#newEntryForm').should('not.be.visible');
    cy.get('#addNewBookButton').click();

    // fill out form
    cy.wait(1000);
    cy.get('#newEntryForm').should('be.visible')
    cy.contains('Add New Entry').should('exist');
    cy.get('#newEntryForm-book').type("New Book Title test");
    cy.get('#newEntryForm-author').type("Author Name test");
    cy.get('#newEntryForm-series').type("Series Name test");
    cy.get('#newEntryForm-num_in_series').type('1');
    cy.get('#newEntryForm-added_by').type("Tester test");
    cy.get('#newEntryForm-season').type('1');
    cy.get('#newEntryForm-is_extra_credit').click();
    cy.get('#newEntryForm-genre').type("Fiction");
    cy.get('Save').click();


    // click each button
      // check for popup visibility changes
      // fill out popup and mimic the unit tests

  })
})
