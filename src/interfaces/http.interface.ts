export interface IGetParams {
  url:string;
  data?: any;
}

export interface IConfigOrigin{
  origin: string;
}


export interface ICreateArticle {
  title: string;
	tags: string[];
	introduce: string;
	content: string;
}

