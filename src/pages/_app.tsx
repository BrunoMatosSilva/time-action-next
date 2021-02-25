import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContexts';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContexts';

function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
