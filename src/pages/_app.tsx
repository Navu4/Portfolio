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
                <link rel="icon" type="image/x-icon" href="https://github-production-user-asset-6210df.s3.amazonaws.com/51900952/262477828-207f86c1-4ac0-4ef9-850e-bacfc6be4641.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230822%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230822T204014Z&X-Amz-Expires=300&X-Amz-Signature=9fa79a5442f271e2f7315d9d240d02667d545fe9bcf5a834b46602ba3bd5d10d&X-Amz-SignedHeaders=host&actor_id=51900952&key_id=0&repo_id=681108642" />
            </Head>
            <Layout isMobile={isMobile} >
                <Component isMobile={isMobile} {...pageProps} />
            </Layout>
        </>
    );
}
