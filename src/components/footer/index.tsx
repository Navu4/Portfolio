import styles from "@/components/footer/footer.module.css"
import Link from 'next/link';
import { CSSProperties, memo } from 'react';
import { SocialMediaLinks } from "../home";

interface Props {}
const FooterSection = (props: Props) => {
    const socialMedia = [
        { name : 'bxl-linkedin', i : 7, link : 'https://www.linkedin.com/in/navjot-singh-b090b71ab/' },
        { name : 'bxl-instagram-alt', i : 8, link : 'https://www.instagram.com/navu__4/' },
        { name : 'bx-envelope', i : 9, link : 'mailto:snav.jot5454@gmail.com' },
        { name : 'bxl-facebook-square', i : 10, link : 'https://www.facebook.com/profile.php?id=100005730430065' },
        { name : 'bxl-github', i : 11, link : 'https://github.com/Navu4' },
    ]
    return <footer className={styles.footer}>
        <div className={styles.footerQuote}>
            <Link href={'/'} >
                <h3>Nav.</h3>
            </Link> 
            <p>Living, learning, & leveling up one day at a time.</p>
        </div>
        <div className={styles.footerLinks}>
            <SocialMediaLinks socialMedia={socialMedia} styleOpposite={true} />
        </div>
        <div className={styles.copyRight}>
            Handcrafted by me © twentytwentythree
        </div>
    </footer>;
};
export default FooterSection;
