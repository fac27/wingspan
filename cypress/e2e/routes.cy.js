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
