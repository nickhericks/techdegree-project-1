const body = document.querySelector('body');
let automaticUpdate = window.setInterval(printQuote, 5000);

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
    citation: "Star Wars: Episode IV - A New Hope"
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
    source: "Han Solo"
  },
  {
    quote: "We must learn to live together as brothers, or perish together as fools.",
    source: "Martin Luther King, Jr."
  },
  {
    quote: "You don't learn to walk by following the rules. You learn by doing, and by falling over.",
    source: "Richard Branson"
  },
  {
    quote: "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
    source: "Henry Ford"
  },
  {
    quote: "He who is not everyday conquering some fear has not learned the secret of life.",
    source: "Ralph Waldo Emerson"
  },
  {
    quote: "This is the most simple and basic component of life: our struggles determine our successes.",
    source: "Mark Manson"
  },
  {
    quote: "There is no innovation and creativity without failure. Period.",
    source: "Brené Brown"
  },
  {
    quote: "If more information was the answer, then we’d all be billionaires with perfect abs.",
    source: "Derek Sivers"
  },
  {
    quote: "Luck is what happens when preparation meets opportunity.",
    source: "Seneca"
  },
  {
    quote: "We suffer more often in imagination than in reality.",
    source: "Seneca"
  },
  {
    quote: "If a man knows not to which port he sails, no wind is favorable.",
    source: "Seneca"
  },
  {
    quote: "You are the average of the five people you spend the most time with.",
    source: "Jim Rohn"
  },
  {
    quote: "Discipline is the bridge between goals and accomplishment.",
    source: "Jim Rohn"
  },
  {
    quote: "We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment.",
    source: "Jim Rohn"
  },
  {
    quote: "Happiness is not having what you want. Happiness is wanting what you have.",
    source: "Anonymous"
  },
  {
    quote: "Develop courage by doing courageous things.",
    source: "Gary Tuerack"
  },
  {
    quote: "If you do not change direction, you may end up where you are heading.",
    source: "Lao Tzu"
  },
  {
    quote: "Right feelings follow right actions",
    source: "Anonymous"
  }
];

// Generate random number and return random quote object
function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = array[randomNum];
  return randomQuote;
}

// Update background to random color
function updateBackgroundColor() {
  // Get random hex color.
  var randomColor = `
    rgb(${Math.floor(Math.random()*200)},
    ${Math.floor(Math.random()*200)},
    ${Math.floor(Math.random()*200)})
  `;
  body.style.backgroundColor = `${randomColor}`;
}

// Build message and print to page
function printQuote() {
  let message = "";
  let quoteObject = getRandomQuote(quotes);
  // Build message string using object properties
  message += `<p class="quote">“${quoteObject.quote}”</p>`;
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
  // if(quoteObject.tags) {
  //   message += `<br><br>`;
  //   for(tag in quoteObject.tags) {
  //     message += `<span class="tag">${quoteObject.tags[tag]}</span>`;
  //   }
  // }
  message += `</p>`;
  // Change background to random color
  updateBackgroundColor();
  // Print message string to the page
  document.getElementById('quote-box').innerHTML = message;

  // Automatically update quote
  clearInterval(automaticUpdate);
  automaticUpdate = window.setInterval(printQuote, 7000);
}

// Display random quote on initial page load
printQuote();

// Display new random quote when button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
