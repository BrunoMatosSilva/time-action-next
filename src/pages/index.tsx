import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ExperienceBar } from '../components/ExperienceBar';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContexts';
import { ChallegensProvider } from '../contexts/ChallegensContexts';
import Sidebar from '../components/SideBar';
import Profile from '../components/Profile';

interface HomeProps {
  session?: {
    user: {
      name: string;
      email: string;
      image: string;
    }
  };
}

export default function Home(props: HomeProps) {

  return (
    <ChallegensProvider session={props.session}>
      <Sidebar />
      <div className={styles.container}>
        <Head>
          <title>Inicio | Time-Action</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile session={props.session} />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallegensProvider>
  )
}