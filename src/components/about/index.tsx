import styles from "@/components/about/about.module.css";
import AboutSVGComp from "./SvgAnimatedComp";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface Props {
    completeAnimation? : boolean
}
const About = (props: Props) => {
    const myRef = useRef<HTMLDivElement>(null);
    const [showAnimation, setShowAnimation] = useState(false);
    const [skillSectionAnimation, setSkillSectionAnimation] = useState(false);

    const skillSection = [
        {
            i: 0,
            heading: "Design",
            imgUrls: [
                "https://stefantopalovicdev.vercel.app/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg",
                "https://stefantopalovicdev.vercel.app/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg",
                "https://mui.com/static/logo.png",
                "https://miro.medium.com/v2/resize:fit:800/1*8hhfdEqRkRQSaJrJlx60zg.png",
            ],
            desc: `I value simple content structure, clean design patterns, and
                    thoughtful interactions. <br /> <br /> I enjoy developing
                    and designing UI using <br />
                    <strong>HTMLS, CSS & SCSS </strong>
                    , <br /> and also using different UI Component Libraries
                    like <br /><strong>Materail UI and Chakra UI.
                    </strong>`,
        },
        {
            i: 2,
            heading: "Code",
            imgUrls: [
                "https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg",
                "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOwT02fLX2NqbLwHfn50ETJTXGmaQMbeO0muz-Adn_Q&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXs5SPNxE6VAsPyu3u9xnqWdxIZc9jtXBEUpCVz8dog&s",
            ],
            desc: `
                    I like to code things from scratch, and enjoy bringing ideas
                    to life in the browser and software. <br /> <br /> Highly
                    skilled in using <br />
                     <strong>
                        JavaScript, ReactJs, NextJS, Redux, Java Servlet and JSP
                    </strong>
                    for building frontend and <br />
                     <strong>
                        NodeJs, ExpressJs, WebSockets and Java
                    </strong>
                    in Backend
                `,
        },
        {
            i: 3,
            heading: "Tools",
            imgUrls: [
                "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
                "https://www.svgrepo.com/show/303440/gulp-logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png",
                "data:image/jpeg;base64,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",
            ],
            desc: `For easily collabrative & building robust system and
                    development, I have worked and used <br />
                     <strong>
                        
                        GIT, Github, Jenkins
                    </strong>
                    for source code management and deployment purposes. <br />
                    <br /> Worked with
                     <strong>
                        
                        Gulp, Webpack and Gradle
                    </strong>
                    for fast, optimised bundling of source code and making build
                    process roboust.
                `,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(function (entries) {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setShowAnimation(true);
                setTimeout(() => setSkillSectionAnimation(true),1000);
            }
        });
        if (myRef.current) observer.observe(myRef.current);
    }, []);
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutHeading}>
                <div className={styles.wrap}>
                    <AboutSVGComp completeAnimation={props.completeAnimation} />
                </div>
            </div>
            <div ref={myRef} className={styles.desc}>
                <p className={showAnimation ? styles.aboutDescAnimation : ''}>
                    A passionate Software Engineer excellent in building
                    software that improves the lives of those around me. <br />I
                    have work with different companies to create high
                    performance & rich interactive software and websites that
                    work across all platforms & devices.
                </p>
            </div>

            <div className={styles.skillSection}>
                {skillSection.map((skill) => (
                    <div key={skill.i} style={{ "--i" : skill.i } as CSSProperties} className={`${styles.skillCard} ${skillSectionAnimation ? styles.skillCardAnimation : ''}`}>
                        <h2>{skill.heading}</h2>
                        <div className={styles.iconContainer}>
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
