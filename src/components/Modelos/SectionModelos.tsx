import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Carrusel from "../sections/informacionComunidad/carrusel";
import { useTheme } from "@/context/themes/MyThemeContext";

import { ModelsData } from "@/interface/ModelData";
import CarruselModelos from "./CarruselModelos";
import { modelosMock } from "./ModelsData";

function SectionModelos() {
  const { themeStyle } = useTheme();

  const modelClassic = modelosMock.models.filter(
    (m) => m.typeModel === "classic"
  );
  const modelReforged = modelosMock.models.filter(
    (m) => m.typeModel === "reforged"
  );

  // console.log("modelos clasicos");
  // console.log(modelClassic);

  return (
    <>
      <Box
        opacity={0.5}
        borderTop={"20px solid"}
        borderBlockEnd={"20px solid"}
        sx={{
          borderImage:
            "url('https://worldofeditors.net/img/marco.webp')20 round",
        }}
      />
      <Box
        position="absolute"
        // top={0}
        left={0}
        width="100%"
        height={{
          sm: "200vh",
          xl: "100vh",
        }}
        backgroundImage='url("/img/Fondo_ROC.png")'
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.29}
        // zIndex={-1}
        style={{
          WebkitMaskImage: "linear-gradient(to top, transparent, black)",
          maskImage: "linear-gradient(to top, transparent, black)",
        }}
      />
      <Container
        maxW={"8xl"}
        pt={{ base: 10, md: 24 }}
        px={{ mase: 4, md: 10 }}
        pb={"300px"}
      >
        <Stack spacing={6}>
          <Heading
            fontSize={{ base: "1.3rem", md: "2rem", xl: "3rem" }}
            color={themeStyle.Cl_textDescriotion1}
          >
            <Text align={"center"} color={"#58ADCD"}>
              Modelos de la comunidad
            </Text>
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
            align={"center"}
          >
            Aquí encontrarás modelos únicos creados por miembros de nuestra
            comunidad. Explora, inspírate y descubre el talento de los usuarios
            que comparten sus diseños con todos.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          spacing={10}
          gap={100}
          px={
            {
              // base: "40px",
              // md: "80px",
            }
          }
        >
          <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
            <Heading>
              <Text my={"20px"} align={"center"}>
                Classic
              </Text>
            </Heading>
            {/* <CarruselModelos da></CarruselModelos> */}
            <CarruselModelos modelos={modelClassic}></CarruselModelos>
          </Box>
          <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            // h={"600px"}
          >
            <Heading>
              <Text my={"20px"} align={"center"}>
                Reforged
              </Text>
            </Heading>
            <CarruselModelos modelos={modelReforged}></CarruselModelos>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default SectionModelos;
