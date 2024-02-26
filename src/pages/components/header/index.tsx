import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.logo}>
      <Image
        src="/images/Logo.png"
        width={100}
        height={100}
        alt="Logo"
      />
      <div className={styles.signUp}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href='#' className={styles.link}>Sign Up</Link>
      </div>
    </header>
  );
}