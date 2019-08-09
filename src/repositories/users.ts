import { getRepository } from "typeorm";
import { Users } from "../entities/users";

export const getAll = async () => {
    return getRepository(Users).find({
        where: {
            isActive: true
        }
    });
}

export const save = async (user: Users) => {
    return getRepository(Users).save(user);
}

export const loginUser = async (user: Users) => {
    return getRepository(Users).find({
        where: {
            email: user.email
        }
    });
}