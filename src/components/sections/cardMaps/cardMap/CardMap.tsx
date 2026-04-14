import { Box, Image, Text, Stack, Avatar, Button } from "@chakra-ui/react";
import styles from "./CardMap.module.scss";
import { MapData } from "@/interface/MapData";

interface MapaInterface {
  details: MapData;
}

export default function CardMap({ details }: MapaInterface) {
  return (
    <Box className={styles.card} role="group">
      {/* Poster con blur y animación */}
      <Box className={styles.poster}>
        <Box className={styles.imgcontededor}>
          <Image src={details.Media[0]?.url} alt="Poster" />
        </Box>

        {/* Título y tipo absolutos */}
        <Box className={styles.tagsAbsolute}>
          <p className={styles.title}>{details.mapName}</p>
          <p className={styles.type}>Tipo de mapa: {details.mapType}</p>
        </Box>
      </Box>

      {/* Detalles que suben con hover/click */}
      <Box className={styles.details}>
        {/* Descripción con scroll */}
        <Box className={styles.info} overflowY="auto" maxH="150px">
          <Text
            opacity={0}
            transition="0.5s"
            _groupHover={{ opacity: 1 }}
            paddingRight={1}
          >
            {details.description}
          </Text>
        </Box>

        {/* Autores + Botón */}
        <Box
          className={styles.authorsBlock} // etiqueta para animar autores
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          gap={4}
          p={3}
        >
          <Box mt={6} className={styles.authorsList}>
            {details.autores
              .slice(0, 3)
              .filter((a) => a?.autor.name)
              .map((creador) => (
                <Stack
                  key={creador.autor.name}
                  direction="row"
                  spacing={4}
                  align="center"
                  mb={3}
                  className={styles.authorItem} // cada autor
                >
                  <Avatar
                    boxSize="36px"
                    src={creador.autor.perfilIcon}
                    className={styles.authorIcon} // icono del autor
                  />
                  <Stack spacing={0} fontSize="sm">
                    <Text
                      fontWeight="600"
                      color="white"
                      className={styles.authorName}
                    >
                      {creador.autor.name}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="gray.300"
                      className={styles.authorType}
                    >
                      {creador.autorType}
                    </Text>
                  </Stack>
                </Stack>
              ))}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={styles.buttonWrapper}
          >
            <Button
              as="a"
              href={details.downloadLink}
              size="sm"
              className={styles.btn}
            >
              Más Información
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
