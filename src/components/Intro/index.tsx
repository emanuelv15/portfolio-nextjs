import { useEffect, useRef } from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import { init } from "ityped";

export function Intro() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    init(textRef.current!, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer", "Backend Developer"],
    });
  }, []);

  return (
    <Flex
      id="intro"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      flexDirection={["column", "row"]}
    >
      <Box
        flex="0.5"
        overflow="hidden"
        bg="gray.500"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={["400", "550"]}
        height={["400", "550"]}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            mb={50}
            src="assets/intro.png"
            alt="a man with a laptop in his hands"
          />
        </Box>
      </Box>

      <Box
        flex="0.5"
        position="relative"
        width="100%"
        height="100%"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          width={["100%", "80%"]}
          height="64"
          p={50}
          mt={["8", "16"]}
          overflow="hidden"
          border="1px"
        >
          <Text fontSize={["2xl", "3xl"]}>Hi There, I'm</Text>
          <Text fontSize={["3xl", "5xl"]} fontWeight="bold">
            Emanuel Vitor
          </Text>
          <Text fontSize="large" ref={textRef} />
        </Box>
        <Link
          href="#intro"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          width="100%"
          bottom="1%"
        >
          <Image
            src="assets/down.png"
            alt="down arrow"
            width={35}
            cursor="pointer"
          />
        </Link>
      </Box>
    </Flex>
  );
}
