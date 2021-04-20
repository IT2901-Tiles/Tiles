import * as React from 'react'
import { mount } from '@cypress/react'
import AudioFieldAnimationPage from '../../src/Components/AudioFieldAnimationPage';

describe('AudioFieldAnimationPage', () => {
    it('Button to submit idea works.', () => {
        mount(<AudioFieldAnimationPage/>);
        cy.get('Button').contains('Record').click();
        cy.get('Button').contains('Stop').click();
        cy.get('Button').contains('Download').click();
    }); 
});