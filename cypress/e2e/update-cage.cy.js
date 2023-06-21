describe("user adds to cage by", () => {
  it("going to the home page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("then clicking add button on bird card", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="add-button"]').eq(0).click();
  });

  it("then visiting the birdcage to view their choice", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="add-button"]').eq(0).click();
    cy.get('[data-testid="bird-cage"]').click();
  });
});

describe("user removes bird from cage by", () => {
  it("clicking the '-' button on the card", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="add-button"]').eq(0).click();
    cy.get('[data-testid="bird-cage"]').click();
    cy.get('[data-testid="remove-button"]').click();
  });
});
