import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CgMail } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";

import { ReactElement } from "react";
import Carrusel from "./carrusel";
import { useTheme } from "@/context/themes/MyThemeContext";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Information() {
  const { themeStyle } = useTheme();
  return (
    <>
      <Container marginTop={"50px"} />

      <Container maxW={"8xl"} py={12} h="100vh">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading fontSize={"6xl"}>
              La comunidad de <Text>World OF EDITORS</Text>
            </Heading>
            <Text color={"gray.500"} fontSize={"x-large"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates suscipit sed consequuntur commodi repellat odio in
              excepturi ut reprehenderit eligendi, quas sapiente velit labore
              asperiores mollitia est facilis, pariatur quis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptates suscipit sed
              consequuntur commodi repellat odio in excepturi ut reprehenderit
              eligendi, quas sapiente velit labore asperiores mollitia est
              facilis, pariatur quis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates suscipit sed consequuntur commodi
              repellat odio in excepturi ut reprehenderit eligendi, quas
              sapiente velit labore asperiores mollitia est facilis, pariatur
              quis.
            </Text>
          </Stack>
          <Carrusel></Carrusel>
        </SimpleGrid>
      </Container>
    </>
  );
}
