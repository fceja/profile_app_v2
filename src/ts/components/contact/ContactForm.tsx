
import { ChangeEvent, FormEvent, useState } from "react";

import "@scss/components/contact/ContactForm.scss";
import { formValidation } from "@utils/forms/formValidations"

type ValidationKeyT = 'fnameIsValid'

const FIELD_INPUT_IDS = ['fname-input']

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });
    const [formIsValid, setFormIsValid] = useState<boolean | null>(null)
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)

    const processFnameError = () => {
        const input = document.getElementById('fname-input')
        input?.classList.add('warn-error')
    }

    const resetErrors = () => {
        FIELD_INPUT_IDS.forEach((id) => {
            const input = document.getElementById(id)
            input?.classList.remove('warn-error')
        })
    }

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFieldErrorMap: Record<ValidationKeyT, () => void> = {
        fnameIsValid: processFnameError
    }

    const handleFormValidation = () => {
        const results = formValidation(formData)

        /* checks if all fields are valid */
        const allFieldsIsValid = Object.values(results).every(value => value);
        if (allFieldsIsValid) return true;

        /* at least one is not valid, process error for field(s) */
        Object.entries(results).forEach(([field, isFieldValid]) => {
            if (isFieldValid) return;

            if (field in handleFieldErrorMap) {
                const errorHandler = handleFieldErrorMap[field as ValidationKeyT]
                errorHandler();
            } else throw new Error('Invalid field value.')
        })

        return false
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        /* if form already submitted, do nothing */
        if (formIsSubmitted) {
            console.log('form already submitted')
            return
        }

        /* reset form errors if they exist */
        resetErrors()

        /* check is form is valid */
        const isValid = handleFormValidation();
        if (!isValid) {
            console.log('do nothing, has error')
            setFormIsValid(false)
            return
        }

        /* form is valid, submit */
        setFormIsValid(true)
        setFormIsSubmitted(true)
        console.log('ping api')
    };

    return (
        <form onSubmit={handleSubmit}>
            <span className="heading">
                <div className="message1">Get in Touch.</div>
                <div className="message2">You can reach us anytime.</div>
                <span className="email-message">We&#39;ll never share your info.</span>
            </span>
            <div className="names d-flex mt-4">
                <span className="fname d-flex flex-column">
                    <label className="fname-label">First name</label>
                    <input type="text" name="fname" id="fname-input" className="fname-input" placeholder="First name" onChange={handleInputChange} required />
                </span>
                <span className="lname d-flex flex-column">
                    <label className="lname-label">Last name</label>
                    <input type="text" name="lname" className="lname-input" placeholder="Last name" onChange={handleInputChange} required />
                </span>
            </div>
            <div className="email d-flex flex-column mt-3">
                <label className="email-label">E-mail</label>
                <input type="email" name="email" className="email-input" placeholder="E-mail" onChange={handleInputChange} required />
            </div>
            <div className="phone d-flex flex-column mt-3">
                <label>Phone</label>
                <input type="phone" name="phone" placeholder="Phone" onChange={handleInputChange} />
            </div>
            <div className="message d-flex flex-column mt-3">
                <label>Message</label>
                <input
                    className="textArea"
                    name="message"
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                />
            </div>
            <div className="text-center d-flex flex-column mt-5">
                <button type="submit" className="submit-btn">
                    Submit
                </button>
                <span className="invalid-form-message" style={{ visibility: formIsValid === false ? 'visible' : 'hidden' }}>Invalid field(s)</span>
            </div>
        </form>
    );
};

export default ContactForm;
