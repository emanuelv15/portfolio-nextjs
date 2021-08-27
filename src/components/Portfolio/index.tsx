import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  List,
  Link as ChakraLink,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import {
  frontPortfolio,
  mobilePortfolio,
  backPortfolio,
  otherPortfolio,
} from "../../services/data";

import { PortfolioList } from "./PortfolioList";

interface Data {
  id: number;
  title: string;
  git?: string;
  img: string;
}

export function Portfolio() {
  const isWideVersion = useBreakpointValue({
    base: 3,
    md: 8,
  });

  console.log(isWideVersion);

  const [selected, setSelected] = useState("front");
  const [data, setData] = useState<Data[]>([] as Data[]);
  const [nextPage, setNextPage] = useState(isWideVersion);
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
        setNextPage(isWideVersion);
        setPreviousPage(0);
        break;
      case "mobile":
        setData(mobilePortfolio);
        setNextPage(isWideVersion);
        setPreviousPage(0);
        break;
      case "back":
        setData(backPortfolio);
        setNextPage(isWideVersion);
        setPreviousPage(0);
        break;
      case "other":
        setData(otherPortfolio);
        setNextPage(isWideVersion);
        setPreviousPage(0);
        break;
    }
  }, [selected]);

  function handlePreviousPage() {
    setNextPage(nextPage - isWideVersion);
    setPreviousPage(previousPage - isWideVersion);
  }

  function handleNextPage() {
    setNextPage(nextPage + isWideVersion);
    setPreviousPage(previousPage + isWideVersion);
  }

  return (
    <Flex
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="80vh"
    >
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={["3xl", "5xl"]} fontWeight="bold">
          Projects
        </Text>

        <List m="10px" p="0" listStyle="none" display="flex" overflow="hidden">
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              item={item}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </List>
        <Flex
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={["column", "row"]}
          flexWrap={["unset", "wrap"]}
          w={["400px", "800px"]}
          h="350px"
        >
          {data.map((item, index) => {
            if (index < nextPage && index >= previousPage) {
              return (
                <Flex
                  key={item.id}
                  w={["110px", "115px", "32"]}
                  h={["110px", "115px", "32"]}
                  borderRadius="20px"
                  border="1px solid black"
                  margin="10px 20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.5s ease"
                  cursor="pointer"
                >
                  <ChakraLink
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    h="100%"
                    href={item.git}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      w="100%"
                      h="100%"
                      borderRadius="20px"
                      objectFit="cover"
                      zIndex="1"
                      src={item.img}
                      alt="project preview"
                    />
                    <Text position="absolute">{item.title}</Text>
                  </ChakraLink>
                </Flex>
              );
            }
            return null;
          })}
        </Flex>
        <Flex
          w="100%"
          h="8"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {previousPage > 0 ? (
            <Button
              w="32"
              h="8"
              bg="gray.800"
              border="none"
              borderRadius="10px"
              onClick={() => handlePreviousPage()}
            >
              Previous Page
            </Button>
          ) : null}
          {nextPage < data.length ? (
            <Button
              w="32"
              h="8"
              bg="gray.800"
              border="none"
              borderRadius="10px"
              onClick={() => handleNextPage()}
            >
              Next Page
            </Button>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
}
