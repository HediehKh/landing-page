import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <Image 
                    src="/images/Logo.png"
                    width={100}
                    height={100}
                    alt="Logo"
                />
                <div className={styles.footerLink}>
                    <h2>Contact</h2>
                    <Link href="/">Number</Link>
                </div>
                <div className={styles.github}>
                    <h3>© 2024 Hedieh Kharaqani</h3>
                    <Link href="https://github.com/pjiang604/MDIA3109_FinalProject">Amplify Github</Link>
                </div>
            </div>
        </div>
    );
}
