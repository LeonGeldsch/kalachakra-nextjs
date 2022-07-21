import styles from './LandingPage.module.css';
import KalachakraLogo from './KalachakraLogo';
import Newsletter from './Newsletter';

export default function LandingPage() {
    return (
        <section id="newsletter">
            <div className={styles.lpTitle}>
                <KalachakraLogo />
            </div>
            <h4 className={styles.lpDescription}>Available soon.<br />Sign up here to get notified.</h4>
            <Newsletter />
        </section>
    );
};