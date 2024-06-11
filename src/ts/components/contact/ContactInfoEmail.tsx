import "@scss/components/contact/ContactInfoEmail.scss";

const ContactInfoEmail = () => {
  return (
    <section className="contact-info-em-container mt-3 mb-3">
      <div className="circle-em">
        <svg
          className="contact-info-em-svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          fill="#dbdbdb"
        >
          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
        </svg>
        <svg width={60} height={60}>
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="#fef6c9"
            strokeWidth="1"
          ></circle>
        </svg>
      </div>
      <span>johnAdams@gmail.com</span>
    </section>
  );
};

export default ContactInfoEmail;
