# tag2content
Replace a tag with content in a configurable way

[![Linux Build Status](https://travis-ci.com/thibaultboursier/tag2content.svg?branch=master)](https://travis-ci.com/thibaultboursier/tag2content)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save tag2content
```

## Usage

```js
import tag2content from 'tag2content';


Creates a text, in which you define some tags:

```js
const text = 'I would like to go to [country] next year, with my friend [friend-name].';

Create a configuration for you tags:

```js
const tags = {
  country: () => 'Japan',
  'friend-name': () => 'Joe',
};

Replace tags with their content:

```js
const updatedText = tag2content({
  tags,
  text,
});
