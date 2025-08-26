import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTheme } from "@/context/themes/MyThemeContext";

export default function Hero() {
  const titleSize = useBreakpointValue({ base: "3xl", md: "5xl", lg: "6xl" });
  const descSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const paddingY = useBreakpointValue({ base: 20, md: 36 });
  const alignText =
    useBreakpointValue({ base: "center", md: "center" }) ?? "left";
  const titleSize2 = useBreakpointValue({ base: "sm", md: "4xl", lg: "6xl" });
  const bgSize = useBreakpointValue({
    base: "auto 100%", // Ajusta en móvil
    md: "cover", // Ocupa bien en pantallas grandes
  });

  const bgPosition = useBreakpointValue({
    base: "left center",
    md: "center",
  });
  const { themeStyle } = useTheme();
  return (
    <>
      <Container marginTop={"60px"} />
      <Container
        // bg={"#0e0e10"}
        maxW={"100vw"}
        py={paddingY}
        bgImage={"https://i.ibb.co/k2ZbtrnN/hero2.jpg"}
        backgroundPosition={bgPosition}
        backgroundSize={bgSize}
        backgroundRepeat="no-repeat"
        position={"relative"}
      >
        <Box
          position="absolute"
          w={"100%"}
          h={"100%"}
          top={0}
          left={0}
          // right={0}
          // bottom={0}
          bgGradient={`linear(to-b, ${themeStyle.BG_degradados.degr1},${themeStyle.BG_degradados.degr2} ,${themeStyle.BG_degradados.degr3} )`}
          zIndex={1}
        />

        <Stack
          zIndex={2}
          position="relative"
          textAlign={alignText}
          spacing={{ base: 8, md: 14 }}
          px={{ mase: 4, md: 6 }}
          py={paddingY}
          maxW="4xl"
          mx="auto"
          color="white"
        >
          <Heading
            fontWeight={600}
            fontSize={titleSize}
            lineHeight={"110%"}
            color={"white"}
          >
            <Text as={"span"} color={"#58ADCD"} fontSize={titleSize}>
              WORLD OF EDITORS
            </Text>
            <Text fontSize={"3xl"}>
              Bienvenido a la mejor comunidad de editores hispano hablantes
            </Text>
          </Heading>
          <Text color={"gray.300"} fontSize={descSize}>
            Sé parte de la gran comunidad de editores de Warcraft III. Juega
            mapas creados por la comunidad y del exterior, aprende a diseñar los
            tuyos desde cero, ponlos a prueba y compártelos con otros jugadores.
            Explora mapas hechos por otros editores, inspírate y mejora tus
            habilidades. Si ya eres un editor experimentado, comparte tu
            conocimiento y ayuda a que nuevos creadores crezcan junto a ti.
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              as="a"
              href="#infoComunidad"
              h={16}
              w={{ base: "full", sm: "sm" }}
              colorScheme={"white"}
              bg={"#125082"}
              fontSize={"lg"}
              _hover={{
                bg: "#1b6bab",
              }}
            >
              Mas Informacion
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
