import PasswordValidator from "password-validator";
import * as EmailValidator from "email-validator";

export const passwordValidator = new PasswordValidator();
export const nameValidator = new PasswordValidator();
export const emailValidator = EmailValidator;

nameValidator
    .is().min(4)
    .is().max(30)
    .has().spaces(1)
    .has().not().digits();

passwordValidator
  .is().min(8)
  .is().max(100)
  .has().uppercase()
  .has().digits(2)
  .has().not().spaces();
