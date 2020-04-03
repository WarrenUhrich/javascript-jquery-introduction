/**
 * Using jQuery!
 * NOTE: The "$" is a regular character. It can be used in a variable
 *       or function name the same as any regular letter. The jQuery
 *       developers programmed jQuery all under one function called
 *       jQuery(). Because it is annoying to type jQuery all the time
 *       they decided to do "$ = jQuery" so you could use the "$" by
 *       itself as a shorthand!
 */

// Grabbing an element.
const myHeading = $( 'h1' );
console.log( myHeading );

// Injecting HTML after the selected element.
myHeading.after( `
  <ul><!-- Woah! This was a quick way to add new elements... -->
    <li><!-- This would have required an extra step in "vanilla" JS! -->
      <h2>HTML</h2>
      <p>HyperText Markup Language</p>
    </li>
    <li>
      <h2>CSS</h2>
      <p>Cascading StyleSheet</p>
    </li>
    <li>
      <h2>JS</h2>
      <p>JavaScript</p>
    </li>
    <li>
      <h2>PHP</h2>
      <p>PHP Hypertext Preprocessor</p>
    </li>
  </ul>
` );