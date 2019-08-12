'use strict';

import apiRoute from './apis';

export const init = server => {
    server.get('*', (req, res, next) => {
        console.log(`Request was made to: ${req.originalUrl}`);
        return next
    })

    server.get('/', (req, res) => {
        res.redirect('/home');
    });

    server.use('/api', apiRoute);
}