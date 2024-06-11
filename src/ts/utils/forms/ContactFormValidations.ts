import { ContactFormI, FieldInputIdsI } from "@components/contact/ContactForm"

const isValidNameFormat = (str: string): boolean => {
    /* matches unicode letters (various languages), spaces, and hyphens */
    const regex = /^[\p{L}\s-]+$/u;

    return regex.test(str);
}

const validateName = (name: string) => {
    /* validate first or last name */
    return name.length > 0 && isValidNameFormat(name)
}

const required = (value: string) => {
    // if (value === undefined || value === '' || value === null) {
    if (!value || value === '') {
        return 'required';
    }
    return undefined;
}

const formatMaxLength = (value: string, max: number, name: string) => (value && value.trim().length > max ? name : undefined)

const emailMaxLength = (value: string) => value && formatMaxLength(value, 64, 'tooLong')

const emailFormat = (value: string) => (value && !/^[^@\s]+@[^@\s]+\.(com|org|net|edu|gov)$/.test(value) ? 'invalid' : undefined);

const validateEmail = (email: string) => {
    const emailRequiredValid = required(email) === undefined;
    const emailMaxLengthValid = emailMaxLength(email) === undefined;
    const emailFormatValid = emailFormat(email) === undefined;

    let errorCode = null
    if (!emailRequiredValid) {
        errorCode = "EmailRequired"
    } else if (!emailMaxLengthValid) {
        errorCode = "EmailTooLong"
    } else if (!emailFormatValid) {
        errorCode = "EmailInvalid"
    }

    if (errorCode) console.warn(errorCode)

    return !errorCode ? true : false
}

export const processInputError = (targetInputIds: string[], targetClassName: string) => {
    targetInputIds.forEach((targetId) => {
        const input = document.getElementById(targetId)
        input?.classList.add(targetClassName)
    })
}

export const resetInputErrors = (targetInputIds: FieldInputIdsI, targetClassName: string) => {
    Object.values(targetInputIds).forEach((id: string) => {
        const input = document.getElementById(id)
        input?.classList.remove(targetClassName)
    })
}

export const validateContactForm = (formData: ContactFormI, fieldInputIds: FieldInputIdsI, targetClassName: string) => {
    const erroredInputIds = []

    /* input validations */
    const fnameValid = validateName(formData.fname)
    if (!fnameValid) erroredInputIds.push(fieldInputIds.fnameInputId)

    const lnameValid = validateName(formData.lname)
    if (!lnameValid) erroredInputIds.push(fieldInputIds.lnameInputId)

    const emailValid = validateEmail(formData.email)
    if (!emailValid) erroredInputIds.push(fieldInputIds.emailInputId)

    /* errored, add className failed input ids to display warning */
    if (erroredInputIds.length === 0) return true;
    processInputError(erroredInputIds, targetClassName)

    return false
}