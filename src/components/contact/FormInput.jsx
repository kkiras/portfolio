import styles from './Form.module.css'

export default function FormInput(props) {
    return (
        <div key={props.lbl} className={styles.inputGroup} >
            <label className={styles.contactLabel} htmlFor="">{props.lbl}</label>
            <br />
            <input 
                className={styles.input} 
                type="text" 
                name={props.lbl} 
                value={props.value}
                onChange={(e) => props.onChange(e, props.lbl)}   
            />
        </div>
    )
}
