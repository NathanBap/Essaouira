import express from 'express';
import path from 'path';
import * as formController from '../controllers/formControler.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Fenêtre de 15 minutes
    max: 2, // Limite chaque IP à 2 requêtes POST par fenêtre
    message: "Vous avez soumis le formulaire trop de fois, veuillez réessayer plus tard"
});

router.route('/')
    .get((req, res) => { res.sendFile(path.join(process.cwd(), 'views', 'accueil.html')); });

router.route('/contact')
    .get(formController.showForm)
    .post(limiter, formController.createContact);



export default router;