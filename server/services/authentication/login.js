'use strict';

import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import passport from 'passport';
import { secret } from '../../../configs/db';
import { findOne } from '../../models/User';

const apiRoutes = Router();

const httpResponse = {
    onUserNotFound: {
        success: false,
        message: 'User not found.'
    },
    onAuthenticationFail: {
        success: false,
        message: 'Passwords did not match.'
    }
}

export const loginUser = (request, response)=> {
    let { email, password } = request.body;

    findOne({
        email: email
    }, (error, user) => {
        if (error) throw error;

        if (!user) {
            return response.send(httpResponse.onUserNotFound);
        }

        // Check if password matches
        user.comparePassword(password, (error, isMatch) => {
            if (isMatch && !error) {
                let token = sign(user.toJSON(), secret, {
                    expiresIn: 10080
                });

                return response.json({ success: true, token: 'JWT ' + token });
            }

            response.send(httpResponse.onAuthenticationFail);
        });
    });
};