"use client";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
} from "@chakra-ui/react";

export default function Card() {
  return (
    <Center position={"relative"}>
      <Box
        maxW={"305px"}
        maxH={"480px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={"#1e1e21"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          overflow={"hidden"}
          objectFit={"cover"}
        >
          <Image
            src={
              "../../../public/img/BUA_partida.png" // Cambia esto por la URL de tu imagen
            }
            alt="Example"
          />
        </Box>
        <Stack>
          <Text
            color={"#58ADCD"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Mapa Custom
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={"#FFBE00"}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Battle unit arena "BUA"{" "}
          </Heading>
          <Text color={"gray.500"}>
            Mapa tipo hero arena donde 4 equipos juntan puntos para ganar.
          </Text>
        </Stack>
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
    </Center>
  );
}
