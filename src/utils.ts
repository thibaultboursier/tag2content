import { ITagVariables } from '.';

export const getVariables = (text: string): ITagVariables => {
  const variables: ITagVariables = {};
  const regExp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)?["']?/gi;
  let temp;

  while ((temp = regExp.exec(text))) {
    const name = toCamelCase(temp[1]);
    const value = toBooleanOrString(temp[2]);

    variables[name] = value;
  }

  return variables;
};

const toBooleanOrString = (value: string): string | boolean => {
  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return value;
  }
};

const toCamelCase = (text: string): string => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/[_.\-\s]+/g, '');
};
