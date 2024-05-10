import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillSkype,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/saurav-dev/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="3.25rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://twitter.com/SauravKverma22"
          target="_blank"
          rel="nofollow"
        >
          <AiFillTwitterSquare size="3.25rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://github.com/saurav-verma-01"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="3.25rem" />
        </Link>
      </motion.span>

      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://www.instagram.com/aluckyfin/" target="_blank" rel="nofollow">
          <AiFillInstagram size="2.4rem" />
        </Link>
      </motion.span> */}

      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="https://www.youtube.com/@aluckyfinsenpai2622" target="_blank" rel="nofollow">
          <AiFillYoutube size="2.4rem" />
        </Link>
      </motion.span> */}
    </div>
  );
};
