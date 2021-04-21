import * as React from 'react'
import { mount } from '@cypress/react'
import FormFieldAnimationPage from '../../src/Components/FormFieldAnimationPage';


describe('FormFieldAnimationPage', () => {
    it('Button to submit idea works.', () => {
        mount(<FormFieldAnimationPage/>);
        cy.get('button').contains('Download').click();
    }); 
    it('textarea works', () => {
        mount(<FormFieldAnimationPage/>);
        cy.get('textarea').should('contain.text', '')
        cy.get('textarea').type('What a great idea')
    });
});




