describe('Navigation', () => {
  it('Navigates to Popular Picks page', () => {
    cy.visit('https://bike-shop-application.netlify.app/');
    cy.contains('span', 'Popular Picks').click();
    cy.url().should('include', '/trending-bikes');
  });

  it('Navigates to Latest Releases page', () => {
    cy.visit('https://bike-shop-application.netlify.app/');
    cy.contains('span', 'Latest Releases').click();
    cy.url().should('include', '/new-releases');
  });

  it('Navigates to Future Arrivals page', () => {
    cy.visit('https://bike-shop-application.netlify.app/');
    cy.contains('span', 'Future Arrivals').click();
    cy.url().should('include', '/upcoming-bikes');
  });

  it('Navigates to Favourites page', () => {
    cy.visit('https://bike-shop-application.netlify.app/');
    cy.contains('span', 'Favourites').click();
    cy.url().should('include', '/favorite-bikes');
  });
});