# Middlewares

This folder contains **Express middleware functions** used to process requests before they reach the route handlers.

## Common Middlewares

You can include:

- **Authentication** – Verify JWT tokens or session-based logins.
- **Authorization** – Check if the user has permissions to access a resource.
- **Error Handling** – Custom error responses and logging.
- **Request Validation** – Sanitize and validate incoming data using libraries like `express-validator`.

## Usage

Middlewares can be applied globally or on a per-route basis:

```js
