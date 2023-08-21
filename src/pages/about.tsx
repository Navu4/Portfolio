import About from "@/components/about"

interface Props {
  isMobile : boolean
}
const AboutPage = (props: Props) => {
  return (
    <>
        <About completeAnimation={true} {...props} />
    </>
  )
}
export default AboutPage