## What does enhance action actually do?

Enhance enables what is called progressive enhancement, in other words, we don't do a full page reload but we actually enable client side handling via the construct known as
svelte actions (not to be mistaken with form actions) for futher reading visit [Svelte Action Documentation](https://svelte.dev/docs/svelte/svelte-action)
We use:enhance with POST requests as GET requests shouldn't have side effects. Attempting to use:enhance with a GET method will result in an Error.

By doing so we introduce some new behaviour:

- reset the `<form>` element
- updates the $page store with our page form and page status but only on the route the form action lives on!
- invalidate all data using **invalidateAll** on a successful response
- call goto on a **redirect** response so we use client side navigation and avoid page reload
- render the nearest `+error.page` if an error occurs.
- **reset focus** to the appropriate element, for further reading visit this [Focus managment link](https://svelte.dev/docs/kit/accessibility#Focus-management)

The moment we use:enhance the form is submitted using JavaScript.
