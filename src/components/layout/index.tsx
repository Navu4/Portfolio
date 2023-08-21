import { FC, ReactNode } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';

interface LayoutProps {
  children?: ReactNode
}
const Layout : FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}
export default Layout