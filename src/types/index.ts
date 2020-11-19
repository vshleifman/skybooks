export type uuid = string;

export interface Book {
  _id: uuid;
  title: string;
  author: string;
  type: string;
  skill: string;
  location: string;
}

export interface UserResponse {
  books: Book[];
  _id: uuid;
  email: string;
  password: string;
  __v?: any;
}

export interface User extends Omit<UserResponse, 'books'> {
  books: uuid[];
}
