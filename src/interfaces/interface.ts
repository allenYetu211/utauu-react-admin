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
  readonly mate: IMate
}