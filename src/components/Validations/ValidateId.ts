import ValidateSpace from './ValidateSpace';
import validateType from './ValidateType';
import getValidationMessages from './ValidationMessages';

const validateId = (id: string) => {
    const trimmedId = ValidateSpace(id);
    const ValidationMessages = getValidationMessages();

    if (!trimmedId) {
        return ValidationMessages.REQUIRED_ID;
    }
    if (trimmedId.length < 6) {
        return ValidationMessages.INVALID_ID_LENGTH;
    }
    const regex = new RegExp(
        `^[${validateType.VALIDATE_ENGLISH_LOWERCASE}${validateType.VALIDATE_NUMBER}]+$`
    );
    if (!regex.test(trimmedId)) {
        return ValidationMessages.INVALID_ID_TYPE;
    }
    return '';
};

export default validateId;
