export interface User{
  username: string,
  name: string,
  lastName: string
}

export interface RegisterData extends User {
  password: string
}

export interface LoginData {
  username: string,
  password: string
}