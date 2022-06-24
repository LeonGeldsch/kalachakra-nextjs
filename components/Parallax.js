import Image from 'next/image';
import styles from './Parallax.module.css';

export default function Parallax() {
    return (
        <div className={styles.parallax_container} id="home">
            <div className={styles.parallax_layer} id="parallax_layer_1">
                <Image
                    src="/images/parallax/parallax_1.png" 
                    alt="Parallax image 1"
                    layout="fill"
                />
            </div>
            <div className={styles.parallax_layer} id="parallax_layer_2">
                <Image
                    src="/images/parallax/parallax_2.png" 
                    alt="Parallax image 2"
                    layout="fill"
                />
            </div>
            <div className={styles.parallax_layer} id="parallax_layer_3">
                <Image
                    src="/images/parallax/parallax_3.png" 
                    alt="Parallax image 3"
                    layout="fill"
                />
            </div>
            <div className={styles.parallax_layer} id="parallax_layer_4">
                <Image
                    src="/images/parallax/parallax_4.png" 
                    alt="Parallax image 4"
                    layout="fill"
                />
            </div>
            <div className={styles.parallax_layer} id="parallax_layer_5">
                <Image
                    src="/images/parallax/parallax_5.png" 
                    alt="Parallax image 5"
                    layout="fill"
                />
            </div>
            <div className={styles.parallax_layer} id="parallax_layer_6">
                <Image
                    src="/images/parallax/parallax_6.png" 
                    alt="Parallax image 6"
                    layout="fill"
                />
            </div>
            <div className={styles.parallax_layer} id="parallax_layer_7">
                <Image
                    src="/images/parallax/parallax_7.png" 
                    alt="Parallax image 7"
                    layout="fill"
                />
            </div>
            <div className={styles.parallax_layer} id="parallax_layer_8">
                <Image
                    src="/images/parallax/parallax_8.png" 
                    alt="Parallax image 8"
                    layout="fill"
                />
            </div>
        </div>
    )
}