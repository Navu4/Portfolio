import Head from "next/head";

interface Props {
    description : string
    title : string
}
const SEOComp = (props: Props) => {
    return (
        <Head>
            <meta
                name="description"
                content={props.description}
            />
            <meta
                property="og:title"
                content={props.title}
            />
            <meta
                name="og:description"
                content={props.description}
            />
            <meta
                name="twitter:title"
                content={props.title}
            />
            <meta
                name="twitter:description"
                content={props.description}
            />
        </Head>
    );
};
export default SEOComp;
