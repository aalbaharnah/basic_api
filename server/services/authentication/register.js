'use strict';

import express from 'express';
import User from '../../models/User';

const httpMessages = {
    onValidationError: {
        success: false,
        message: 'Please enter email and password.'
    },
    onUserSaveError: {
        success: false,
        message: 'That email address already exists.'
    },
    onUserSaveSuccess: {
        success: true,
        message: 'Successfully created new user.'
    }
}

export const registerUser = (request, response) => {
    let { email, password } = request.body;
    if (!email || !password) {
        response.json(httpMessages.onValidationError);
    } else {
        let newUser = new User({ email: email, password: password });
        newUser.save(error => {
            if (error) {
                return response.json(httpMessages.onUserSaveError);
            }
            response.json(httpMessages.onUserSaveSuccess);
        });
    }
}