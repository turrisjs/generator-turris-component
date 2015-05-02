'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stupendous ' + chalk.red('TurrisComponent') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your component name',
      default: this.appname,
    }, {
      type: 'input',
      name: 'description',
      message: 'Your component description',
      default: 'No description yet',
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        this.props
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('npmignore'),
        this.destinationPath('.npmignore')
      );
      this.fs.copy(
        this.templatePath('config.js'),
        this.destinationPath('config.js')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('index.js'),
        this.destinationPath('index.js')
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('webpack.config.prod.js'),
        this.destinationPath('webpack.config.prod.js')
      );

      // folders
      this.fs.copyTpl(
        this.templatePath('src'),
        this.destinationPath('src'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('style'),
        this.destinationPath('style'),
        this.props
      );
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      );
      this.fs.copy(
        this.templatePath('ui-test'),
        this.destinationPath('ui-test')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
