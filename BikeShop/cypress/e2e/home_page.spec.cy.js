describe('BikeShop App', () => {
  it('Visits the homepage', () => {
      cy.visit('https://bike-shop-application.netlify.app/');

      cy.contains('Bike Shop', { timeout: 10000 }); 
  });
});