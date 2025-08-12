# Utils

This folder contains **utility functions** that are used across the application. These functions are designed to handle common tasks and improve code reuse.

## Structure

- `formatters/` – Functions that help with data formatting (e.g., date formatters, string formatters).
- `validators/` – Functions for validating inputs or data (e.g., email validation, phone number format check).
- `helpers/` – Small reusable functions like generating unique IDs, random strings, etc.
- `constants/` – Shared constants like API URLs, status codes, or configuration values.

## Example Usage

To use a utility function in your code:

```js
const { formatDate } = require('../utils/formatters/date');
const { validateEmail } = require('../utils/validators/email');
