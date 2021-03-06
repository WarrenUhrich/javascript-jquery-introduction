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
// https://api.jquery.com/after/
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

// Select some of our new elements.
const myListItems = $( 'li' );
const myListItemPs = $( 'li p' );

// Hide our P tags.
// https://api.jquery.com/hide/
myListItemPs.hide();

// Event listeners.
// With the $().on( SELECTOR, EVENT ) syntax, even if new elements
// matching the selector are added after-the-fact, the event will
// still fire on the new/dynamic elements.
// https://api.jquery.com/on/
$( 'body' ).on( 'click', 'li', function ( event ) { // We can't use an arrow function here,
                                                    // or we lose the ability to use our "this"
                                                    // keyword! (Used for referring to the
                                                    // affected element!)
  const clickedElement = $( this ); // Converting generic "this" (current element) into a jQuery
                                    // version, so we can use all of our new fancy jQuery methods!
  
  // Get the child paragraph.
  // https://api.jquery.com/children/
  const clickedElementP = clickedElement.children( 'p' );

  // Check if hiding or not...
  // https://api.jquery.com/is/
  if ( clickedElementP.is( ':hidden' ) ) {
    // If it is hidden, show it!
    // https://api.jquery.com/show/
    clickedElementP.show( 500 ); // We can set a duration in miliseconds!
  } else {
    // If it is showing, hide it!
    clickedElementP.hide( 500 );
  }
} );

/**
 * Let's try a slightly more complex/custom animation!
 * @link https://api.jquery.com/animate/
 */

myHeading.animate(
  // First argument is an object with the desired styles.
  { // Apparently colours require the jQuery-UI library... :(
    "font-size": "40px",
    "padding": "32px"
  },
  // Second argument is the duration of the animation.
  1500, // 1 and a half seconds.
  // Third argument can be a function that occurs once the animation
  // is completed (note that this is optional.)
  () => { console.log( 'Animation complete!' ) }
);

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
		duration: 100,	// the scene should last for a scroll distance of 100px
		offset: 50	// start this scene after scrolling for 50px
	})
	.setPin("#my-sticky-element") // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller
