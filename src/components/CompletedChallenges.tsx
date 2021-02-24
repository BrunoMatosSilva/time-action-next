import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallenges() {
    const { challengersCompleted } = useContext(ChallengesContexts);

    return (
        <div className={styles.completedChallengesContainers}>
            <span>Desafios Completos</span>
            <span>{challengersCompleted}</span>
        </div>
    )
}
