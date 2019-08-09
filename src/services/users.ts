import { Users } from "../entities/users";
import * as joi from 'joi'
import * as repo from '../repositories/users';
import { IUserRequest } from '../interfaces/user';
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const jwtSecret = "@QEGTUI";

export const getAll = async () => {
    return repo.getAll();
} 

export const addUser = async (user: IUserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required(),
        password_hash: joi.string().required(),
    })
    
    const toSaveUser = new Users();
    toSaveUser.name = user.name;
    toSaveUser.email = user.email;
    toSaveUser.password_hash = bcrypt.hashSync(user.password_hash, 8);
    return repo.save(toSaveUser);
}

export const loginUser = async (user: IUserRequest) => {
    await joi.validate(user, {
        email: joi.string().required(),
        password_hash: joi.string().required(),
    }, { allowUnknown: true})
    
    var token = "";
    const toSaveUser = new Users();
    toSaveUser.email = user.email;

    const users: Users[] = await repo.loginUser(toSaveUser);

    if (users.length > 0) {
        if (bcrypt.compareSync(user.password_hash, users[0].password_hash)) {
            token = jwt.sign({email: users[0].email}, jwtSecret);
        }
    }
    return token;
}