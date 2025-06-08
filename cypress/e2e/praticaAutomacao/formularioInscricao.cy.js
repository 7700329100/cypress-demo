describe('Criar um novo usuário', () => {

  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/')  
  });

  it('Preencha o formulário de inscrição para o novo usuário', () => {
    cy.get('#name').click(); 
    cy.get('#name').type('Mario Toledo Albuquerque Soares');
    cy.get('#email').type('mtoledo@teste.com');
    cy.get('#phone').type('9999123456');
    cy.get('#textarea').type('rua altinopolis');
    cy.get('#textarea').should('be.visible');
    cy.get('#female').click();
    cy.get('#monday').click();
    cy.get('#country').select('France');
    cy.get('#colors').select('Red');
    cy.get('#animals').select('dog');
 
   cy.get('#datepicker').click()
   cy.wait(2000)
   cy.get('#ui-datepicker-div').should('be.visible');
   cy.wait(2000)

// Seleciona o dia 15
cy.get('#ui-datepicker-div')
  .find('a.ui-state-default[data-date="15"]')
  .click();
  cy.wait(2000)
  cy.get('#txtDate').click()

  cy.wait(2000)
   cy.get('#ui-datepicker-div').should('be.visible');
   cy.wait(2000)

// Seleciona o dia 15
cy.get('#ui-datepicker-div')
  .find('a.ui-state-default[data-date="29"]')
  .click();
  cy.wait(2000)


  cy.get('#start-date').type('2025-04-22')
  cy.get('#end-date').type('2025-04-29')
  cy.get('.submit-btn').click()
  cy.get('#singleFileInput').selectFile('cypress/fixtures/users.json')
  cy.get('#singleFileForm > button').click()


  cy.get('#multipleFilesInput').selectFile(
    [
      'cypress/fixtures/2.jpg',
      'cypress/fixtures/profile.json'
    ],
    { action: 'select' }
  );

  /**cy.get('#multipleFilesForm > button').click()
  

  describe('Automação Cypress - Tabela Paginada', () => {
    beforeEach(() => {
      cy.visit('https://testautomationpractice.blogspot.com/');
    });
  
    it('Verifica os preços dos produtos na página atual', () => {
      cy.get('#productTable tbody tr').each(($row) => {
        cy.wrap($row).find('td').eq(2).invoke('text').then((price) => {
          cy.log(`Preço: ${price}`);
        });
      });
    });
  
    it('Navega para a segunda página e verifica os produtos', () => {
      cy.get('.pagination a').contains('2').click();
      cy.get('#productTable tbody tr').each(($row) => {
        cy.wrap($row).find('td').eq(1).invoke('text').then((product) => {
          cy.log(`Produto na segunda página: ${product}`);
        });
      });
    });
  
    it('Seleciona um produto específico', () => {
      cy.get('#productTable tbody tr').contains('Television').parent().find('input[type="checkbox"]').check();
    });**/
  });

it('Acessar site Udemy', () => {
  cy.get('a[href="https://www.pavanonlinetrainings.com/p/udemy-courses.html"]').click();
});


});
