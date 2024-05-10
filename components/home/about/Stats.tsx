import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand)" />
            <span>Languages & Libraries</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React.JS</span>
            <span className="chip">TypeScript</span>
            <span className="chip">JavaScript ( ES6+ )</span>
            <span className="chip">Next.JS</span>
            <span className="chip">Python</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">CSS</span>
            <span className="chip">HTML</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">Jest</span>
            <span className="chip">Vitest</span>
            <span className="chip">React Testing Library</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand)" />
            <span>Tools & Technologies</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React Query</span>
            <span className="chip">Redux Toolkit</span>
            <span className="chip">React Router</span>
            <span className="chip">React Context</span>
            <span className="chip">SCSS</span>
            <span className="chip">Css Modules</span>
            <span className="chip">Styles Components</span>
            <span className="chip">Figma</span>
            <span className="chip">VS Code</span>
            <span className="chip">Vite</span>
            <span className="chip">JSON</span>
            <span className="chip">Axios</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="3rem" color="var(--brand)" />
            <span>Technical Skills</span>
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
    </div>
  );
};
