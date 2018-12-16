import { getVariables } from "./utils";

test('It should return "href" variable', () => {
  // Given
  const text = '[a href="http://wwww.google.fr"]';

  // When
  const variables = getVariables(text);

  // Then
  expect(variables).toEqual({
    href: "http://wwww.google.fr"
  });
});

test('It should return "src" and "title" variables', () => {
  // Given
  const text = '[img src="image.jpg" title="My image"]';

  // When
  const variables = getVariables(text);

  // Then
  expect(variables).toEqual({
    src: "image.jpg",
    title: "My image"
  });
});
