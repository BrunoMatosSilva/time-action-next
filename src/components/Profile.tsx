import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/BrunoMatosSilva.png" alt="Bruno Matos" />
            <div>
                <strong>Bruno Matos Silva</strong>

                <p>
                    <img src="icons/level.svg" alt="level" />
                    level 1
                </p>
            </div>
        </div>
    )
}
