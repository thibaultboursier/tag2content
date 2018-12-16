const defaultDelimiters = {
  end: "]",
  start: "["
};

interface IDelimiters {
  end: string;
  start: string;
}

interface ITags {
  [index: string]: () => string;
}

interface IOptions {
  baseContent: string;
  delimiters?: IDelimiters;
  tags: ITags;
}

export default (options: IOptions) => {
  const { baseContent, delimiters = defaultDelimiters, tags } = options;

  return Object.keys(tags).reduce((baseContent: string, tagKey: string) => {
    const tag = tags[tagKey];
    const regExp = new RegExp(
      `\\${delimiters.start}${tagKey}\\${delimiters.end}`,
      "g"
    );

    return baseContent.replace(regExp, () => tag());
  }, baseContent);
};
