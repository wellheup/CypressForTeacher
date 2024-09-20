/// <reference types="cypress" />

function deleteExtras(selector: string) {
  cy.contains(selector).as("added_by");
  cy.get("@added_by").parent().as("added_box");
  cy.get("@added_box")
    .parent()
    .within(() => {
      cy.get("[id^=delete-][id$=-Button]").click();
      cy.wait(2000);
    });
  cy.get("#confirmDeleteForm").should("be.visible");
  cy.get(".text-center > .btn-danger").click();
  cy.wait(2000);
}

// function containsExists(selector: string){
//   let cont = true;
//   cy.contains(selector).then(($el) => {
//   if ($el.length) {
//     cont = true;
//   } else {
//     cont = false;
//   }
//   });
//   return cont;
// }

describe("test the Syllabus tab of the teacher web app", () => {
  beforeEach(() => {
    cy.visit("https://teacher-phillipmm.replit.app/");
  });

  it("navs to syllabus tab and verifies presence of UI elements", () => {
    cy.get("#syllabus-tab").click();
    cy.get("#newEntryForm").should("not.be.visible");
    cy.get("#bulkAddForm").should("not.be.visible");
    cy.get("#editEntryForm").should("not.be.visible");
    cy.get("#confirmDeleteForm").should("not.be.visible");
    cy.get("#author-content-container").should("not.be.visible");
    cy.get("#newAssignmentForm").should("not.be.visible");

    cy.get("#newAssignmentButton").should("exist");
    cy.get("#bulkAddButton").should("exist");
    cy.get(".bootstrap-switch-handle-off").should("exist");
    cy.get("#addNewBookButton").should("exist");
    cy.get(
      ':nth-child(1) > [style="white-space: nowrap; padding: 5px"]'
    ).within(() => {
      cy.contains("Edit").should("exist");
      cy.contains("Delete").should("exist");
    });
    cy.get(":nth-child(1) > .col-author > div > .author-link").should("exist");
  });

  it("verifies behavior of New Assignment button and Form submission", () => {
    cy.get("#addNewBookButton").click();
    cy.wait(1000);
    cy.get("#newEntryForm").should("be.visible");
    cy.contains("Add New Entry").should("exist");
    cy.get("#newEntryForm-book").should("exist");
  });

  it("verifies behavior of Add Book button and Form submission", () => {
    cy.get("#addNewBookButton").click();
    cy.wait(1000);
    cy.get("#newEntryForm").should("be.visible");
    cy.contains("Add New Entry").should("exist");
    cy.get("#newEntryForm-book").should("exist");
    cy.get("#newEntryForm-author").should("exist");
    cy.get("#newEntryForm-series").should("exist");
    cy.get("#newEntryForm-num_in_series").should("exist");
    cy.get("#newEntryForm-is_completed").should("exist");
    cy.get("#newEntryForm-added_by").should("exist");
    cy.get("#newEntryForm-season").should("exist");
    cy.get("#newEntryForm-is_extra_credit").should("exist");
    cy.get("#newEntryForm-date_completed").should("exist");
    cy.get("#newEntryForm-up_votes").should("exist");
    cy.get("#newEntryForm-down_votes").should("exist");
    cy.get("#newEntryForm-genre").should("exist");
    cy.contains("Save").should("exist");
    cy.contains("Cancel").should("exist");
    cy.contains("Cancel").click();
    cy.get("#newEntryForm").should("not.be.visible");
    cy.get("#addNewBookButton").click();

    // fill out form
    cy.wait(1000);
    cy.get("#newEntryForm").should("be.visible");
    cy.contains("Add New Entry").should("exist");
    cy.get("#newEntryForm-book").type("New Book Title test");
    cy.get("#newEntryForm-author").type("Author Name test");
    cy.get("#newEntryForm-series").type("Series Name test");
    cy.get("#newEntryForm-num_in_series").type("1");
    cy.get("#newEntryForm-added_by").type("Tester test");
    cy.get("#newEntryForm-season").type("1");
    cy.get("#newEntryForm-is_extra_credit").click();
    cy.get("#newEntryForm-genre").type("Fiction");
    cy.get(
      "#newEntryForm > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn-primary"
    ).click();

    cy.wait(1000);
    cy.contains("New Book Title test").should("have.length", 1);
  });

  it("verifies behavior of Complete Entry button", () => {
    cy.contains("New Book Title test").as("book");
    cy.get("@book").parent().as("book_box");
    cy.get("@book_box")
      .parent()
      .within(() => {
        cy.get(".col-date_completed").as("col");
        cy.get("@col")
          .contains("Mark Book Complete")
          .scrollIntoView()
          .click({ force: true });
        cy.wait(3000);
        cy.get("@col").contains("Mark Book Complete").should("not.exist");
        cy.get(".col-is_completed").contains("✔").should("exist");
      });
  });

  it("verifies behavior of Edit Entry button and Form", () => {
    cy.contains("New Book Title test")
      .parent()
      .parent()
      .within(() => {
        cy.contains("Edit").click();
      });
    cy.wait(1000);
    cy.get("#editEntryForm").should("be.visible");
    cy.contains("Edit Entry").should("exist");
    cy.get("#editEntryForm-book").should("exist");
    cy.get("#editEntryForm-author").should("exist");
    cy.get("#editEntryForm-series").should("exist");
    cy.get("#editEntryForm-num_in_series").should("exist");
    cy.get("#editEntryForm-is_completed").should("exist");
    cy.get("#editEntryForm-added_by").should("exist");
    cy.get("#editEntryForm-season").should("exist");
    cy.get("#editEntryForm-is_extra_credit").should("exist");
    cy.get("#editEntryForm-date_completed").should("exist");
    cy.get("#editEntryForm-up_votes").should("exist");
    cy.get("#editEntryForm-down_votes").should("exist");
    cy.get("#editEntryForm-genre").should("exist");
    cy.contains("Save").should("exist");
    cy.get(
      "#editEntryForm > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn-secondary"
    ).should("exist");
    cy.get(
      "#editEntryForm > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn-secondary"
    ).click();
    cy.get("#editEntryForm").should("not.be.visible");
    cy.contains("New Book Title test")
      .scrollIntoView()
      .parent()
      .parent()
      .within(() => {
        cy.contains("Edit").click();
      });

    // fill out form
    cy.wait(1000);
    cy.get("#editEntryForm").should("be.visible");
    cy.contains("Edit Entry").should("exist");
    cy.get("#editEntryForm-book").clear().type("Edited Book Title test");
    cy.get("#editEntryForm-author").clear().type("Edited Author test");
    cy.get("#editEntryForm-series").clear().type("Edited Series test");
    cy.get("#editEntryForm-num_in_series").clear().type("2");
    cy.get("#editEntryForm-added_by").clear().type("Editor test");
    cy.get("#editEntryForm-season").clear().type("2");
    cy.get("#editEntryForm-is_extra_credit").click();
    // cy.get('#editEntryForm-date_completed').clear().type('2023-01-01');
    cy.get("#editEntryForm-up_votes").clear().type("10");
    cy.get("#editEntryForm-down_votes").clear().type("5");
    cy.get("#editEntryForm-genre").clear().type("Non-Fiction");
    cy.get(
      "#editEntryForm > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn-primary"
    ).click();

    cy.wait(1000);
    cy.contains("Edited Book Title test")
      .scrollIntoView()
      .should("have.length", 1);
  });

  it("verifies behavior of Delete Entry button", () => {
    cy.contains("Edited Book Title test").as("added_by");
    cy.get("@added_by").parent().as("added_box");
    cy.get("@added_box")
      .parent()
      .within(() => {
        cy.get("[id^=delete-][id$=-Button]").click();
        cy.wait(1000);
      });
    cy.get("#confirmDeleteForm").should("be.visible");
    cy.get(".text-center > .btn-danger").click();
    cy.wait(1000);
    cy.contains("Edited Book Title test").should("not.exist");
  });

  it("verifies behavior of Columns toggle", () => {
    const columnsToKeep: string[] = [
      "th.col-book",
      "th.col-author",
      "th.col-series",
      "th.col-is_completed",
      "th.col-date_completed",
      "th.col-num_in_series",
    ];
    const columns: string[] = [
      "th.col-unique_id",
      "th.col-book",
      "th.col-author",
      "th.col-series",
      "th.col-num_in_series",
      "th.col-date_added",
      "th.col-is_completed",
      "th.col-added_by",
      "th.col-season",
      "th.col-is_extra_credit",
      "th.col-date_completed",
      "th.col-up_votes",
      "th.col-down_votes",
      "th.col-genre",
    ];
    cy.get("th[class^=col-]").should("have.length", 14);
    columns.forEach((col) => {
      if (columnsToKeep.includes(col)) {
        cy.get(col).scrollIntoView().should("be.visible");
      } else {
        cy.get(col).scrollIntoView().should("not.be.visible");
      }
    });

    cy.get(".bootstrap-switch-handle-off").click();
    cy.wait(1000);
    columns.forEach((col) => {
      cy.get(col).scrollIntoView().should("be.visible");
    });

    cy.get(".bootstrap-switch-handle-on").click();
    cy.wait(1000);
    columns.forEach((col) => {
      if (columnsToKeep.includes(col)) {
        cy.get(col).scrollIntoView().should("be.visible");
      } else {
        cy.get(col).scrollIntoView().should("not.be.visible");
      }
    });
  });

  it("verifies behavior of Bulk Add button and Form", () => {
    cy.get("#bulkAddButton").click();
    cy.wait(1000);
    cy.get(
      "#bulkAddForm > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn-secondary"
    )
      .scrollIntoView()
      .click();
    cy.wait(1000);

    let books = "";
    for (let i = 0; i < 5; i++) {
      books += `New Book Title test${i},Author Name test,Series Name test${i},${i}\n`;
    }

    cy.get("#bulkAddButton").click();
    cy.wait(1000);

    cy.get("#bulkAddForm-bookList").type(books);
    cy.get("#bulkAddForm-added_by").type("Tester test");
    cy.get(
      "#bulkAddForm > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn-primary"
    )
      .scrollIntoView()
      .click();
    cy.wait(2000);
  });

  it("verifies behavior of Author Books buttons", () => {
    cy.contains("Author Name test").first().click();
    cy.wait(1000);
    cy.get("#authorPopupLabel")
      .should("be.visible")
      .should("contain.text", "DEMO Books by Author Name test");
    cy.get("#authorPopupModal > .modal-body").within(() => {
      for (let i = 0; i < 5; i++) {
        cy.contains(`New Book Title test${i}`).should("be.visible");
      }
    });
    cy.get("#authorPopupModal > .modal-header > .close > span").click();
    cy.get("#authorPopupLabel").should("not.be.visible");
    cy.wait(2000);
  });

  it("verifies deletion of test entries", () => {
    for (let i = 0; i < 5; i++) {
      deleteExtras("Tester test");
    }

    cy.contains("Tester test").should("not.exist");
  });
});
