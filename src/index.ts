import { getVariables } from "./utils";

export interface IDelimiters {
  end: string;
  start: string;
}

export interface ITagVariables {
  [index: string]: number | string;
}

export interface ITags {
  [index: string]: (variables: ITagVariables) => string;
}

export interface IOptions {
  baseContent: string;
  delimiters?: IDelimiters;
  tags: ITags;
}

const defaultDelimiters: IDelimiters = {
  end: "]",
  start: "["
};

export default (options: IOptions): string => {
  const { baseContent, delimiters = defaultDelimiters, tags } = options;

  return Object.keys(tags).reduce((baseContent: string, tagKey: string) => {
    const tag = tags[tagKey];
    const regExp = new RegExp(
      `\\${delimiters.start}${tagKey}(?:[^\\]]*)?\\${delimiters.end}`,
      "g"
    );

    return baseContent.replace(regExp, (match: string) => {
      return tag(getVariables(match));
    });
  }, baseContent);
};