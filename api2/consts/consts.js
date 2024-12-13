import jwt from "jsonwebtoken";

export const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
};

export const validatePassword = (password) => {
	const passwordRegex =
		/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return passwordRegex.test(password);
};

export const generateToken = (user) => {
	const token = jwt.sign(user, process.env.JWT_SECRET_ACESS_TOKEN, {
		expiresIn: process.env.JWT_EXP_ACCESS_TOKEN,
	});
	return token;
};
