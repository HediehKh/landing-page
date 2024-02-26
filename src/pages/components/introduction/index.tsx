import styles from "./introduction.module.css";

export default function Introduction() {
    return (
        <div className={`${styles.introduction}`}>
            <div className={`${styles.title}`}>
                <h1>AMPLIFY</h1>
                <h2>Discover Art in Vancouver & Immerse Yourself in the Sounds of Canadian Music</h2>
                <a className={`${styles.link}`} href="#">Sign Up Now</a>
            </div>
        </div>
    )
}
