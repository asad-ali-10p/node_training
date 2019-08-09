import { Users } from "../entities/users";
export declare const getAll: () => Promise<Users[]>;
export declare const save: (user: Users) => Promise<Users>;
export declare const loginUer: (user: Users) => Promise<Users[]>;
