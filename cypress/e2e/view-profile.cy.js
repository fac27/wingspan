describe("user views bird profile", () => {
  it("clicks bird image on bird card", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="view-bird"]').eq(0).click;
  });
});
