/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it ("contains our ViewBirds component", () => {
    cy.get("ViewBirds").should("have.BirdCard", 1);
  })
})