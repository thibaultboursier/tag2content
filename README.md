# tag2content
Replace a tag with content in a configurable way

[![Linux Build Status](https://travis-ci.com/thibaultboursier/tag2content.svg?branch=master)](https://travis-ci.com/thibaultboursier/tag2content)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save tag2content
```

## Basic usage

```js
import tag2content from 'tag2content';
```

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
const text = 'I would like to go to [country name="England"] next year, with my friend [friend-name name="Lucy" to-uppercase="true"].';
```

When you defines a function for each tag, variables are passed as argument.

```js
const tags = {
  country: variables => {
    return variables.name;
  },
  'friend-name': ({
    name,
    toUppercase,
   }) => {
      return Boolean(toUppercase) ? name.toUpperCase() : name;
   }
};
```
