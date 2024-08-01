import express from 'express';
import path from 'path';
import * as formController from '../controllers/formControler.js';

const router = express.Router();

router.route('/')
    .get((req, res) => { res.sendFile(path.join(process.cwd(), 'views', 'index.html')); });

router.route('/contact')
    .get(formController.showForm)
    .post(formController.createContact);



export default router;