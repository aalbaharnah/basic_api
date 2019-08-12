'use strict';

import express from 'express';
import registerController from '../../controllers/apis/register';
import loginController  from '../../controllers/apis/login';
import dashboardController  from '../../controllers/apis/dashboard';

let router = express.Router();
router.use('/register', registerController);
router.use('/login', loginController);
router.use('/dashboard', dashboardController);


export default router;