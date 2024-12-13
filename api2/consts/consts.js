import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

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

export const sendVerificationEmail = async (pseudo, email, token) => {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587, // Port pour STARTTLS
		secure: false, // Utiliser STARTTLS
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const verificationUrl = `http://localhost:5500/api/verify?token=${token}`;

	const mailOptions = {
		from: '"Etern\'Âme" <hijikatame16@gmail.com>',
		to: email,
		subject:
			"Vérification de votre email pour votre inscription sur le site Etern'Âme",
		text: `Bonjour ${pseudo}, cliquez sur ce lien pour vérifier votre compte : ${verificationUrl}`,
		html: `<p>Bonjour <strong>${pseudo}</strong>,</p><p>Veuillez vérifier votre compte en cliquant sur le lien suivant : <a href="${verificationUrl}">${verificationUrl}</a></p>`,
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log("Email de vérification envoyé à", email);
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email de vérification", error);
		throw new Error("Erreur d'envoi d'email");
	}
};
