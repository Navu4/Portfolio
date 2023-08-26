import Home from '../components/home/index';
import Work from '../components/work/index';
import Projects from '../components/projects/index';
import About from '@/components/about';
import ContactForm from '../components/contact/index';
import InfoComp from '@/components/info';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head';
 
export const getServerSideProps: GetServerSideProps<{
  data: {
    metaData : any,
    about : any,
    project : any,
    work : any,
  }
}> = async () => {
  let data : any = null;
  try {
    const res = await fetch(`${process.env.API_URL}/api/portfolio`)
    data = await res.json()
  } catch (error) {
    console.log(error);
  }
  return { props: data }
}

interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {
  isMobile : boolean
  data :  {
    metaData : any,
    about : any,
    project : any,
    work : any,
  }
}

export default function MainPage(props : Props) {
  return (
    <>
      <Head>
      <meta
          name="description"
          content={props.data.metaData.description}
      />
      <meta
          property="og:title"
          content={`${props.data.metaData.name} &#128640; | Software Engineer`}
      />
      <meta
          name="og:description"
          content={props.data.metaData.description}
      />
      <meta
          name="twitter:title"
          content={`${props.data.metaData.name} &#128640; | Software Engineer`}
      />
      <meta
          name="twitter:description"
          content={props.data.metaData.description}
      />
      </Head>
      <Home {...props.data.metaData} isMobile={props.isMobile} />
      <About {...props.data.about} isMobile={props.isMobile} />
      <Work work={props.data.work} isMobile={props.isMobile} />
      <InfoComp />
      <ContactForm />
    </>
  )
}