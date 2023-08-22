import ContactForm from "@/components/contact"
import Work from "@/components/work"
import { PORTFOLIO_DATA_TYPE } from "@/types/constants"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
export const getServerSideProps: GetServerSideProps<{
  data: {
    metaData : any,
    about : any,
  }
}> = async () => {
  let data : any = null;
  try {
    const res = await fetch(`${process.env.API_URL}/api/portfolio?type=${PORTFOLIO_DATA_TYPE.WORK.id}`)
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
    work : any,
  }
}

const WorkPage = (props: Props) => {
  return (
    <>
        <Work isMobile={props.isMobile} work={props.data.work} />
        <ContactForm />
    </>
  )
}
export default WorkPage