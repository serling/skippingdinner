/* eslint-env node */
/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const createjsxFileContents = require('./create-jsx-file-contents');
const utils = require('./utils');
const eslintrc = require('../.eslintrc.json');

const componentName = process.argv[2];
const shouldBeStateful = process.argv.indexOf('-s') !== -1;

if (!componentName) {
  console.log('👻  You must specify a name for the new component.');

  process.exit(1);
}

const folderPath = path.join(
  __dirname,
  '..',
  'source',
  'components',
  componentName
);
const indexFilename = 'index.js';
const jsxFilename = `${componentName}.jsx`;
const pascalComponentName = utils.kebabToPascal(componentName);
const scssFilename = `${componentName}.scss`;

if (fs.existsSync(folderPath)) {
  console.log(
    `👻  A folder named ${chalk.blueBright(componentName)} already exists.`
  );

  process.exit(1);
}

console.log(
  `⚙️  Generating ${
    shouldBeStateful ? 'stateful' : 'stateless'
  } ${chalk.blueBright(componentName)}`
);

fs.mkdir(folderPath, err => {
  if (err) {
    console.log(
      `👻  ${chalk.red('Error creating directory')} ${chalk.blueBright(
        `./source/components/${componentName}`
      )}`,
      err
    );

    process.exit(1);
  }

  fs.writeFile(
    path.join(
      __dirname,
      '..',
      'source',
      'components',
      componentName,
      jsxFilename
    ),
    prettier.format(
      createjsxFileContents(
        componentName,
        pascalComponentName,
        shouldBeStateful
      ),
      eslintrc.rules['prettier/prettier'][1]
    ),
    {},
    err => {
      if (err) {
        console.log(
          `👻  ${chalk.red('Error writing')} ${chalk.blueBright(jsxFilename)}`,
          err
        );

        process.exit(1);
      }

      console.log(`💾  ${chalk.blueBright(jsxFilename)} saved`);
    }
  );

  fs.writeFile(
    path.join(
      __dirname,
      '..',
      'source',
      'components',
      componentName,
      scssFilename
    ),
    `.${componentName} {}`,
    {},
    err => {
      if (err) {
        console.log(
          `👻  ${chalk.red('Error writing')} ${chalk.blueBright(scssFilename)}`,
          err
        );

        process.exit(1);
      }

      console.log(`💾  ${chalk.blueBright(scssFilename)} saved`);
    }
  );

  fs.writeFile(
    path.join(
      __dirname,
      '..',
      'source',
      'components',
      componentName,
      indexFilename
    ),
    prettier.format(
      `import ${pascalComponentName} from './${componentName}'; export default ${pascalComponentName};`,
      eslintrc.rules['prettier/prettier'][1]
    ),
    {},
    err => {
      if (err) {
        console.log(
          `👻  ${chalk.red('Error writing')} ${chalk.blueBright(
            indexFilename
          )}`,
          err
        );

        process.exit(1);
      }

      console.log(`💾  ${chalk.blueBright(indexFilename)} saved`);
    }
  );
});
