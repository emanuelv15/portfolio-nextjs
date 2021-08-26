import { useState, useEffect } from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";

import {
  frontPortfolio,
  mobilePortfolio,
  backPortfolio,
  otherPortfolio,
} from "../../services/data";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Portfolio } from "../../components/Portfolio";

// import { PortfolioList } from "../PortfolioList";

// import { Container, ContainerItem } from "./styles";

interface Data {
  id: number;
  title: string;
  git?: string;
  img: string;
}

export default function PortfolioPage() {
  const [selected, setSelected] = useState("front");
  const [data, setData] = useState<Data[]>([] as Data[]);
  const [nextPage, setNextPage] = useState(6);
  const [previousPage, setPreviousPage] = useState(0);

  const list = [
    // { id: "featured", title: "Featured" },
    { id: "front", title: "Frontend" },
    { id: "mobile", title: "Mobile" },
    { id: "back", title: "Backend" },
    { id: "other", title: "Others" },
  ];

  useEffect(() => {
    switch (selected) {
      case "front":
        setData(frontPortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
      case "mobile":
        setData(mobilePortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
      case "back":
        setData(backPortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
      case "other":
        setData(otherPortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
    }
  }, [selected]);

  function handlePreviousPage() {
    setNextPage(nextPage - 6);
    setPreviousPage(previousPage - 6);
  }

  function handleNextPage() {
    setNextPage(nextPage + 6);
    setPreviousPage(previousPage + 6);
  }

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
          <Portfolio />
        </Flex>
      </Flex>
    </Flex>
  );
}
