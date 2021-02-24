import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextdata {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    experienceToNextLevel: number;
    challengersCompleted: number;
    startnewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContexts = createContext({} as ChallengesContextdata);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengersCompleted, setChallengersCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp() {
        setLevel(level + 1);
    }

    function startnewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    return (
        <ChallengesContexts.Provider
            value={{
                level,
                levelUp,
                experienceToNextLevel,
                currentExperience,
                challengersCompleted,
                startnewChallenge,
                activeChallenge,
                resetChallenge,
            }}
        >
            {children}
        </ChallengesContexts.Provider>
    );
}