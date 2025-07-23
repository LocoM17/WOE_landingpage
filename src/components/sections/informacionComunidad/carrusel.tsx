import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useTheme } from "@/context/themes/MyThemeContext";

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

export default function Carrusel() {
  const { themeStyle } = useTheme();
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "65%", md: "65%" });
  const side = useBreakpointValue({ base: "10px", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Directos en vivo",
      text: "Disfruta de los directos de la comunidad.",
      image: "@/../../../../../public/img/PartidaDirecto_7.png",
    },
    {
      title: "Edicion y arte de mapas",
      text: "Aprende a diseñar esenarios personalizados.",
      image:
        "https://cdna.artstation.com/p/assets/images/images/040/202/066/large/sev-llanto-dark-netflix-warcraft-3-reforged-by-sev-llanto-06.jpg?1628158531",
    },
    {
      title: "Modelos personalizados",
      text: "implementacion y creacion de modelos.",
      image:
        "https://www.hiveworkshop.com/data/ratory-images/282/282330-fbabdc65d7bebfee9df4876c1ab25ccc.png",
    },
    {
      title: "El canal de la comunidad",
      text: "Canal de youtube de la comunidad",
      image: "@/../../../../../public/img/Videos_canal_yt_2.png",
    },
  ];

  const [btnState, setBtnState] = useState(false);
  return (
    <Box
      position={"relative"}
      width={"full"}
      h={{ base: "300px", md: "500px", lg: "600px" }}
      overflow={"hidden"}
      borderRadius={"xl"}
      role="group"
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
        {cards.map((card, index) => (
          <Box
            key={index}
            // border={"2px solid grey"}
            h={{ base: "300px", md: "500px", lg: "600px" }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={1}
              bg="rgba(0, 0, 0, 0.29)"
              // bg={"red"}
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
              _groupHover={{
                bg: "rgba(0, 0, 0, 0.55)",
                transition: "0.3s",
                color: themeStyle.Cl_titulo2,
              }}
            >
              <Stack
                spacing={4}
                w={"full"}
                h={"100%"}
                maxW={"lg"}
                justify={"center"}
                // align={{ base: "center" }}
                textAlign={{ base: "center" }}
                px={{ base: 4, md: 0 }}
              >
                <Heading
                  fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "1rem", md: "1.3rem", lg: "1.4rem" }}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
