# Random Quote Generator
> This project displays random quotes to the page when a user clicks the button.

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550087279/portfolio/random-quote-generator-mobile.png" height="400px"><img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1550086727/portfolio/random-quote-generator.png" height="400px">


## View project
 :mag: Live version available at [nickhericks.github.io/techdegree-project-1/](https://nickhericks.github.io/techdegree-project-1/)

 ## Project objective
 Building this project allowed me to practice using basic JavaScript syntax and data structures by building a Random Quote Generator, a program that displays a randomly selected quote each time the user clicks a button.

## Features
In addition to completing the basic requirements for this techdegree project, I also achieved the 'exceeds expectations' grade by building out additional JavaScript functionality such as:

- [x] Automatic quote updates every 10 seconds
- [x] Updating background color upon quote change
- [x] Conditionally displaying additional object properties

## Code Example
As an example of how the JavaScript in this project works, the getRandomQuote function below takes an array of objects as an argument and uses the array's length to generate a random number within the range of the array's index. It then uses that number to select a random object within the array, which the function then returns.

    // Generate random number and return random quote object
    function getRandomQuote(array) {
      let randomNum = Math.floor(Math.random() * array.length);
      let randomQuote = array[randomNum];
      return randomQuote;
    }

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
