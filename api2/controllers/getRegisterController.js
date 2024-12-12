import { getRegisterModel } from "../models/getRegisterModel.js";

export const getRegisterController = (req, res) => {
	const users = getRegisterModel();
};
