import { Dispatch, SetStateAction } from "react";
import { Flex, ListItem } from "@chakra-ui/react";

interface CategoryProps {
  item: { id: string; title: string };
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export function Category({ item, selected, setSelected }: CategoryProps) {
  let isActive = false;

  if (selected === item.id) {
    isActive = true;
  }

  return (
    <Flex>
      <ListItem
        color={isActive ? "gray.800" : "pink.50"}
        fontSize={["small", "large", "large", "xl"]}
        fontWeight={isActive ? "bold" : "400"}
        // mr={["10px", "50px"]}
        p={["0", "7px"]}
        borderRadius="10px"
        cursor="pointer"
        _focus={{
          outline: "none",
        }}
        onClick={() => setSelected(item.id)}
      >
        {item.title}
      </ListItem>
    </Flex>
  );
}
