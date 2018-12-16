# tag2content
Replace a tag with content in a configurable way

[![Linux Build Status](https://travis-ci.com/thibaultboursier/tag2content.svg?branch=master)](https://travis-ci.com/thibaultboursier/tag2content)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save tag2content
```

## Import

```js
// ES6
import tag2content from 'tag2content';

// TypeScript
import * as tag2content from 'tag2content';

// CommonJS
const tag2content = require('tag2content');
```

## Basic usage

Create a text, in which you define some tags:

```js
const text = 'I would like to go to [country] next year, with my friend [friend-name].';
```

Create a configuration for you tags:

```js
const tags = {
  country: () => 'Japan',
  'friend-name': () => 'Joe',
};
```

Replace tags with their content:

```js
const updatedText = tag2content({
  tags,
  text,
});

console.log(updatedText) //=> 'I would like to go to Japan next year, with my friend Joe.';
```

## Variables

You can add some variables to your tags.

```js
const text = 'I go to [country name="England"] next year, with [friend name="Lucy" to-uppercase="true"].';
```

When you defines a function for each tag, variables are passed as argument. Kebab case variables are transformed to Pascal case ("to-uppercase" becomes "toUppercase").

```js
const tags = {
  country: variables => {
    return variables.name;
  },
  friend: ({ name, toUppercase }) => {
      return toUppercase ? name.toUpperCase() : name;
   }
};
```
