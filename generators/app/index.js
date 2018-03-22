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
    // THis is the series of questions that the user will be asked. We will then capture the users answers after they are prompted
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Derp Derp Derp?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  get writing() {
    return {
      config() {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          { name: this.props.name }
        );
      },
      app() {
        this.fs.copyTpl(
          this.templatePath('_server.js'),
          this.destinationPath('server.js')
        );
        this.fs.copyTpl(this.templatePath('_models'), this.destinationPath('models'));
        this.fs.copyTpl(this.templatePath('_routes'), this.destinationPath('routes'));
        this.fs.copyTpl(this.templatePath('_client'), this.destinationPath('client'));
        this.fs.copyTpl(this.templatePath('_scripts'), this.destinationPath('scripts'));
        this.fs.copyTpl(
          this.templatePath('_server.js'),
          this.destinationPath('server.js')
        );
      }
    };
  }

  install() {
    this.installDependencies({ npm: false, bower: false, yarn: true });
  }
};
