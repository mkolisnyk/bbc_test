# Testing Task

## Overview and Project structure

This project contains implementation of tests scenarios verifying particular endpoint call. The task itself contains 2 parts:
1. Automate pre-defined scenarios
2. Write 3 extra scenarios using BDD format

This is reflected in project resources. The project structure is based on the following folders:
1. **features** - groups test features and steps implementation
2. **features/steps** - contains steps implementation
3. **lib** - auxiliary library which contains code which is not reflecting business logic but rather groups utility modules which can be used within the tests.

Tests themselves are located in 2 major files:
1. **features/schedule.feature** - contains automated scenarios defined in task description
2. **features/schedule_extra.feature** - contains additional scenarios required by part 2 or the test task. They are extra test scenarios written in BDD format and they are runnable as they are re-using existing steps implementation.

## Set up and run tests

Make sure you have Node and NPM installed. The following versions were used for this particular exercise:

```
Node: v20.14.0
NPM: 10.7.0
```

Once relevant infrastructure is installed, it needs to run the following command from the project root:

```
npm install
```

This will download all necessary package dependencies.

Once it's done, tests can be run. Normally it's done using the following command line:

```
npm run test
```

Alternatively, if there is a need to have some customized Cucumber runs (e.g. using various tags), it's possible to call Cucumber directly by running command like:

```
npx cucumber-js <parameters>
```