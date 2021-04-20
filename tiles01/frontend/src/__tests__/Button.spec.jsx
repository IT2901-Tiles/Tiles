import * as React from 'react'
import { mount } from '@cypress/react'
import FormFieldAnimationPage from '../Components/FormFieldAnimationPage';


describe('FormFieldAnimationPage', () => {
    it('Button to submit idea works.', () => {
        mount(<FormFieldAnimationPage/>);
        cy.get('button').contains('Download').click();
    });  
});


