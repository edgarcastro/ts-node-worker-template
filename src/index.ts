import figlet from 'figlet';
import chalk from 'chalk';
import * as packageJSON from '../package.json';

(async function () {
  console.log(figlet.textSync(packageJSON.name));
  console.log(chalk.italic.green('Add your code here'));
})();
