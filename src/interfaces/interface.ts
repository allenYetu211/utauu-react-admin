interface IMate {
  view: number,
  links: number,
  comment: number
}
export interface  IArticle{
  readonly title: string;
  readonly tags: string[];
  readonly introduce: string;
  readonly content: string;
  readonly mate: IMate;
  readonly _id: number;
  readonly publishState: boolean;
}

export interface  ITags{
  readonly msg: string;
  readonly type: string[];
}
