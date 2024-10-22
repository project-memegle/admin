import ValidationMessages from './ValidationMessages.ts';
import ValidateSpace from './ValidateSpace.ts';

const validateLogInPassword = (password: string): string => {
    const trimmedPassword = ValidateSpace(password);

    if (!trimmedPassword) {
        return ValidationMessages.REQUIRED_PASSWORD;
    }
    if (trimmedPassword.length < 8 || trimmedPassword.length > 20) {
        return ValidationMessages.INVALID_PASSWORD_LENGTH;
    }

    return '';
};

export default validateLogInPassword;
