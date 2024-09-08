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

    cy.get('#newAssignmentButton').should('exist');
    cy.get('#bulkAddButton').should('exist');
    cy.get('.bootstrap-switch-handle-off').should('exist');
    cy.get('#addNewBookButton').should('exist');
    cy.get(':nth-child(1) > [style="white-space: nowrap; padding: 5px"]')
      .within(()=>{
        cy.contains('Edit').should('exist');
        cy.contains('Delete').should('exist');
      });
    cy.get(':nth-child(1) > .col-author > div > .author-link').should('exist');
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

    cy.wait(1000);
    cy.contains('New Book Title test').should('have.length', 1);
  });

  it('verifies behavior of Edit Entry button and Form', () => {
    cy.contains('New Book Title test')
      .parent()
      .within(()=>{
        cy.contains('Edit').click();
      });
    cy.wait(1000);
    cy.get('#editEntryForm').should('be.visible')
    cy.contains('Edit Entry').should('exist');
    cy.get('#editEntryForm-book').should('exist');
    cy.get('#editEntryForm-author').should('exist');
    cy.get('#editEntryForm-series').should('exist');
    cy.get('#editEntryForm-num_in_series').should('exist');
    cy.get('#editEntryForm-is_completed').should('exist');
    cy.get('#editEntryForm-added_by').should('exist');
    cy.get('#editEntryForm-season').should('exist');
    cy.get('#editEntryForm-is_extra_credit').should('exist');
    cy.get('#editEntryForm-date_completed').should('exist');
    cy.get('#editEntryForm-up_votes').should('exist');
    cy.get('#editEntryForm-down_votes').should('exist');
    cy.get('#editEntryForm-genre').should('exist');
    cy.contains('Save').should('exist');
    cy.contains('Cancel').should('exist');
    cy.contains('Cancel').click();
    cy.get('#editEntryForm').should('not.be.visible');
    cy.contains('New Book Title test')
      .parent()
      .within(()=>{
        cy.contains('Edit').click();
      });

    // fill out form
    cy.wait(1000);
    cy.get('#editEntryForm').should('be.visible')
    cy.contains('Edit Entry').should('exist');
    cy.get('#editEntryForm-book').type("Edited Book Title test");
    cy.get('#editEntryForm-author').type("Edited Author test");
    cy.get('#editEntryForm-series').type("Edited Series test");
    cy.get('#editEntryForm-num_in_series').type('2');
    cy.get('#editEntryForm-added_by').type("Editor test");
    cy.get('#editEntryForm-season').type('2');
    cy.get('#editEntryForm-is_extra_credit').click();
    cy.get('#editEntryForm-date_completed').type('01/01/2023');
    cy.get('#editEntryForm-up_votes').type('10');
    cy.get('#editEntryForm-down_votes').type('5');
    cy.get('#editEntryForm-genre').type("Non-Fiction");
    // cy.contains('Save').click(); //TODO: uncommment this

    cy.wait(1000);
    cy.contains('Edit Book Title test').should('have.length', 1);
  });

  it('verifies behavior of Complete Entry button', () => {
    cy.contains('Edit Book Title test')
      .parent()
      .within(()=>{
        cy.contains('Mark Book Complete').click();
      });
    cy.wait(1000);
    cy.contains('Edit Book Title test')
      .parent()
      .within(()=>{
        cy.contains('Mark Book Complete').should('not.exist');
      });
    cy.contains('Edit Book Title test')
    .parent()
    .within(()=>{
      cy.contains('✔').should('exist');
    });
  });

  it('verifies behavior of Delete Entry button', () => {
    cy.contains('Edit Book Title test')
      .parent()
      .within(()=>{
        cy.contains('Delete').click();
      });
    cy.wait(1000);
    cy.contains('Edit Book Title test').should('not.exist');
  });

  it('verifies behavior of Columns toggle', () => {
    cy.get('.bootstrap-switch-handle-off').click()
    cy.wait(1000);
    //TODO: check for display of columns count to be lower, then higher after click
    cy.get('.bootstrap-switch-handle-on').click()
  });

  it('verifies behavior of Bulk Add button and Form', () => {

  });

  it('verifies behavior of Author Books buttons', () => {

  });
})
