import util from 'node:util';
import chalk from 'chalk';
const logging = console.log;

export function log(chalked, normal = '') {
    logging(
        chalk.yellow('~ ') +
            chalk.blue.bold(chalked == null ? 'x' : chalked) +
            ' ' +
            util.format(normal)
    );
    logging('');
}

export function logGroup(label) {
    console.log(chalk.magenta('________________'));
    console.group(chalk.red(`start ${label}`));
    console.log('');
}

export function logGroupEnd(label) {
    logging(chalk.red(`end`));
    console.groupEnd();
    console.log(chalk.magenta('________________'));
    console.log('\n');
}
