import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Grid,
  Image,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";

import heroimage1 from "@/../public/img/Historia.png";
import { useTheme } from "@/context/themes/MyThemeContext";
import { useState } from "react";

export default function History() {
  const { themeStyle } = useTheme();

  const [activeIndex, setActiveIndex] = useState(0);

  const timelineImage = [
    {
      src: "@/../../../../../public/img/Foro del 2012.png",
      label: "2012/2013 - Nacimiento",
      estado: false,
      descipcion:
        "Mucho antes de Discord, World of Editors nació como un foro clásico fundado por Ruke, un lugar donde la comunidad compartía mapas, resolvía dudas y aprendía junta. Restaurado por Lordsheshe en 2013, conservó el estilo de los foros antiguos —posiblemente desde 2011— y se convirtió en un punto de encuentro para creadores de toda Hispanoamérica.En esa época no existían las facilidades actuales: los chats eran limitados, los recursos se ocultaban tras comentarios, y registrarse no era tan simple como hacer clic en (Iniciar sesión con Google). Pero eso obligaba a muchos a participar, y más de uno terminó quedándose. Aunque gran parte de esos usuarios se perdió con el tiempo, dejaron su huella.Gracias a figuras como Gadooflion y Lordsheshe, el foro sobrevivió incluso cuando estuvo a punto de cerrarse. Lo que comenzó como un simple sitio para descargar herramientas, se convirtió en el corazón de una comunidad que sigue viva hasta hoy. ",
    },
    {
      src: "@/../../../../../public/img/Foro del 2012.png",
      label: "2022 - Expansión",
      estado: false,
      descipcion:
        "descripcion2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, delectus rerum officiis sit nulla aspernatur ducimus iure amet commodi laboriosam quos, autem et doloremque vel voluptates repellendus exercitationem. Ipsum, in!",
    },
    {
      src: "@/../../../../../public/img/servidorPage1.png",
      label: "2024 - Consolidación",
      estado: false,
      descipcion:
        "descripcion3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, delectus rerum officiis sit nulla aspernatur ducimus iure amet commodi laboriosam quos, autem et doloremque vel voluptates repellendus exercitationem. Ipsum, in!",
    },
  ];
  const [elemento, setElemento] = useState(timelineImage[0]);
  const imageSize = useBreakpointValue({
    base: "500px",
    md: "400px",
    lg: "500px",
  });

  return (
    <>
      <Box
        w={"full"}
        position={"relative"}
        bgImage={heroimage1}
        backgroundSize="cover"
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        py={{ base: 20, md: 36 }}
      >
        <Box
          position="absolute"
          w={"100%"}
          h={"100%"}
          top={0}
          left={0}
          zIndex={0}
          bgGradient={`
            linear(to-b, ${themeStyle.BG_degradados.degr0}, ${themeStyle.BG_degradados.degr1},${themeStyle.BG_degradados.degr2} ,${themeStyle.BG_degradados.degr3} ) `}
        />
        <Container px={"40px"} maxW="7xl" position="relative" zIndex={1}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            position={"relative"}
          >
            <Stack w={{ base: "100%", md: "50%" }} spacing={4}>
              <Heading
                color={themeStyle.Cl_titulo1}
                fontSize={{
                  base: "1.5rem",
                  md: "2rem",
                  lg: "2.5rem",
                  xl: "3rem",
                }}
              >
                Historia de la comunidad
              </Heading>
              <Stack direction={"row"} mt={6} spacing={4} wrap={"wrap"}>
                {timelineImage.map((item, idx) => (
                  <Button
                    key={idx}
                    size={{ base: "xs", md: "xs", lg: "sm" }}
                    variant={"solid"}
                    colorScheme="blue"
                    onClick={() => (setActiveIndex(idx), setElemento(item))}
                    fontSize={{ base: "xs", md: "xs", lg: "sm" }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
              <Box position={"relative"} minH={"180px"}>
                <Text
                  color={themeStyle.Cl_textDescriotion2}
                  fontSize={{ base: "xs", md: "xs", lg: "md", xl: "1.2rem" }}
                  position={"absolute"}
                >
                  {elemento.descipcion}
                </Text>
              </Box>
            </Stack>
            {/* imagenes historia */}
            <Box
              position={"relative"}
              w={{ base: "100%", md: "50%" }}
              h={imageSize}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {timelineImage.map((item, idx) => (
                <Image
                  bgColor={"black"}
                  key={idx}
                  src={item.src}
                  alt={item.label}
                  position="absolute"
                  w={imageSize}
                  h={"auto"}
                  objectFit="contain"
                  border="2px solid white"
                  borderRadius="lg"
                  boxShadow="xl"
                  opacity={idx === activeIndex ? 1 : 0}
                  transition="all 0.5s ease"
                  zIndex={idx === activeIndex ? 2 : 1}
                />
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
