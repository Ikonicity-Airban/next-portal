export interface IUser {
  name: string;
  email: string;
  role: string;
  _id: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  refreshToken: string;
  access_token: string;
  tokenUser: IUser;
}

export interface IUserResponse {
  data: {
    user: IUser;
  };
}
