/// <reference types="cypress" />

describe('test the Syllabus tab of the teacher web app', () => {
  beforeEach(() => {
    cy.visit('https://teacher-phillipmm.replit.app/');
  });
  
  it('navs to syllabus tab and verifies presence of UI elements', () => {
    cy.get('#syllabus-tab').click();
    cy.get('#newEntryForm').should('not.be.visible');
    cy.get('#bulkAddForm').should('not.be.visible');
    cy.get('#editEntryForm').should('not.be.visible');
    cy.get('#confirmDeleteForm').should('not.be.visible');
    cy.get('#author-content-container').should('not.be.visible');
    cy.get('#newAssignmentForm').should('not.be.visible');

    // TODO: check for presence of all buttons

  });

  it('verifies behavior of New Assignment button and Form submission', () => {
    cy.get('#addNewBookButton').click();
    cy.wait(1000);
    cy.get('#newEntryForm').should('be.visible')
    cy.contains('Add New Entry').should('exist');
    cy.get('#newEntryForm-book').should('exist');
  });


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
    // cy.contains('Save').click(); //TODO: uncommment this

    // TODO: check for updated addition of book
  });

    it('verifies behavior of Author Books buttons', () => {

    });

    it('verifies behavior of Edit Entry button and Form', () => {

    });

    it('verifies behavior of Complete Entry button', () => {

    });

    it('verifies behavior of Delete Entry button', () => {

    });
})
