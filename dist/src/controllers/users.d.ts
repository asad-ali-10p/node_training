import { Context } from 'koa';
export declare const getAll: (ctx: Context, next: () => void) => Promise<void>;
export declare const addUser: (ctx: Context, next: () => void) => Promise<void>;
export declare const loginUser: (ctx: Context, next: () => void) => Promise<void>;
