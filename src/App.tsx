import styled from "./App.global.module.scss";

import { MassageList } from "./components/MassageList";
import { LoginBox } from "./components/LoginBox";
import { SendMessageForm } from "./components/SendMessageForm";
import { useState } from "react";

type User = {
  id: string;
  name: string;
};

export const App = () => {
  const [user, setUser] = useState<User | null>({
    id: "1",
    name: "Washington",
  });

  return (
    <main className={styled.contentWarapper}>
      <MassageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
};
