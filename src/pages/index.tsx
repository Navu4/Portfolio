import Home from '../components/home/index';
import Work from '../components/work/index';
import Projects from '../components/projects/index';
import About from '@/components/about';
import ContactForm from '../components/contact/index';
import InfoComp from '@/components/info';


export default function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Work />
      <InfoComp />
      <ContactForm />
    </>
  )
}
