import { useTheme } from "@/context/themes/MyThemeContext";
import UseDataMapOtherPageSize from "@/hooks/UseDataMapOtherPageSize";
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

  const [pageIndex, setPageIndex] = useState(0);
  const [waitingForNextPage, setWaitingForNextPage] = useState(false);
  const [contadorElementos, setContadorElementos] = useState(pageSize);

  const totalSlideWidth = (cardWidth + gap) * pageSize;
  const offsetX = -pageIndex * totalSlideWidth;
  console.log("dados locales cargados: " + flatData_local.length);

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

  const handleNext = () => {
    const nextIndex = pageIndex + 1;

    if (flatData_local.length >= totalAvailable) {
      setContadorElementos(contadorElementos + pageSize);
      setPageIndex(nextIndex);
    } else if (hasNextPage && !isFetchingNextPage) {
      setContadorElementos(contadorElementos + pageSize);
      setWaitingForNextPage(true);
      fetchNextPage();
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0 && contadorElementos <= totalAvailable + pageSize) {
      setContadorElementos(
        contadorElementos <= pageSize ? pageSize : contadorElementos - pageSize
      );

      setPageIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <Box id="infoOtrosMapas">
        {/* header */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={"10"}
          flexDirection={"column"}
          gap={"15px"}
          px={"50px"}
          pb={"100px"}
          // h={{ lg: "400px", md: "300px", base: "200px" }}
        >
          <Heading
            paddingTop={70}
            justifyContent={"center"}
            color={themeStyle.Cl_titulo2}
          >
            Otros mapas de la comunidad
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
          >
            <Button
              onClick={handlePrev}
              isDisabled={pageIndex === 0 || isFetchingPreviousPage}
            >
              Anterior
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
                transition={{ duration: 2.5 }}
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
              isDisabled={contadorElementos >= totalAvailable}
            >
              Más
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
