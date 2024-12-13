// Importation d'Express pour créer un routeur.
import express from 'express';

// Importation des controllers
import { getHealthController } from './controllers/getHealthController.js';
import { getAllUsersController } from './controllers/getAllUsersController.js';
import { postCreateUserController } from './controllers/postCreateUserController.js';
import { getVerifyUserController } from './controllers/getVerifyUserController.js';
import { postLoginUserController } from './controllers/postLoginUserController.js';

// Importation des middlewares
import { validateUserData } from './middlewares/validateUserData.js';
import { hashPassword } from './middlewares/hashPassword.js';



// Création d'une instance de routeur
const router = express.Router();

// Définition des routes du tableau de bord (Dashboard)
    // Route pour vérifier la vie de l'API
router.get('/health', getHealthController);

    // Route pour afficher les users
router.get('/users', getAllUsersController);

    // Route pour créer un user
router.post('/register', validateUserData, hashPassword, postCreateUserController);

    // Route pour la vérification d'un nouveau user
router.get('/verify', getVerifyUserController);

    // Route pour la connexion
router.post('/login', postLoginUserController);


// Exportation du routeur pour qu'il puisse être utilisé dans d'autres fichiers
export default router;