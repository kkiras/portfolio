import { useState } from 'react'
import emailjs from "@emailjs/browser";

import styles from './Form.module.css'
import FormInput from './FormInput'

export default function Form() {
    const labels = ["name", "email"]
    const [mail, setMail] = useState({
        name: "",
        email: "",
        // phone: "",
        // company: "",
        message: ""
    })
    const [sending, setSending] = useState(false);

    const handleChange = (e, atr) =>{
        setMail(prev =>({
            ...prev,
            [atr]: e.target.value 
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!mail.name || !mail.email || !mail.message) return; // tối thiểu

        try {
        setSending(true);
        const res = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: mail.name,
                email: mail.email,
                message: mail.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        // thành công
        console.log("Email sent:", res.status, res.text);
        alert("Sent! Cảm ơn bạn đã liên hệ.");
        setMail({ name: "", email: "", message: "" });
        } catch (err) {
        console.error(err);
        alert("Gửi thất bại. Vui lòng thử lại.");
        } finally {
        setSending(false);
        }
        console.log(mail)
    }

    return (
        <form style={container} onSubmit={(e) => handleSubmit(e)}>
            <div style={information}>
                {labels.map(lbl => (
                    <FormInput key={lbl} lbl = {lbl} value={mail[lbl]} onChange={handleChange} />
                ))}
            </div>

            <div className={styles.inputGroup} >
                <label className={styles.contactLabel} htmlFor="">Message</label>
                <textarea 
                    name='message' 
                    className={styles.message} 
                    rows={6} 
                    maxLength={500}
                    value={mail.message}
                    onChange={(e) => handleChange(e, "message")}
                />
            </div>


            <div className={styles.buttonContainer}>
                <button className={styles.submitButton}>Send</button>
            </div>
        </form>
    )   
}
const container = {
    width: '45%',
    position: 'absolute',
    top: '28%',
    left: '43%',
    background: 'transparent',
    marginLeft: '48px',
}

const information = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    marginBottom: '48px'
}