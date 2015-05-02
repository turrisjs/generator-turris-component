# generator-turris-component

> [Yeoman](http://yeoman.io) generator for Turris.js standalone ES6 React components


## About Turris.js

Turris.js is a combination of existing libraries and tools that allows fast and simple creation of single page web applications using [ES6](http://www.ecma-international.org/publications/standards/Ecma-262.htm).  

For more information please find the main generator in it's own [github repository](https://github.com/turrisjs/generator-turris).

## Getting Started

### Requirements

Refer to [main Turris.js generator requirements](https://github.com/turrisjs/generator-turris#requirements).  

### Installation

```
$ npm install -g generator-turris-component
```

### Usage

```
$ yo turris-component
```

## Learning Your Way Around

Once installed, you can create a basic Turris.js React component by following the prompts.

```shell
$ mkdir HelloWorld-Component
$ cd HelloWorld-Component
$ yo turris-component

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |      Welcome to the      |
   `---------´   |        stupendous        |
    ( _´U`_ )    |      TurrisComponent     |
    /___A___\    |        generator!        |
     |  ~  |     '--------------------------'
   __'.___.'__
 ´   `  |° ´ Y `

? Your component name: (HelloWorld-Component)
...
```

To run your component in test mode, just type `npm start`.

### Project Structure

Client:
- **/index.js** - Component entry point
- **/style/** - LESS style files
- **/src/index.js** - React component definition
- **/src/template.jsx** - React template

Misc:
- **/test/** - Unit and functional tests
- **/config.js** - Build config
- **/gulpfile.js** - Gulp bootstrapper
- **/webpack.config.js** - Webpack config for development
- **/webpack.config.prod.js** - Webpack config for production

### TODO

Add more docs and a proper test suite.

## License

[MIT](http://opensource.org/licenses/MIT)
