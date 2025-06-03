import { Avatar, Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import styles from "../CardMap.module.scss";

type Props = {};

function CardApi({}: Props) {
  return (
    <Box id={"MainMapasDestacados"} as="section" mt={8} bg="#18181c">
      <Box textAlign={"center"} p={4} h={"200px"} alignContent={"center"}>
        <Heading size="2xl" mb={2} color={"#58ADCD"}>
          Api de rick and morty
        </Heading>
        <Text fontFamily={"body"} color={"white"} fontSize={"2xl"} mt={50}>
          personages, locations and episodes
        </Text>
      </Box>
      <Box
        p={10}
        mt={4}
        display="grid"
        maxWidth={"100%"}
        gridTemplateColumns="repeat(5 , 1fr)"
        gap={3}
        justifyItems={"center"}
      >
        {/* Aquí puedes agregar más tarjetas de personajes, ubicaciones y episodios según sea necesario */}
        <Box className={styles.card}>
          <Box className={styles.poster}>
            <Box className={styles.imgcontededor}>
              <Image src="../../../public/img/BUA_partida.png" alt="Poster" />
            </Box>
          </Box>

          <Box className={styles.details}>
            <Box className={styles.tags}>
              <p className={styles.title}>Battle unit arena "BUA"</p>
              <p className={styles.type}>Mapa custom</p>
            </Box>
            <br />
            <Box className={styles.info}>
              <Text>
                Mapa personalizado para el juego Battle Unit Arena, diseñado
                para ofrecer una experiencia única y emocionante. Este mapa
                cuenta con características especiales y un diseño atractivo que
                lo hacen ideal para jugadores que buscan un desafío diferente.
                Con una jugabilidad fluida y un entorno visual impresionante.
              </Text>
            </Box>

            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={"../../../public/img/Leforyer.jpg"} // Cambia esto por la URL de tu imagen
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600} color={"white"}>
                  Leforyer
                </Text>
                <Text color={"gray.500"}>Creador del mapa</Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* Repite el bloque de código anterior para cada tarjeta adicional */}
      </Box>
    </Box>
  );
}

export default CardApi;
