import Spline from '@splinetool/react-spline';
import styles from "./pricing.module.css";

export default function Pricing() {
    return (
        <div className={`${styles.featuresContainer}`}>
            <div className={`${styles.feature}`}>
                <div className={`${styles.featureContent}`}>
                    <div className={`${styles.splineContainer1}`}>
                        <Spline scene="https://prod.spline.design/p3FGY1fzbOtRXP8p/scene.splinecode" />
                    </div>
                    <div className={`${styles.textContainer}`}>
                        <h2 className={`${styles.title}`}>Basic Plan</h2>
                        <p className={`${styles.description}`}>Perfect for someone who wants to listen to music and view local art.</p>
                        <div className={styles.price}><h3>Free</h3>
                        </div>
                        <div className={styles.button}>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
