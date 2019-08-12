'use strict';

import express from 'express';
import v1ApiController from './v1';

let router = express.Router();
router.use('/v1', v1ApiController);

export default router;