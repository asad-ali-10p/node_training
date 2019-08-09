import { Context } from 'koa';
export declare const getAll: (ctx: Context, next: () => void) => Promise<void>;
export declare const addHero: (ctx: Context, next: () => void) => Promise<void>;
export declare const deleteHero: (ctx: Context, next: () => void) => Promise<void>;
export declare const updateHero: (ctx: Context, next: () => void) => Promise<void>;
