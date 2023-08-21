import styles from "@/components/contact/contact.module.css";
import { sendContactForm } from "@/lib/api";
import UtilityFunction from "@/utils";
import { ChangeEvent, useState } from "react";

interface Props {}

const ContactForm = (props: Props) => {
    const [form, setFormData] = useState({ name : '', email : '', message : '' });
    const [state, setState] = useState({ loading : false, error : '', emailSent : false });
    const validName = (name : string) => name && name.trim().length > 3;
    const validEmail = (email : string) => UtilityFunction.checkEmail(email);
    const validContent = (content : string) => content && content.trim().length > 0;

    const handleChange = ({ target } : ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prevForm => ({ 
            ...prevForm,
            [target.name] : target.value,
        }));
    }

    const sendEmail = async () => {
        if(!validName(form.name)) 
            return;
        if(!validEmail(form.email))
            return;
        if(!validContent(form.message) || form.message.length == 0) {
            return;
        }

        setState(prev => ({ ...prev, loading : true }));
        try {
            await sendContactForm(form);
            setState(prev => ({ ...prev, loading : false, emailSent : true }));
        } catch (err: any) {
            console.error(err);
            setState(prev => ({ ...prev, loading : false, error : err.message }));
        }
    }

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
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <textarea
                            className={styles.inputText}
                            rows={1}
                            name="email"
                            placeholder="Enter your email address"
                            onChange={handleChange}
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
                            name="message"
                            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className={styles.shootBtn} onClick={sendEmail}>
                    {
                        state.error ? 
                            <>{state.error}</> : 
                        state.loading ? 
                            <>SENDING...</> :
                        state.emailSent ? 
                            <>EMAIL SENT!</> :
                            <>SEND <span>→</span></>
                    }
                </button>
            </div>
        </section>
    );
};
export default ContactForm;
