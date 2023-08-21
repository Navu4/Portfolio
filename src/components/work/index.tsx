import styles from "@/components/work/work.module.css";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import ParticleInstance from "../particle/index";
import ConnectWithMeNudge from '../info/connectWithMeNudge';
import Link from "next/link";

interface Props {}
const Work = (props: Props) => {
    const myRef = useRef<HTMLDivElement>(null);
    const [showAnimation, setShowAnimation] = useState(false);
   
    const workExperience = [
        {
            i: 1,
            websiteLink: 'https://www.etmoney.com/',
            companyName: "Times Internet - ET Money",
            timePeriod: "April 2022- Present",
            desc: [
                `One of the key stakeholders for <strong>Mutual Fund Purchase and Redemption Flow</strong> along with user investor journey on web platform.`,
                `Developed a highly efficient <strong>minification task using Gulp</strong>, optimised gradle build script by doing <strong>parallel processing</strong>, resulting in reducing the build time by <strong>68%</strong>.`,
                `Implemented <strong>Sentry</strong> across the Etmoney website for <strong>performance and error monitoring</strong>, converting existing react projects to <strong>typescript</strong> for type safety which impacted & reduced the crash rate from <strong>8% to 4%</strong>.`,
            ],
            logo: "https://play-lh.googleusercontent.com/ZcadJVIxh0-rTFmebC7EsO7b74w09beKhyRsJuVGZfnr19471J-i8V8KbfEoTqVDjQ",
            alt: "etmoney-logo",
        },
        {
            i: 2,
            websiteLink: 'https://pepcoding.com/',
            companyName: "Pepcoding Pvt. Ltd.",
            timePeriod: "Aug 2021 - March 2022",
            desc: [
                `Worked directly as a Frontend Developer and developed various features for Product <strong>Nados</strong> using <strong>ReactJS, Typescript, NextJS, Web Sockets, ExpressJS and React Query</strong>.`,
                `Developed the Main Feed, <strong>Content and Contest</strong> Section which helped to get <strong>12,000+ users</strong> by conducting online contest and <strong>8,000+</strong> active users solve DSA problem in Content Page on daily basis.`,
                // `Developed and build <strong>Admin Panel</strong> for their product for analysis and management of user & content from scratch.`
            ],
            logo: "https://codingee.com/wp-content/uploads/2021/05/logo.png",
            alt: "pepcoding-logo",
        },
        // {
        //     i: 3,
        //     websiteLink: 'https://www.linkedin.com/company/internity/?originalSubdomain=in',
        //     companyName: "Internity Foundation",
        //     timePeriod: "March 2022- Present",
        //     desc: [
        //         `Worked in a team to build a <strong>Face Recognition System for Criminal Detection</strong> using <strong>Python, Tkinter and OpenCV</strong>. This project is being <strong>34+ fork and 47+ starred on github</strong> by many programmer and users.`,
        //         `Worked with design teams and Senior Software Engineers to optimize the website and code reviews for further development of the product.`,
        //     ],
        //     logo: "https://photos.wellfound.com/startups/i/8152972-b066b8ae508dc96792b676aa5922b38e-medium_jpg.jpg?buster=1614944176",
        //     alt: "internity-foundation-logo",
        // },
    ];

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
                {workExperience.map((exp, index) => (
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
