import styles from '@/components/home/home.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { CSSProperties, FC, memo } from 'react';
import Image from 'next/image';

const ParticleInstance = dynamic(() => import("../particle"));

type Profession = { text : string, i : number }
export interface HomeProps {
    socialMedia : { name : string, i : number, link : string }[]
    coverImgUrl : string
    name : string
    description : string
    professionAnimationData : Profession[]
    isMobile : boolean
    resumeUrl : string
}

const Home : FC<HomeProps> = (props) => {
  return (
    <section className={styles.home}>
        <div className={styles.homeContent}>
            <h3>Hello, I am</h3>
            <h1>{props.name}</h1>
            <p>{props.description}</p>

            <SocialMediaLinks socialMedia={props.socialMedia} />

            <a href={props.resumeUrl} className={styles.downloadCV} target='_blank'>Download CV</a>
        </div>
        {!props.isMobile && <ProfessionSection coverImgUrl={props.coverImgUrl} profession={props.professionAnimationData} />}
    </section>
  )
}
export default Home


const ProfessionSection = function Section({ profession, coverImgUrl } : { profession : Profession[], coverImgUrl : string }) {
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
                    <Image src={coverImgUrl} alt="navjot_cover_img" height="590" width="608" />
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