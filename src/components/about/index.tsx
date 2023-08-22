import styles from "@/components/about/about.module.css";
import AboutSVGComp from "./SvgAnimatedComp";
import { CSSProperties, useEffect, useRef, useState } from "react";

type SkillSection = { i: number, heading : string, imgUrls : string[], desc : string }
interface Props {
    completeAnimation? : boolean
    isMobile : boolean
    description : string,
    skills : SkillSection[]
}
const About = (props: Props) => {
    const myRef = useRef<HTMLDivElement>(null);
    const [showAnimation, setShowAnimation] = useState(false);
    const [skillSectionAnimation, setSkillSectionAnimation] = useState<number[]>([]);

    

    useEffect(() => {
        const observer = new IntersectionObserver(function (entries) {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowAnimation(true);
                if(entry.target.id !== 'descRef')
                    setTimeout(() => setSkillSectionAnimation([...props.skills.map(s => s.i)]),1000);
            }
           
            entries.forEach(entry => {
                if(entry.isIntersecting && props.skills.map(s => s.i).includes(parseInt(entry?.target?.id))) {
                    setSkillSectionAnimation(prev => prev.includes(parseInt(entry?.target?.id)) ? [...prev] : [...prev, parseInt(entry?.target?.id)]);
                }
            })
        });
        if (myRef.current) observer.observe(myRef.current);
        const allSkillCardNode = document.querySelectorAll('.skill-card-observe')
        allSkillCardNode.forEach(cardNode => {
            observer.observe(cardNode);
        })
    }, []);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutHeading}>
                <div className={styles.wrap}>
                    <AboutSVGComp completeAnimation={props.completeAnimation} />
                </div>
            </div>
            <div ref={myRef} id={props.isMobile ? 'descRef' : ''} className={styles.desc}>
                <p className={showAnimation ? styles.aboutDescAnimation : ''}>
                    {props.description}
                </p>
            </div>

            <div className={styles.skillSection}>
                {props.skills.map((skill) => (
                    <div id={`${skill.i}`} key={skill.i} style={{ "--i" : skill.i } as CSSProperties} className={`skill-card-observe ${styles.skillCard} ${skillSectionAnimation?.includes(skill.i) ? styles.skillCardAnimation : ''}`}>
                        <h2>{skill.heading}</h2>
                        <div className={`${styles.iconContainer}`} >
                            {skill.imgUrls.map((url, i) => (
                                <img key={i} src={url} alt="" />
                            ))}
                        </div>
                        <p dangerouslySetInnerHTML={{ __html : skill.desc}}></p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default About;
