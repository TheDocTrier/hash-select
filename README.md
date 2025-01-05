# hash-select

Specify HTMX select attribute using the URL fragment identifier.
I encourage reading the source `hash-select.js` since it contains only 4 significant lines of code.
Summarized, if an HTMX request path is given with a fragment identifier `#some-id`, then this extension will override `hx-select` with the selector `#some-id`.

## Usage

Load the extension after loading HTMX:

```html
<script src="https://unpkg.com/htmx-ext-hash-select"></script>
```

Then,

```html
<button hx-post="endpoint#status" hx-swap="outerHTML">Click for Status</button>
```

Becomes approximately equivalent to

```html
<button hx-post="endpoint#status" hx-select="#status" hx-swap="outerHTML">Click for Status</button>
```
