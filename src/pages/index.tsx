import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { Intro } from "../components/Intro";
import { Portfolio } from "../components/Portfolio";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        position="relative"
        css={{
          scrollBehavior: "smooth",
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Sidebar />
        <Flex
          overflow="hidden"
          w="100vw"
          h="80vh"
          my="6"
          mx="auto"
          px="6"
          position="relative"
          css={{
            scrollBehavior: "smooth",
            scrollSnapType: "y mandatory",
            scrollbarWidth: "none",
            scrollSnapAlign: "start",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Intro />
        </Flex>
      </Flex>
    </Flex>
  );
}
