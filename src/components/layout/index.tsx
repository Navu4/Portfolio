import { FC, ReactNode } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';

interface LayoutProps {
  children?: ReactNode
  isMobile : boolean
}
const Layout : FC<LayoutProps> = ({ children, isMobile }) => {
  return (
    <>
        <Header isMobile={isMobile} />
        {children}
        <Footer />
    </>
  )
}
export default Layout