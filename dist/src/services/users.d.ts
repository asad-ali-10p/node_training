import { Users } from "../entities/users";
import { IUserRequest } from '../interfaces/user';
export declare const getAll: () => Promise<Users[]>;
export declare const addUser: (hero: IUserRequest) => Promise<Users>;
export declare const loginUser: (hero: IUserRequest) => Promise<Users[]>;
