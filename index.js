import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the URL:',
      name: 'url'
    }
  ])
  .then((answers) => {
    console.log('You entered:', answers.url);
    // You can now use answers.url for your logic
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt couldn’t be rendered in the current environment.');
    } else {
      console.error('Something went wrong:', error);
    }
  });
