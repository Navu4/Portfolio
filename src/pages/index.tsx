import Home from '../components/home/index';
import Work from '../components/work/index';
import Projects from '../components/projects/index';
import About from '@/components/about';
import ContactForm from '../components/contact/index';
import InfoComp from '@/components/info';

interface Props {
  isMobile : boolean
}

export default function MainPage(props : Props) {
  return (
    <>
      <Home />
      <About {...props} />
      <Work />
      <InfoComp />
      <ContactForm />
    </>
  )
}
