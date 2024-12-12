import database from "../db/database.js";

export const getAllUsersModel = async () => {
	try {
		const users = await database.query("select * from users");

		return users;
	} catch (error) {
		throw Error(error.message);
	}
};
