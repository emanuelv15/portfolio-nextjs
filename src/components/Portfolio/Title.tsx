import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <Text fontSize={["3xl", "5xl"]} fontWeight="bold">
      {children}
    </Text>
  );
}
