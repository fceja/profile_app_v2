import { lazy, Suspense } from "react";
import Loading from "@common/components/Loading";

import "@scss/pages/ContactPage.scss";

const ContactInfo = lazy(() => import("@components/contact/ContactInfo"));
const ContactForm = lazy(() => import("@components/contact/ContactForm"));

export default function ContactPage() {
    return (
        <main className="contact-page mt-3 mb-3 ">
            <Suspense fallback={<Loading className="contact" />}>
                <ContactInfo />
                <ContactForm />
            </Suspense>
        </main>
    );
}
