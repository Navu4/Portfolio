import styles from '@/components/projects/project.module.css'
import { CSSProperties, FC, useEffect, useRef, useState } from 'react'
import  Link  from 'next/link';

interface Props {
  isMobile : boolean
}
const Projects = ({ isMobile }: Props) => {
  const myRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const projects ={ 
    section1: [
      { 
        projectName : "Let's Chat",
        description : `Let's Chat is a real-time chatting and video calling web app.`,
        imgUrl : 'https://github.com/Navu4/Hand-Detection-for-Shredder-Machine-/assets/51900952/5cbfff4a-b511-4c5e-b749-ca08607429b7',
        tags : ['React', 'NextJs', 'NodeJs', 'ExpressJs', 'Web Sockets', 'WebRTC(PeerJS)'],
        githubLink : 'https://github.com/Navu4/Lets-Chat-Frontend',
        demo : 'https://github.com/Navu4/Lets-Chat-Frontend',
      },
      { 
        projectName : "Facial Recognition for Crime Detection",
        description : `Face recognition software to detect criminals in images and videos, noting their time of occurences.`,
        imgUrl : 'https://user-images.githubusercontent.com/51900952/90665584-dcad2680-e269-11ea-8116-3b6502f9eeca.png',
        tags : ['Python', 'Tkinter', 'OpenCV', 'Clustering'],
        githubLink : 'https://github.com/Navu4/Facial-Recognition-for-Crime-Detection',
        demo : 'https://www.youtube.com/watch?v=M5v2rXOalcw',
      },
      // {
      //   projectName : "My Excel",
      //   description : `This is a cross platform spreadsheet application I made with HTML, CSS, JavaScript and Electronjs for packaging builds.`,
      //   imgUrl : 'https://user-images.githubusercontent.com/40262320/119238419-e698e880-bb5f-11eb-8c1c-f13eef670690.png',
      //   tags : ['JavaScript', 'JQuery', 'HTML/CSS', 'Graph & Stack'],
      //   githubLink : 'https://github.com/Navu4/my-excel',
      //   demo : 'https://navu4.github.io/my-excel/',
      // },
    ],
    section2: [
      { 
        projectName : "Jarvis-Asssistance",
        description : `Developed a Jarvis Assistance to make the daily routine easy and faster using JavaScript, Speech Recognition,
        Puppeteer and ExpressJS.`,
        imgUrl : 'https://github.com/Navu4/Taskdo-project/assets/51900952/0c39c381-64c4-4cfe-9b9f-faf46d0928b7',
        tags : ['NodeJs', 'ExpressJs', 'Puppeteer', 'Speech Recognition'],
        githubLink : 'https://github.com/Navu4/Jarvis-Asssistance',
        demo : 'https://www.youtube.com/watch?v=pcVtohCgTHo',
      },
      // { 
      //   projectName : "Task Do Project",
      //   description : `Developed a landing page for a freelance project for demonstration of overall website flow using JavaScript, JQuery and HTML/CSS.`,
      //   imgUrl : 'https://github.com/Navu4/Hand-Detection-for-Shredder-Machine-/assets/51900952/fcc47be8-c845-4bbb-a5c2-d63a5c0aa99c',
      //   tags : ['JavaScript','JQuery','HTML/CSS'],
      //   githubLink : 'https://github.com/Navu4/Jarvis-Asssistance',
      //   demo : 'https://www.youtube.com/watch?v=pcVtohCgTHo',
      // },
      { 
        projectName : "Hand Detection for Shredder Machine",
        description : `Developed a software for Head Detection using Faster R-CNN Algorithm for the worker in the scrap industry to prevent accidents while using Shredder Machine.`,
        imgUrl : 'https://github.com/Navu4/Hand-Detection-for-Shredder-Machine-/assets/51900952/12413c8a-ad56-4459-a3a4-50ae32576cb2',
        tags : ['Python', 'Tkinter', 'OpenCV', 'Clustering'],
        githubLink : 'https://github.com/Navu4/Facial-Recognition-for-Crime-Detection',
        demo : 'https://www.youtube.com/watch?v=M5v2rXOalcw',
      },
    ],
    section3 : [
      { 
        projectName : "Task Do Project",
        description : `Developed a landing page for a freelance project for demonstration of overall website flow using JavaScript, JQuery and HTML/CSS.`,
        imgUrl : 'https://github.com/Navu4/Hand-Detection-for-Shredder-Machine-/assets/51900952/fcc47be8-c845-4bbb-a5c2-d63a5c0aa99c',
        tags : ['JavaScript','JQuery','HTML/CSS'],
        githubLink : 'https://github.com/Navu4/Jarvis-Asssistance',
        demo : 'https://www.youtube.com/watch?v=pcVtohCgTHo',
      },
      { 
        projectName : "My Excel",
        description : `This is a cross platform spreadsheet application I made with HTML, CSS, JavaScript and Electronjs for packaging builds.`,
        imgUrl : 'https://user-images.githubusercontent.com/40262320/119238419-e698e880-bb5f-11eb-8c1c-f13eef670690.png',
        tags : ['JavaScript', 'JQuery', 'HTML/CSS', 'Graph & Stack'],
        githubLink : 'https://github.com/Navu4/my-excel',
        demo : 'https://navu4.github.io/my-excel/',
      },
    ]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setShowAnimation(true);
        }
    });
    if (myRef.current) observer.observe(myRef.current);
  }, [])
  return (
    
    <section ref={myRef} className={styles.projectSection}>
      <div className={styles.projectContainer}>
        <div style={{ "--i" : 1 } as CSSProperties} className={`${styles.leftSection} ${showAnimation ? styles.moveUpAnimation : ''}`}>
          <div className={styles.projectHeading}>
            <p>My Projects</p>
            <h4>Work that I&apos;ve done in the past</h4>
          </div>
          {
            projects?.section1?.map((project, idx) => (
              <ProjectCard key={idx} project={project} isMobile={isMobile} />
            ))
          }
        </div>
        <div style={{ "--i" : 1 } as CSSProperties} className={`${styles.middleSection} ${showAnimation ? styles.moveDownAnimation : ''}`}>
          {
            projects?.section2?.map((project, idx) => (
              <ProjectCard key={idx} project={project} isMobile={isMobile} />
            ))
          }
        </div>

        <div style={{ "--i" : 1 } as CSSProperties} className={`${styles.rightSection} ${showAnimation ? styles.moveUpAnimation : ''}`}>
          {
            projects.section3.map((project, idx) => (
              <ProjectCard key={idx} project={project} isMobile={isMobile} />
            ))
          }
        </div>

      </div>
    </section>
  )
}
export default Projects


type Project = {
  projectName : string,
  description : string,
  imgUrl : string,
  tags : string[],
  githubLink : string,
  demo : string,
}

interface ProjectCardType {
  project : Project
  isMobile : boolean,
}

const ProjectCard : FC<ProjectCardType> = ({ project, isMobile }) => (<div className={styles.projectCard}>
  <div className={styles.imgContainer}>
    <img src={project.imgUrl} alt="" />
  </div>
  <div className={`${styles.projectContent} ${isMobile ? '' : styles.projectContentAnimation}`}>
    <h4>{project.projectName}</h4>
    <p dangerouslySetInnerHTML={{__html: project.description }} ></p>
    <div className={styles.tagContainer}>
      {
        project.tags.map(tag => (
          <div key={tag} className={styles.tag}>{tag}</div>
        ))
      }
    </div>
    {/* <div className={styles.links}>
      <Link href={project.githubLink}>Github</Link>
      <Link href={project.demo}>Demo</Link>
    </div> */}
  </div>
 
</div>)