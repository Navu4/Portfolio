import ContactForm from "@/components/contact"
import Projects from "@/components/projects"

interface Props {
  isMobile : boolean
}
const ProjectPage = (props: Props) => {
  return (
    <>
        <Projects {...props} />
        {/* <ContactForm /> */}
    </>
  )
}
export default ProjectPage