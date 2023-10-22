import styles from "@/components/work/work.module.css";
import { CSSProperties, useEffect, useRef, useState } from "react";
import ConnectWithMeNudge from '../info/connectWithMeNudge';
import Link from "next/link";
import dynamic from "next/dynamic";
type WorkSection =  { 
    i : number, 
    websiteLink : string, 
    companyName : string,
    timePeriod : string,
    desc : string[],
    logo : string,
    alt : string,
}

interface Props {
    isMobile : boolean,
    work : WorkSection[]
}
const ParticleInstance = dynamic(() => import("../particle"));
const Work = (props: Props) => {
    const myRef = useRef<HTMLDivElement>(null);
    const [showAnimation, setShowAnimation] = useState(false);
   
    useEffect(() => {
        const observer = new IntersectionObserver(function (entries) {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowAnimation(true);
            }
        });
        if (myRef.current) observer.observe(myRef.current);
    }, []);
    return (
        <section className={styles.workSection}>
            <div className={`${styles.workHeading}`}>
                <h3>My Experience</h3>
            </div>
            <div
                className={`${styles.workTimeline} ${
                    showAnimation ? styles.workTimelineAnimation : ""
                }`}
                ref={myRef}
            >
                {props.work.slice(0,-1).map((exp, index) => (
                    <div
                        key={exp.i}
                        className={`${styles.workContainer} ${
                            index % 2 == 0
                                ? styles.leftContainer
                                : styles.rightContainer
                        } ${
                            showAnimation ? styles.workContainerAnimation : ""
                        }`}
                        style={{ "--i": exp.i } as CSSProperties}
                    >
                        <img src={exp.logo} alt={exp.alt} />
                        <div className={styles.workCard}>
                            <Link href={exp.websiteLink}>
                            <h2>{exp.companyName}</h2>
                            <small>{exp.timePeriod}</small>
                            </Link>
                            <ul>
                                {exp.desc.map((text, index) => (
                                    <li className={styles.descPoint} dangerouslySetInnerHTML={{ __html : text }} key={index}></li>   
                                ))}
                            </ul>
                            <span
                                className={
                                    index % 2 == 0
                                        ? styles.leftContainerArrow
                                        : styles.rightContainerArrow
                                }
                            ></span>
                        </div>
                    </div>
                ))}
            </div>
            <ParticleInstance id="tsparticle" />


            <ConnectWithMeNudge />
        </section>
    );
};
export default Work;
