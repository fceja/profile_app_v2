import "@scss/components/contact/ContactInfo.scss";
import ContactInfoEmail from "@components/contact/ContactInfoEmail";
import ContactInfoMap from "@components/contact/ContactInfoMap";
import ContactInfoPhone from "@components/contact/ContactInfoPhone";
import ContactInfoSocial from "@components/contact/ContactInfoSocial";

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <ContactInfoPhone />
            <ContactInfoEmail />
            <ContactInfoSocial />
            <ContactInfoMap />
        </div>
    );
};

export default ContactInfo;
