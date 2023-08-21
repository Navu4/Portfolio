import Layout from "@/components/layout";
import "@/styles/globals.css";
import UtilityFunction from "@/utils";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";


export default function App({ Component, pageProps }: AppProps) {
    const [isMobile,setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(UtilityFunction.isMobileDevice());
    }, [])
    return (
        <>
            <Head>
                <title>Navjot Singh &#128640; | Portfolio </title>
                {/* <link rel="icon" type="image/x-icon" href="https://navu4.github.io/NavjotSingh-portfolio/Photos/images.jpeg" /> */}
            </Head>
            <Layout isMobile={isMobile} >
                <Component isMobile={isMobile} {...pageProps} />
            </Layout>
        </>
    );
}
