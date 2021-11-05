
describe('TODOS page', () => {
  it('should add a new TODO',()=> {
    cy.visit('http://localhost:3000/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain','1. new TODO');

  });
  it('should delete a TODO', () => {
    cy.visit('http://localhost:3000/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .get('button[type=delete]')
      .click()
      .should('not.exist');
  });
});