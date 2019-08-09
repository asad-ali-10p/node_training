import * as service from '../services/users';
import { Context } from 'koa';
import { IUserRequest } from '../interfaces/user';
import { string } from 'joi';

export const getAll = async(ctx: Context, next: () => void) => { 
    ctx.state.data = await service.getAll();
    await next();
}

export const addUser = async(ctx: Context, next: () => void) => { 
    const payload: IUserRequest = ctx.request.body;
    ctx.state.data = await service.addUser(payload);
    await next();
}

export const loginUser = async(ctx: Context, next: () => void) => { 
    const payload: IUserRequest = ctx.request.body;
    ctx.state.data = await service.loginUser(payload);
    await next();
}