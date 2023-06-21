const {
  appendMutableCookies,
} = require("next/dist/server/web/spec-extension/adapters/request-cookies");

describe("wingspan routes", () => {
  it("take user to homepage", () => {
    cy.visit("http://localhost:3000/");
  });

  it("take user to bird/1", () => {
    cy.visit("http://localhost:3000/birds/1");
  });

  it("take user to bird-cage", () => {
    cy.visit("http://localhost:3000/bird-cage");
  });
});

/*describe("test wingspan", () => {
  it("displays page populated with bird cards", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("ViewBirds").should("exist");
  });
});*/

// To run the test:

// Make sure development server is running:
// npm run dev

// Open cypress web app
// npx cypress open

// Select the E2E Testing card in the web app
// Select chrome as your browser
//Run Tests
