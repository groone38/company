export interface ICompony {
  id: number;
  name_company: string;
  created: string;
}

export interface ICompanyRequest {
  data: ICompony[];
  message: string;
}
