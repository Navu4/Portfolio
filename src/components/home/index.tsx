import styles from '@/components/home/home.module.css';
import Link from 'next/link';
import { CSSProperties, memo } from 'react';
import ParticleInstance from '../particle';

interface Props {}

const Home = (props: Props) => {
    const socialMedia = [
        { name : 'bxl-linkedin', i : 7, link : 'https://www.linkedin.com/in/navjot-singh-b090b71ab/' },
        { name : 'bxl-github', i : 8, link : 'https://github.com/Navu4' },
        { name : 'bx-code', i : 9, link : 'https://leetcode.com/NavjotSingh1/' },
        { name : 'bxl-instagram-alt', i : 10, link : 'https://www.instagram.com/navu__4/' },
    ]
  return (
    <section className={styles.home}>
        <div className={styles.homeContent}>
            <h3>Hello, I am</h3>
            <h1>Navjot Singh</h1>
            <p>A Software Engineer who is highly skilled in developing solid and scalable products with great user experiences.</p>

            <SocialMediaLinks socialMedia={socialMedia} />

            <a href="https://drive.google.com/file/d/1h1qC75a-jIvqihoFfdFTgX-e_MG8SIbl/view?usp=sharing" className={styles.downloadCV} target='_blank'>Download CV</a>
        </div>
        <ProfessionSection />
    </section>
  )
}
export default Home


const ProfessionSection = memo(function Section() {
    const profession = [
        { text : 'Software Engineer', i : 0 },
        { text : 'Full Stack Developer', i : 1 },
        { text : 'ML Enthusiast', i : 2 },
        { text : 'Frontend Developer', i : 3 },
    ]
    return (
        <>
            <div className={styles.professionContainer}>
                <div className={styles.professionBox}>
                    {
                        profession.map(prof => (
                            <div key={prof.i} className={styles.profession}  style={{ "--i" : prof.i } as CSSProperties}>
                                <h3>{prof.text}</h3>
                            </div>
                        ))
                    }
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.myImage}>
                    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/51900952/259156872-b43466dd-b48f-4328-8329-7c55343dcfac.png" alt="" />
                </div>
                <ParticleInstance id="tsparticle2" />
            </div>
            
        </>
    )
});

export const SocialMediaLinks = ({socialMedia, styleOpposite} : { styleOpposite?: boolean, socialMedia : { name : string, i : number, link : string }[] }) => <div className={`${styles.socialMedia} ${styleOpposite ? styles.oppositeSocalMedia : ''}`}>
{    socialMedia.map(media => (
        <Link key={media.i} href={media.link} target='_blank' style={{ "--i" : media.i } as CSSProperties}> <i className={`bx ${media.name}`}></i> </Link>
    ))
}
</div>;