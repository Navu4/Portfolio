import Layout from "@/components/layout";
import "@/styles/globals.css";
import UtilityFunction from "@/utils";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(UtilityFunction.isMobileDevice());
    }, []);
    return (
        <>
            <Head>
                <title>Navjot Singh &#128640; | Portfolio </title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="https://res.cloudinary.com/dr4kgyjzt/image/upload/v1693134398/zd89y97mltcvy2i6sd9m.png"
                />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Navjot" />
                <meta
                    property="og:image"
                    content="https://github-production-user-asset-6210df.s3.amazonaws.com/51900952/259156872-b43466dd-b48f-4328-8329-7c55343dcfac.png"
                />
                <meta name="twitter:site" content="@Navjot Singh &#128640;" />
                <meta name="twitter:creator" content="@Navjot Singh &#128640;" />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:image:src"
                    content="https://github-production-user-asset-6210df.s3.amazonaws.com/51900952/259156872-b43466dd-b48f-4328-8329-7c55343dcfac.png"
                />

                <base href="/" />
            
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta name="apple-mobile-web-app-title" content="Navjot Singh &#128640;" />

                <link
                    rel="apple-touch-icon"
                    href="https://github-production-user-asset-6210df.s3.amazonaws.com/51900952/259156872-b43466dd-b48f-4328-8329-7c55343dcfac.png"
                    sizes="192x192"
                />
                <link
                    rel="alternate"
                    href="https://github-production-user-asset-6210df.s3.amazonaws.com/51900952/259156872-b43466dd-b48f-4328-8329-7c55343dcfac.png"
                />
            </Head>
            <Layout isMobile={isMobile}>
                <NextNProgress color="#0e2431" />
                <Component isMobile={isMobile} {...pageProps} />
            </Layout>
        </>
    );
}
