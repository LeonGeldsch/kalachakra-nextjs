import Image from 'next/image';
import styles from './Parallax.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Parallax() {

    gsap.registerPlugin(ScrollTrigger);

    const parallaxLayersRef = useRef([]);

    const images = ["parallax_1.png", "parallax_2.png", "parallax_3.png", "parallax_4.png", "parallax_5.png", "parallax_6.png", "parallax_7.png", "parallax_8.png"];

    useEffect(() => {

        console.log(parallaxLayersRef.current);

        parallaxLayersRef.current.forEach((layer, index) => {
            gsap.to(layer, {
                y: "100%",
                scrollTrigger: {
                    scrub: true
                }
            });
        });
    
    }, []);

    const parallaxImages = images.map((image, index) => 
        <div className={styles.parallax_layer} id={`parallax_layer_${index}`} ref={el => parallaxLayersRef.current[index] = el} key={index}>
            <Image
                src={`/images/parallax/${image}`}
                alt={`Parallax image ${index}`}
                layout="fill"
            />
        </div>
    );

    return (
        <div className={styles.parallax_container} id="home">
            {parallaxImages}
        </div>
    );
};