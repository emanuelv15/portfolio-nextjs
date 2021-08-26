import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiHomeLine,
  RiToolsLine,
  RiStackLine,
} from "react-icons/ri";

import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="">
        <NavLink icon={RiHomeLine} href="#intro">
          Home
        </NavLink>

        <NavLink icon={RiStackLine} href="#portfolio">
          Portfolio
        </NavLink>

        <NavLink icon={RiToolsLine} href="#projects">
          Projects
        </NavLink>

        <NavLink icon={RiContactsLine} href="#contact">
          Contact
        </NavLink>
      </NavSection>
    </Stack>
  );
}
