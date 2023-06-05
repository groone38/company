export interface User {
  id?: number;
  email: string;
  first_name?: string;
  last_name?: string;
  company?: string;
  tel?: string;
  created?: string;
  company_id?: number;
}

export interface IUserRequest {
  data: User[];
  message: string;
}
