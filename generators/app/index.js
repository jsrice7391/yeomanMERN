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
        name: 'author',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Application?'
      },
      {
        type: 'input',
        name: 'desc',
        message: 'What is a brief description of the application?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // This saves all of the answers to the question to the properties of this object.
      this.props = props;
    });
  }

  get writing() {
    return {
      // Set the properties in the package.json to theb answers to the prompts above
      config() {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          {
            name: this.props.name,
            author: this.props.author,
            desc: this.props.desc
          }
        );
      },
      app() {
        // Writing out the application
        this.fs.copyTpl(
          this.templatePath('_server.js'),
          this.destinationPath('server.js')
        );
        // Writing out all of the folders from the templating folder
        this.fs.copyTpl(this.templatePath('_models'), this.destinationPath('models'));
        this.fs.copyTpl(this.templatePath('_routes'), this.destinationPath('routes'));
        this.fs.copyTpl(this.templatePath('_client'), this.destinationPath('client'));
        this.fs.copyTpl(this.templatePath('_scripts'), this.destinationPath('scripts'));
      }
    };
  }

  install() {
    this.installDependencies({ npm: false, bower: false, yarn: true });
  }
};
