import { Box, Center, Divider, Heading, layout, Text } from "@chakra-ui/react";
import Navbar from "./navbar/Navbar.tsx";
import Hero from "./sections/hero/Hero.tsx";
import Footer from "./footer/Footer.tsx";
import Informacion from "./sections/info_desarrollador/Informacion_desarrollador.tsx";
import History from "./sections/historia/History.tsx";
import Information from "./sections/informacionComunidad/Information.tsx";
// import { useTheme } from "@/context/themes/MyThemeContext.tsx";
import "@/scss/index.scss";
import OtherProyects from "./sections/otherMaps/OtherProyects.tsx";
import CardMaps from "./sections/cardMaps/CardMaps.tsx";
import Testimonio from "./sections/testimonio/Testimonio.tsx";
import SectionModelos from "./Modelos/SectionModelos.tsx";
export function Layout() {
  //colores
  // const { themeStyle } = useTheme();
  // console.log(window.getComputedStyle(document.body).backgroundColor);
  return (
    <Box
      as="section"
      // bg="blue.400"
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
      {/* Pegar lo que esta en notas de color negro xd */}

      {/* Aquí puedes colocar secciones internas */}

      {/* HERO */}
      <Box as="section" pt={1} scrollSnapAlign="start" id="infoHeader">
        <Hero />
      </Box>

      {/* Informacion de la comunidad */}

      <Information />

      {/* Historia */}
      <History />

      {/* Mapas destacados */}
      <CardMaps></CardMaps>

      {/* <Box
        mt={"115px"}
        w="100%"
        h="40px"
        bgGradient="linear(to-b,rgba(0,0,0,0)   0%   0%,rgba(0,0,0,1) 100%)"
        p={6} // padding interno
        mx="auto"
      /> */}
      <OtherProyects></OtherProyects>

      {/* Main Content */}
      <Box as="main">
        {/* <CarModel /> */}
        <SectionModelos></SectionModelos>
        {/* abajo xd */}
      </Box>
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
      {/* <Box as="section" id="infoDesarrollador"> */}
      <Informacion />
      {/* </Box> */}

      {/* Footer */}
      <Box as="footer">
        <Footer />
      </Box>
    </Box>
  );
}
