const common = [
    //   '--require-module dotenv/config',
    '--require-module ts-node/register',
    '--require-module tsconfig-paths/register',
    '--require src/**/*.ts',
    '--publish-quiet',
];

const flags = ['--fail-fast'];
const defaultParams = flags.concat(common).join(' ');

const formatOptions = {
    theme: {
        'feature keyword': ['bold', 'green'],
        'feature description': ['greenBright'],
        'scenario keyword': ['blueBright', 'bold', 'underline'],
        'scenario name': ['blueBright', 'underline'],
        'step keyword': ['blueBright'],
        'step text': ['white'],
        tag: ['grey', 'italic'],
    },
};

const reportParams = [
    '--format html:reports/cucumber-report.html',
    '--format summary:reports/cucumber-summary.txt',
    '--format message:reports/cucumber-messages.ndjson',
    '--format progress', // progress-bar, progress, summary
    '--format usage:reports/cucumber-usage.txt',
    '--format @cucumber/pretty-formatter',
    `--format-options ${JSON.stringify(formatOptions)}`,
].join(' ');

module.exports = {
    // https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md
    default: `${defaultParams} src/features/**/*.feature`,
    withReports: `${defaultParams} ${reportParams} src/features/**/*.feature`,
};
