/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/



// Assign quote-box div to a variable
const quoteBox = document.getElementById('quote-box');

// Array of quotes
const quotes = [
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    year: 1980,
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    tags: ["motivation"]
  },
  {
    quote: "Your focus determines your reality.",
    source: "Qui-Gon Jinn",
    year: 1999,
    citation: "Star Wars: Episode I - The Phantom Menace",
    tags: ["focus"]
  },
  {
    quote: "In my experience there is no such thing as luck.",
    source: "Obi-Wan Kenobi",
    year: 1977,
    citation: "Star Wars: Episode IV - A New Hope",
  },
  {
    quote: "The greatest teacher, failure is.",
    source: "Yoda",
    year: 2017,
    citation: "Star Wars: Episode VIII - The Last Jedi",
    tags: ["motivation", "focus", "humor"]
  },
  {
    quote: "When 900 years old, you reach… Look as good, you will not.",
    source: "Yoda",
    year: 1983,
    citation: "Star Wars: Episode VI - Return Of The Jedi",
    tags: ["funny"]
  }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/


// Generate random number and return random quote object
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 5);
  let randomQuote = quotes[randomNum];
  return randomQuote;
}



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/



// Get random quote, build message and print to page
function printQuote() {
  // Get random quote from quotes array
  let quoteObject = getRandomQuote();

  // Build message string using object properties
  let message = "";
  message += `<p class="quote">${quoteObject.quote}</p>`;
  message += `<p class="source">${quoteObject.source}`;

  // If quote has citation, add to message string
  if(quoteObject.citation) {
    message += `<span class="citation">${quoteObject.citation}</span>`;
  }

  // If quote has year, add to message string
  if(quoteObject.year) {
    message += `<span class="year">${quoteObject.year}</span>`;
  }

  // If quote has tags, add to message string
  if(quoteObject.tags) {
    message += `<br><br>`;
    for(tag in quoteObject.tags) {
      message += `<span class="tag">${quoteObject.tags[tag]}</span>`;
    }
  }

  message += `</p>`;

  // Print message string to the page
  quoteBox.innerHTML = message;


}

// Print random quote on page load
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
