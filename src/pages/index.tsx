import Head from "next/head";
import { Dispatch, SetStateAction, useState } from "react";

import { Header } from "../components/Header";

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
        <Sections></Sections>
      </App>
    </>
  );
}
