import tag2content, { IOptions } from './index';

test('It should replace "name" tag by "John"', () => {
  // Given
  const options = {
    tags: {
      name: () => 'John',
    },
    text: 'My name is [name]',
  };

  // When
  const updatedText = tag2content(options);

  // Then
  expect(updatedText).toBe('My name is John');
});

test('It should replace all "country-name" tags by "Italy"', () => {
  // Given
  const options = {
    tags: {
      'country-name': () => 'Italy',
    },
    text: 'I love [country-name]. [country-name] is the best country in the world.',
  };

  // When
  const updatedText = tag2content(options);

  // Then
  expect(updatedText).toBe('I love Italy. Italy is the best country in the world.');
});

test('It should replace all "city" and "year" tags', () => {
  // Given
  const options = {
    tags: {
      city: () => 'Paris',
      year: () => '2003',
    },
    text: 'I arrived in [city] in [year]. I am so happy to live in [city]!',
  };

  // When
  const updatedText = tag2content(options);

  // Then
  expect(updatedText).toBe('I arrived in Paris in 2003. I am so happy to live in Paris!');
});

test('It should replace "link" tag with variables', () => {
  // Given
  const options: IOptions = {
    tags: {
      link: ({ href }) => `<a href="${href}" title="Link to my website">My website</a>`,
    },
    text: 'You should visit my website. [link href="http://www.google.com"]',
  };

  // When
  const updatedText = tag2content(options);

  // Then
  expect(updatedText).toBe(
    'You should visit my website. <a href="http://www.google.com" title="Link to my website">My website</a>',
  );
});

test('It should replace "user" tag with variables and return a login with admin symbols', () => {
  // Given
  const options: IOptions = {
    tags: {
      user: ({ isAdmin, name }) => {
        return isAdmin ? `*${name}*` : name;
      },
    },
    text: 'Your login is [user name="Joe" is-admin="true"]',
  };

  // When
  const updatedText = tag2content(options);

  // Then
  expect(updatedText).toBe('Your login is *Joe*');
});

test('It should replace "first-name" tag using custom delimiters', () => {
  // Given
  const options: IOptions = {
    delimiters: {
      end: '}',
      start: '{',
    },
    tags: {
      'first-name': ({ value }) => value,
    },
    text: 'My first name is {first-name value="Robin"}.',
  };

  // When
  const updatedText = tag2content(options);

  // Then
  expect(updatedText).toBe('My first name is Robin.');
});
