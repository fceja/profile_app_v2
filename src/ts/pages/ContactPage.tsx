import "@scss/pages/ContactPage.scss";
import ContactInfo from "@components/contact/ContactInfo";
import ContactForm from "@components/contact/ContactForm";

export default function ContactPage() {
    return (
        <main className="contact-page mt-3 mb-3 ">
            <ContactInfo />
            <ContactForm />
        </main>
    );
}
