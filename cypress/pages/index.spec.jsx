import React from 'react';
import { mount } from '@cypress/react';
import IndexPage from '../../src/pages/index';

it('should work', () => {
  mount(<IndexPage />);

  cy.contains('Welcome to Next.js')
  cy.get('[aria-label=search]').type('Cypress')
  cy.contains('.search-text', 'You are searching for: Cypress')
});
