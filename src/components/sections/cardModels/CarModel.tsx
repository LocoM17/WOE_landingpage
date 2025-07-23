import { useTheme } from "@/context/themes/MyThemeContext";
import {
  Avatar,
  background,
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

function CarModel({}: Props) {
  const colums = useBreakpointValue({
    base: 1, // 0px
    sm: 2, // ~480px. em is a relative unit and is dependant on the font size.
    md: 3, // ~768px
    lg: 3, // ~992px
    xl: 4, // ~1280px
    "2xl": 5, // ~1536px
  });

  const cardSize = useBreakpointValue({
    base: "150px",
    md: "200px",
    lg: "300px",
  });

  const { themeStyle } = useTheme();
  return (
    <>
      <Box id="infoModelosReforjados">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={"10"}
          flexDirection={"column"}
          gap={"15px"}
          px={"50px"}
          // h={{ lg: "400px", md: "300px", base: "200px" }}
        >
          <Heading
            paddingTop={70}
            justifyContent={"center"}
            color={themeStyle.Cl_titulo2}
          >
            Modelos para Reforged
          </Heading>
          <Text
            color={themeStyle.Cl_textDescriotion1}
            fontSize={{
              base: "xs",
              sm: "small ",
              md: "lg",
              lg: "xl",
              xl: "2xl",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae
            ex ut, sed quis quasi tenetur.dolor sit amet consectetur adipisicing
            elit. Eaque quae ex ut, sed quis quasi tenetur.dolor sit amet
            consectetur adipisicing elit. Eaque quae ex ut, sed quis quasi
          </Text>
        </Box>

        {/* body */}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          alignContent={"center"}
          px={4}
          pb={"140px"}
          // m={"0px"}
        >
          {/* Card contenedor */}
          <SimpleGrid
            columns={colums}
            spacing={8}
            maxW={"100%"}
            // w={"100%"}
            mx={"30px"}
            px={4}
            py={10}
          >
            {[1, 2, 3, 4, 5].map((idx) => (
              <Box
                key={idx}
                position={"relative"}
                transform={"translate"}
                w={"105%"}
                overflow={"hidden"}
                id={"contenedorCard"}
                maxW={"350px"}
                h={"455px"}
                // rounded={"2xl"}
                border={"2px solid black"}
                shadow={"3xl blue "}
                // m={4}
                borderRadius={"15px"}
                role="group"
                minH={"400px"}
              >
                <Box
                  __css={{
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    bg: "rgba(0,0,0,0.7)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    zIndex: "4",
                    // pointerEvents: "none",
                  }}
                  _groupHover={{
                    opacity: 1,
                  }}
                />
                <Image
                  position={"absolute"}
                  src="@/../../../../../public/img/gif-1.gif"
                  w={"100%"}
                  h={"100%"}
                  // aspectRatio={"1/1"}
                  background={"black"}
                  objectFit={"cover"}
                  // _hover={{
                  //   bg: "rgba(0,0,0,0.6)",
                  // }}
                />

                {/* contenido del texto */}
                <Box
                  h={"100%"}
                  position={"relative"}
                  display={"flex"}
                  flexDirection={"column"}
                  zIndex={4}
                  mx={"20px"}
                  mt={"20px"}
                  role="group"
                  gap={"30px"}
                  _hover={{
                    opacity: "10",
                  }}
                >
                  <Heading
                    pointerEvents={"none"}
                    color={themeStyle.Cl_titulo1}
                    textShadow={
                      "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black "
                    }
                    fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  >
                    Modelo N1
                  </Heading>
                  <Box
                    opacity="0"
                    transition={"opacity 0.3s ease-in-out"}
                    // fontSize={"17px"}
                    // fontWeight={"600"}}
                    _groupHover={{
                      opacity: 1,
                    }}
                  >
                    <Text mb={"30px"} fontSize={{ base: "sm ", md: "md" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint nihil quasi ad enim odio dolor, deleniti, aspernatur
                      dolores provident doloribus est, repellendus harum?
                      Excepturi aliquid, aut maxime molestias.
                    </Text>
                    <Box
                      display={"flex"}
                      // bottom={"65px"}
                      position={"absolute"}
                      flexDir={"column"}
                      // my={"10px"}
                    >
                      <Box
                        display={"flex"}
                        gap={"5px"}
                        flexDirection={"column"}
                        // mr={"50px"}
                      >
                        <Stack
                          // key={creador.name}
                          direction={"row"}
                          spacing={2}
                          align={"center"}
                        >
                          <Avatar
                            boxSize={"36px"}
                            // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                          />
                          <Stack
                            direction={"column"}
                            spacing={0}
                            fontSize={"sm"}
                          >
                            <Text fontWeight={600} color={"white"}>
                              {/* {creador.name} */}
                              user1
                            </Text>
                            <Text fontSize={"12px"} color={"gray.500"}>
                              {/* {creador.information} */}
                              informacion
                            </Text>
                          </Stack>
                        </Stack>

                        <Stack
                          // key={creador.name}
                          direction={"row"}
                          spacing={2}
                          align={"center"}
                        >
                          <Avatar
                            boxSize={"36px"}
                            // src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                          />
                          <Stack
                            direction={"column"}
                            spacing={0}
                            fontSize={"sm"}
                          >
                            <Text fontWeight={600} color={"white"}>
                              {/* {creador.name} */}
                              user1
                            </Text>
                            <Text fontSize={"12px"} color={"gray.500"}>
                              {/* {creador.information} */}
                              informacion
                            </Text>
                          </Stack>
                        </Stack>
                      </Box>
                      <Button
                        // maxW={{ base: "sm", md: "md" }}
                        mt={-4}
                        size={{ base: "sm", md: "md" }}
                        colorScheme="yellow"
                        color={"black"}
                        fontWeight={"bold"}
                        bottom={"-40px"}
                        bgColor={themeStyle.Cl_titulo1}
                      >
                        <Text fontSize={"sm"}>MAS INFORMACION</Text>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default CarModel;
