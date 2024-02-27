import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import styles from './newsletter.module.css'; 

export default function Newsletter() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.flexContainer}`}>
                <div className={`${styles.splineContainer}`}>
                    <Spline scene="https://prod.spline.design/IWy5EALBPpWNLIu6/scene.splinecode" />
                </div>
                <h3 className={`${styles.newsletterTitle}`}>The first 500 people to subscribe to the Amplify newsletter will have the chance to win AirPods!</h3>
                <div className={`${styles.inputContainer}`}>
                    <div className={`${styles.inputGroup}`}>
                        <label htmlFor="nameInput" className={`${styles.inputLabel}`}>Name</label>
                        <input id="nameInput" type="text" placeholder="Enter your name" className={`${styles.inputField}`} />
                    </div>
                    <div className={`${styles.inputGroup}`}>
                        <label htmlFor="emailInput" className={`${styles.inputLabel}`}>Email</label>
                        <input id="emailInput" type="email" placeholder="Enter your email" className={`${styles.inputField}`} />
                    </div>
                    <div className={`${styles.checkboxGroup}`}>
                        <input type="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox" className={`${styles.checkboxLabel}`}>I agree to receive emails</label>
                    </div>
                </div>
                <Link href="/" className={`${styles.submitButton}`}>Suscribe</Link>
            </div>
        </div>
    );
}
