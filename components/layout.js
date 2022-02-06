// layout.js

import styles from './layout.module.css';

// no quotes in {styles.container}
export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}
