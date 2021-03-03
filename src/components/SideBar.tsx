import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/components/Sidebar.module.css'

export default function Sidebar() {

    const router = useRouter();
    const [session] = useSession();

    async function signOutMoveOn() {
        signOut();
    }

    function goToHomePage() {
        router.push('/')
    }

    function goToAwardPage() {
        router.push('/leaderboard')
    }

    return (
        <aside className={styles.container}>
            <img src="icons/icon-sidebar.svg" alt="Icon Sidebar moveit" />

            <footer>
                <button
                    type="button"
                    onClick={goToHomePage}
                    disabled={router.asPath === '/'}
                >
                    <img
                        src={router.asPath === '/' ? "icons/home-blue.svg" : "icons/home.svg"}
                        alt="Icon home"
                    />
                </button>
                <button
                    type="button"
                    onClick={goToAwardPage}
                    disabled={router.asPath === '/leaderboard'}
                >
                    <img
                        src={router.asPath === '/leaderboard' ? "icons/award-blue.svg" : "icons/award.svg"}
                        alt="Icon award"
                    />
                </button>
            </footer>

            <button type="button" onClick={signOutMoveOn}>
                <img src="icons/exit.svg" alt="Sair" />
            </button>

        </aside>
    )
} 