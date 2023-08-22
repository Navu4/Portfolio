import About from "@/components/about"
import { PORTFOLIO_DATA_TYPE } from "@/types/constants";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
export const getServerSideProps: GetServerSideProps<{
  data: {
    metaData : any,
    about : any,
  }
}> = async () => {
  let data : any = null;
  try {
    const res = await fetch(`${process.env.API_URL}/api/portfolio?type=${PORTFOLIO_DATA_TYPE.ABOUT.id}`)
    data = await res.json()
  } catch (error) {
    console.log(error);
  }
  return { props: data }
}

interface Props {
  isMobile : boolean
  data :  {
    metaData : any,
    about : any,
  }
}
const AboutPage = (props: Props) => {
  return (
    <>
        <About completeAnimation={true} {...props.data.about} isMobile={props.isMobile} />
    </>
  )
}
export default AboutPage