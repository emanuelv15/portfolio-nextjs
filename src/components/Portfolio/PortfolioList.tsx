import {
  Flex,
  Link as ChakraLink,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface PortfolioListListProps {
  item: {
    id: number;
    title: string;
    git?: string;
    img: string;
  };
}

export function PortfolioList({ item }: PortfolioListListProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

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
      _focus={{ outline: "none" }}
      _hover={{ bg: !isWideVersion && "gray.800" }}
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
        _focus={{ outline: "none" }}
      >
        <Image
          w="100%"
          h="100%"
          borderRadius="20px"
          objectFit="cover"
          zIndex="1"
          src={item.img}
          alt="project preview"
          _focus={{ outline: "none" }}
          _hover={{
            opacity: !isWideVersion && "0.2",
            zIndex: !isWideVersion && "1",
          }}
        />
        <Text position="absolute" fontWeight="bold">
          {item.title}
        </Text>
      </ChakraLink>
    </Flex>
  );
}
