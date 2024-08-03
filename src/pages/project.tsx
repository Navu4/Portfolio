import ContactForm from "@/components/contact"
import Projects from "@/components/projects"
import { PORTFOLIO_DATA_TYPE } from "@/types/constants"
import SEOComp from "@/utils/SEO"
import { GetServerSideProps } from "next"

interface Props {
  isMobile : boolean
  data: {
    metaData : any,
  }
}

export const getServerSideProps: GetServerSideProps<{
  data: {
    metaData : any,
  }
}> = async () => {
  let data : any = null;
  try {
    const res = await fetch(`${process.env.API_URL}/api/portfolio?type=${PORTFOLIO_DATA_TYPE.PROJECT.id}`)
    data = await res.json()
  } catch (error) {
    console.log(error);
  }
  return { props: data }
}

const ProjectPage = (props: Props) => {
  return (
    <>
        <SEOComp 
          title={`${props.data.metaData.name} | Software Engineer`} 
          description={props.data.metaData.description}
        />
        <Projects {...props} />
        {/* <ContactForm /> */}
    </>
  )
}
export default ProjectPage