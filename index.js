'use strict';

import server from './server';
import config from './configs';
import db from './configs/db';

server.create(config, db);server.start();