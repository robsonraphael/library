import PasswordValidator from "password-validator";

export const passwordValidator = new PasswordValidator();
export const nameValidator = new PasswordValidator();

passwordValidator
.is().min(8)
.is().max(100)
.has().uppercase()
.has().digits(2)
.has().not().spaces()

nameValidator
.is().min(4)
.is().max(30)
.has().spaces(1)
.has().not().digits()