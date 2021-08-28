import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface ButtonPageProps {
  children: ReactNode;
  handlePreviousPage: () => void;
}

export function ButtonPage({ children, handlePreviousPage }: ButtonPageProps) {
  return (
    <Button
      w={["24", "32"]}
      h="8"
      fontSize={["small", "large"]}
      bg="gray.800"
      border="none"
      borderRadius="10px"
      _focus={{
        outline: "none",
      }}
      onClick={handlePreviousPage}
    >
      {children}
    </Button>
  );
}
