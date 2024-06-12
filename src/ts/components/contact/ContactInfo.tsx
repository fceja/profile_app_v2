import "@scss/components/contact/ContactInfo.scss";
import ContactInfoEmail from "@components/contact/ContactInfoEmail";
import ContactInfoMap from "@components/contact/ContactInfoMap";
import ContactInfoPhone from "@components/contact/ContactInfoPhone";
import ContactInfoSocial from "@components/contact/ContactInfoSocial";

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="div-box-outer">
                <span className="span-box">
                    <ContactInfoPhone />
                    <ContactInfoEmail />
                </span>
            </div>
            <ContactInfoMap />
            <ContactInfoSocial />
        </div>
    );
};

export default ContactInfo;
