# demoWebShopJS

Automated tests for the Demo Web Shop application using Cypress.

---

## About the project

This repository contains Cypress tests for the Demo Web Shop web application. The tests cover main user scenarios such as registration, login, product selection, order checkout, and price verification.

---

## Technologies used

- JavaScript
- Cypress — end-to-end testing framework

---

## Quick start

### 1. Clone the repository

```bash
git clone https://github.com/SavaSavichev/demoWebShopJS.git
cd demoWebShopJS
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run Cypress tests

To open Cypress Test Runner (interactive mode):

```bash
npx cypress open
```

To run tests in headless mode (without UI):

```bash
npx cypress run
```

---

## Project structure

- `e2e/pomTests` — All test cases
- `fixtures/pom` — Test data (JSON)
- `pageObjects/` — Page Object Model classes with interaction methods

---

Thank you for your attention!
