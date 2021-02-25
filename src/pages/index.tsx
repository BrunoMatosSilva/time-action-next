import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

import { ExperienceBar } from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContexts';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | time-action</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
