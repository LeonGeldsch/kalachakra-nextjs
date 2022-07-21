import Newsletter from './Newsletter';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <h4>Sign up to newsletter</h4>
                    <Newsletter />
                    <ul className={styles.footerNavigation}>
                        <li><a className={`${styles.footerNavigationItem} hover-underline`} href="">Unsubscribe</a></li>
                        <li><a className={`${styles.footerNavigationItem} hover-underline`} href="">Developer blog</a></li>
                        <li><a className={`${styles.footerNavigationItem} hover-underline`} href="">Privacy policy</a></li>
                        <li><a className={`${styles.footerNavigationItem} hover-underline`} href="">Cookies</a></li>
                    </ul>
                </div>
                <div className={styles.footerRight}>
                    <a href="" className={styles.footerSocialIcon}>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_165_179)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.767578 25.1396C0.767578 37.5687 9.81275 47.9042 21.6427 50V31.9437H15.3801V25H21.6427V19.4438C21.6427 13.1937 25.6778 9.72292 31.3851 9.72292C33.1928 9.72292 35.1426 10 36.9504 10.2771V16.6667H33.7502C30.6878 16.6667 29.9927 18.1937 29.9927 20.1396V25H36.6727L35.5601 31.9437H29.9927V50C41.8226 47.9042 50.8678 37.5708 50.8678 25.1396C50.8678 11.3125 39.5952 0 25.8177 0C12.0401 0 0.767578 11.3125 0.767578 25.1396Z" fill="#EA71BE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_165_179">
                                    <rect width="50.1002" height="50" fill="white" transform="translate(0.767578)"/>
                                </clipPath>
                            </defs>
                        </svg>                        
                    </a>
                    <a href="" className={styles.footerSocialIcon}>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.08484 2.08325L2.85547 9.94992V42.102H14.3368V47.9166H20.7934L26.8931 42.102H36.2243L48.7806 30.1291V2.08325H6.08484ZM44.4741 28.0791L37.2973 34.9187H25.8181L19.7184 40.7332V34.9207H10.0323V6.18742H44.4741V28.0791ZM37.2973 14.0562V26.0145H32.9928V14.0562H37.2994H37.2973ZM25.8181 14.0562V26.0145H21.5136V14.0562H25.8181Z" fill="#EA71BE"/>
                        </svg>    
                    </a>
                    <a href="" className={styles.footerSocialIcon}>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_165_173)">
                            <path d="M50.1275 10.2854C48.3844 11.0562 46.5119 11.577 44.5434 11.8125C46.5745 10.5995 48.0941 8.69051 48.8186 6.44162C46.9103 7.57285 44.8218 8.36911 42.6438 8.79579C41.1791 7.23509 39.2392 6.20064 37.1251 5.85303C35.011 5.50542 32.841 5.86411 30.9521 6.8734C29.0632 7.88269 27.561 9.48613 26.6788 11.4348C25.7966 13.3834 25.5837 15.5682 26.0731 17.65C22.2064 17.4562 18.4237 16.4532 14.9706 14.706C11.5174 12.9588 8.47092 10.5065 6.02887 7.50829C5.19386 8.94579 4.71374 10.6125 4.71374 12.3875C4.7128 13.9854 5.10709 15.5588 5.86161 16.9682C6.61613 18.3775 7.70756 19.5792 9.03905 20.4666C7.49487 20.4176 5.98476 20.0012 4.63441 19.252V19.377C4.63426 21.6182 5.41103 23.7903 6.83294 25.525C8.25485 27.2596 10.2343 28.4498 12.4354 28.8937C11.0029 29.2806 9.5011 29.3376 8.04331 29.0604C8.66434 30.9887 9.87405 32.675 11.5031 33.8831C13.1321 35.0913 15.0989 35.7607 17.1281 35.7979C13.6834 38.4967 9.42918 39.9606 5.04982 39.9541C4.27407 39.9543 3.49897 39.9091 2.72852 39.8187C7.17381 42.6712 12.3485 44.185 17.6333 44.1791C35.5233 44.1791 45.3032 29.3916 45.3032 16.5666C45.3032 16.15 45.2928 15.7291 45.274 15.3125C47.1764 13.9395 48.8184 12.2393 50.1233 10.2916L50.1275 10.2854Z" fill="#EA71BE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_165_173">
                                    <rect width="50.1002" height="50" fill="white" transform="translate(0.772461)"/>
                                </clipPath>
                            </defs>
                        </svg>                        
                    </a>
                    <a href="" className={styles.footerSocialIcon}>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_165_175)">
                                <path d="M49.8243 13.5562C49.5407 12.5463 48.9881 11.632 48.2253 10.9104C47.441 10.1667 46.4797 9.63465 45.4322 9.36458C41.5119 8.33333 25.8055 8.33333 25.8055 8.33333C19.2576 8.25898 12.7114 8.58598 6.20376 9.3125C5.15623 9.60252 4.19675 10.1464 3.41068 10.8958C2.6383 11.6375 2.07885 12.5521 1.78659 13.5542C1.08455 17.3286 0.743449 21.1611 0.76789 25C0.74284 28.8354 1.0831 32.6667 1.78659 36.4458C2.07258 37.4437 2.62995 38.3542 3.40441 39.0896C4.17888 39.825 5.14331 40.3562 6.20376 40.6375C10.1763 41.6667 25.8055 41.6667 25.8055 41.6667C32.3616 41.7411 38.9162 41.4141 45.4322 40.6875C46.4797 40.4174 47.441 39.8854 48.2253 39.1417C48.9878 38.4203 49.5397 37.5058 49.8223 36.4958C50.5426 32.7228 50.8929 28.8887 50.8681 25.0479C50.9223 21.1908 50.5725 17.3387 49.8243 13.5542V13.5562ZM20.8121 32.1333V17.8687L33.8799 25.0021L20.8121 32.1333Z" fill="#EA71BE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_165_175">
                                    <rect width="50.1002" height="50" fill="white" transform="translate(0.767578)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>

    );
};