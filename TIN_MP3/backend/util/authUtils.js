const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (passPlain) => {
    const passHashed = bcrypt.hashSync(passPlain, salt);
    return passHashed;
}

exports.comparePasswords = (passPlain, passHash) => {
    const res = bcrypt.compareSync(passPlain, passHash);
    return res;
}

//zabezpieczenie akcji kontrolerow przed uzytkownikami wpisujacymi recznie linki w pasku adresu przegladarki
//pamietaj o podlaczeniu jej w app.js 
//przykladowe podlczenie --> app.use('/employees', authUtils.permitAuthenticatedUser, employeeRouter);
exports.permitAuthenticatedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    if(loggedUser) {
        next();
    } else {
        throw new Error('unauthorized access');
    }
}