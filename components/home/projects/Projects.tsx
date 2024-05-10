import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Nike Landing Page",
    imgSrc: "/project-imgs/nike-mockup.jpg",
    code: "https://github.com/saurav-verma-01/Nike-Landing-Page-Tailwind-React",
    projectLink: "https://nike-tailwind-react.netlify.app/",
    tech: ["React", "Tailwind", "Vite"],
    description: "A sleek and high-performance landing page for Nike.",
    modalContent: (
      <>
        <p>
          Exhibited mastery in crafting visually appealing and user-friendly
          interfaces, evident in the sleek design of the Nike landing page.
        </p>
        <p>
          Ensured optimal performance and smooth user experience through
          meticulous attention to detail and streamlined functionality.
        </p>
      </>
    ),
  },
  {
    title: "Dribble Clone",
    imgSrc: "/project-imgs/dribble-mockup.jpg",
    code: "https://github.com/saurav-verma-01/dribble-clone/",
    projectLink: "https://dribbble-sv.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Created a frontend clone of a Dribbble design to replicate the original aesthetic and functionality.",
    modalContent: (
      <>
        <p>
          Recreated the intricate design elements and interactive features of a
          Dribbble design, demonstrating proficiency in frontend development.
        </p>
        <p>
          Focused on maintaining fidelity to the original design while ensuring
          cross-browser compatibility and responsive layout for seamless user
          experience.
        </p>
      </>
    ),
  },
  {
    title: "Natours Landing Page",
    imgSrc: "/project-imgs/natours-mockup.jpg",
    code: "https://github.com/saurav-verma-01/Natours-Landing-Page-Design",
    projectLink: "https://gleaming-natours.netlify.app/",
    tech: ["HTML", "SCSS", "Modern CSS", "Responsive Design", "CSS Animations"],
    description:
      "A captivating landing page for Natours, a nature tour company, featuring stunning CSS animations and responsive design.",
    modalContent: (
      <>
        <p>
          Designed an immersive and visually appealing landing page that
          showcases Natours&apos; tour offerings through captivating CSS
          animations and responsive layout.
        </p>
        <p>
          Demonstrated expertise in frontend development by seamlessly
          integrating HTML and SCSS to create a dynamic and engaging user
          experience for visitors interested in nature tours.
        </p>
        <p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>
      </>
    ),
  },
  {
    title: "Medica - The Med connection",
    imgSrc: "/project-imgs/medica-mockup.jpg",
    code: "https://github.com/saurav-verma-01/Medica---The-Med-Connection",
    projectLink: "https://medica-the-med-connection.netlify.app/",
    tech: [
      "HTML",
      "SCSS",
      "CSS Animations",
      "SCSS Variables",
      "Responsive Design",
    ],
    description:
      "A landing page for Med Connection, a medical institute, focusing on seamless user experience and informative content.",
    modalContent: (
      <>
        <p>
          Crafted a user-centric landing page for Med Connection, prioritizing
          intuitive navigation and informative content to connect users with
          medical services effectively.
        </p>
        <p>
          Utilized clean and modern design principles to convey professionalism
          and trustworthiness, enhancing the institute&apos;s online presence
          and credibility in the medical field.
        </p>
      </>
    ),
  },
  {
    title: "Omnifoods",
    imgSrc: "/project-imgs/omnifoods-mockup.jpg",
    code: "https://github.com/saurav-verma-01/Omnifoods",
    projectLink: "https://omnifood-saurav.netlify.app/",
    tech: [
      "HTML",
      "CSS",
      "CSS Animations",
      "CSS Variables",
      "Responsive Design",
      "Web Design",
    ],
    description:
      "Landing Page of a technology company offering premium, fitness-oriented food subscriptions tailored to customers.",
    modalContent: (
      <>
        <p>
          Created a visually compelling landing page for Omnifoods, highlighting
          the company&apos;s innovative approach to providing personalized
          nutrition solutions through sleek design and clear messaging.
        </p>
        <p>
          Focused on user engagement and conversion optimization by designing an
          intuitive and informative interface that effectively communicates
          Omnifoods&apos; value proposition and encourages sign-ups.
        </p>
      </>
    ),
  },
  {
    title: "E-learning Website",
    imgSrc: "/project-imgs/e-learning-mockup.jpg",
    code: "https://github.com/saurav-verma-01/e-learning-platform-responsive-website",
    projectLink: "https://e-learning-wapp.netlify.app/",
    tech: [
      "HTML",
      "CSS",
      "CSS Animations",
      "CSS Variables",
      "Responsive Design",
      "Web Design",
    ],
    description:
      "A comprehensive multi-page website for an e-learning company entirely using Vanilla HTML, CSS, and JavaScript.",
    modalContent: (
      <>
        <p>
          Built a robust and feature-rich website for the e-learning company,
          leveraging the power of Vanilla HTML, CSS, and JavaScript to deliver
          an immersive and interactive learning experience across multiple
          pages.
        </p>
        <p>
          Focused on usability and accessibility by implementing intuitive
          navigation, engaging content presentation, and seamless functionality,
          catering to the diverse needs of learners and educators.
        </p>
      </>
    ),
  },
];
