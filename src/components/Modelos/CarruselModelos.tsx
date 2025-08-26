import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useTheme } from "@/context/themes/MyThemeContext";
import { ModelData, ModelsData } from "@/interface/ModelData";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CarruselModelos({ modelos }: { modelos: ModelData[] }) {
  const { themeStyle } = useTheme();
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "60%", md: "50%" });
  const side = useBreakpointValue({ base: "1px", md: "1px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const modelosLocal = modelos.map(
    ({ nameModel, typeModel, autores, description, downloadLink, media }) => ({
      nameModel,
      typeModel,
      autores,
      description,
      downloadLink,
      media,
    })
  );
  // console.log(modelosLocal);

  return (
    <>
      <Box
        position={"relative"}
        // alignContent={"center"}
        justifyContent={"center"}
        width={"full"}
        // h={{ md: "350px", lg: "550px" }}
        h={{ sm: "500px", md: "600px", lg: "700px" }}
        // h={"100%"}
        minH={"500px"}
        overflow={"hidden"}
        // borderRadius={"15px"}
        role="group"
        p={"30px"}
        maxW={"600px"}
        // maxW={{ base: "250px", md: "500px", lg: "650px" }}
        minW={{ base: "250px", md: "300px" }}
        // mb={"50px"}
        // bgColor={"red"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          pointerEvents="auto"
          size={{ base: "xs", md: "sm" }}
          // bg={themeStyle.Cl_titulo1}
          _groupHover={{
            bg: themeStyle.Cl_titulo1,
            color: "black",
            transition: "0.3s",
          }}
        >
          <BiLeftArrowAlt size="30px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          pointerEvents="auto"
          size={{ base: "xs", md: "sm" }}
          _groupHover={{
            bg: themeStyle.Cl_titulo1,
            color: "black",
            transition: "0.3s",
          }}
        >
          <BiRightArrowAlt size="30px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {modelosLocal.map((m, index) => (
            <Box
              key={index}
              // border={"2px solid grey"}
              h={{ md: "500px", lg: "600px" }}
              // h={"100%"}
              minH={"500px"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              // opacity={0.5}
              // borderRadius={"15px"}
              border={"10px solid"}
              sx={{
                borderColor: "red",
                borderImage:
                  "url('https://worldofeditors.net/img/marco.webp')20 round",
              }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={1}
                borderRadius={"15px"}
                // bg="rgba(0, 0, 0, 0.29)"
                borderWidth={"2px"}
                borderColor={"gray.500"}
                // bg={"red"}
                display={"flex"}
                alignItems={"center"}
              />
              <Box
                // w={"100%"}
                // h={"100%"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                position="absolute"
                backgroundRepeat={"no-repeat"}
                backgroundSize={"contain"}
                backgroundPosition="center"
                bgColor={"black"}
                borderRadius={"15px"}
                backgroundImage={`${
                  m.media.find((med) => med.tipo === "imagen")?.url ||
                  m.media.find((med) => med.tipo === "gif")?.url ||
                  ""
                }`}
              />

              {/* This is the block you need to change, to customize the caption */}
              <Container
                size="container.lg"
                h={"100%"}
                maxW={"container.lg"}
                position="relative"
                zIndex={2}
                transition="0.3s"
                color={"transparent"}
                justifyItems={"center"}
                borderRadius={"15px"}
                _groupHover={{
                  bg: "rgba(0, 0, 0, 0.74)",
                  transition: "0.3s",
                  color: themeStyle.Cl_titulo2,
                }}
              >
                <Stack
                  spacing={1}
                  w={"full"}
                  h={"100%"}
                  maxW={"lg"}
                  justify={"center"}
                  py={{ base: 16 }}
                  px={{ base: 4, md: 30 }}
                >
                  <Heading
                    fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}
                  >
                    {m.nameModel}
                  </Heading>
                  <Text
                    fontSize={{ base: "0.9rem", md: "1.3rem", lg: "1.4rem" }}
                    color={"transparent"}
                    transition={"0.3s"}
                    _groupHover={{
                      // bg: "rgba(0, 0, 0, 0.55)",
                      transition: "0.3s",
                      color: "#fff",
                    }}
                  >
                    {m.description}
                  </Text>
                  <Box
                    opacity="0"
                    transition={"opacity 0.3s ease-in-out"}
                    // fontSize={"17px"}
                    // fontWeight={"600"}}
                    _groupHover={{
                      opacity: 1,
                    }}
                  >
                    <Box pt={8} display={"flex"} flexDir={"column"} gap={5}>
                      {
                        //Creador
                        m.autores
                          // .filter((creador) => creador?.autor.name)
                          .map((c) =>
                            c.autorType === "creador" ? (
                              <Stack
                                key={c.autor.name}
                                direction={"row"}
                                spacing={4}
                                // align={"center"}
                                // pb={8}
                              >
                                <Avatar
                                  boxSize={"56px"}
                                  src={c.autor.perfilIcon} // Cambia esto por la URL de tu imagen
                                />
                                <Stack
                                  direction={"column"}
                                  spacing={0}
                                  fontSize={"sm"}
                                >
                                  <Text
                                    // fontWeight={600}
                                    color={"white"}
                                    fontSize={{
                                      base: "0.9rem",
                                      md: "1.3rem",
                                      lg: "1.4rem",
                                    }}
                                  >
                                    {c.autor.name}
                                  </Text>
                                  <Text
                                    color={"gray"}
                                    fontSize={{
                                      base: "0.9rem",
                                      md: "1rem",
                                      lg: "1.2rem",
                                    }}
                                  >
                                    {/* roll */}
                                    {c.autorType}
                                  </Text>
                                </Stack>
                              </Stack>
                            ) : null
                          )
                      }
                      {
                        // CoCreador
                        m.autores
                          // .filter((creador) => creador?.autor.name)
                          .map((co) =>
                            co.autorType === "cocreador" ? (
                              <Stack
                                key={co.autor.name}
                                direction={"row"}
                                spacing={4}
                                // align={"center"}
                                // pb={8}
                              >
                                <Avatar
                                  boxSize={"56px"}
                                  src={co.autor.perfilIcon} // Cambia esto por la URL de tu imagen
                                />
                                <Stack
                                  direction={"column"}
                                  spacing={0}
                                  fontSize={"sm"}
                                >
                                  <Text
                                    // fontWeight={600}
                                    color={"white"}
                                    fontSize={{
                                      base: "0.9rem",
                                      md: "1.3rem",
                                      lg: "1.4rem",
                                    }}
                                  >
                                    {co.autor.name}
                                  </Text>
                                  <Text
                                    color={"gray"}
                                    fontSize={{
                                      base: "0.9rem",
                                      md: "1rem",
                                      lg: "1.2rem",
                                    }}
                                  >
                                    {/* roll */}
                                    {co.autorType}
                                  </Text>
                                </Stack>
                              </Stack>
                            ) : null
                          )
                      }
                      {/* <Button w={"150px"} size={"sm"}> */}

                      <Button
                        size={"sm"}
                        w={"140px"}
                        as="a"
                        href={m.downloadLink}
                      >
                        Mas informacion
                      </Button>
                      {/* </Button> */}
                    </Box>
                  </Box>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
