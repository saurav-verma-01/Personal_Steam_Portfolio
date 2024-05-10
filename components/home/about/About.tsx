import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiFillCode, AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey there! Welcome to my portfolio! I&apos;m a Frontend Developer
              who loves creating awesome websites using the latest tech.
              <br />
              <br />
              I&apos;m really good at using React.js, TypeScript, and Next.js.
              These tools help me be super creative and bring fresh ideas to
              every project.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I know a bunch of other cool stuff too, like Tailwind CSS, regular
              CSS, SCSS, styled-components, and CSS modules. With these tools, I
              can make websites that look great and work perfectly on any
              device. Whether it&apos;s making sure everything looks good on a
              phone or making websites load super fast, I&apos;m all about
              making sure people have a great experience.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I also know how to add fun animations to websites using frameworks
              like Framer Motion and anime.js. It&apos;s all about making
              websites feel alive and exciting for users!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve worked on lots of projects that show off my skills.
              I&apos;ve built websites that are fast, easy to use, and
              accessible to everyone. Whether it&apos;s making sure the pages
              load quickly or handling all the technical stuff behind the
              scenes, I&apos;ve got it covered.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always learning and staying up-to-date with the latest
              trends in frontend development. I want to make sure I&apos;m
              always bringing fresh ideas and solutions to the table.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you need a Frontend Developer who&apos;s dedicated, versatile,
              and can turn your ideas into something amazing, I&apos;m your
              person! Let&apos;s work together and create something awesome! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.statColumn}>
              <h4>
                <AiFillCode size="3rem" color="var(--brand-1)" />
                <span>Things I can help you with.</span>
              </h4>
              <div className={styles.statGrid}>
                <span className="chip">Javascript testing</span>
                <span className="chip">Cross Side scripting</span>
                <span className="chip">Responsive Web Design</span>
                <span className="chip">Api Data Handling</span>
                <span className="chip">Cross Browser Compatibility</span>
                <span className="chip">Functional Programming</span>
                <span className="chip">Web Performance Optimization</span>
                <span className="chip">Asynchronous Javascript</span>
                <span className="chip">Object Oriented Programming</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
