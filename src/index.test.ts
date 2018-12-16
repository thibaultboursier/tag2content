import tag2content, { IOptions } from './index';

test('It should replace "name" tag by "John"', () => {
  // Given
  const options = {
    baseContent: 'My name is [name]',
    tags: {
      name: () => 'John',
    },
  };

  // When
  const updatedContent = tag2content(options);

  // Then
  expect(updatedContent).toBe('My name is John');
});

test('It should replace all "country-name" tags by "Italy"', () => {
  // Given
  const options = {
    baseContent: 'I love [country-name]. [country-name] is the best country in the world.',
    tags: {
      'country-name': () => 'Italy',
    },
  };

  // When
  const updatedContent = tag2content(options);

  // Then
  expect(updatedContent).toBe('I love Italy. Italy is the best country in the world.');
});

test('It should replace all "city" and "year" tags', () => {
  // Given
  const options = {
    baseContent: 'I arrived in [city] in [year]. I am so happy to live in [city]!',
    tags: {
      city: () => 'Paris',
      year: () => '2003',
    },
  };

  // When
  const updatedContent = tag2content(options);

  // Then
  expect(updatedContent).toBe('I arrived in Paris in 2003. I am so happy to live in Paris!');
});

test('It should replace "link" tag with variables', () => {
  // Given
  const options: IOptions = {
    baseContent: 'You should visit my website. [link href="http://www.google.com"]',
    tags: {
      link: ({ href }) => `<a href="${href}" title="Link to my website">My website</a>`,
    },
  };

  // When
  const updatedContent = tag2content(options);

  // Then
  expect(updatedContent).toBe(
    'You should visit my website. <a href="http://www.google.com" title="Link to my website">My website</a>',
  );
});

test('It should replace "link" tag with variables', () => {
  // Given
  const options: IOptions = {
    baseContent: 'Your login is [user name="Joe" is-admin="true"]',
    tags: {
      user: ({ isAdmin, name }) => {
        return isAdmin ? `*${name}*` : name; 
      },
    },
  };

  // When
  const updatedContent = tag2content(options);

  // Then
  expect(updatedContent).toBe(
    'Your login is *Joe*',
  );
});
