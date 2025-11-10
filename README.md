# JEST Unit Tests

## GitHub Actions

[![Build and Tests](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_unit-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_unit-tests-jest)

## Getting Started

In order to execute this project you must follow the steps below:

1. Install [Node JS](https://nodejs.org/) (version >= 20.x)
1. Run `npm install` to install all the project dependencies
1. Run `npm run test` to execute the entire test suite
1. Run `npm run coverage` to execute the entire test suite with coverage
1. Run `npm run mutation` to execute mutation testing with Stryker Mutator

All execution artifacts can be found in `./coverage`, if you want to remove these files run `npm run clean`.

## Mutation Testing

This project uses [Stryker Mutator](https://stryker-mutator.io/) for mutation testing. Mutation testing helps evaluate the quality of your tests by introducing small changes (mutations) to your code and checking if your tests detect these changes.

### Running Mutation Tests

Execute mutation tests using:
```bash
npm run mutation
```

The mutation test report will be generated in `./reports/mutation/mutation.html`. Open this file in your browser to see a detailed report of:
- Mutation score (percentage of mutants killed)
- Survived mutants (mutations that weren't detected by tests)
- Killed mutants (mutations that were detected by tests)

### Mutation Score Thresholds

- **High**: 80% - Excellent test quality
- **Low**: 70% - Good test quality
- **Break**: 60% - Minimum acceptable test quality

## Project Structure
</br>
<ul>
    <li>src: source code</li>
    <li>test: unit test files</li>
</ul>