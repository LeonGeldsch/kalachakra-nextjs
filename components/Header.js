import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="#home">
                <Image 
                    src="/images/kalachakra_icon.svg"
                    alt="Kalachakra Icon"
                    height={40}
                    width={70}
                />
            </a>
            <nav className={styles.navigation}>
                <ul>
                    <li className="navigation-item hover-underline"><a href="#home">Home</a></li>
                    <li className="navigation-item hover-underline"><a href="#newsletter">Newsletter</a></li>
                    <li className="navigation-item hover-underline"><a href="#developer-blog">Dev blog</a></li>
                </ul>
            </nav>
        </header>
    )
}