import { getUserByEmailModel } from '../models/getUserByEmailModel.js';

export const checkEmailExistence = async (email) => {
    const existingUser = await getUserByEmailModel(email);
    return existingUser;
};
