import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";

import { Header } from "../components/Header";
import { MenuHamburguer } from "../components/MenuHamburguer";

import { App, Sections } from "../styles/home";

interface HomeProps {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

export default function Home({ theme, setTheme }: HomeProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <App>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MenuHamburguer
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          theme={theme}
          setTheme={setTheme}
        />
        <Sections></Sections>
      </App>
    </>
  );
}
