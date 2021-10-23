import styles from "./styles.module.scss";

import LogoImg from "../../assets/logo.svg";

export const MassageList = () => {
  return (
    <div className={styles.messageListWrapper}>
      <img src={LogoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img src="https://github.com/mendeswashington.png" alt="mendesswashington" />
            </div>
            <span>Washington Santos</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img src="https://github.com/mendeswashington.png" alt="mendesswashington" />
            </div>
            <span>Washington Santos</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img src="https://github.com/mendeswashington.png" alt="mendesswashington" />
            </div>
            <span>Washington Santos</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
