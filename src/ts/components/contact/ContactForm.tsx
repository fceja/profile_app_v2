import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import "@scss/components/contact/ContactForm.scss";
import AxiosClient from "@utils/axiosClient/AxiosClient";
import { resetInputErrors, validateContactForm } from "@utils/forms/ContactFormValidations"

export interface ContactFormI {
    fname: string,
    email: string,
    phone: string,
}

export interface FieldInputIdsI {
    fnameInputId: string
    emailInputId: string
    phoneInputId: string
    messageTextAreaId: string
}

const ERROR_CLASSNAME = 'warn-error'
const FIELD_INPUT_IDS: FieldInputIdsI = {
    fnameInputId: 'fname-input',
    emailInputId: 'email-input',
    phoneInputId: 'phone-input',
    messageTextAreaId: 'message-textarea'
}
const MAX_LEN_TEXTAREA = 1000;


const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormI>({
        fname: "",
        email: "",
        phone: ""
    });
    const [formIsValid, setFormIsValid] = useState<boolean | null>(null)
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)
    const [formSentSuccess, setFormSentSuccess] = useState<null | boolean>(null)
    const [phoneNum, setPhoneNum] = useState('');
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        setCharCount(message.length);
    }, [message]);

    const formatPhoneNumber = (value: string) => {
        // remove non-numeric characters
        value = value.replace(/\D/g, '');

        // formatting
        if (value.length > 3 && value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else if (value.length > 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }

        return value;
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNum(formatPhoneNumber(event.target.value))
    }

    const handleTextAreaInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        if (newValue.length <= MAX_LEN_TEXTAREA) {
            setMessage(newValue);
        }
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
        submitForm()
    };

    const submitForm = () => {
        console.log('Submitting form')
        AxiosClient.post("/email/send", {
            contactName: formData.fname,
            contactEmail: formData.email,
            contactEmailMessage: message,
        })
            .then(() => {
                console.log('Successful')
                setFormSentSuccess(true)
            })
            .catch(() => {
                console.error('Error submitting form.')
                setFormSentSuccess(false)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <span className="heading">
                <div className="message1">Get in Touch.</div>
                <div className="message2">You can reach us anytime.</div>
                <span className="email-message">We&#39;ll never share your info.</span>
            </span>
            <div className="names mt-2">
                <span className="fname d-flex flex-column">
                    <label className="fname-label">Full name</label>
                    <input
                        type="text"
                        name="fname"
                        id={FIELD_INPUT_IDS.fnameInputId}
                        onChange={handleInputChange}
                        required
                    />
                </span>
            </div>
            <div className="email d-flex flex-column mt-2">
                <label className="email-label">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id={FIELD_INPUT_IDS.emailInputId}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="phone d-flex flex-column mt-2">
                <label>Phone</label>
                <input
                    type="phone"
                    name="phone"
                    value={phoneNum}
                    id={FIELD_INPUT_IDS.phoneInputId}
                    onChange={handlePhoneInputChange}
                />
            </div>
            <div className="message d-flex flex-column mt-2">
                <label>Message</label>
                <textarea
                    name="message"
                    id={FIELD_INPUT_IDS.messageTextAreaId}
                    className="message-textarea"
                    aria-label="Message Text Area"
                    onChange={handleTextAreaInputChange}
                    placeholder="How can we help?"
                    maxLength={MAX_LEN_TEXTAREA}
                    required
                />
                <div className="message-count">{charCount} / {MAX_LEN_TEXTAREA}</div>
            </div>
            <div className="text-center d-flex flex-column mt-3">
                <button type="submit" className="submit-btn">
                    Submit
                </button>
                <span
                    className="invalid-form-message"
                    style={{ visibility: formIsValid === false ? 'visible' : 'hidden' }}
                >
                    Invalid field(s)
                </span>
                {formIsSubmitted && formSentSuccess === null && <span className="pending-text">...pending</span>}
                {formIsSubmitted && formSentSuccess === true && <span className="success-text">...success</span>}
                {formIsSubmitted && formSentSuccess === false && <span className="error-text">...error occurred</span>}
            </div>
        </form >
    );
};

export default ContactForm;
