import { getVariables } from './utils';

test('It should return "href" variable', () => {
  // Given
  const text = '[a href="http://wwww.google.fr"]';

  // When
  const variables = getVariables(text);

  // Then
  expect(variables).toEqual({
    href: 'http://wwww.google.fr',
  });
});

test('It should return "father" variable', () => {
  // Given
  const text = '[family father="name=John;city=Liverpool"]';

  // When
  const variables = getVariables(text);

  // Then
  expect(variables).toEqual({
    father: 'name=John;city=Liverpool',
  });
});
