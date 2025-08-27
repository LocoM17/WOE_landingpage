import CardMap from "@/components/cardMap/CardMap";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useTheme } from "@/context/themes/MyThemeContext";
import useDataMap from "@/hooks/useDataMap";
import UseTextSize from "@/hooks/UseTextSize";

type Props = {};

function CardMaps({}: Props) {
  const { themeStyle } = useTheme();

  const { SectionTitleSize, SectionDescriptionSize } = UseTextSize();

  const { data, isLoading } = useDataMap();
  const mapas = data?.pages.flatMap((page) => page) ?? [];

  //responsive parametros
  const colums = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
    xl: 4,
    // "2xl": 4,
  });
  return (
    <>
      <Box
        borderTop={"20px solid"}
        borderBlockEnd={"20px solid"}
        sx={{
          borderImage: "url('https://i.ibb.co/hJ8ytGkq/marco.webp')20 round",
        }}
      />
      <Box
        position="absolute"
        // top={0}
        left={0}
        width="100%"
        height="100vh"
        backgroundImage='url("https://i.ibb.co/f5qfVLf/Fondo-ROC.jpg")'
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
      <Box
        display={"flex"}
        pt={"100px"}
        id={"infoMapasDestacados"}
        as="section"
        bg={themeStyle.bg_general2}
        pb={40}
        flexDir={"column"}
      >
        <Box textAlign={"center"} p={4}>
          <Heading mb={4} color={themeStyle.Cl_titulo2}>
            <Text fontSize={SectionTitleSize}>Mapas Destacados</Text>
          </Heading>
          <Text
            color={"white"}
            fontSize={SectionDescriptionSize}
            maxW={"3xl"}
            mx={"auto"}
          >
            Aquí puedes encontrar una lista de los mapas más populares y
            recomendados por la comunidad.
          </Text>
        </Box>
        {/* loader */}
        {isLoading ? (
          <Box textAlign="center" py={20}>
            <Spinner size="xl" color="blue.400" />
          </Box>
        ) : mapas.length === 0 ? (
          <Box textAlign="center" py={20}>
            <Text color="gray.300" fontSize="xl">
              No se encontraron mapas.
            </Text>
          </Box>
        ) : (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"Center"}
            alignContent={"center"}
          >
            <SimpleGrid
              columns={colums}
              spacing={20}
              maxW={"100%"}
              mx={"30px"}
              px={4}
              py={10}
            >
              {mapas.map((d) => (
                <CardMap key={d.mapId} details={d} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    </>
  );
}

export default CardMaps;
