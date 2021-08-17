import { GitHub } from "@material-ui/icons";
import { Dispatch, SetStateAction } from "react";

import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  ItemContainer,
  Hamburger,
} from "./styles";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <Container className={"" + (menuOpen && "active")}>
      <Wrapper>
        <Left>
          <Logo href="#intro" onClick={() => setMenuOpen(false)}>
            emanuelv15
          </Logo>
          <ItemContainer>
            <GitHub className="icon" />
            <a
              href="https://github.com/emanuelv15"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
            </a>
          </ItemContainer>
        </Left>
        <Right>
          <Hamburger
            className={"" + (menuOpen && "active")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </Right>
      </Wrapper>
    </Container>
  );
}
