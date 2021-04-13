let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});


describe("End to end test", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
      });
      
      afterEach(() => {
        cy.saveLocalStorage();
      });
    it('visits the app', () => {
        cy.visit('http://localhost:3000')
    })
    it('Click start', () => {
        cy.get('.btn').click()
    })
    it('Enter ctrigger', () => {
        cy.get('.chosenCardsButton').click()
    })
    it('Pick card', () => {
        cy.get('#0').click()
        
    })
    it('Select trigger', () => {
        cy.get('.btn').click()
    })
    
    it('Enter things', () => {
        cy.get('.chosenCardsButton').click()
    })
    it('Pick card', () => {
        cy.get('#0').click()
        
    })
    it('Select thing', () => {
        cy.get('.btn').click()
    })

    it('Enter feedback', () => {
        cy.get('.chosenCardsButton').click()
    })
    it('Pick card', () => {
        cy.get('#0').click()
        
    })
    it('Select feedback', () => {
        cy.get('.btn').click()
    })
    it('Run animation', () => {
        cy.get('.btn').click()
    })
    it('Write idea', () => {
        cy.get('#textBoxAnimationPage').type("My great idea");
    })
    it('Download idea', () => {
        cy.get('.textButtonAnimationPage').click()
    })
    




    
    

  });
