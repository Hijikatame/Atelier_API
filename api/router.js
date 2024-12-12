// Importation d'Express pour créer un routeur.
import express from 'express';

// Importation des controllers
import { getHealthController } from './controllers/getHealthController.js';
import { getRegisterController, verifyUserController } from './controllers/getRegisterController.js';
import { loginUserController } from './controllers/loginUserController.js';
import { logoutUserController } from './controllers/logoutUserCotroller.js';
import { protect } from './middlewares/authMiddleware.js';
import { getAllUsersController } from './controllers/getAllUsersController.js';
import { updateUserProfileController } from './controllers/updateUserProfileController.js';
import { deleteUserAccountController } from './controllers/deleteUserAccountController.js';

// Création d'une instance de routeur
const router = express.Router();

// Définition des routes du tableau de bord (Dashboard)
    // Route pour vérifier la vie de l'API
router.get('/health', getHealthController);

    // Route pour afficher les users
router.get('/users', getAllUsersController);

    // Route pour l'inscription d'un nouveau user
router.post('/register', getRegisterController);

    // Route pour la vérification d'un nouveau user
router.get('/verify', verifyUserController);

    // Route pour la connexion
router.post('/login', loginUserController);

    // Route pour la déconnexion (protégée par un middleware)
router.post('/logout', protect, logoutUserController);

    // Route pour modifier un profil (protégée par un middleware)
router.put('/update', protect, updateUserProfileController);
    // Route pour supprimer un profil (protégée par un middleware)
router.delete('/delete', protect, deleteUserAccountController);

// Exportation du routeur pour qu'il puisse être utilisé dans d'autres fichiers
export default router;
