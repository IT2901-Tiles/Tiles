import * as React from 'react'
import { mount } from '@cypress/react'
import AudioFieldAnimationPage from '../../src/Components/AudioFieldAnimationPage';

describe('AudioFieldAnimationPage', () => {
    it('Buttons are disabled and enabled', () => {
        mount(<AudioFieldAnimationPage/>);
        cy.get('Button').contains('Record').should('not.be.disabled')
        cy.get('Button').contains('Stop').should('be.disabled')
        cy.get('Button').contains('Download').should('be.disabled')
        cy.get('Button').contains('Record').click();
        cy.get('Button').contains('Record').should('be.disabled')
        cy.get('Button').contains('Stop').should('not.be.disabled')
        cy.get('Button').contains('Stop').click();
        cy.get('Button').contains('Download').click();
    }); 
});