import { useState, useEffect } from "react";
import { Flex, Stack, useBreakpointValue } from "@chakra-ui/react";

import {
  frontPortfolio,
  mobilePortfolio,
  backPortfolio,
  otherPortfolio,
} from "../../services/data";

import { Title } from "./Title";
import { CategoryList } from "./CategoryList";
import { PortfolioList } from "./PortfolioList";
import { ButtonPage } from "./ButtonPage";

interface Data {
  id: number;
  title: string;
  git?: string;
  img: string;
}

export function Portfolio() {
  const isWideVersionPagination = useBreakpointValue({
    base: 3,
    md: 8,
  });

  const [selected, setSelected] = useState("front");
  const [data, setData] = useState<Data[]>([] as Data[]);
  const [nextPage, setNextPage] = useState(isWideVersionPagination);
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
        setNextPage(isWideVersionPagination);
        setPreviousPage(0);
        break;
      case "mobile":
        setData(mobilePortfolio);
        setNextPage(isWideVersionPagination);
        setPreviousPage(0);
        break;
      case "back":
        setData(backPortfolio);
        setNextPage(isWideVersionPagination);
        setPreviousPage(0);
        break;
      case "other":
        setData(otherPortfolio);
        setNextPage(isWideVersionPagination);
        setPreviousPage(0);
        break;
    }
  }, [isWideVersionPagination, selected]);

  function handlePreviousPage() {
    setNextPage(nextPage - isWideVersionPagination);
    setPreviousPage(previousPage - isWideVersionPagination);
  }

  function handleNextPage() {
    setNextPage(nextPage + isWideVersionPagination);
    setPreviousPage(previousPage + isWideVersionPagination);
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
        <Title>Projects</Title>

        <CategoryList
          list={list}
          setSelected={setSelected}
          selected={selected}
        />

        <Flex
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={["column", "column", "row"]}
          flexWrap={["unset", "unset", "wrap"]}
          w={["400px", "800px"]}
          h="350px"
        >
          {data.map((item, index) => {
            if (index < nextPage && index >= previousPage) {
              return <PortfolioList item={item} />;
            }
          })}
        </Flex>

        <Stack
          w="100%"
          h="8"
          spacing={["2", "6"]}
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {previousPage > 0 && (
            <ButtonPage handlePreviousPage={() => handlePreviousPage()}>
              Previous Page
            </ButtonPage>
          )}
          {nextPage < data.length && (
            <ButtonPage handlePreviousPage={() => handleNextPage()}>
              Next Page
            </ButtonPage>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
}
