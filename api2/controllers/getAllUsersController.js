import { getAllUsersModel } from "../models/getAllUsersModel.js";

export const getAllUsersController = async (req, res) => {
	try {
		const users = await getAllUsersModel();
		res.status(200).json({
			status: 200,
			message: "La liste des users",
			users,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Une erreur est survenue. Veuillez réessayer plus tard.",
		});
	}
};
