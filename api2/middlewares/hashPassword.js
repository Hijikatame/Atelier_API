import argon2 from "argon2";

export const hashedPassword = async (req, res, next) => {
	try {
		const { password } = req.body;
		const hashingOptions = {
			type: argon2.argon2id,
			memoryCost: 2 ** 16,
			timeCost: 3,
			paralleslism: 1,
		};
		const password_hash = await argon2.hash(password, hashingOptions);
		delete req.body.password;
		req.body.password_hash = password_hash;
		next();
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error.message,
		});
	}
};
