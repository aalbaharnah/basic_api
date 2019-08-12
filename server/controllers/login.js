'use strict';

import express from 'express';
import loginService from '../../services/authentication/login';

let router = express.Router();
router.post('/', loginService.loginUser);

export default router;