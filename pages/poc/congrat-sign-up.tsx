import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function CongratSignUp() {
  return (
    <div className={styles.main}>
      <div><Link href="/">Home</Link></div>
      <h1>회원가입 성공</h1>
    </div>
  );
}
