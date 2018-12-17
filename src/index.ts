import { getVariables } from './utils';

export interface IOptions {
  delimiters?: IDelimiters;
  tags: ITags;
  text: string;
}

export interface IDelimiters {
  end: string;
  start: string;
}

export interface ITags {
  [index: string]: (variables: ITagVariables) => string | boolean;
}

export interface ITagVariables {
  [index: string]: string | boolean;
}

const defaultDelimiters: IDelimiters = {
  end: ']',
  start: '[',
};

export default (options: IOptions): string => {
  const { delimiters = defaultDelimiters, tags, text } = options;

  return Object.keys(tags).reduce((text: string, tagKey: string) => {
    const tag = tags[tagKey];
    const regExp = new RegExp(`\\${delimiters.start}${tagKey}(?:[^\\]]*)?\\${delimiters.end}`, 'g');

    return text.replace(regExp, (match: string) => {
      return tag(getVariables(match)).toString();
    });
  }, text);
};
