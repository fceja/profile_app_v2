const isValidNameFormat = (str: string): boolean => {
    /* matches unicode letters (various languages), spaces, and hyphens */
    const regex = /^[\p{L}\s-]+$/u;

    return regex.test(str);
}

const validateFname = (fname: string) => {
    return fname.length > 0 && isValidNameFormat(fname)
}

export const formValidation = (formData: Record<string, string>): Record<string, boolean> => {
    return {
        fnameIsValid: validateFname(formData.fname)
    }
};
