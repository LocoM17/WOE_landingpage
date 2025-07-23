import { Box, Image, Text, Stack, Avatar } from "@chakra-ui/react";
import styles from "./CardMap.module.scss";
import { MapData } from "@/interface/MapData";
interface MapaInterface {
  details: MapData;
}
export default function CardMap({ details }: MapaInterface) {
  return (
    <Box
      className={styles.card}
      transition={"all 0.3s ease"}
      _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
    >
      <Box
        className={styles.poster}
        // overflow={"hidden"} borderRadius={"md"}
      >
        <Box className={styles.imgcontededor}>
          <Image
            src={details.Media.image1}
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
        <Box className={styles.tags}>
          <p className={styles.title}>{details.mapName}</p>
          <p className={styles.type}>Tipo de mapa: {details.mapType}</p>
        </Box>
        <br />
        <Box className={styles.info}>
          <Text
          // noOfLines={3}
          >
            {details.description}
          </Text>
        </Box>

        {/**iterrando creadores */}
        <Box mt={6}>
          {[details.creador1, details.creador2, details.creador3]
            .filter((creador) => creador?.name)
            .map((creador) =>
              creador.name ? (
                <Stack
                  key={creador.name}
                  direction={"row"}
                  spacing={4}
                  align={"center"}
                >
                  <Avatar
                    boxSize={"36px"}
                    src={creador.perfilIcon} // Cambia esto por la URL de tu imagen
                  />
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600} color={"white"}>
                      {creador.name}
                    </Text>
                    <Text fontSize={"12px"} color={"gray.500"}>
                      {creador.information}
                    </Text>
                  </Stack>
                </Stack>
              ) : null
            )}
        </Box>
      </Box>
    </Box>
  );
}
