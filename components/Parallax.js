import Image from 'next/image';
import styles from './Parallax.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Parallax() {

    gsap.registerPlugin(ScrollTrigger);

    const parallaxLayersRef = useRef([]);

    const parallaxWrapperRef = useRef(null);

    const images = ["parallax_1.png", "parallax_2.png", "parallax_3.png", "parallax_4.png", "parallax_5.png", "parallax_6.png", "parallax_7.png", "parallax_8.png"];

    useEffect(() => {

        let parallaxAnimations = [];

        parallaxLayersRef.current.forEach((layer, index) => {
            parallaxAnimations[parallaxAnimations.length] = gsap.to((layer), {
                y: `${100 - (index + 2) * 10}%`,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxWrapperRef.current,
                    start: "top top",
                    scrub: true
                }
            });
        });
    }, []);

    const parallaxImages = images.map((image, index) => 
        <div className={styles.parallax_layer} id={`parallax_layer_${index + 1}`} ref={el => parallaxLayersRef.current[index] = el} key={index}>
            <Image
                src={`/images/parallax/${image}`}
                alt={`Parallax image ${index + 1}`}
                layout="fill"
            />
        </div>
    );

    return (
        <div className={styles.parallax_container} id="home" ref={parallaxWrapperRef}>
            {parallaxImages}
        </div>
    );
};