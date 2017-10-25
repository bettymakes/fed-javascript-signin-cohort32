# Signin Screen

## Complete these steps to create a 'signin' prototype:

1. "Listen" for when the user `click`s the `#signin` button, `display` the `#modal` window
2. "Listen" for when the user `click`s the `#close` button, `display` (or fade out) out the `#modal` window
3. "Listen" for when the user `click`s the `#submit` button, add an `.error` class to both `<input>` elements
   - First apply the class to each elementById
   - Then try applying to all `input` using a traversal loop of some kind
4. Remove the `.error` class from any individual `<input>` when the cursor give it `focus`
   - First try writing one event listener/handler per input element
   - Then do this by writing only ONE event listener/handler for all input elements and applying it using a traversal loop

## Advanced:

5. When the user clicks `#submit`, only add the `.error` class to the elements that have a `value` of "" (blank, meaning any text will prevent an error)
   - What happens if the user just adding spaces to the field? Find a function that will trim off the white spaces in a field to validate it.
6. Prototype a validation by checking the two fields on `#submit`. If both are "valid" (not blank), close the `#modal`, remove the `#signin` and append `textContent` to the `#hello` heading so it reads "Welcome, [USERNAME]", in a font that's half the current size
   - Consider the various ways we could validate both fields, including the use of a boolean `var` as a switch
7. Try validating a field by adding/removing `.error` immediately after the cursor leaves one of the individual `<input>` (rather than on submit)
   - Consider this can be added individually to elements, but do so by writing one event listener/callback function using a loop
8. Allow the user to click the `#modal` to close itself
   - Consider what happens when two elements that are overlapping are both waiting for a click: Click events will "bubble" (propagate) up the DOM tree. How could we stop an event from triggering on it's parents?
   - This will likely require a bit of web searching to solve
