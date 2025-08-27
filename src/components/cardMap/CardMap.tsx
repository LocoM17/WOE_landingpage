import {
  Box,
  Image,
  Text,
  Stack,
  Avatar,
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import styles from "./CardMap.module.scss";
import { MapData } from "@/interface/MapData";
interface MapaInterface {
  details: MapData;
}

export default function CardMap({ details }: MapaInterface) {
  // console.log(details);

  return (
    <Box
      className={styles.card}
      transition={"all 0.3s ease"}
      _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
      role="group"
    >
      <Box
        className={styles.poster}
        // overflow={"hidden"} borderRadius={"md"}
      >
        <Box className={styles.imgcontededor}>
          <Image
            src={details.Media[0]?.url}
            alt="Poster"
            // objectFit={"cover"}
            // w={"full"}
            // h={"200px"}
          />
        </Box>
      </Box>

      <Box
        className={styles.details}
        // bg={"rgba(0,0,0,0.6)"}
        // borderRadius={"md"}
        // p={4}
      >
        <Box className={styles.tags} pb={"1.5rem"}>
          <p className={styles.title} style={{ fontSize: "20px" }}>
            {details.mapName}
          </p>
          <p className={styles.type} style={{ fontSize: "16px" }}>
            Tipo de mapa: {details.mapType}
          </p>
        </Box>
        <br />
        <Box
          className={styles.info}
          overflowY={"auto"}
          pr={2}
          maxH={"150px"}
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(0, 0, 0, 0.2)", // fondo del track
            },
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.3) rgba(0,0,0,0.2)", // Firefox
            // msOverflowStyle: "none",
          }}
        >
          <Text
            px={2}
            backgroundColor={"rgba(0, 0, 0, 0.05)"}
            // borderRight={"2px"}
            // noOfLines={3}
            _groupHover={{
              opacity: "1",
              transition: "0.5s",
            }}
            opacity={"0"}
            transition={"0.5s"}
          >
            {details.description}
          </Text>
        </Box>

        {/**iterrando creadores */}
        <Box
          display={"flex"}
          flexDir={{ md: "row" }}
          gap={4}
          // alignItems={"center"}
          // justifyContent={"center"}
          p={3}
        >
          <Box mt={6}>
            {[details.autores[0], details.autores[1], details.autores[2]]
              .filter((creador) => creador?.autor.name)
              .map((creador) =>
                creador.autor.name ? (
                  <Stack
                    key={creador.autor.name}
                    direction={"row"}
                    spacing={4}
                    align={"center"}
                  >
                    <Avatar
                      boxSize={"36px"}
                      src={creador.autor.perfilIcon} // Cambia esto por la URL de tu imagen
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600} color={"white"}>
                        {creador.autor.name}
                      </Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {creador.autorType}
                      </Text>
                    </Stack>
                  </Stack>
                ) : null
              )}
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            // minH="100%"
            // flexDir={"column"}
            // alignSelf={"stretch"}
            // h={"100%"}
          >
            <Button
              top={30}
              left={0}
              as="a"
              href={details.downloadLink}
              right={5}
              bottom={8}
              size={"sm"}
            >
              <Text fontSize={"0.8rem"}>Mas Informacion</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
