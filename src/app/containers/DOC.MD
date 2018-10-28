## What am I seeing?

This is the folder that holds the top level component after the App component.

## What they do?

Simple, they allow for grouping of components based on authentication.

> Generic Container should be for routes that has no requirement for auth, they can be seen irrespective of the auth state of the user.

> Authenticated Container: This is to be used for routes that demands for authentication.

> UnAuthenticated Container: This is to be used for routes that does not demand for authentication.

The above containers should be for top level routes, and not for sub routes. Routing starts from the top math down. So sub routes are going to be covered along the line
