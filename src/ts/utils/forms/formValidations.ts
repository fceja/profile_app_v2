/* matches unicoce letters (various languages), spaces, and hyphens */
const isValidNameFormat = (str: string): boolean => {
    const regex = /^[\p{L}\s-]+$/u;

    return regex.test(str);
}

const validateFName = (fname: string) => {
    return fname.length > 0 && isValidNameFormat(fname)
}

interface formI {
    fname: string
}

export const formValidation = (form: formI) => {
    const results = {
        fnameValid: false
    }

    results.fnameValid = validateFName(form.fname)

    return results
}