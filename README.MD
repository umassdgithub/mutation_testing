# Mutation Testing
## Using Stryker to generate mutants and test them

In this example, 2 basic JS functions are tested using Jest unit testing library.
- **bmi.js:** which calculates the bmi by pounds, foot and inches
- **gradeToLetter.js**: Returns the correspounding letter for a grade.

The steps to run
- install nodejs
- run: ```npm install ``` 
- to run the unit test, use: ```npm test```
- to run the mutation generate and test: ```npx stryker run --reporters html```

The last line, generates an HTML file with the name of repoerters/mutation.html which contains the test results for the coverage and also mutatoin.


