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

type Props = {};

function CardMaps({}: Props) {
  const { themeStyle } = useTheme();

  const { data, isLoading } = useDataMap();
  const mapas = data?.pages.flatMap((page) => page) ?? [];

  //responsive parametros
  const colums = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
    xl: 4,
    "2xl": 5,
  });
  return (
    <Box
      display={"flex"}
      pt={"100px"}
      id={"infoMapasDestacados"}
      as="section"
      bg={themeStyle.bg_general2}
      // h={"100vh"}
      flexDir={"column"}
    >
      <Box textAlign={"center"} p={4}>
        <Heading size="2xl" mb={4} color={themeStyle.Cl_titulo2}>
          MAPAS DESTACADOS
        </Heading>
        <Text color={"white"} fontSize={"xl"} maxW={"3xl"} mx={"auto"}>
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
            spacing={6}
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
  );
}

export default CardMaps;
