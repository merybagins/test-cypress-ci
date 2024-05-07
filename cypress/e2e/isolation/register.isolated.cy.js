/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { signUpMocks } from "../../mocks/signUp"
import { registerPage } from "../../pages/registerPage"
import { alerts } from "../../pages/alerts"


describe('Register tests in isolation', () => {
    beforeEach(() => {
        cy.visit('/register')
    })

    it('should successfully register', () => {
        const user = getRandomUser()

        signUpMocks.mockSuccess()
        registerPage.attemptRegister(user)

        alerts.verifySuccess('Registration successful')
        cy.url().should('contain', '/login')
    })

})

