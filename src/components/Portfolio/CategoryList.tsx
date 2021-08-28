import { Dispatch, SetStateAction } from "react";
import { List, Stack } from "@chakra-ui/react";

import { Category } from "./Category";

interface CategoryListProps {
  list: {
    id: string;
    title: string;
  }[];
  setSelected: Dispatch<SetStateAction<string>>;
  selected: string;
}

export function CategoryList({
  list,
  setSelected,
  selected,
}: CategoryListProps) {
  return (
    <List
      m="10px"
      p="0"
      listStyle="none"
      display="flex"
      overflow="hidden"
      _focus={{
        outline: "none",
      }}
    >
      <Stack spacing={["2", "2", "16"]} direction="row">
        {list.map((item) => (
          <Category
            key={item.id}
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </Stack>
    </List>
  );
}
