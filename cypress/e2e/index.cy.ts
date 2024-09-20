/// <reference types="cypress" />

describe("test the Syllabus tab of the teacher web app", () => {
  it("navs to index page and verifies tabs update", () => {
    cy.visit("https://teacher-phillipmm.replit.app/");

    cy.get(".nav-item").should("have.length", 5);
    // TODO: click each tab to make sure it loads
  });
});
