import { Dispatch, SetStateAction } from "react";

import { Container } from "./styles";

interface MenuHamburguerProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

export function MenuHamburguer({
  menuOpen,
  setMenuOpen,
  theme,
  setTheme,
}: MenuHamburguerProps) {
  return (
    <Container id="menu" className={"" + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <h1 className="light">Light</h1>
      <label className="switch">
        <input type="checkbox" onClick={() => setTheme(!theme)} />
        <span className="slider round"></span>
      </label>
      <h1 className="dark">Dark</h1>
    </Container>
  );
}
