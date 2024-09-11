export interface IPortfolio {
  id: string;
  name: string;
  image: string;
  date: string;
  detail: string;
  view: number;
  favorite: number;
  comment: number;
}

export interface IPlace {
  id: string;
  category: string;
  image: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  users: string[];
  view: number;
}

export interface IProject {
  id: string;
  name: string;
  image: string;
  category: string;
  views: number;
  favorite: number;
  comment: number;
}
