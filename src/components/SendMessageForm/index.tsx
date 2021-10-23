import styles from "./styles.module.scss";

import { VscGithubInverted, VscSignOut } from "react-icons/vsc";


export const SendMessageForm = () => {
  return (
    <div className={styles.sendMessageFormWarapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size={32} />
      </button>
      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img
            src="https://github.com/mendeswashington.png"
            alt="mendesswashington"
          />
        </div>
        <strong className={styles.userName}>Washington Santos</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          mendesswashington
        </span>
      </header>
      <form action="" className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual a sua expectativa para o evento?"
        ></textarea>
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};
