import { MouseEventHandler } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import styles from "./outlinebutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      <AiFillFilePdf size="3.25rem" />
      {children}
    </button>
  );
};
