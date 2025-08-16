import { Box, Center, Divider, Heading, layout, Text } from "@chakra-ui/react";
import Navbar from "./navbar/Navbar.tsx";
import Hero from "./sections/hero/Hero.tsx";
import Footer from "./footer/Footer.tsx";
import CardMap from "./cardMap/CardMap.tsx";
import useDataMap from "@/hooks/useDataMap.ts";
import Informacion from "./sections/info_desarrollador/Informacion_desarrollador.tsx";
import History from "./sections/historia/History.tsx";
import Information from "./sections/informacionComunidad/Information.tsx";
import { useTheme } from "@/context/themes/MyThemeContext.tsx";
import "@/scss/index.scss";
import CarModel from "./sections/cardModels/CarModel.tsx";
import { useEffect, useState } from "react";
import OtherProyects from "./sections/otherMaps/OtherProyects.tsx";
import CardMaps from "./sections/cardMaps/CardMaps.tsx";
import Testimonio from "./sections/testimonio/Testimonio.tsx";
export function Layout() {
  //colores
  const { themeStyle } = useTheme();

  return (
    <Box
      as="section"
      bg="blue.400"
      color="white"
      minH="100vh"
      scrollSnapType="y mandatory"
      css={{ scrollBehavior: "smooth" }}
      width="100vw"
    >
      {/* Header */}
      <Box as="header" bg="blue.900">
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box as="main" bgColor={themeStyle.bg_general2}>
        {/* Pegar lo que esta en notas de color negro xd */}

        {/* Aquí puedes colocar secciones internas */}

        {/* HERO */}
        <Box as="section" pt={1} mb={8} scrollSnapAlign="start" id="infoHeader">
          <Hero />
          <Box
            // position="absolute"
            bottom={0}
            left={0}
            width="100%"
            height="100px" // altura del degradado
            bgGradient="linear(to-b,#000000 0%, transparent 100%)"
            pointerEvents="none" // para que no interfiera con interacciones
            zIndex={1}
          />
        </Box>

        {/* Informacion de la comunidad */}
        <Box
          pt={"50px"}
          id={"infoComunidad"}
          as="section"
          bg={themeStyle.bg_general2}
          // bgGradient={`linear(to-b, ${themeStyle.bg_general1}0%, black)`}
          bgGradient={`linear(to-b, ${themeStyle.bg_general1} 0%, black)`}
          scrollSnapAlign="start"
          px={"50px"}
        >
          <Information />
        </Box>

        {/* Historia */}
        <Box as="section" mb={8} id="infoHistoria">
          <Box h={"50px"} bg={"black"} maxW={"100vw"} maxH={"100vh"}></Box>

          <History />
          <Box
            // position="absolute"
            bottom={0}
            left={0}
            width="100%"
            height="100px" // altura del degradado
            bg={themeStyle.Cl_titulo1}
            bgGradient="linear(to-b,#000000 0%, #000000)"
            pointerEvents="none" // para que no interfiera con interacciones
            zIndex={1}
          />
        </Box>

        {/* Mapas destacados */}
        <CardMaps></CardMaps>

        <Box
          mt={"115px"}
          w="100%"
          h="40px"
          bgGradient="linear(to-b,rgba(0,0,0,0)   0%   0%,rgba(0,0,0,1) 100%)"
          p={6} // padding interno
          mx="auto"
        />
        <OtherProyects></OtherProyects>
        <Box
          w="100%"
          h="40px"
          bgGradient="linear(to-b,rgba(0,0,0,0)   0%   0%,rgba(0,0,0,1) 100%)"
          p={6} // padding interno
          mx="auto"
        />
        {/* Modelos de la comunidad */}
        {/* <Box id={"infoModelosReforjados"}> */}
        <CarModel />
        {/* </Box> */}

        <Box
          w="100%"
          h="40px"
          bgGradient="linear(to-b,rgba(0,0,0,0)   0%   0%,rgba(0,0,0,1) 100%)"
          p={6} // padding interno
          mx="auto"
        />

        {/* pilares de la comunidad */}
        <Box id="infoPilaresComunidad" as="section">
          <Testimonio />
        </Box>
        {/* <Box
          w="100%"
          h="40px"
          bgGradient="linear(to-b,rgba(0,0,0,0)   0%   0%,rgba(0,0,0,1) 100%)"
          p={6} // padding interno
          mx="auto"
        /> */}

        {/* Testimonios */}

        {/* <Box id="infoComentarios" as="section">
          <Testimonio />
        </Box> */}

        <Box
          w="100%"
          h="40px"
          bgGradient="linear(to-b,rgba(0,0,0,0)   0%   0%,rgba(0,0,0,1) 100%)"
          p={6} // padding interno
          mx="auto"
        />

        {/* informacion LocoM */}
        <Box as="section" id="infoDesarrollador">
          <Informacion />
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer">
        <Footer />
      </Box>
    </Box>
  );
}
