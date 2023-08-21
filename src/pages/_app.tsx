import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Navjot Singh &#128640; | Portfolio </title>
                {/* <link rel="icon" type="image/x-icon" href="https://navu4.github.io/NavjotSingh-portfolio/Photos/images.jpeg" /> */}
            </Head>
            <Layout>
                <Component {...pageProps} />{" "}
            </Layout>
        </>
    );
}
