import styles from '@/components/home/home.module.css';
import Link from 'next/link';
import { CSSProperties, FC, memo } from 'react';
import ParticleInstance from '../particle';

type Profession = { text : string, i : number }
export interface HomeProps {
    socialMedia : { name : string, i : number, link : string }[]
    coverImgUrl : string
    name : string
    description : string
    professionAnimationData : Profession[]
    isMobile : boolean
}

const Home : FC<HomeProps> = (props) => {
  return (
    <section className={styles.home}>
        <div className={styles.homeContent}>
            <h3>Hello, I am</h3>
            <h1>{props.name}</h1>
            <p>{props.description}</p>

            <SocialMediaLinks socialMedia={props.socialMedia} />

            <a href={props.coverImgUrl} className={styles.downloadCV} target='_blank'>Download CV</a>
        </div>
        <ProfessionSection profession={props.professionAnimationData} />
    </section>
  )
}
export default Home


const ProfessionSection = function Section({ profession } : { profession : Profession[] }) {
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
};

export const SocialMediaLinks = ({socialMedia, styleOpposite} : { styleOpposite?: boolean, socialMedia : { name : string, i : number, link : string }[] }) => <div className={`${styles.socialMedia} ${styleOpposite ? styles.oppositeSocalMedia : ''}`}>
{    socialMedia.map(media => (
        <Link key={media.i} href={media.link} target='_blank' style={{ "--i" : media.i } as CSSProperties}> <i className={`bx ${media.name}`}></i> </Link>
    ))
}
</div>;