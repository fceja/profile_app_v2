import { lazy, Suspense } from "react";

import "@scss/pages/ContactPage.scss";
import Loading from "@common/components/Loading"

const ContactInfo = lazy(() => import("@components/contact/ContactInfo"));
const ContactForm = lazy(() => import("@components/contact/ContactForm"));

export default function ContactPage() {
    return (
        <Suspense fallback={<Loading />}>
            <div className="contact-info-form-container mt-3 mb-3 ">
                <ContactInfo />
                <ContactForm />
            </div>
        </ Suspense>
    );
}
