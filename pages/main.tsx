import Head from 'next/head'
import MainPage from "../components/MainPage/ManinPage";

export default function Home() {


    return (
        <div>
            <Head>
                <title>Game fields.</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <MainPage />
            </main>

        </div>
    )
}
