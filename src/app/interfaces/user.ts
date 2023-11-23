export interface User{
  username: string,
  email: string
}

export interface RegisterData extends User {
  password: string
}

export interface LoginData {
  email: string,
  password: string
}