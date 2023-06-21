const {
  appendMutableCookies,
} = require("next/dist/server/web/spec-extension/adapters/request-cookies");

describe("test wingspan", () => {
  it("takes user to homepage", () => {
    cy.visit("http://localhost:3000/");
  });
});

// To run the test:

// Make sure development server is running:
// npm run dev

// Open cypress web app
// npx cypress open

// Run Tests
