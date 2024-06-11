import { ContactFormI, FieldInputIdsI } from "@components/contact/ContactForm"

const isValidNameFormat = (str: string): boolean => {
    /* matches unicode letters (various languages), spaces, and hyphens */
    const regex = /^[\p{L}\s-]+$/u;

    return regex.test(str);
}

const validateFname = (fname: string) => {
    return fname.length > 0 && isValidNameFormat(fname)
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

    const fnameValid = validateFname(formData.fname)
    if (!fnameValid) erroredInputIds.push(fieldInputIds.fnameInputId)

    if (erroredInputIds.length === 0) return true;
    processInputError(erroredInputIds, targetClassName)

    return false
}