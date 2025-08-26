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
  Box,
} from "@chakra-ui/react";
import { CgMail } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";

import { ReactElement } from "react";
import Carrusel from "./carrusel";
import { useTheme } from "@/context/themes/MyThemeContext";

// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
// }

// const Feature = ({ text, icon, iconBg }: FeatureProps) => {
//   return (
//     <Stack direction={"row"} align={"center"}>
//       <Flex
//         w={8}
//         h={8}
//         align={"center"}
//         justify={"center"}
//         rounded={"full"}
//         bg={iconBg}
//       >
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

export default function Information() {
  const { themeStyle } = useTheme();
  return (
    <>
      <Box
        opacity={0.3}
        borderTop={"20px solid"}
        borderBlockEnd={"20px solid"}
        sx={{
          borderImage:
            "url('https://worldofeditors.net/img/marco.webp')20 round",
        }}
      />
      <Box
        pt={"50px"}
        id={"infoComunidad"}
        as="section"
        bg={themeStyle.bg_general2}
        // bgGradient={`linear(to-b, ${themeStyle.bg_general1}0%, black)`}
        bgGradient={`linear(to-b, ${themeStyle.bg_general1} 0%, black)`}
        scrollSnapAlign="start"
        px={"50px"}
        pb={"100px"}
      >
        <Container
          maxW={"8xl"}
          py={{ base: 10, md: 24 }}
          px={{ mase: 4, md: 10 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={6}>
              <Heading
                fontSize={{ base: "1.3rem", md: "2rem", xl: "3rem" }}
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
                WorldOfEditors Oficial es una comunidad hispanohablante dedicada
                a la creación y prueba de mapas personalizados para Warcraft
                III. A lo largo de la semana, sus miembros se reúnen para
                testear proyectos propios, jugar mapas externos y compartir
                ideas que enriquecen el proceso creativo. Además, algunos
                usuarios diseñan modelos 3D que aportan valor visual y técnico a
                los mapas, ya sea para uso interno o para publicar en
                repositorios como Hive. Aquí se enseña, se aprende y se juega,
                con el objetivo de impulsar la creatividad, fortalecer el
                modding y acompañar a los nuevos creadores en el desarrollo de
                sus proyectos.
              </Text>
            </Stack>
            <Carrusel></Carrusel>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
