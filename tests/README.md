# KDIP Platform E2E Tests

This directory contains the End-to-End (E2E) test suite for the KDIP Platform, using **Playwright**.

## Requirements

- Bun (v1.0+)
- PythonBackend running locally (usually port 8000)
- React Frontend running locally (usually port 3000)

## Setup

1. Install dependencies:

    ```bash
    bun install
    ```

2. Install Playwright browsers:

    ```bash
    bun x playwright install --with-deps
    ```

3. Configure environment:

    ```bash
    cp .env.example .env
    # Edit .env with local credentials/urls
    ```

## Running Tests

- **Run all tests (headless):**

    ```bash
    bun run test:e2e
    ```

- **Run with UI mode (interactive):**

    ```bash
    bun x playwright test --ui
    ```

- **Run in debug mode:**

    ```bash
    bun x playwright test --debug
    ```

## Architecture

This suite uses a **Fixture-based Architecture** for scalability and clean code.

- `tests/e2e/`: Test specifications.
- `tests/support/fixtures/`: Custom fixtures (factories, page objects).
- `tests/support/helpers/`: Shared utilities.

### Data Factories

We use factories (powered by `@faker-js/faker`) to generate test data.
Example: `userFactory` automatically creates a user via API and cleans it up after the test.

## CI/CD integration

Tests are configured to run in CI with:

- Zero retries (fail fast) unless configured otherwise.
- Reporters: List (console), HTML (artifact), JUnit (CI parser).
- Video/Trace: Retained only on failure to save storage.
