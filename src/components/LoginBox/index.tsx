import { VscGithubInverted } from "react-icons/vsc";
import styles from "./styles.module.scss";
export const LoginBox = () => {
  return (
    <div className={styles.loginBoxWarrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="" className={styles.signInWithGithub}>
        <VscGithubInverted size={24} />
        Entrar com github
      </a>
    </div>
  );
};
