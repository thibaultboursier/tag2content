import { ITagVariables } from '.';
import * as camelCase from 'camelcase';

export const getVariables = (text: string): ITagVariables => {
  const variables: ITagVariables = {};
  const regExp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)?["']?/gi;
  let temp;

  while ((temp = regExp.exec(text))) {
    const name = camelCase(temp[1]);
    const value = getTransformedValue(temp[2]);
    
    variables[name] = value;
  }

  return variables;
}

const getTransformedValue = (value: string): string | boolean => {
  switch(value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return value;
  }
}