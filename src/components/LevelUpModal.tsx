import styles from '../styles/components/LevelUpModal.module.css';
import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallegensContexts';

export default function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>

                <p>Você Alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal} >
                    <img src="./icons/close.svg" alt="Fechar Modal" />
                </button>
            </div>
        </div >
    )
}
