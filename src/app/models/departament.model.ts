export interface IDepartament {
  id: number;
  name_company: string;
  created: string;
}

export interface IDepartamentRequest {
  data: IDepartament[];
  message: string;
}
