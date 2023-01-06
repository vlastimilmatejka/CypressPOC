import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I open page', () => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress");
  });