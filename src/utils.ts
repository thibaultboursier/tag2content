import { ITagVariables } from '.';

export function getVariables(text: string) {
  const variables: ITagVariables = {};
  const regExp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)?["']?/gi;
  let temp;

  while ((temp = regExp.exec(text))) {
    variables[temp[1]] = temp[2];
  }

  return variables;
}
