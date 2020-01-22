export type Dto<T> = DataPropertiesOnly<T>;

type DataPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
  }[keyof T];
  
  type DataPropertiesOnly<T> = {
    [P in DataPropertyNames<T>]?: T[P] extends object ? Dto<T[P]> : T[P]
};

 
export interface IUserDTO {
    name: string;
    password_hash: string;
    email: string;
    is_super_user: boolean;
}