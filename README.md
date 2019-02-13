# Project 1 - Full Stack JavaScript Techdegree

### Random Quote Generator
This project displays random quotes to the page when a user clicks the button.

***

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550087279/portfolio/random-quote-generator-mobile.png" height="400px"><img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550086727/portfolio/random-quote-generator.png" height="400px">

## View project
 :mag: Live version available at [nickhericks.github.io/techdegree-project-1/](https://nickhericks.github.io/techdegree-project-1/)

 ## Project objective
 Building this project allowed me to practice using basic JavaScript syntax and data structures by building a Random Quote Generator, a program that displays a randomly selected quote each time the user clicks a button.

## Features
In addition to completing the basic requirements for this techdegree project, I also added features by building out additional JavaScript functionality such as:

- [x] Quote automatically updated at 10 second intervals
- [x] Additional object properties are conditionally displayed
- [x] Background color updates upon quote change

## Code example
An example of one of the JavaScript functions in this project:
1. getRandomQuote function accepts an array of objects as an argument.
2. The array's length is used to generate a random number within the range of the array's index.
3. The number is used to select a random object within the array.
4. The function returns the random object.

```javascript
function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  let randomQuote = array[randomNum];
  return randomQuote;
}
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
