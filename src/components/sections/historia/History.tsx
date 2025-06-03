import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Grid,
  Image,
} from "@chakra-ui/react";

import heroimage1 from "@/../public/img/Historia.png";
import { useTheme } from "@/context/themes/MyThemeContext";

export default function History() {
  const { themeStyle } = useTheme();
  return (
    <>
      <Container
        // bg={"#0e0e10"}
        maxH={"100vh"}
        maxW={"100vw"}
        h={"100vh"}
        py={{ base: 20, md: 36 }}
        bgImage={heroimage1}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        position={"relative"}
      >
        <Box
          position="absolute"
          w={"100%"}
          h={"100%"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={`
            linear(to-b, ${themeStyle.BG_degradados.degr0}, ${themeStyle.BG_degradados.degr1},${themeStyle.BG_degradados.degr2} ,${themeStyle.BG_degradados.degr3} ) `}
          zIndex={0}
        />
        <Box display={"flex"} position={"relative"}>
          <Stack w={"50%"} px={10} spacing={4}>
            <Heading color={themeStyle.Cl_titulo1} fontSize={"7xl"}>
              <Text fontWeight="bold" color={themeStyle.Cl_titulo1}>
                Historia de la comunidad
              </Text>
            </Heading>
            <Text
              w={"70%"}
              color={themeStyle.Cl_textDescriotion2}
              fontSize={"x-large"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              earum illum neque dignissimos necessitatibus, at voluptatibus
              minima unde corrupti repellat nemo sapiente aut atque laborum
              accusamus laudantium optio facere sint! minima unde corrupti
              repellat nemo sapiente aut atque laborum accusamus laudantium
              optio facere sint! minima unde corrupti repellat nemo sapiente aut
              atque laborum accusamus laudantium optio facere sint! optio facere
              sint! minima unde corrupti repellat nemo sapiente aut atque
              laborum accusamus laudantium optio facere sint!
            </Text>
          </Stack>

          <Grid
            // display={"flex"}
            position={"relative"}
            overflow={"hidden"}
            templateColumns={"repeat(2,1fr)"}
            // bg={"#0e0e10"}
            maxH={"800px"}
            h={"800px"}
            w={"80%"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Box
              border={" 2px solid  black"}
              position={"absolute"}
              bottom={"90px"}
              left={"0px"}
              maxW={"100%"}
              bg={"red"}
              h={"460px"}
              w={"900px"}
              m={1}
              transform="rotateX(20deg) rotateY(15deg)"
            >
              <Image
                src={"@/../../../../../public/img/servidorPage.png"}
                width={"100%"}
                h={"100%"}
              />
            </Box>
            <Box
              border={" 2px solid  black"}
              position={"absolute"}
              bottom={"200px"}
              left={"130px"}
              maxW={"100%"}
              bg={"red"}
              h={"460px"}
              w={"900px"}
              m={1}
              transform="rotateX(20deg) rotateY(15deg)"
            >
              <Image
                src={"@/../../../../../public/img/servidorPage.png"}
                width={"100%"}
                h={"100%"}
              />
            </Box>
            <Box
              border={" 2px solid  black"}
              position={"absolute"}
              bottom={"300px"}
              left={"240px"}
              maxW={"100%"}
              bg={"red"}
              h={"460px"}
              w={"900px"}
              m={1}
              transform="rotateX(20deg) rotateY(15deg)"
            >
              <Image
                src={"@/../../../../../public/img/servidorPage.png"}
                width={"100%"}
                h={"100%"}
              />
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
