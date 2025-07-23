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
      <Container
        maxW={"8xl"}
        py={{ base: 10, md: 24 }}
        px={{ mase: 4, md: 10 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={6}>
            <Heading
              fontSize={{ base: "1.3rem", md: "2rem" }}
              color={themeStyle.Cl_textDescriotion1}
            >
              La comunidad de <Text color={"#58ADCD"}>World OF EDITORS</Text>
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={{
                base: "0.9rem",
                md: "1.1rem",
                lg: "1.2rem",
                xl: "1.4rem",
              }}
              lineHeight={"tall"}
            >
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
