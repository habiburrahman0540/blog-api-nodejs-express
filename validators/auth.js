const {check} = require('express-validator');
const { isEmpty } = require('lodash');
exports.userSignupValidator = [
    check('name').not().isEmpty().withMessage('Name is required.'),
    check('email').isEmpty().withMessage('Email is required.'),
    check('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long.')
]