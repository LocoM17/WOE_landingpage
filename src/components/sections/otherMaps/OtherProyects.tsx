import { useTheme } from "@/context/themes/MyThemeContext";
import UseDataMapOtherPageSize from "@/hooks/UseDataMapOtherPageSize";
import UseTextSize from "@/hooks/UseTextSize";
import useDataMapOther from "@/hooks/useDataMapOther";
import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const MotionBox = motion(Box);

function OtherProjects() {
  const { themeStyle } = useTheme();
  const gap = 16;
  const {
    totalAvailable,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isFetchingPreviousPage,
  } = useDataMapOther();
  const { cardWidth, pageSize } = UseDataMapOtherPageSize();
  const flatData_local = data?.pages.flat() || [];
  const [totalResponsive, setTotalResponsive] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);
  const [waitingForNextPage, setWaitingForNextPage] = useState(false);
  const tamaño = pageSize;
  const [contadorElementos, setContadorElementos] = useState(0);
  const { SectionTitleSize, SectionDescriptionSize } = UseTextSize();

  const totalSlideWidth = (cardWidth + gap) * pageSize;
  const offsetX = -pageIndex * totalSlideWidth;
  // console.log("dados locales cargados: " + flatData_local.length);

  useEffect(() => {
    if (pageSize > 0) {
      setContadorElementos(pageSize);
      // console.log("tamaño de pagina" + contadorElementos);
    }
  }, [pageSize]);

  // "es este useeffect controlamos el "TotalResponsive" en base a al tamaño de la pagina actual, para que en el boton se desabilite al tener una cantidad =>" contadorElementos + (totalResponsive == 1 ? 0 : 1) >= totalAvailable "=> para desactivar esto se tiene que cumplir"
  useEffect(() => {
    if (pageSize <= 1) {
      setTotalResponsive(pageSize + 1);
    } else {
      setTotalResponsive(pageSize - 1);
    }
  }, [pageSize]);

  useEffect(() => {
    if (flatData_local.length === 0 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [flatData_local.length, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    if (waitingForNextPage) {
      const nextIndex = pageIndex + 1;
      const nextStart = nextIndex * pageSize;

      if (flatData_local.length >= nextStart + 1) {
        setPageIndex(nextIndex);
        setWaitingForNextPage(false);
      }
    }
  }, [flatData_local.length, waitingForNextPage, pageIndex]);
  // console.log("total: " + totalAvailable);
  // console.log("TamañoLista: " + pageSize);
  // console.log("longitudRenderizada: " + flatData_local.length);
  // console.log("ContadorElementos: " + contadorElementos);

  const handleNext = () => {
    const nextIndex = pageIndex + 1;
    // console.log(flatData_local.length);
    // console.log(totalAvailable);

    if (flatData_local.length >= totalAvailable) {
      setContadorElementos(contadorElementos + pageSize);
      setPageIndex(nextIndex);
      // console.log("aumentando indice");
    } else if (hasNextPage && !isFetchingNextPage) {
      // console.log("aumentando contadorElementos");
      setContadorElementos(contadorElementos + pageSize);
      setWaitingForNextPage(true);
      fetchNextPage();
    }
    // console.log("ContadorElementos nex: " + contadorElementos);
  };

  const handlePrev = () => {
    if (pageIndex > 0 && contadorElementos <= totalAvailable + pageSize + 5) {
      setContadorElementos(contadorElementos - pageSize);
      // console.log("ContadorElementos prev: " + contadorElementos);

      setPageIndex((prev) => prev - 1);
    }
  };

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
        width="100vw"
        height="100vh"
        backgroundImage='url("https://i.ibb.co/W4dc0mTV/mapa-De-Guerra.png")'
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.19}
        // zIndex={-1}
        style={{
          WebkitMaskImage: "linear-gradient(to top, transparent, black)",
          maskImage: "linear-gradient(to top, transparent, black)",
        }}
      />
      <Box id="infoOtrosMapas" height="100vh">
        {/* header */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={"10"}
          flexDirection={"column"}
          gap={"15px"}
          px={"50px"}
          pb={"40px"}

          // h={{ lg: "400px", md: "300px", base: "200px" }}
        >
          <Heading
            paddingTop={70}
            justifyContent={"center"}
            color={themeStyle.Cl_titulo2}
          >
            <Text fontSize={SectionTitleSize}>
              Otros mapas en desarrollo de la comunidad
            </Text>
          </Heading>
          <Text
            color={themeStyle.Cl_textDescriotion1}
            fontSize={SectionDescriptionSize}
          >
            Los otros mapas hechos hasta el momento por la comunidad, muchos de
            estos estan en desarrollo o culminados.
          </Text>
        </Box>
        {/* carrusel */}
        <Box
          id="sectionListMapOther"
          w="100vw"
          pt="5%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir={"column"}
          pb={"120px"}
        >
          <Box
            display="flex"
            alignItems="center"
            w="100%"
            gap={4}
            overflow="hidden"
            maxW={"1800px"}
            justifyContent={"center"}
            // pl={"50px"}
            // pr={"50px"}
          >
            <Button
              onClick={handlePrev}
              isDisabled={pageIndex === 0 || isFetchingPreviousPage}
            >
              {"<"}
            </Button>

            <Box
              position="relative"
              overflow="hidden"
              w={`${cardWidth * pageSize + gap * (pageSize - 1)}px`}
              height="310px"
              // backgroundColor={"red"}
            >
              {/* 255+16 */}
              <MotionBox
                animate={{ x: offsetX }}
                transition={{ duration: 0.7 }}
                display="flex"
                gap={`${gap}px`}
                position="absolute"
                top={0}
                left={0}
              >
                {flatData_local.map((item, idx) => (
                  <CardItem
                    key={item.idOtherMap || idx}
                    item={item}
                    width={cardWidth}
                  />
                ))}
              </MotionBox>
            </Box>

            <Button
              onClick={handleNext}
              isDisabled={contadorElementos >= totalAvailable ? true : false}
            >
              {">"}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function CardItem({ item, width }: { item: any; width: number }) {
  return (
    <Box
      w={`${width}px`}
      h="310px"
      flexShrink={0}
      overflow="hidden"
      rounded="xl"
      boxShadow="lg"
      position="relative"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "2xl",
      }}
      transition="all 0.3s ease-in-out"
      p="5px"
    >
      <Img
        w="100%"
        h="100%"
        src={item.imgUrl || undefined}
        alt={item.name}
        objectFit="cover"
        transition="opacity 0.3s ease-in-out"
        _hover={{ opacity: 0.2 }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={4}
        opacity={0}
        _hover={{ opacity: 1 }}
        transition="opacity 0.3s ease-in-out"
        color="white"
        bgGradient="linear(to-b, transparent 20%, rgba(0,0,0,.8) 100%)"
      >
        <Text>{item.name}</Text>
        <Text>{item.descripcion}</Text>
      </Box>
    </Box>
  );
}

export default OtherProjects;
