describe("user adds bird to cage", () => {
  it("going to the home page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("clicks + button on bird card", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="add-button"]').eq(0).click();
  });

  it("visits the birdcage to view selected birds", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="add-button"]').eq(0).click();
    cy.get('[data-testid="bird-cage"]').click();
  });
});

describe("user removes bird from cage", () => {
  it("clicks - button on bird card", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="add-button"]').eq(0).click();
    cy.get('[data-testid="bird-cage"]').click();
    cy.get('[data-testid="remove-button"]').click();
  });
});
