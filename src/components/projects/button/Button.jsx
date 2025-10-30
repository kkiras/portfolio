import Styles from "./Button.module.css";

function Button({ text, onClick }) {
  return <button className={Styles.btn} onClick={onClick}>{text}</button>;
}

export default Button;
