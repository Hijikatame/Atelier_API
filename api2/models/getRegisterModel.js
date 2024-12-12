export const userByEmail = async (email) => {
	try {
		const [user] = await database.query("select * from users where email = ?", [
			email,
		]);
		if (user.length > 0) {
			return user;
		}
		false;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const createUser = async ({
	pseudo,
	email,
	password_hash,
	profile_photo,
	birth_date,
	gender,
}) => {
	try {
		const user = await database.query(
			"insert into users (pseudo, email, password_hash, profile_photo, birth_date, gender) values (?,?,?,?,?,?)",
			[pseudo, email, password_hash, profile_photo, birth_date, gender],
		);
		if (user.affectedRows) {
			return user;
		}
		false;
	} catch (error) {
		throw new Error(error.message);
	}
};
