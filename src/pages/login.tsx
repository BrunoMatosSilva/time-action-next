import { signIn } from 'next-auth/client';
import Head from 'next/head';
import styles from '../styles/pages/Login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>

            <Head>
                <title>Login | Time-Action</title>
            </Head>
            <section>
                <div>
                    <span>
                        <img src="/icons/logotime.svg" alt="Logo time-action" />
                        <h1>TIME-ACTION</h1>
                    </span>
                    <h2>Faça seu login na plataforma</h2>
                </div>
                <div>
                    <h3>Bem-vindo</h3>

                    <span>

                        <p>Acesse com sua conta Google para começar!</p>
                    </span>

                    <span>
                        <button
                            type="button"
                            onClick={() => signIn('github')}>
                            <img src='/icons/github.svg' alt="github-icon" />
                            Sign
                    </button>
                    </span>
                </div>
            </section>
        </div>
    )
}
