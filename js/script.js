const body = document.querySelector('body');

const quotes = [
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    year: 1980,
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    tags: ["motivating"]
  },
  {
    quote: "Your focus determines your reality.",
    source: "Qui-Gon Jinn",
    year: 1999,
    citation: "Star Wars: Episode I - The Phantom Menace",
    tags: ["inspiring", "motivating"]
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
    tags: ["motivating", "inspiring", "funny"]
  },
  {
    quote: "When 900 years old, you reach… Look as good, you will not.",
    source: "Yoda",
    year: 1983,
    citation: "Star Wars: Episode VI - Return Of The Jedi",
    tags: ["funny", "impossible"]
  },
  {
    quote: "I've got a bad feeling about this.",
    source: "Han Solo",
    tags: ["funny"]
  }
];

// Generate random number and return random quote object
function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random() * 6);
  let randomQuote = array[randomNum];
  return randomQuote;
}

// Update background to random color
function updateBackgroundColor() {
  // Get random hex color. This line from
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = `#${randomColor}`;
}

// Get random quote, build message and print to page
function printQuote() {
  let message = "";
  let quoteObject = getRandomQuote(quotes);
  // Build message string using object properties
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
    // For each tag in tags array, display and add styling
    for(tag in quoteObject.tags) {
      message += `<span class="tag">${quoteObject.tags[tag]}</span>`;
    }
  }
  message += `</p>`;
  // Change background to random color
  updateBackgroundColor();
  // Print message string to the page
  document.getElementById('quote-box').innerHTML = message;
}

// Display random quote on initial page load
printQuote();

// Automatically update quote every 3 seconds
window.setInterval(printQuote, 10000);

// Display new random quote when button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
