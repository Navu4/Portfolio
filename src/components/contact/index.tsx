import styles from "@/components/contact/contact.module.css";

interface Props {}
const ContactForm = (props: Props) => {
    return (
        <section className={styles.contactSection}>
            
            <div className={styles.contactHeading}>
                <h1>Send me a message!</h1>
                <p>
                    Got a question or proposal, or just want <br /> to say
                    hello? Go ahead.{" "}
                </p>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formRow1}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Your Name</label>
                        <textarea
                            className={styles.inputText}
                            rows={1}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <textarea
                            className={styles.inputText}
                            rows={1}
                            placeholder="Enter your email address"
                        />
                    </div>
                </div>

                <div className={styles.formRow2}>
                    <div className={`${styles.inputGroup}`}>
                        <label className={styles.label}>Your Message</label>
                        <textarea
                            className={styles.inputText}
                            rows={7}
                            minLength={30}
                            style={{ height: "3.6em" }}
                            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                        />
                    </div>
                </div>

                <button className={styles.shootBtn}>
                    {" "}
                    SEND <span>→</span>{" "}
                </button>
            </div>
        </section>
    );
};
export default ContactForm;
