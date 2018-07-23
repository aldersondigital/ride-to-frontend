# README

## Contents

* Overview
* Grab the code
* Install dependencies
* Run output
* Linting
* Test
* Test definitions
* Directory structure

---

## Overview

This package contains a small responsive [React](https://reactjs.org/) / [Redux](https://redux.js.org/) solution to the [RideTo](https://www.rideto.com/) 'products' coding assignment.

The deployed version is available at the following temporary Heroku address: [https://ride-to-frontend.herokuapp.com](https://ride-to-frontend.herokuapp.com)

---

## Grab the code

If required, grab (or clone) this package by entering (or copying and pasting) the following code into a terminal:

```bash
# Cd into your home directory
cd ~/

# Grab (or clone) this package locally
# git clone git@github.com:aldersondigital/ride-to-frontend.git 
```

In order to run the package's output, please continue with the __Install dependencies__ section of this document below.

---

## Install dependencies

Before running the package's output, please install the required dependencies by entering (or copying and pasting) the following commands into a console / terminal:

```bash
# CD into the directory extracted from the archive.
cd ./ride-to-frontend/

# Install the required dependencies using [NPM](https://www.npmjs.com/)
npm install
```

In order to run the package's output, please continue with the __Run output__ section of this document below.

---

## Run output

Once the package's dependencies have been installed, run the output, which will be available at `http://localhost:3000/`, by entering (or copying and pasting) the following command into a console / terminal:

```bash
# CD into the directory extracted from the archive.
cd ./ride-to-frontend/

# Run the package's output.
npm run-script run
```

> Once `npm run-script start` has been entered, the output should be available at: `http://localhost:3000/`

In order to check the package's code *linting*, please continue with the __Linting__ section of this document below.

---

## Linting

Once the package's dependencies have been installed, ensure that the code has been *linted*, successfully, using [Eslint](https://eslint.org/)), by entering (or copying and pasting) the following command into a console / terminal:

```bash
# CD into the directory extracted from the archive.
cd ./ride-to-frontend/

# Run the unit tests.
npm run-script lint
```

In order to run the package's unit tests, please continue with the __Test__ section of this document below.

---

## Test

Once the package's dependencies have been installed, run the all of the [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest/) based unit tests by entering (or copying and pasting) the following command into a console / terminal:

```bash
# CD into the directory extracted from the archive.
cd ./ride-to-frontend/

# Run the unit tests.
npm run-script test
```

* Jest provides a basic CLI interface for running unit tests.
* Once `npm run test` has been entered, please enter `a` to run all of the defined tests.
* Alternatively, please enter `p` to run a *named* set of tests.
* Where the *name* could be `actions`, `components`, `containers`, `presenters`, `reducers`, etc.

For further information about the definition of the package's unit tests, please continue with the __Test definitions__ section of this document below.

---

## Test definitions

As per [Jest](https://facebook.github.io/jest/) / [React](https://reactjs.org/) standard, all of the unit tests have been defined locally to the code being tested.

For instance, the unit tests for the

* `src/actions/localAuthorityTable/fetch`

module and can be found at

* `src/actions/localAuthorityTable/tests/fetch.test.js`


In addition, the `describe` statement within each test contains a *namespace* string reference to the associated code being tested.

---

## Directory structure

Please find below an overview of the directory structure within this package's `src` folder.

* src
    * `actions` - The [Redux](https://redux.js.org/docs/basics/Actions.html) based actions.
    * `actionsTypes` - Constant types for the actions.
    * `components/containers` - Components connected to the Redux [store](https://redux.js.org/docs/basics/Store.html).
    * `components/presenters` - Simple presentation components. Not connected to the store.
    * `initialState` - A JSON structure defining the initial state of the application.
    * `reducers` - The Redux [reducers](https://redux.js.org/docs/basics/Reducers.html).
    * `selectors` - Small functions that filter the returned data with regard to the UI.
    * `store` - The Redux store.

---
