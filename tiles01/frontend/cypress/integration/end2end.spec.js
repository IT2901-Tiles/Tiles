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

//End to end test that goes through the entire application
//It selects one card in each category,then views the animation, writes an idea and downloads it
//It then tests if the idea has been written to the database

describe("End to end test", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
      });
      
      afterEach(() => {
        cy.saveLocalStorage();
      });
    it('visits the app', () => {
        cy.visit('http://localhost:8484')
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
    it("Check idea written to database", ()=>{
        cy.request("GET",'http://localhost:8484/read_idea').its('body').should('include', 'My great idea').and("include", JSON.stringify({ trigger: 'drop', thing: 'bike', feedback: 'color_change' }))
    })

  });
