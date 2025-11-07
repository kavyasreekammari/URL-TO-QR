import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {message: "Enter the url: ,
        name: URL}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });