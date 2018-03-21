'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

/* eslint-disable no-unused-expressions */

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the exquisite ${chalk.red(
          'generator-mern-stack-generator'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your application?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    () => {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('package.json'),
        {
          name: this.props.name
        }
      );
      this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
    };
  }

  install() {
    this.installDependencies();
  }
};
