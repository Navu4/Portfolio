import styles from '@/components/info/info.module.css'
import Link from 'next/link'

interface Props {}
const InfoComp = (props: Props) => {
  return (
    <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
            <div className={`${styles.infoLane} ${styles.projectInfo}`}>
                <article>
                    <h1>I build &amp; <br /> design stuff</h1>
                    <p>Open source <br /> projects, web apps <br /> and experimentals.</p>
                </article>
                <Link href={'/project'} className={styles.animatedBtn}> SEE MY WORK <span>→</span> </Link>
           </div>
            <div className={`${styles.infoLane} ${styles.blogInfo}`}>
                <article>
                    <h1>I write, <br /> sometimes</h1>
                    <p>About design,  <br />  frontend dev,  <br />  learning and life.</p>
                </article>
                <Link href={'https://medium.com/@snav.jot5454'} className={styles.animatedBtn}> READ MY BLOGS <span>→</span> </Link>
            </div>
        </div>
    </section>
  )
}
export default InfoComp