import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <div className="outlined-input">
                <input type="mail" name="email" placeholder="Your Email" id="mail" />
                <label htmlFor="mail">Your Email</label>
            </div>
            <button className="button">Sign up</button>
        </div>
    );
};