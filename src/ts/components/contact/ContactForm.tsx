
import { ChangeEvent, FormEvent, useState } from "react";

import "@scss/components/contact/ContactForm.scss";
import { resetInputErrors, validateContactForm } from "@utils/forms/ContactFormValidations"

export interface ContactFormI {
    fname: string,
    lname: string,
    email: string,
    phone: string,
    message: string,
}

export interface FieldInputIdsI {
    fnameInputId: string
    lnameInputId: string
    emailInputId: string
    phoneInputId: string
    messageInputId: string
}

const ERROR_CLASSNAME = 'warn-error'
const FIELD_INPUT_IDS: FieldInputIdsI = {
    fnameInputId: 'fname-input',
    lnameInputId: 'lname-input',
    emailInputId: 'email-input',
    phoneInputId: 'phone-input',
    messageInputId: 'message-input'
}

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormI>({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });
    const [formIsValid, setFormIsValid] = useState<boolean | null>(null)
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        /* if form already submitted, do nothing */
        if (formIsSubmitted) {
            console.log('form already submitted')
            return
        }

        /* reset form error(s) if they exist */
        if (formIsValid !== null) resetInputErrors(FIELD_INPUT_IDS, ERROR_CLASSNAME);

        /* check is form is valid */
        const isValid = validateContactForm(formData, FIELD_INPUT_IDS, ERROR_CLASSNAME);
        if (!isValid) {
            console.log('display message, has error')
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
                    <input type="text" name="fname" id={FIELD_INPUT_IDS.fnameInputId} placeholder="First name" onChange={handleInputChange} required />
                </span>
                <span className="lname d-flex flex-column">
                    <label className="lname-label">Last name</label>
                    <input type="text" name="lname" id={FIELD_INPUT_IDS.lnameInputId} placeholder="Last name" onChange={handleInputChange} required />
                </span>
            </div>
            <div className="email d-flex flex-column mt-3">
                <label className="email-label">E-mail</label>
                <input type="email" name="email" id={FIELD_INPUT_IDS.emailInputId} placeholder="E-mail" onChange={handleInputChange} required />
            </div>
            <div className="phone d-flex flex-column mt-3">
                <label>Phone</label>
                <input type="phone" name="phone" id={FIELD_INPUT_IDS.phoneInputId} placeholder="Phone" onChange={handleInputChange} />
            </div>
            <div className="message d-flex flex-column mt-3">
                <label>Message</label>
                <input name="message" id={FIELD_INPUT_IDS.messageInputId} onChange={handleInputChange} placeholder="How can we help?" required />
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
