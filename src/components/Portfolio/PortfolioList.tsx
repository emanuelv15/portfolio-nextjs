import { Dispatch, SetStateAction } from "react";
import { Flex, Box, Text, Image, Link, ListItem } from "@chakra-ui/react";

interface PortfolioListProps {
  item: { id: string; title: string };
  active: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}

export function PortfolioList({
  item,
  active,
  setSelected,
}: PortfolioListProps) {
  return (
    <Flex>
      <ListItem
        fontSize={["small", "large", "large", "xl"]}
        fontWeight="500"
        mr={["10px", "50px"]}
        p={["0", "7px"]}
        borderRadius="10px"
        cursor="pointer"
        onClick={() => setSelected(item.id)}
      >
        {item.title}
      </ListItem>
    </Flex>
  );
}
