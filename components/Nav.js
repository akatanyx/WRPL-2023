import Link from 'next/link';

import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/add-post">
                        Add post
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
