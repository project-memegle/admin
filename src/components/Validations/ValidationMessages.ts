import i18n from 'i18next';

type ValidationMessagesProps = Record<string, string>;

const getValidationMessages = (): ValidationMessagesProps => ({
    DEFAULT_ID: i18n.t('DEFAULT_ID'),
    DEFAULT_PASSWORD: i18n.t('DEFAULT_PASSWORD'),
    DEFAULT_LOGIN: i18n.t('DEFAULT_LOGIN'),
    DEFAULT_SIGNOUT: i18n.t('DEFAULT_SIGNOUT'),
    SAVED_CHANGES: i18n.t('SAVED_CHANGES'),
    SAVING_CHANGES: i18n.t('SAVING_CHANGES'),
    BACK_BUTTON: i18n.t('BACK_BUTTON'),
    API_NONEXIST_ID: i18n.t('API_NONEXIST_ID'),
    API_PASSWORD_MISMATCH: i18n.t('API_PASSWORD_MISMATCH'),
    API_UNKNOWN_ERROR: i18n.t('API_UNKNOWN_ERROR'),
    INVALID_ID_LENGTH: i18n.t('INVALID_ID_LENGTH'),
    INVALID_ID_TYPE: i18n.t('INVALID_ID_TYPE'),
    INVALID_NAME_TYPE: i18n.t('INVALID_NAME_TYPE'),
    INVALID_PASSWORD_LENGTH: i18n.t('INVALID_PASSWORD_LENGTH'),
});

export default getValidationMessages;
